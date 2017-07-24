import React, { Component } from 'react';
import { markdown } from 'markdown';

class BinsViewer extends Component {
  render() {
    const rawHtml = markdown.toHTML(this.props.bin.content);
    return (
      <div className="col-xs-4">
        <h5>Output</h5>
        <div dangerouslySetInnerHTML={{ __html: rawHtml }}></div>
      </div>
    );
  }
}

export default BinsViewer;