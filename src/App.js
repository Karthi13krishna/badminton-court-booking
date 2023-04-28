import BookASlot from './pages/BookASlot';
import Footer from './components/common/footer/Footer';
import './styles/app.scss';
import Navigation from './components/common/navigation/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <BookASlot />
      <Footer />
    </>
  );
};

export default App;
