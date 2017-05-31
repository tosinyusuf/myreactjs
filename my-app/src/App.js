import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import PropsDisplayer from "./PropsDisplayer";
import Parent from "./Parent";

class App extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('Thanks for clicking me!');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <div>
          <NavBar/>
          <PropsDisplayer myProp="Apples">
            Hello there
          </PropsDisplayer>
          <button type="button" className="btn btn-primary" onClick={this.handleClick}>Click Me</button>
          <Parent/>
        </div>
      </div>
    );
  }
}

export default App;
