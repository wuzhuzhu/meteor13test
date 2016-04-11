/**
 * Created by walter on 16/4/11.
 */
const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../items';

describe('items.actions.items',() => {
    describe('create', () => {
        it('没有名称应该被拒绝', () => {
            const LocalState = {set: spy()};
            actions.create({LocalState}, null, 'content');
            const args = LocalState.set.args[0];

            expect(args[0]).to.be.equal('CREATE_ITEM_ERROR');
        });
    })
});