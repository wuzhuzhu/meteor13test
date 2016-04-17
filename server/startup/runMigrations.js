/**
 * Created by walter on 16/4/15.
 */
import { Meteor } from 'meteor/meteor';
import { Migrations } from 'meteor/percolate:migrations';


export default function () {
    return Migrations.migrateTo('latest');
}