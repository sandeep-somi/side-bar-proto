import React from 'react';
import classnames from 'classnames';

const request = fetch('https://andy-apis.herokuapp.com/products', {}, { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpZCI6IjVjNDk2MmRkMDE1NjM3MmUyZDYxOGE1NyIsImlhdCI6MTU1NzgyNTcyNSwiZXhwIjoxNTU3ODI5MzI1fQ.aYucbiTRCHCKhtej3I5Pr0ijy7kRko_jt9gh4eua7hI` })

const menu = [
  { label: 'Home', icon: 'fas fa-home' },
  { label: 'Contacts', icon: 'fas fa-address-book' },
  { label: 'Products', icon: 'fas fa-truck' },
  { label: 'Orders', icon: 'fas fa-cart-plus' },
  { label: 'Filters', icon: 'fas fa-filter' },
  { label: 'Trending', icon: 'fas fa-chart-bar' }
]

class App extends React.Component {
  state = {
    open: true
  }

  async componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const result = await request;
      if (!result.ok) {
        throw Error(result.statusText)
      }
      const json = await result.json();
      console.log(json);
      this.setState({ values: json.values })
    } catch (error) {
      console.log(error, 'error')
    }
  }

  test = async () => {
      
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { open, values = [] } = this.state;
    const sidebar = classnames({ sidebar: true, closed: !open });
    const containerApp = classnames({ 'container-app': true });
    console.log(values, 'val')

    return (
      <div className='app-wrapper'>
        <div className='navbar'>Header</div>
        <div className="wrapper">
          <div className={sidebar}>
            <ul className="menu-list">
              {menu.map(item => <li key={item.label}><i className={item.icon} />{item.label}</li>)}
            </ul>
          </div>
          <div className={containerApp}>
            <button onClick={this.toggle}>toggle</button>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;