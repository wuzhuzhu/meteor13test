import ItemList from '../components/ItemList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
    const {LocalState, Meteor, Collections} = context();
    if (
        Meteor.subscribe('items.list').ready()
        && Meteor.subscribe('categories.namelist').ready()
    ) {
        const selected_category = LocalState.get('SELECTED_CATEGORY');
        const items = !!selected_category ? Collections.Items.find({}, {sort: {due:-1}}).fetch()
            : Collections.Items.find({}, {sort: {due:-1}}).fetch();
        const categories = Collections.Categories.find().fetch();
        const totalItems = Collections.Items.find().count();
        const completedItems = Collections.Items.find({complete:true}).count();
        const percentage = Math.round((completedItems/totalItems) * 100);
        onData(null, {items, categories, percentage, selected_category});
    }
};

export const depsMapper = (context, actions) => ({
    // setCategory: actions.items.setCategory,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ItemList);