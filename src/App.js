import './App.css';
import NavBar from "./Components/NavBar.js"
import News from './Components/News';
import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
    apiKey= process.env.REACT_APP_NEWS_API;
    pageSize=8;
    render() {
  
    return (
      <Router>
        <div>
            <NavBar/>
               <Routes>
                   <Route exact path="/"  element={<News country="us"  key="home" pageSize={this.pageSize} category="technology" apiKey={this.apiKey}/>}/>      
                   <Route exact path="/general" element={<News country="us"  key="general" pageSize={this.pageSize} category="general" apiKey={this.apiKey}/>}/>      
                   <Route exact path="/business"  element={<News country="us" key="business" pageSize={this.pageSize} category="business" apiKey={this.apiKey}/>}/>      
                   <Route exact path="/entertainment" element={<News country="us"  key="entertainment" pageSize={this.pageSize} category="entertainment" apiKey={this.apiKey}/>}/>      
                   <Route exact path="/health" element={<News country="us"  key="health" pageSize={this.pageSize} category="health" apiKey={this.apiKey}/>}/>      
                   <Route exact path="/science" element={<News country="us"  key="science" pageSize={this.pageSize} category="science" apiKey={this.apiKey}/>}/>      
                   <Route exact path="/sports"  element={<News country="us"  key="sports" pageSize={this.pageSize} category="sports" apiKey={this.apiKey}/>}/>      
                   <Route exact path="/technology" element={<News country="us" key="technology" pageSize={this.pageSize} category="technology" apiKey={this.apiKey}/>}/>      
               </Routes>
         </div>
      </Router>
    )
  }
}
