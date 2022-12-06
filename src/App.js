import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Login from './pages/Login'
import Cadastro from './pages/cadastro';

function App() {
    return (
        <>
        {/* Importando o cabeçalho de component/Header */}
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
            </Routes>
        </Router>
        </>
    )
}

export default App;
