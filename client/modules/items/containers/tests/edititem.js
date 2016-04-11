/**
 * Created by walter on 16/4/11.
 */
const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import {composer, depsMapper} from '../EditItem';

describe('items.container.editItem', () => {
    describe('composer', () => {
        it('应该从LOCALSTATE获得CREATE_ITEM_ERROR', () => {
            const LocalState = {get: spy()};
            const context = () => ({LocalState});

            composer({context}, spy());

            const args = LocalState.get.args[0];
            expect(args).to.have.length(1);
            expect(args[0]).to.be.equal('CREATE_ITEM_ERROR')
        });

        it('应该唤起onData with null and {error}', () => {
            const LocalState = {get: stub().returns('error')};
            const context = () => ({LocalState});
            const onData = spy();

            composer({context}, onData);

            const args = onData.args[0];

            expect(args[0]).to.be.equal(null);
            expect(args[1]).to.be.deep.equal({error: 'error'});
        });

        it('应该返回clearErrors', () => {
            const LocalState = {get: spy()};
            const context = () => ({LocalState});
            const clearErrors = spy();

            const clearFunc = composer({context, clearErrors}, spy());

            expect(clearFunc).to.be.equal(clearErrors);
        });

        // it('should get SAVING_NEW_POST from local state');
    });

    describe('depsMapper', () => {
        describe('actions', () => {
            it('应该有items.create在map内', () => {
                const actions = {items: {create: spy()}};

                const deps = depsMapper({}, actions);

                expect(deps.create).to.be.equal(actions.items.create);
            });

            it('应该有items.edit在map内', () => {
                const actions = {items: {edit: spy()}};

                const deps = depsMapper({}, actions);

                expect(deps.edit).to.be.equal(actions.items.edit);
            });

            it('应该有items.clearErrors在map内', () => {
                const actions = {items: {clearErrors: spy()}};

                const deps = depsMapper({}, actions);

                expect(deps.clearErrors).to.be.equal(actions.items.clearErrors);
            });
        });

        describe('context', () => {
            it('should map the whole context as a function', () => {
                const actions = {items: {create: spy(), clearErrors: spy()}};
                const context = spy();

                const deps = depsMapper(context, actions);

                expect(deps.context()).to.be.equal(context);
            });
        });
    });
});