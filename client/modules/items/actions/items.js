/**
 * Created by walter on 16/4/11.
 */
export default {
    create({Meteor, LocalState, FlowRouter}, name, description, due) {
        if (!name) {
            return LocalState.set('CREATE_ITEM_ERROR','事项名称是必填项');
        }

        if (!description) {
            return LocalState.set('CREATE_ITEM_ERROR','事项描述是必填项');
        }

        LocalState.set('CREATE_ITEM_ERROR', null);

        Meteor.call('items.create', name, description, due, (err) => {
            if (err) {
                return LocalState.set('SAVING_ERROR', err.message);
            }
        });

        FlowRouter.go('/')
    },

    clearErrors({LocalState}) {
        return LocalState.set('SAVING_ERROR', null)
    }
};