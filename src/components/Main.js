import React, { Component } from 'react';
import Header from './Header';


class Main extends Component {
  state = {  }
  render() {
    console.log(this, 'this');
    return (
      <div>
        <Header />
      </div>
    );
  }
}
 
export default Main;