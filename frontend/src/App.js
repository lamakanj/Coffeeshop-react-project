import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/coffeeshop.css';
import NavBar from './Components/NavBar';
import About from './Pages/About';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Update from './Pages/Update';



function App() {
  return (
    <Router>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/update/:id" element={<Update />} />
       
      </Routes>
      <Footer />
     
    </Router>
  );
}

export default App;