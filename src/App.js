import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//import Content from './Content';
import { Link } from 'react-router'

class App extends Component {



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        {/*
          <Content />
        */}

        <br/>

        <Link to="/" activeClassName="active">Home</Link> | <Link to="/about" activeClassName="active">About</Link> | <Link to="/contact" activeClassName="active">Contact</Link>
        
        {this.props.children}

      </div>
    );
  }
}

export default App;