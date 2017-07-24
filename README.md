# Realtime App built with React & Meteor

## Setup
### Meteor Project
* Includes:
  * Place to put code
  * Place to keep track of project dependencies
  * Development webserver

* Meteor -> keep track of data in our app
* React -> Take data to product HTML, handle user events

## React Primer
*Project [Images Gallery](https://github.com/eriknguyen/markdown-realtime/tree/master/images)*
* `Meteor.startup(() => {})`: takes the function, run it when Meteor has started up: meteor has loaded, all HTML & DOM elements are rendered

## Meteor Overview
*Project [Employee Directory](https://github.com/eriknguyen/markdown-realtime/tree/master/employee-directory)*
* Folder:
  * client: to be bundled and served to client
  * server: server code
  * imports: shared between both client & server, executed first, before any client or server code

* Generate fake data using [`Faker`](https://github.com/Marak/Faker.js)

* Subscribe/Publish system
  * `meteor remove autopublish` to restrict access to backend data

* `react-meteor-data` can be used to create a *container* - a function that update some amount of data being passed to the component whenever a subscription changes -> watch collection, if update, load all new updated records to the react component

* Update & re-render component without using component-level state

## URL Shortener
*Project [URL Shortener](https://github.com/eriknguyen/markdown-realtime/tree/master/url-shortener)*

### Challenges
* Way to store links
* Redirect user from a shortened URL to the original one
* Record a number of clicks for each URL

### Initial Setup
* Add Bootstrap as a Meteor package: `meteor add twbs:bootstrap@3.3.6`
* `npm install --save react react-dom`
* Setup `Header` component
* Create `Links` collection in `imports/collection` to be shared between both client and server
* Create URL form component, on form submit:
  * Validate URL input from user -> `this.refs.inputRef.value`
  * Create new token that matches this URL
  * Add the token and original URL to a `links` collection
* `meteor remove autopublish` for setup secure publish/subscribe system

### Manipulate data with Meteor
* `meteor remove insecure` -> to securely access database & save data
* `Meteor.methods({'method_name': method_function})` and `Meteor.call('method_name', args[, callback])` for creating and calling secure methods between client and server
* Validate user url input
  * Using `valid-url` npm package and it's `isUri(url)` function
  * Using `check`, `Match` from `meteor/check` package
    * `check`: run validation on a var, if a var passes -> `check` does nothing, else -> throw an error
    * `Match`: used to run customed validation function

### Display list of links
* Setup publish/subscribe system
* `meteor add react-meteor-data`

### Intercepting requests with Meteor Middleware
* Use `meteor/webapp` - Meteor server, for handling incoming request  
    `WebApp.connectHandlers.use(req => {/* handle request here */})`  
    or  
    `WebApp.connectHandlers.use(middleware)`
* Install `connect-route` for routing (similar to Express routing) -> creates a middleware that takes in HTTP request, check route then does according actions
* Update number of clicks using Mongo Modifier `{$inc: {}}` inside the `update()` method, eg. `Links.update(link, { $inc: { clicks: 1 }})`

## Collaborative Markdown Editor
*Project dir [Markdown Bin](https://github.com/eriknguyen/markdown-realtime/tree/master/markdown-editor)*

### Main features
* User can navigate between different pages -> `react-router`
* Need a full authentication system, using builtin Meteor methods
* `bins` collection belongs specifically to only the owner/editor of a bin

### Dependencies
* `meteor add react-meteor-data`
* `meteor add twbs:bootstrap@3.3.6`
* `meteor remove insecure`
* `meteor remove autopublish`
* `npm install react react-dom react-addons-pure-render-mixin`

### User Authentication
*All already written by Meteor*
* Get Blaze (or generally other rendering libraries) to work with React to make use of Blaze account authentication forms
  * Let React renders a DOM element
  * Use React life cycle methods for calling function automatically
  * Find that particular DOM node and use another library to render to it (eg. inside `componentDidMount()`)
  * Need to manually clean up that part rendered by other libraries (eg. using `componentWillUnmount()`)
* Install dependencies for this: `meteor add accounts-ui accounts-password`
* Try using native implementation of `bcrypt`: `meteor npm install --save bcrypt` (faster than JS-implementation used by default in Meteor)

### Create collection `Bins`
* Schema: createdAt, content, ownerId, sharedWith
* Access current user by using `this.userId` inside of the Meteor methods
* Use of `function` keyword vs `()=>{}`:
  * `this` inside an arrow function is the surrounding context
  * Use `function` keyword, `this` can be referred to the runtime context, so we can use `this.userId`
* Setup publish/subscribe system for providing bins from the server and displaying bins on the client
  * Use `createContainer()` from `meteor/react-meteor-data` to subscribe the `bins` collection to the `BinsList` React component
* Handle bin element `onClick` -> use arrow function (only function definition without invoking) `onClick={() => this.onBinRemove(bin)}` instead of passing a `this.onBinRemove(bin)` function (this is invoked with probably incorrect `bin` argument) right in the JSX -> can pass the correct `bin` argument into that function

### Using React-Router for navigation
* Use of `BrowserRoute`, `Route`, `Switch`
* Access url params from React component using `props.match.params.paramName`
* Alternative for anchor tag: `Link` from `react-router-dom`
* Use `this.props.history.push("url_str")` to redirect the user

### Hook up the main editor
* Using [React Codemirror](https://github.com/JedWatson/react-codemirror)
* Install dependencies:
  * `npm install --save react-codemirror`
  * `meteor add sgslo:cmstyle` for styling the editor
* Use `onEditorChange(content)` to update and store bin content when user changes
* `markdown` npm package for translate markdown str into html view