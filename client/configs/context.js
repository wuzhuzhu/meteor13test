/**
 * Created by walter on 16/4/7.
 */
import * as Collections from '/lib/index';
import {Meteor} from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { ReactiveDict } from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';

export default function () {
    return {
        Meteor,
        FlowRouter,
        Collections,
        LocalState: new ReactiveDict(),
        Tracker,
    };
}