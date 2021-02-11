import React, {useEffect, useState} from 'react';
import './about.css'

const About = (props) => {
  const [windowWidth,setWindowWidth] = useState('80vw');
  const [windowHeight,setWindowHeight] = useState('800px');
  const [techPosition,setTechPosition] = useState('0px');

  useEffect(()=>{
    if(props.windowWidth < 1090){
      setWindowWidth('100vw');
    }else if(props.windowWidth >= 1090){
      setWindowWidth('80vw');
    }
    if(props.windowWidth < 865){
      setWindowHeight('1000px');
      setTechPosition('100px');
    }else if(props.windowWidth >= 865){
      setWindowHeight('800px');
      setTechPosition('0px');
    }
    if(props.windowWidth < 520){
      setWindowHeight('1100px');
      setTechPosition('200px');
    }else if(props.windowWidth >= 865){
      // setWindowHeight('800px');
      setTechPosition('0px');
    }
  },[props.windowWidth])

  return(
    <div className="about" id="about" style={{width: windowWidth, height: windowHeight}}>
      <div className="about__paragraph">
        <h1>Who am I?</h1>
        <p>I have a strong passion for software engineering, and a great deal of experience in project management. I enjoy the results of what can be achieved when thinking about software development problems collectively. My aptitude for analysing code based problems, helps me think about solutions from a unique perspective. As a collaborative and communicative team member, I help build operational teams while cultivating meaningful relationships.</p>
      </div>
      <div className="about__tech" style={{top: techPosition}}>
        <h1>Technologies I use</h1>
        <img src="https://res.cloudinary.com/dhl1cdqch/image/upload/v1612767618/ruby_iqqlro.png" alt="Ruby on Rails" width="154px"/>
        <img src="https://res.cloudinary.com/dhl1cdqch/image/upload/v1612768183/mern_ocokf5.png" alt="Mern" width="200px"/>
      </div>
    </div>
  )
}

export default About;
