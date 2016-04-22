/**
 * Created by walter on 16/4/8.
 */
import {Items} from '/lib/items';
import {Categories} from '/lib/categories';

import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { Counts } from 'meteor/tmeasday:publish-counts';

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
/*  Todo: 按分类pub items的个数,并反映到页面.
    Meteor.publish('items.countByCategory', function({ category }) {
        new SimpleSchema({
            category: {type: String}
        }).validate({ category });

        Counts.publish(this, `Items.CountByCategory.${category}`, Items.find({category}));
    });*/
    Meteor.publish('items.count', function () {
        Counts.publish(this, 'items.count', Items.find({deleted: {$ne: true}}))
    });
    Meteor.publish('items.single', function (itemId) {
        check(itemId, String);
        const selector = {_id: itemId};
        return Items.find(selector);
    })
}