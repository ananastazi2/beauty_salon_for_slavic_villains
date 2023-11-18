import logo from './logo.svg';
import '../src/fonts/Galaktika.ttf';
import './App.css';
import Home from './pages/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
