/* 
  Any JS in here is automatically ran
*/

// Import React library
import React from 'react';
import ReactDOM from 'react-dom';

import ImageList from './components/image_list';

// Create a component
const App = () => {
  return (
    <div>
      React App #2
      <ImageList />
    </div>
  )
}

// Render this component to screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
})