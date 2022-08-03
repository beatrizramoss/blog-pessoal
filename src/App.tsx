import React from 'react';
import Navbar from './components/estaticos/navbar/navbar';
import Footer from './components/estaticos/footer/footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
        <Navbar />
          <div style={{ minHeight: '100vh' }}>
            <Routes> // Antigo Switch
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            </Routes>
          </div>
        <Footer />
</Router>
  );
}

export default App;
