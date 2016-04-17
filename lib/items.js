import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { attachSchema } from 'meteor/aldeed:collection2';

import {Categories} from './categories'

export const Items = new Mongo.Collection('items');

Items.schema = new SimpleSchema({
    name: {type: String},
    description: {type: String},
    due: {type: String, optional: true},
    complete: {type: Boolean, optional: true},
    createdAt: {type: String, optional: true},
    updateAt: {type: String, optional: true},
    deleted: {type: Boolean, optional: true},

    category: { type: String },
});

Items.attachSchema(Items.schema);

Items.helpers({
    get_category_name() {
        if (this.category) {
            return Categories.findOne(this.category).name
        }
        else {
            return
        }
    }
});