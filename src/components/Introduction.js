import React, {useEffect, useState} from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./introduction.css";

const Introduction = (props) => {
  const [slide,setSlide] = useState(true);
  const [windowWidth,setWindowWidth] = useState('80vw');
  const [caroselPosition,setCaroselPosition] = useState('100px');
  const [caroselWidth,setCaroselWidth] = useState('200px');
  // console.log("window Width:", props.windowWidth );
  useEffect(()=>{
    if(props.windowWidth < 1090){
      setWindowWidth('100vw');
    }else if(props.windowWidth >= 1090){
      setWindowWidth('80vw');
    }
    if(props.windowWidth > 800){
      setCaroselPosition('100px');
      setCaroselWidth('400px');
    }else if(props.windowWidth <= 800){
      setCaroselPosition('30px');
      setCaroselWidth('280px');
    }
  },[props.windowWidth])


  const handleCVClick = () => {
    if(slide === true){
      setSlide(false);
    }else if(slide === false){
      setSlide(true);
    }
  }
    // console.log(carosel);
  return(
    <div className="introduction" id="introduction" style={{width: windowWidth}}>

      <Carousel className="introduction__carousel" controls={false} indicators={false} onSlide={handleCVClick} style={{left: caroselPosition, width: caroselWidth}}>
        <Carousel.Item interval={5000}>
            <h1><strong>Hi, I'm Kyle</strong></h1>
            <p>A full stack software engineer based in Sydney</p>
            <div className="introduction__callToAction">
              <a href="https://swaff-y.github.io/portfolio/cv.pdf" download="Kyle Swaffield - Full Stack Software Engineer" target="_blank">Download my Resume</a>
            </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <h1>I love building things</h1>
            <p>Why not check out some of my work?</p>
            <div className="introduction__callToAction">
              <a href="#/projects" >View my Projects</a>
            </div>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default Introduction;
