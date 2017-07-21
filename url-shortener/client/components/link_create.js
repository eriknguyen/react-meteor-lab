import React from 'react';

export default class LinkCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  handleSubmit(event) {
    event.preventDefault();

    Meteor.call('links.insert', this.refs.link.value, (error) => {
      if (error) {
        this.setState({ error: 'Enter a valid URL' });
      } else {
        this.setState({ error: '' });
        this.refs.link.value = '';
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to shorten</label>
          <input ref="link" type="text" className="form-control"/>
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-primary">
          Shorten Me!
        </button>
      </form>
    );
  }
}