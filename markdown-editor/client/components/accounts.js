import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  // life cycle method: auto called whenever the component has been rendered to screen
  componentDidMount() {
    // render Blaze accounts form
    // find the <div> in `render()` method and place the Blaze form in that <div>
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }

  // life cycle method: auto called whenever the component is about to be removed from screen
  componentWillUnmount() {
    // find the forms we created and distroy them ourselves
    Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;