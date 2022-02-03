import './App.css';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbaer.jsx';
import Story from './Components/Story/Story';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Story />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
