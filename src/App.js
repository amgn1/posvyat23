import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { LandingPage } from './Landing';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Navigation } from './Nav';

export default class App extends Component{
  constructor(props) {
      super(props);
  }
  
  

  render() {
      
      
      return (
          <Router>
            <div>
            <Navigation/>
              <Routes>
                  <Route path="/" element={<LandingPage />} />         
                  {/* <Route path="/request" element={<RequestPage />} /> 
                  <Route path="/status" element={<StatusPage />} />
                  <Route path="/instructions" element={<InstructionsPage />} /> 
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="*" render={() => <Navigate to="/" />} /> */}
              </Routes>
            </div>
          </Router>
          
      );
  }
}
