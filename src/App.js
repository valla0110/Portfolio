import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router ,Switch} from "react-router-dom";
import {Route} from 'react-router';
import About from "./Components/About";
import Research from "./Components/Research";
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import Experience from "./Components/Experience";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/Portfolio" component={Home}/>
          <Route exact path="/Portfolio/about" component={About}/>
          <Route exact path="/Portfolio/research" component={Research}/>
          <Route exact path="/Portfolio/projects" component={Projects}/>
          <Route exact path="/Portfolio/experience" component={Experience}/>
        </Switch>
      </Router>
  );
}

export default App;
