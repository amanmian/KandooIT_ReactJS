import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List.js';
import Add from './components/Add.js';
import { Router, Link , BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="ui container">
         
          <ul className="inlineList">
            <li className="btn" style={{padding:"10px 10px 10px 10px",backgroundColor:"#F0F0F0"}}><Link className="item" activeclassname="active" to="/List">List</Link></li>
            <li className="btn btn-default" style={{padding:"10px 10px 10px 10px",backgroundColor:"#F0F0F0"}}><Link to="/Add">Add Details</Link></li>
          </ul>


          <hr />

          
          <Route path="/list" component={List} />
          <Route path="/add" component={Add} />


       
      </div>
    );
  }
}

export default App;
