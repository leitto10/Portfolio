import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Introduction from '../components/Introduction';

class SlideShow extends Component {
    render() {
        return (
          <div>
            <Carousel style={{"height":'100px'}}
            infiniteLoop useKeyboardArrows autoPlay>
              <div>
                <img src={require('../img/badHombre.jpg' )} alt="" />
              </div>
              <div>
                <img src={require('../img/coldLake.jpg')} alt="" />
              </div>
              <div>
                <img src={require('../img/pythonCodigo.jpg')} alt="" />
              </div>
              <div>
                <img src={require('../img/seattlenight.jpg')} alt="" />
              </div>
              <div>
                <img src={require('../img/azure.jpg')} alt="" />
              </div>
            </Carousel>
            <Introduction/>
            </div>
        );
    }
}

export default SlideShow;
