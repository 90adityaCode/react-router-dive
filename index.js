import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
         
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
