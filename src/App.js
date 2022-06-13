import './App.css';

import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <About/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
