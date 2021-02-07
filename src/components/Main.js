import React, {useEffect, useState} from 'react';
import Introduction from './Introduction';
import About from './About';
import Timeline from './Timeline';
import Projects from './Projects';
import "./main.css";

const Main = (props) => {
  return(
    <>
      <div className="main">
        <Introduction />
        <About />
        <Projects />
        <Timeline />
      </div>
    </>
  )
}

export default Main;
