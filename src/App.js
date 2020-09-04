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
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/research" component={Research}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/experience" component={Experience}/>
        </Switch>
      </Router>
  );
}

export default App;
