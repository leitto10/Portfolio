import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import MyImage from './img/joseluis.jpeg';
import Introduction from './components/Introduction';
import SlideShow from './components/SlideShow';
import './App.css'

class App extends Component {
  render(){
  return (
    <Router>
      <div className="App">
        <Nav />
        <SlideShow />
        <img className="myImage" src={MyImage} alt="" />
        <Introduction />
      </div>
    </Router>
  );
}
}
export default App;
