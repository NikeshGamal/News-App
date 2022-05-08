
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
  render() {
 
    return (
      <Router>
        <div>
            <NavBar/>
               <Routes>
                   <Route exact path="/"  element={<News country="us"  key="home" pageSize={8} category="technology" apiKey="47929920ae014b0ea8e63558932b49b7"/>}/>      
                   <Route exact path="/general" element={<News country="us"  key="general" pageSize={8} category="general" apiKey="47929920ae014b0ea8e63558932b49b7"/>}/>      
                   <Route exact path="/business"  element={<News country="us" key="business" pageSize={8} category="business" apiKey="47929920ae014b0ea8e63558932b49b7"/>}/>      
                   <Route exact path="/entertainment" element={<News country="us"  key="entertainment" pageSize={8} category="entertainment" apiKey="47929920ae014b0ea8e63558932b49b7"/>}/>      
                   <Route exact path="/health" element={<News country="us"  key="health" pageSize={8} category="health" apiKey="47929920ae014b0ea8e63558932b49b7"/>}/>      
                   <Route exact path="/science" element={<News country="us"  key="science" pageSize={8} category="science" apiKey="47929920ae014b0ea8e63558932b49b7"/>}/>      
                   <Route exact path="/sports"  element={<News country="us"  key="sports" pageSize={8} category="sports" apiKey="47929920ae014b0ea8e63558932b49b7"/>}/>      
                   <Route exact path="/technology" element={<News country="us" key="technology" pageSize={8} category="technology" apiKey="47929920ae014b0ea8e63558932b49b7"/>}/>      
               </Routes>
         </div>
      </Router>
    )
  }
}
