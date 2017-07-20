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

