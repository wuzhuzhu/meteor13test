/**
 * Created by walter on 16/4/11.
 */
export default {
    create({Meteor, LocalState, FlowRouter}, name, description, due) {
        if (!name) {
            return LocalState.set('CREATE_ITEM_ERROR','事项名称是必填项');
        }

        LocalState.set('CREATE_ITEM_ERROR', null);

        Meteor.call('items.create', name, description, due, (err) => {
            if (err) {
                return LocalState.set('SAVING_ERROR', err.message);
            }
        });

        FlowRouter.go('/')
    },

    edit({Meteor, LocalState, FlowRouter}, id, name, description, due) {
        if (!name) {
            return LocalState.set('EDIT_ITEM_ERROR','事项名称是必填项');
        }

        if (!id) {
            return LocalState.set('EDIT_ITEM_ERROR','没有编辑的事项对象');
        }

        LocalState.set('EDIT_ITEM_ERROR', null);

        Meteor.call('items.edit', id, name, description, due, (err) => {
            if (err) {
                return LocalState.set('SAVING_ERROR', err.message);
            }
        });

        FlowRouter.go('/')
    },

    // 直接在component中调用method
/*    remove({Meteor, LocalState}, id) {
        if (!id) {
            return LocalState.set('REMOVE_ITEM_ERROR','没有要删除的对象id');
        }

        LocalState.set('REMOVE_ITEM_ERROR', null);

        Meteor.call('items.remove', id, err => {
            if (err) {
                return LocalState.set('SAVING_ERROR', err.message)
            }
        })
    },*/

    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null)
    }
};