import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import Header from './layout/Header';
import Landing from './pages/Landing';
import Footer from './layout/Footer';
import NotFound from './pages/NotFound';
import MadC from './pages/MadC';
import IXtreme from './pages/IXtreme';
import Cscon from './pages/Cscon';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Header/>
            <Switch>
              <Route exact path="/" component = {Landing}/>
              <Route exact path="/madc" component = {MadC}/>
              <Route exact path="/ieeextreme" component = {IXtreme} />
              <Route exact path="/cscon" component= {Cscon} />
              <Route exact path="/contact" component={Contact} />
              <Route component = {NotFound}/>
            </Switch>
            <Footer/>
          </div>
      </Router>
    );
  }
}

export default App;
