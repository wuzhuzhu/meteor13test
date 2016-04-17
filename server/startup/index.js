import migrations from './runMigrations'
import fixture from './fixture'

Meteor.startup(() => {
    migrations();
    fixture();
});
