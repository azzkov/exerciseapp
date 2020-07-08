import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-extend-lg">
                <Link to="/" className="navbar-brand">Lista de Exercícios</Link>
                <div className="collpase navbar-collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Exercícios</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Criar Exercício</Link>
                        </li>                        
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Criar Usuário</Link>
                        </li>

                    </ul>

                </div>
            </nav>
        )
    }

};