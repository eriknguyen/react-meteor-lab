import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('links', function() {
    return Links.find({});
  });
});

/* Executed whenever user visits a route like base_url/abcd */
function onRoute(req, res, next) {
  // check valid token
  const link = Links.findOne({
    token: req.params.token
  });

  if (link) {
    // if link found -> redirect user
    Links.update(link, { $inc: { clicks: 1 }});
    res.writeHead(307, { 'Location': link.url }); // 307 = redirect status code
    res.end();  // done, send response to user
  } else {
    // if link invalid -> send client to React app
    next(); // pass this request to the next middleware, eventually the main route
  }
}

const middleware = ConnectRoute(function(router) {
  router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);