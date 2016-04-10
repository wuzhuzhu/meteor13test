import {Categories, Items} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
    Meteor.methods({
        'categories.create'(name) {
            check(name, String);
            const createAt = new Date();
            const category = {name, createAt};
            Categories.insert(category);
        },
        'items.create'(name, description) {
            check(name, String);
            check(description, String);
            const createAt = new Date();
            const item = {name, descrition, createAt};
            Items.insert(item);
        }
    })
}