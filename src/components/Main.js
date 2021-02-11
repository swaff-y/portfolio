import React, {useEffect, useState} from 'react';
import Introduction from './Introduction';
import About from './About';
import Timeline from './Timeline';
import Projects from './Projects';
import "./main.css";

const Main = (props) => {

  const [toggleStyle, setToggleStyle] = useState({
    flex: 0.65,
  });

  useEffect(()=>{
    let location;
    location = props.location.pathname.substring(1);
    if(location !== ""){
      document.getElementById(location).scrollIntoView();
    }
  },[]);

  useEffect(()=>{
    if(props.sidebar === true){
      setToggleStyle({
        flex: 0.65,
      })
    }else if(props.sidebar === false){
      setToggleStyle({
        flex: 1,
        width: '100vw',
      })
    }
  },[props.sidebar])

  return(
    <>
      <div className="main" style={toggleStyle}>
        <Introduction windowWidth={props.windowWidth}/>
        <About windowWidth={props.windowWidth}/>
        <Timeline />
        <Projects windowWidth={props.windowWidth}/>
      </div>
    </>
  )
}

export default Main;
