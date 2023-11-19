import ReactDOM from 'react-dom/client';
import './Styles/style.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuNavbar from './Components/MenuNavbar';
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import FundraisingPage from './Components/Fundraising/FundraisingPage';
import { TMenuUtils } from './Utils/MenuUtils';
import Fundraisings from './Views/Fundraisings';
import { FundraisingsUtils } from './Utils/FundraisingUtils';
import 'bulma/css/bulma.min.css';
import { EventController } from './Views/Events/EventController';

const root = ReactDOM.createRoot(document.getElementById('root')!);
document.addEventListener('scroll', () => { TMenuUtils.changeMenuBackgroundOnScroll() });

root.render(
  <div className='ia-page'>
    <MenuNavbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/fundraisings/fundraising' element={<FundraisingPage />} />
        <Route path='/fundraisings' element={<Fundraisings fundraisingList={FundraisingsUtils.fundraisings} pageTitle='Zbiórki' />} />
      </Routes>
    </BrowserRouter>
    <footer className="footer  has-background-black has-text-white">
      <div className="content has-text-centered">
        <p>
          Website <strong className='has-text-white'>#bandażedlaukrainy</strong> <a href="https://www.interactive.net.pl" target='_blank'>by Interactive</a>
        </p>
      </div>
    </footer>
  </div>
);

reportWebVitals();
