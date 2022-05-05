
import './App.css';
import NavBar from "./Components/NavBar.js"
import News from './Components/News';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar title="NewsMonkey" about="About"/>
        <News/>
      </>
    )
  }
}
