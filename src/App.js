import React, { Component, createContext } from 'react';
import './App.css';
import Main from './components/Main';
import { Store } from './store';

// const App = () => {
//   const [flag, setFlag] = useState(false);
//   //useState provide a pair of items first is the variable or the item that we use to store our item and othe other is function that we use to set the data of the first item.
//   //userState(false) means the default value for the item in this case flag is false.
  
//   return (
//     <div>
//       <p>You clicked {flag ? 'On' : 'Off' } times</p>
//       <button onClick={() => setFlag(!flag)}>
//         Click me
//       </button>
//     </div>
//   )
// }

// export default App;

const data = {
  name: 'Dhruv',
  lastName: 'Mehndhiratta',
  address: 'Haryana',
  phn: '98989898998'
}

const HOC = (dataToWrap) => (Component) => (props) => {
  const combinedProps = {
    ...props,
    ...dataToWrap
  }
  return <Component {...combinedProps} />
}

class App extends Component {

  render() {
    console.log(this.props, 'props');
    return (
      <Store.Provider value={data}>
        <Main />
      </Store.Provider>
    );
  }
}
 
export default HOC({data})(App);
