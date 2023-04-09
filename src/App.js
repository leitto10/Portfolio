import React, {Component} from 'react';
import Nav from './components/Nav';
import SlideShow from './components/SlideShow';
import Resume from './components/Resume';
import Footer from './components/Footer';
import SideDrawer from './components/SideDrawer';
import BackDrop from './components/BackDrop';
import MementoCRM from './components/MementoCRM';
import PotOgold from './components/PotOgold';
import ScoreBoard from './components/ScoreBoard';
// import RestAPIs from './components/RestAPIs';
// import Gifs from './components/Gifs';

import { Routes, Route } from "react-router-dom";
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
    <div className="App">
      <Nav drowerClickHandler={this.drowerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen} click={this.backDropClickHandler}/>
          {backDrop}
        <Routes>
            <Route path="/" exact element={<SlideShow />}/>
            <Route path="/resume" element={<Resume />}/>
            <Route path="/potOgold" element={<PotOgold />}/>
            <Route path="/memento" element={<MementoCRM />}/>
            <Route path="/scoreboard" element={<ScoreBoard />}/>
            {/* <Route path="/restapis" component={RestAPIs} /> */}
        </Routes>
        <Footer />
    </div>
  );
  }
}
export default App;
