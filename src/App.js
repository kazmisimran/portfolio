import React from 'react';
import './App.css';
import './css/style.css'
import './../node_modules/@fortawesome/fontawesome-free/css/all.css'
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import Portfolio from './jsx/portfolio';
import Resume from "./jsx/resume";
import Home from "./jsx/home";
import Contacts from "./jsx/contacts";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



function App() {
  return (

    <Router>
     
      <div>

        <nav className="mx-5 py-3 navbar navbar-expand-lg navbar-light bg-white d-flex justify-content-end " id='nav-courier'>
          <div className="">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  " id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/resume" className='nav-link px-4 mx-3'>Resume</Link>
                </li>
                <li className="nav-item">
                  <Link to="/portfolio" className='nav-link  px-4 mx-3'>Portfolio</Link>
                </li>
                <li className="nav-item" id='contacts-li'>
                  <Link to="/contacts" className=' nav-link px-4 border mx-3' id='contacts'>Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/contacts">
            <Contacts></Contacts>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>

      </div>

    </Router>
  );
}

export default App;
