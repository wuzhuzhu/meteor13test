/**
 * Created by walter on 16/4/23.
 */
import AppBar from '../components/AppBar.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import { Counts } from 'meteor/tmeasday:publish-counts';


export const composer = ({context}, onData) => {
    const {Meteor, Collections} = context();
    if (Meteor.subscribe('items.count').ready()) {
        const ItemsCount = Counts.get('items.count');
        const User = Meteor.user();
        console.log(User);
        onData(null, {ItemsCount, User});
    }
};

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(AppBar)