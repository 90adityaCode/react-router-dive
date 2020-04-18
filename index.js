import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
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
         <Header />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
