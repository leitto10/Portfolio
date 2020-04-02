import React, {Component} from 'react';
import Nav from './components/Nav';
import SlideShow from './components/SlideShow';
import Resume from './components/Resume';
import Footer from './components/Footer';
import SideDrawer from './components/SideDrawer';
import BackDrop from './components/BackDrop';
import MementoCRM from './components/MementoCRM';
import PotOgold from './components/PotOgold';
import Floop from './components/Floop';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import './App.css'

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  // this functions to handle the hamburguer button
  drowerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  // this functions handles backdrop layout
  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }
  render(){
    let backDrop;
    if(this.state.sideDrawerOpen){
      backDrop = <BackDrop click={this.backDropClickHandler}/>
    }
  return (
    <Router >
      <div className="App">
      <Nav drowerClickHandler={this.drowerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen} click={this.backDropClickHandler}/>
          {backDrop}
        <Switch>
            <Route path="/" exact component={SlideShow}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/potOgold" component={PotOgold}/>
            <Route path="/floop" component={Floop}/>
            <Route path="/memento" component={MementoCRM}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
  }
}
export default App;
