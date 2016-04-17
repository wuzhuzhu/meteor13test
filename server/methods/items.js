import {Categories, Items} from '/lib/items';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
    Meteor.methods({
        'categories.create'(name) {
            check(name, String);
            const createAt = new Date();
            const category = {name, createAt};
            Categories.insert(category);
        }
    });
    Meteor.methods({
        'items.create'(name, description, due, category ) {
            check(name, String);
            check(description, String);
            check(category, String);
            check(due, String);
            const createdAt = new Date();
            const item = {name, description, due, category, createdAt};
            console.log(item)
            Items.insert(item);
        },
        'items.edit'(id, name, description = "", due = "", category = "") {
            check(id, String);
            check(name, String);
            check(description, String);
            check(category, String);
            check(due, String);
            const updateAt = new Date();
            const item = {name, description, due, category, updateAt};
            console.log(item)
            Items.update(id, {$set: item});
        },
        'items.softRemove'(id) {
            check(id, String);
            Items.update(id, {$set: {deleted: true}})
        },
        'items.markComplete'(complete, itemId) {
            check(complete, Boolean);
            check(itemId, String);
            Items.update(itemId, {
                $set: {complete:complete}
            });
        }
    });
}