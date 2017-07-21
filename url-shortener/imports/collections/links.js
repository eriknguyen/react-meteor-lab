import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';

Meteor.methods({
  'links.insert': function(url) {
    // validate input url
    check(url, Match.Where(url => validUrl.isUri(url)));

    // generate tokens and save url,token pair
    const token = Math.random().toString(36).slice(-5);
    Links.insert({
      // url: url,
      // token: token,
      url, token, // ES6 syntax
      clicks: 0
    });
  }
});

export const Links = new Mongo.Collection('links');