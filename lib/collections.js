import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { attachSchema } from 'meteor/aldeed:collection2';

export const Items = new Mongo.Collection('items');

Items.schema = new SimpleSchema({
    name: {type: String},
    description: {type: String},
    due: {type: String, optional: true},
    complete: {type: Boolean, optional: true},
    createdAt: {type: String, optional: true},
    updateAt: {type: String, optional: true},
    deleted: {type: Boolean, optional: true}
});

// Items.attachSchema(Items.schema);

export const Categories = new Mongo.Collection('categories');