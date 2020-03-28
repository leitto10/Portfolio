import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import SlideShow from './components/SlideShow';
import Resume from './components/Resume';
import Footer from './components/Footer';
import SideDrawer from './components/SideDrawer';
import BackDrop from './components/BackDrop';
import './App.css'

let hashHistory = Router.hashHistory;

class App extends Component {
  state = {
    SideDrawerOpen: false
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
    <Router history={hashHistory}>
      <div className="App">
      <Nav drowerClickHandler={this.drowerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
          {backDrop}
        <Switch>
            <Route path="/Portfolio" exact component={SlideShow}/>
            <Route path="/resume" component={Resume}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
}
export default App;
