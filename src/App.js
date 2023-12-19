import {
  Route,
  // RouterProvider,
  Routes,
  // createBrowserRouter,
} from 'react-router-dom';

import Home from './pages/Home';
import BookSlots from './pages/BookSlots';
import Membership from './pages/Membership';
import About from './pages/About';
import SignIn from './components/common/auth/SignIn';
import SignUp from './components/common/auth/SignUp';
import PrivateRoutes from './components/common/navigation/PrivateRoutes';

import './styles/app.scss';
import Profile from './components/common/auth/Profile';
// import Root from './pages/Root';
// import { checkAuthLoader } from './util/auth';
import Navigation from './components/common/navigation/Navigation';
import Footer from './components/common/footer/Footer';
import RedirectRoutes from './components/common/navigation/RedirectRoutes';
import Error from './pages/Error';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: 'membership', element: <Membership /> },
//       { path: 'slot', element: <BookSlots />, loader: checkAuthLoader },
//       { path: 'profile', element: <Profile />, loader: checkAuthLoader },
//       { path: 'about', element: <About /> },
//       { path: 'login', element: <SignIn /> },
//       { path: 'register', element: <SignUp /> },
//     ],
//   },
// ]);

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
          <Route element={<RedirectRoutes />}>
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
    // <RouterProvider router={router} />
  );
};

export default App;
