import React, { useState } from 'react'
import { Link  } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { FiPower, FiSearch, FiMenu } from 'react-icons/fi'

import '../CSS/foundation.css'
import './style.css'

export default function Profile() {

    function handleDropdown(){
        document.querySelector('.nav-dropdown-profile')
            .classList.toggle('visible')
    }
    return (
        <div className="container-profile">
            <div className="container-dropdown-profile ">
                <div className="navbar-dropdown-profile">
                    <div>
                    <Link to="/profile">
                        <img className="logo-naruto-profile " src={logo} alt=""/>
                    </Link>
                    </div>
                    <div>
                    <Link onClick={handleDropdown} >
                        <FiMenu className="button-dropdown-profile" color="#DF423A" size="30px" />
                    </Link>
                    </div>
                </div>
                <nav className="nav-dropdown-profile visible">
                    <ul className="list-dropdown-profile">
                        <li>
                            <Link to="/user">Minha conta</Link>
                        </li>
                        <li>
                            <Link to="/">Sair</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="background-profile">
                <nav className="nav-profile">
                    <div className="presentation-profile presentation-ninja">
                        <Link to="/profile">
                            <img className="logo-naruto-profile" src={logo} alt=""/>
                        </Link>
                        <h1 className="ninja-profile">Ninja: Leonardo Frederico</h1>
                    </div>
                    <div className="presentation-profile presentation-account">
                        <Link to="/user">
                            <button className="my-account">MINHA CONTA</button>
                        </Link>
                        <Link to="/">
                            <FiPower className="power-profile" color="#DF423A" size="40"/>
                        </Link>
                    </div>
                </nav>
                <header className="header-profile">
                    <h2 className="counter-profile">TOTAL DE CONTAS: 10</h2>
                    <form action="">
                        <div className="search-profile">
                            <input className="input-profile" type="search" placeholder="Pesquisar..."/>
                            <button className="button-profile"><FiSearch color="#FFF" size="18"/></button>
                        </div>
                    </form>
                </header>
                <section className="section-profile">
                    <ul className="list-item">
                        <li className="container-item">
                            <h1 className="title-item">NINJA</h1>
                            <div className="info-item">
                                <h2 className="description">NOME: </h2>
                                <h3 className="ninja">Leonardo frederico da Silva</h3>
                            </div>
                            <div className="info-item">
                                <h2 className="description">E-MAIL: </h2>
                                <h3 className="ninja">freedyzera@gmail.com</h3>
                            </div>
                        </li>
                        <li className="container-item">
                            <h1 className="title-item">NINJA</h1>
                            <div className="info-item">
                                <h2 className="description">NOME: </h2>
                                <h3 className="ninja">Leonardo frederico da Silva</h3>
                            </div>
                            <div className="info-item">
                                <h2 className="description">E-MAIL: </h2>
                                <h3 className="ninja">freedyzera@gmail.com</h3>
                            </div>
                        </li>
                        <li className="container-item">
                            <h1 className="title-item">NINJA</h1>
                            <div className="info-item">
                                <h2 className="description">NOME: </h2>
                                <h3 className="ninja">Leonardo frederico da Silva</h3>
                            </div>
                            <div className="info-item">
                                <h2 className="description">E-MAIL: </h2>
                                <h3 className="ninja">freedyzera@gmail.com</h3>
                            </div>
                        </li>
                        <li className="container-item">
                            <h1 className="title-item">NINJA</h1>
                            <div className="info-item">
                                <h2 className="description">NOME: </h2>
                                <h3 className="ninja">Leonardo frederico da Silva</h3>
                            </div>
                            <div className="info-item">
                                <h2 className="description">E-MAIL: </h2>
                                <h3 className="ninja">freedyzera@gmail.com</h3>
                            </div>
                        </li>
                        <li className="container-item">
                            <h1 className="title-item">NINJA</h1>
                            <div className="info-item">
                                <h2 className="description">NOME: </h2>
                                <h3 className="ninja">Leonardo frederico da Silva</h3>
                            </div>
                            <div className="info-item">
                                <h2 className="description">E-MAIL: </h2>
                                <h3 className="ninja">freedyzera@gmail.com</h3>
                            </div>
                        </li>
                        <li className="container-item">
                            <h1 className="title-item">NINJA</h1>
                            <div className="info-item">
                                <h2 className="description">NOME: </h2>
                                <h3 className="ninja">Leonardo frederico da Silva</h3>
                            </div>
                            <div className="info-item">
                                <h2 className="description">E-MAIL: </h2>
                                <h3 className="ninja">freedyzera@gmail.com</h3>
                            </div>
                        </li>
                        <li className="container-item">
                            <h1 className="title-item">NINJA</h1>
                            <div className="info-item">
                                <h2 className="description">NOME: </h2>
                                <h3 className="ninja">Leonardo frederico da Silva</h3>
                            </div>
                            <div className="info-item">
                                <h2 className="description">E-MAIL: </h2>
                                <h3 className="ninja">freedyzera@gmail.com</h3>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}