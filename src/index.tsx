import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuNavbar from './Components/menuNavbar';
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <div className='ia-page'>
    <MenuNavbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  </div>
);

reportWebVitals();
