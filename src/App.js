import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import BookSlots from './pages/BookSlots';
import Membership from './pages/Membership';
import About from './pages/About';
import Footer from './components/common/footer/Footer';
import PrivateRoutes from './components/common/navigation/PrivateRoutes';
import Navigation from './components/common/navigation/Navigation';
import SignIn from './components/common/auth/SignIn';
import SignUp from './components/common/auth/SignUp';

import './styles/app.scss';
import Profile from './components/common/auth/Profile';

const App = () => {
  return (
    <>
      <Navigation />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/slot" element={<BookSlots />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
