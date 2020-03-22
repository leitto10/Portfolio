import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import MyImage from './img/joseluis.jpeg';
import MementoCRM from './img/mementoCRM.jpg';
import Introduction from './components/Introduction';
import SlideShow from './components/SlideShow';
import Footer from './components/Footer';
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
        <img className="memento" src={MementoCRM} alt=""/>
        <Footer />
      </div>
    </Router>
  );
}
}
export default App;
