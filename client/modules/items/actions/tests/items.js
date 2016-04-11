/**
 * Created by walter on 16/4/11.
 */
const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../items';

describe('items.actions.items',() => {
    describe('创建', () => {
        it('没有名称应该被拒绝', () => {
            const LocalState = {set: spy()};
            actions.create({LocalState}, null, 'content');
            const args = LocalState.set.args[0];

            expect(args[0]).to.be.equal('CREATE_ITEM_ERROR');
            expect(args[1]).to.match(/事项/);
        });

        it('应该清除旧的报错信息',() => {
            const Meteor = {uuid: spy(), call:spy()};
            const LocalState = {set: spy()};
            const FlowRouter = {go: spy()};

            actions.create({LocalState, Meteor, FlowRouter}, 'n', 'd', 'date');
            expect(LocalState.set.args[0]).to.deep.equal(['CREATE_ITEM_ERROR', null])
        });

        it('应该唤起meteor.call去保存事项', () => {
            const Meteor = {uuid: () => 'id', call: spy()};
            const LocalState = {set: spy()};
            const FlowRouter = {go: spy()};

            actions.create({LocalState, Meteor, FlowRouter}, 't', 'c', 'date');
            const methodArgs = Meteor.call.args[0];

            expect(methodArgs.slice(0, 4)).to.deep.equal([
                'items.create', 't', 'c', 'date'
            ]);
            expect(methodArgs[4]).to.be.a('function');
        });

        it('应该重定向用户到item列表', () => {
            const id = 'dsds';
            const Meteor = {uuid: () => id, call: stub()};
            const LocalState = {set: spy()};
            const FlowRouter = {go: spy()};
            Meteor.call.callsArg(4);

            actions.create({Meteor, LocalState, FlowRouter}, 't', 'c', 'date');
            // expect(FlowRouter.go.args[0][0]).to.be.equal(`/post/${id}`);
            expect(FlowRouter.go.args[0][0]).to.be.equal('/');
        });
    });

    describe('在Meteor.call之后', () => {
        describe('if there is error', () => {
            it('应该有保存保存时候的行为', () => {
                const Meteor = {uuid: () => 'id', call: stub()};
                const LocalState = {set: spy()};
                const FlowRouter = {go: spy()};
                const err = {message: 'Oops'};
                Meteor.call.callsArgWith(4, err);

                actions.create({Meteor, LocalState, FlowRouter}, 't', 'c', 'date');
                expect(LocalState.set.args[1]).to.deep.equal([ 'SAVING_ERROR', err.message ]);
            });
        });
    });

    describe('清楚错误', () => {
        it('应该在LOCALSTATE清除所有SAVING_ERROR', () => {
            const LocalState = {set: spy()};
            actions.clearErrors({LocalState});
            expect(LocalState.set.callCount).to.be.equal(1);
            expect(LocalState.set.args[0]).to.deep.equal([ 'SAVING_ERROR', null ]);
        });
    });

});