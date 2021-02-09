import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
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

  const toggleSidebar = () => {
    if(sidebar === true){
      setSidebar(false);
    }else if(sidebar === false){
      setSidebar(true);
    }
  }

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
        <Route exact path="/" render={(props) => <Main {...props} sidebar={sidebar} />} />
        <Route exact path="/introduction" render={(props) => <Main {...props} sidebar={sidebar} />} />
        <Route exact path="/about" render={(props) => <Main {...props} sidebar={sidebar} />} />
        <Route exact path="/projects" render={(props) => <Main {...props} sidebar={sidebar} />} />
        <Route exact path="/timeline" render={(props) => <Main {...props} sidebar={sidebar} />} />
      </Router>
    </div>
  );
}

export default App;
