import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { attachSchema } from 'meteor/aldeed:collection2';
import { helpers } from 'meteor/dburles:collection-helpers';

import { Items } from './items'

export const Categories = new Mongo.Collection('categories');

Categories.schema = new SimpleSchema({
    name: { type: String },
    description: { type: String },
});

Categories.attachSchema(Categories.schema);

Categories.helpers({
    related_items() {
        return Items.find({categoryIdList:this._id, deleted:{$ne:true}})
    }
});