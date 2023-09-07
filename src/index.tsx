import ReactDOM from 'react-dom/client';
import './Styles/style.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuNavbar from './Components/MenuNavbar';
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import FundraisingPage from './Components/Fundraising/FundraisingPage';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <div className='ia-page'>
    <MenuNavbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/fundraisings/fundraising' element={<FundraisingPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

reportWebVitals();
