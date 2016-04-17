import SimpleCategoryList from '../components/SimpleCategoryList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = (props, onData) => {
    const {categories} = props;
    onData(null,{categories})
}

export const depsMapper = (context, actions) => ({
    clearSelectedCategory: actions.itemslist.clearSelectedCategory,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(SimpleCategoryList);
