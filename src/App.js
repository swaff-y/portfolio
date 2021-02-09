import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Introduction from './components/Introduction';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import { Route, HashRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <Router>
        <Route exact path = "/" component = {Main} />
        <Route exact path = "/introduction" component = {Main} />
        <Route exact path = "/about" component = {Main} />
        <Route exact path = "/projects" component = {Main} />
        <Route exact path = "/timeline" component = {Main} />

      </Router>
    </div>
  );
}

export default App;
