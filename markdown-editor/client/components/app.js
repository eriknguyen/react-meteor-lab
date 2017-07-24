import React from 'react';
import Header from './header';
import BinsList from './bins/bins_list';

// export default App = () => {
//   console.log(this.props.history);
//   return (
//     <div>
//       <Header />
//     </div>
//   );
// };

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header history={this.props.history}/>
      </div>
    );
  }
}

// using react-router 3
// export default (props) => {
//   return (
//     <div>
//       <Header />
//       {props.children}
//     </div>
//   );
// };