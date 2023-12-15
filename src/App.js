import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import BookSlots from './pages/BookSlots';
import Membership from './pages/Membership';
import About from './pages/About';
import SignIn from './components/common/auth/SignIn';
import SignUp from './components/common/auth/SignUp';

import './styles/app.scss';
import Profile from './components/common/auth/Profile';
import Root from './pages/Root';
import { checkAuthLoader } from './util/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/membership', element: <Membership /> },
      { path: '/slot', element: <BookSlots />, loader: checkAuthLoader },
      { path: 'profile', element: <Profile />, loader: checkAuthLoader },
      { path: '/about', element: <About /> },
      { path: '/login', element: <SignIn /> },
      { path: '/register', element: <SignUp /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
