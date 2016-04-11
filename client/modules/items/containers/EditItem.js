/**
 * Created by walter on 16/4/11.
 */
import EditItem from '../components/EditItem.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, itemId, clearErrors}, onData) => {
    const {LocalState, Meteor, Collections} = context();
    const error = LocalState.get('CREATE_ITEM_ERROR');
    if (itemId !== undefined) {
        if (Meteor.subscribe('items.single', itemId).ready()) {
            const item = Collections.Items.findOne(itemId);
            onData(null, {item});
        } else  {
            const item = Collections.Items.findOne(itemId);
            if (item) {
                onData(null, {item, error});
            } else {
                onData();
            }
        }
    } else {
        onData(null, {error});
    }

    //卸载组件时 清除错误
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    create: actions.items.create,
    edit: actions.items.edit,
    clearErrors: actions.items.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(EditItem);