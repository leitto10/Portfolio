import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class SlideShow extends Component {
    render() {
        return (
            <Carousel style={{"height":'100px'}}
            infiniteLoop useKeyboardArrows autoPlay>
              <div>
                <img src={require('../img/badHombre.jpg' )} alt="" />
              </div>
              <div>
                <img src={require('../img/coldLake.jpg')} alt="" />
              </div>
              <div>
                <img src={require('../img/mycar.jpg')} alt="" />
              </div>
              <div>
                <img src={require('../img/seattlenight.jpg')} alt="" />
              </div>
              <div>
                <img src={require('../img/sounders.jpg')} alt="" />
              </div>
            </Carousel>
        );
    }
}

export default SlideShow;
