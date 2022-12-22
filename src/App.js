import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Header from './components/header';
import Footer from './components/footer';



function App() {
  return (
      <Router>
        <Header/>
          <Routes>
              <Route exact path='/' element={< About />} ></Route>
              <Route exact path='/experience' element={< Experience />} />
              <Route exact path='/work' element={< Work />} />
              <Route exact path='/contact' element={< Contact />} />
              <Route exact path='/resume' element={< Resume />} />
  
          </Routes>
          <Footer/>
      </Router>
  );
}

export default App;
