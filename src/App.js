import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Navigation } from './Nav';
import { RegisterPage } from './Register';
import { Container } from 'react-bootstrap';
import { LandingPage } from './Landing';

export default class App extends Component{
  constructor(props) {
      super(props);
  }
  
  

  render() {
      
      
      return (
          <Router>
            <Container fluid className='general-box'>
            <Navigation/>
              <Routes>
                  <Route path="/" element={<LandingPage />} />         
                  <Route path="/register" element={<RegisterPage />} /> 
                  
                  {/* <Route path="/status" element={<StatusPage />} />
                  <Route path="/instructions" element={<InstructionsPage />} /> 
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="*" render={() => <Navigate to="/" />} /> */}
              </Routes>
            </Container>
          </Router>
          
      );
  }
}
