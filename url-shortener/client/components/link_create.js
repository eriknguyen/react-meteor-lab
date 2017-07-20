import React from 'react';

export default class LinkCreate extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label>Link to shorten</label>
          <input type="text" className="form-control"/>
        </div>
        <button className="btn btn-primary">
          Shorten Me!
        </button>
      </form>
    );
  }
}