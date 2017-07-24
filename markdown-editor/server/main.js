import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  Meteor.publish('bins', function() {
    // using function instead of arrow function to use the `this` provided by Meteor
    return Bins.find({
      ownerId: this.userId
    });
  });

  Meteor.publish('sharedBins', function() {
    const user = Meteor.users.findOne(this.userId);

    if (!user) { return; }
    // assume user has only 1 email
    const email = user.emails[0].address;

    // get all bins that bin.sharedWith has an element that matches email
    return Bins.find({
      sharedWith: { $elemMatch: { $eq: email } }
    });
  });
});
