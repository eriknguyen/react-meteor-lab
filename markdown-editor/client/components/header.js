import React, { Component } from 'react';
import Accounts from './accounts';
import { Link } from 'react-router-dom';

class Header extends Component {
  onBinClick(event) {
    event.preventDefault();

    // meteor call back takes 2 args: error and the value that returned from the method
    Meteor.call('bins.insert', (error, binId) => {
      this.props.history.push(`/bins/${binId}`);
    });
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">MarkBin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;