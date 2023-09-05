import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Outlet, useLocation, } from "react-router-dom";
import { Navigation } from './Nav';
import { RegisterPage } from './Register';
import { Container } from 'react-bootstrap';
import { LandingPage } from './Landing';
import { TransferPage } from './Transfer';
import { ResettlementPage } from './Resettlement';
import { Loading } from './loading/Loading';

const RegisterProtection = () => {
  const [pageStates, setPageStates] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageStates = async () => {
      try {
        const response = await fetch('https://posvyatmiem.ru/api/v1/states/');
        if (response.ok) {
          const data = await response.json();
          setPageStates(data[0]);
          setLoading(false)
        } else {
          console.error('Ошибка при получении данных:', response.status);
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchPageStates();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return pageStates.registration ? <Outlet/> : <Navigate to="/" />
};

const ResettlementProtection = () => {
  const [pageStates, setPageStates] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageStates = async () => {
      try {
        const response = await fetch('https://posvyatmiem.ru/api/v1/states/');
        if (response.ok) {
          const data = await response.json();
          setPageStates(data[0]);
          setLoading(false)
        } else {
          console.error('Ошибка при получении данных:', response.status);
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchPageStates();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return pageStates.resettlement ? <Outlet/> : <Navigate to="/" />
};

const TransferProtection = () => {
  const [pageStates, setPageStates] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageStates = async () => {
      try {
        const response = await fetch('https://posvyatmiem.ru/api/v1/states/');
        if (response.ok) {
          const data = await response.json();
          setPageStates(data[0]);
          setLoading(false)
        } else {
          console.error('Ошибка при получении данных:', response.status);
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchPageStates();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return pageStates.transfer ? <Outlet/> : <Navigate to="/" />
};



const App = () => {
  const [pageStates, setPageStates] = useState({});

  //тест шума
  
  //

      return (
          <Router>
            <Container fluid className='general-box'>
            <Navigation/>
              <Routes>
                  <Route path="/" element={<LandingPage />} /> 
                  <Route path="/register" element={<RegisterProtection />}>
                    <Route path="/register" element={<RegisterPage />} />
                  </Route>
                  <Route path="/transfer" element={<TransferProtection />}>
                    <Route path="/transfer" element={<TransferPage />} />
                  </Route>
                  <Route path="/resettlement" element={<ResettlementProtection />}>
                    <Route path="/resettlement" element={<ResettlementPage />} />
                  </Route>
                  <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Container>
          </Router>
          
      );
}

export default App