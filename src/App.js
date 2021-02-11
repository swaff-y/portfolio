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


function App() {
  const [sidebar, setSidebar] = useState(true);
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

  const checkWidth = (width) => {
    if(width < 1090){
      setSidebar(false);
    }else if(width >= 1090 ){
      setSidebar(true);
    }
  }
  // console.log("-->", width);
  return (
    <div className="app">

      {
        sidebar === true
        ?
        <Sidebar toggleSidebar={toggleSidebar} />
        :
        <SkinnySidebar toggleSidebar={toggleSidebar} />
      }
      <Router>
        <Route exact path="/" render={(props) => <Main {...props} sidebar={sidebar}  windowWidth={width} />} />
        <Route exact path="/introduction" render={(props) => <Main {...props} sidebar={sidebar} windowWidth={width} />} />
        <Route exact path="/about" render={(props) => <Main {...props} sidebar={sidebar}  windowWidth={width} />} />
        <Route exact path="/projects" render={(props) => <Main {...props} sidebar={sidebar}  windowWidth={width} />} />
        <Route exact path="/timeline" render={(props) => <Main {...props} sidebar={sidebar}  windowWidth={width} />} />
      </Router>
    </div>
  );
}

export default App;
