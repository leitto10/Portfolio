import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Nav from './components/Nav';
import MyImage from './img/joseluis.jpeg';

class App extends Component {
  render(){
  return (
    <Router>
      <div className="App">
        <Nav />
        <img className="myImage" src={MyImage} alt="" />
        <div className="info">
        <h1>Jose Luis Lopez</h1>
        <h2>Software Developer Engineer</h2>
        </div>
      </div>
    </Router>
  );
}
}
export default App;
