import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import Home from './Components/Home/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
   
      <Route path='/' element={<App/>}>
        <Route index path='/'  element={ <Home/> }/>

      </Route>
    </Routes>
  </BrowserRouter>
   
    
  </React.StrictMode>
);


reportWebVitals();
