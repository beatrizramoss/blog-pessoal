import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/navbar';
import Footer from './components/estaticos/footer/footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario/>} />

        <Route path="/tema" element={<ListaTema />} />

        <Route path="/postagens" element={<ListaPostagem />} />


      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
