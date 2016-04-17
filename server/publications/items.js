/**
 * Created by walter on 16/4/8.
 */
import {Items} from '/lib/items';
import {Categories} from '/lib/categories';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

const commonFilter = {deleted: {$ne: true}};

export default function () {
    Meteor.publish('categories.list', function () {
        return Categories.find();
    });
    Meteor.publish('categories.namelist', function () {
        return Categories.find({},{fields:{name:1}});
    });
    Meteor.publish('items.list', function () {
        return Items.find(commonFilter);
    });
    Meteor.publish('items.single', function (itemId) {
        check(itemId, String);
        const selector = {_id: itemId};
        return Items.find(selector);
    })
}