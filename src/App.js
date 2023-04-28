import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookASlot from './pages/BookASlot';
import Membership from './pages/Membership';
import About from './pages/About';
import Footer from './components/common/footer/Footer';
import './styles/app.scss';
import Navigation from './components/common/navigation/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slot" element={<BookASlot />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
