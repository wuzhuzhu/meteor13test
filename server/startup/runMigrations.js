/**
 * Created by walter on 16/4/15.
 */
import { Meteor } from 'meteor/meteor';
import { Migrations } from 'meteor/percolate:migrations';

Meteor.startup(() => {
    Migrations.migrateTo('latest');
});