import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

function Header() {
    return (
        <header>
            <nav>
                <a className="logo" href="/"><Link to="/">Glass Viagens</Link></a>
                <div className="mobile-menu">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                    <div className="line4"></div>
                </div>
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Sobre">Abount</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Cadastro">Cadastro</Link></li>
                </ul>

            </nav>
        </header>
    )
}
export default Header;
