import React, { Component } from 'react';
import './App.css';


//import Content from './Content';
import { Link } from 'react-router'

class App extends Component {



  render() {
    const logoMargin = {
      marginLeft: "10px"
    };

    return (
      <div className="container">

      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo" style={logoMargin}>Game Of Thrones</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/contact" activeClassName="active">Contact</Link></li>
          </ul>
        </div>
      </nav>
        
        {this.props.children}

      </div>
    );
  }
}

export default App;