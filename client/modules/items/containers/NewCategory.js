import NewCategory from '../components/NewCategory.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
    const {LocalState} = context();
    const error = LocalState.get('CREATE_CATEGORY_ERROR');
    onData(null, {error});

    //卸载这个组件的时候,清除error
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    create: actions.categories.create,
    clearErrors: actions.categories.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(NewCategory);

