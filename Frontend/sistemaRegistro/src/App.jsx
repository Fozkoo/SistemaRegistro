import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'; 
import Men from './pages/Men'; 
import Women from './pages/Women'; 
import Footer from './components/Footer';
import Teacher from './pages/Teacher';




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/*" element={<Home />} /> {/* Aca es para que no se pueda ir a una ruta que no existe, que te redirija al home route */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
