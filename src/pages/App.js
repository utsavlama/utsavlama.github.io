import React from 'react';
import logo from './../images/utsav-logo-5.png';
import './App.css';
import Home from './home.js'
import Skills from './skills';
import Portfolio from './portfolio';
import Contact from './contact';
import { Route, Switch, Link } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {    
    let nav = document.getElementById("portfolio-responsive-menu");
    nav.className.includes("open-menu") ? nav.className = "" : nav.className = "open-menu";
    let button = document.getElementById("menu-button-icon"); 
    button.className.includes("fa-bars") ? button.className = "fa fa-times fa-2x" : button.className = "fa fa-bars fa-2x";
  }

  render() {
    return (
      <div className="App" >
        <header className="portfolio-header">
          <div>
            <img src={logo} />
          </div>
          <div>
            <nav id="portfolio-responsive-menu">
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/skills">SKILLS</Link>
                </li>
                <li>
                  <Link to="/portfolio">PORTFOLIO</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            </nav>
            <button onClick={this.handleMenuClick}>
              <i id="menu-button-icon" className="fa fa-bars fa-2x"></i>
            </button>
          </div>
        </header>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Skills} path="/skills" />
          <Route component={Portfolio} path="/portfolio" />
          <Route component={Contact} path="/contact" />
        </Switch>
        <footer>
          <div>
            <div>
              <p>Designed and developed by Utsav</p>
              <p>&copy; Utsav 2020</p>
            </div>
            <div>
              <h2>Quick Links</h2>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h2>Social Media</h2>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
