import CategoryButton from '../components/CategoryButton.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = (props, onData) => {
    const {category} = props;
    onData(null,{category})
}

export const depsMapper = (context, actions) => ({
    setCategory: actions.itemlist.setCategory,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(CategoryButton);
