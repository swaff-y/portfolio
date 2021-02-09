import React, {useEffect, useState} from 'react';
import Introduction from './Introduction';
import About from './About';
import Timeline from './Timeline';
import Projects from './Projects';
import "./main.css";

const Main = (props) => {

  useEffect(()=>{
    let location;
    location = props.location.pathname.substring(1);
    if(location !== ""){
      document.getElementById(location).scrollIntoView();
    }
  },[]);

  return(
    <>
      <div className="main">
        <Introduction />
        <About />
        <Timeline />
        <Projects />
      </div>
    </>
  )
}

export default Main;
