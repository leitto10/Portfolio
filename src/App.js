import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Nav from './components/Nav';

class App extends Component {
  render(){
  return (
    <Router>
      <div className="App">
        <Nav />
        <h1>kldjlsdjk;sa</h1>
      </div>
    </Router>
  );
}
}
export default App;
