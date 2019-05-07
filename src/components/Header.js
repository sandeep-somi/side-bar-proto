import React, { Component } from 'react';
import { Store } from '../store';

class Header extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }

  onChange = () => ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    })
  }

  static contextType = Store;
  render() {
    console.dir(this.onChange('name'));
    console.log(this.state, 'state');
    
    return ( 
      <div>
        <input name="name" onChange={this.onChange()} />
        <input name="email" onChange={this.onChange()} />
        <input name="phone" onChange={this.onChange()} />
      </div>
     );
  }
}
 
export default Header;