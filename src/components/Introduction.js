import React, {useEffect, useState} from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./introduction.css";

const Introduction = (props) => {
  return(
    <div className="introduction" id="introduction">

      <Carousel className="introduction__carousel">
        <Carousel.Item interval={5000} indicators={false}>

            <h1><strong>Hi, I'm Kyle</strong></h1>
            <p>A full stack software engineer based in Sydney</p>
            <div className="introduction__callToAction">
              Download my Resume
            </div>

        </Carousel.Item>
        <Carousel.Item interval={5000} indicators={false}>
            <h1>I love building things</h1>
            <p>Why not check out some of my work?</p>
            <div className="introduction__callToAction">
              View my Projects
            </div>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default Introduction;
