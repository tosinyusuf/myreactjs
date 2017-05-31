import React, { Component } from 'react';
import Child from "./Child";

class Parent extends Component {

  constructor(props) {
    super(props);
    this.state = {name: 'Jonathon'};
  }

  render() {
    return <Child name={this.state.name}/>;
  }
}
export default Parent;