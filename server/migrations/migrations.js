import { Meteor } from 'meteor/meteor';
import { Items } from  '/lib/items';
import { Migrations } from 'meteor/percolate:migrations';

export default function () {
    Migrations.add({
        version: 1,
        name: 'Adds createdAt',
        up: function () {
            Items.find({createdAt: {$exists: false}}).forEach(
                item => {
                    let createdAt = new Date();
                    Items.update(item._id, {$set: {createdAt}});
                }
            )
        },
        down: function () {
            Items.update({}, {$unset: {createdAt: true}}, {multi: true});
        }
    });
    Migrations.add({
        version: 2,
        name: 'remove invalid dates',
        up: function () {
            Items.find({due: "Invalid date"}).forEach(
                item => {
                    let due = new Date();
                    Items.update(item._id, {$set: {due}});
                }
            )
        },
        down: function () {
            Items.update({}, {$unset: {createdAt: true}}, {multi: true});
        }
    });
}