
import './App.css';
import NavBar from "./Components/NavBar.js"
import News from './Components/News';
import React, { Component } from 'react'

// import {
//   BrowserRouter as Router,
//   StaticRouter, // for server rendering
//   Route,
//   Link
//   // etc.
// } from "react-router-dom";

export default class App extends Component {
  render() {
 
    return (
      <>
        <NavBar/>
        <News/> 
      </>
    )
  }
}
