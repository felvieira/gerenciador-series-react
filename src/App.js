import React, {Component} from 'react';
// import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import api from './Api'
import Home from './Home'
import NewSeries from './NewSeries'

// criando um const pra testar o route criando uma pagina functional-stateless-component
const About = () => <section className="intro-section"><h1>Sobre</h1></section>

class App extends Component {

   render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <a className="navbar-brand page-scroll" href="#page-top">
                  <img src="images/logo.png" height="30"/>
                </a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/new-series">Nova Série</Link>
                  </li>
                  <li>
                    <Link to="/about">Sobre</Link>
                  </li>
                </ul>
              </div>

            </div>
          </nav>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/new-series' component={NewSeries} />

        </div>
      </Router>
    )
  }
}

export default App;
