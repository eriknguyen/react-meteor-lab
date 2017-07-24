import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';

class BinsMain extends Component {
  render() {
    console.log(this.props.bin);
    return (
      <div>
        <BinsEditor bin={this.props.bin}/>
      </div>
    );
  }
}

// createContainer 1st arg (a function) takes 1 argument which is props
export default createContainer((props) => {
  const { binId } = props.match.params;
  Meteor.subscribe('bins');

  return { bin: Bins.findOne(binId) };
}, BinsMain);