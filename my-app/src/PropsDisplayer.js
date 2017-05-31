import React, { Component } from 'react';

class PropsDisplayer extends Component {

  constructor(props) {
    super(props);
    this.state = {title: 'CHECK OUT MY PROPS OBJECT', mood: 'bad'};
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    let newMood = this.state.mood === 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood }); // this.setState automatically calls render
  }

  render() {
    const stringProps = JSON.stringify(this.props);
    return (
      <div>
        <h2>{this.state.title}</h2>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button type="button" className="btn btn-primary" onClick={this.toggleMood}>Change My Mood</button>
        <h3>{stringProps}</h3>
        <h3>myProp is {this.props.myProp}</h3>
        <h3>props children is {this.props.children}</h3>
      </div>
    );
  }
}

export default PropsDisplayer;