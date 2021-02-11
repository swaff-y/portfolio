import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import useWindowDimensions from './hooks/useWindowDimensions';
import Sidebar from './components/Sidebar'
import SkinnySidebar from './components/SkinnySidebar'
import Main from './components/Main'
import Introduction from './components/Introduction';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import { Route, HashRouter as Router } from 'react-router-dom';
import {IconButton} from '@material-ui/core';
import Toc from '@material-ui/icons/Toc';


function App() {
  const [sidebar, setSidebar] = useState(true);
  const [mainOff, setMainOff] = useState(false);
  const {height, width} = useWindowDimensions();

  useEffect(()=>{
    checkWidth(width);
  },[width])

  const toggleSidebar = () => {
    if(sidebar === true){
      setSidebar(false);
    }else if(sidebar === false){
      setSidebar(true);
    }
  }
  const toggleMainOff = () => {
    if(mainOff === true){
      setMainOff(false);
    }else if(mainOff === false){
      setMainOff(true);
    }
  }
  const turnMainOff = (action) => {
    if(action === true){
      setMainOff(true);
    }else if(mainOff === false){
      setMainOff(false)
    }
  }

  const checkWidth = (width) => {
    if(width < 1090){
      setSidebar(false);
    }else if(width >= 1090 ){
      setSidebar(true);
    }
    if(width < 600){
      setMainOff(true);
    }else if( width >= 600){
      setMainOff(false);
    }
  }
  // console.log("-->", width);
  return (
    <div className="app">

      {
        sidebar === true
        ?
        <Sidebar toggleSidebar={toggleSidebar} toggleMainOff={toggleMainOff} windowWidth={width} sidebar={sidebar} mainOff={mainOff} turnMainOff={turnMainOff}/>
        :
        <IconButton onClick={toggleSidebar} className="app__sidebarButton">
          <Toc />
        </IconButton>
      }

      {
        mainOff === true && sidebar === true
        ?
        <div className="stub">
        </div>
        :
        <Router>
          <Route exact path="/" render={(props) => <Main {...props} sidebar={sidebar}  windowWidth={width} />} />
          <Route exact path="/introduction" render={(props) => <Main {...props} sidebar={sidebar} windowWidth={width} />} />
          <Route exact path="/about" render={(props) => <Main {...props} sidebar={sidebar}  windowWidth={width} />} />
          <Route exact path="/projects" render={(props) => <Main {...props} sidebar={sidebar}  windowWidth={width} />} />
          <Route exact path="/timeline" render={(props) => <Main {...props} sidebar={sidebar}  windowWidth={width} />} />
        </Router>
      }
    </div>
  );
}

export default App;
