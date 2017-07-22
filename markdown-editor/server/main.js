import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  Meteor.publish('bins', function() {
    // using function instead of arrow function to use the `this` provided by Meteor
    return Bins.find({
      ownerId: this.userId
    });
  });
});
