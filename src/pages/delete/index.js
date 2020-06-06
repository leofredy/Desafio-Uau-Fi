import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { IoMdTrash ,IoMdPower, IoMdCreate, IoMdMenu } from 'react-icons/io'
import logo from '../../assets/logo.svg'

import '../CSS/foundation.css'
import './style.css'

export default function Users() {
    
    const stylesMethods = {
        handleDropdown(){
            document.querySelector('.nav-dropdown-users')
                .classList.toggle('visible')
        },
    }

    return (
        <div className="container-users">
            <div className="container-dropdown-users ">
                <div className="navbar-dropdown-users">
                    <div>
                    <Link to="/profile">
                        <img className="logo-naruto-users " src={logo} alt=""/>
                    </Link>
                    </div>
                    <div>
                    <Link onClick={stylesMethods.handleDropdown} >
                        <IoMdMenu className="button-dropdown-users" color="#DF423A" size="30px" />
                    </Link>
                    </div>
                </div>
                <nav className="nav-dropdown-users visible">
                    <ul className="list-dropdown-users">
                        <li>
                            <Link to="/user">Minha conta</Link>
                        </li>
                        <li>
                            <Link to="/profile">Voltar para início</Link>
                        </li>
                        <li>
                            <Link to="/">Sair</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="background-users">
                <nav className="nav-users">
                    <Link to="/profile">
                        <img className="logo-naruto-users" src={logo} alt=""/>
                    </Link>
                    <div className="presentation-users presentation-account">
                        <Link to="/profile">
                            <button className="my-account">CANCELAR E VOLTAR</button>
                        </Link>
                        <Link to="/">
                            <IoMdPower className="power-users" color="#DF423A" size="40"/>
                        </Link>
                    </div>
                </nav>
                <main className="main-delete main-users">
                    <div className="container-form-delete container-form-users">
                        <form action="">
                            <div className="presentation-form-users">
                                <h1 className="name-ninja-users">DESEJA EXCLUIR?</h1>
                            </div>
                            <div className="box-pass-form-users">
                                <div className="pass-form-delete">
                                    <label className="label-form-users">SENHA</label>
                                    <input className="input-form-users" type="text"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Link className="box-button-form-users">
                        <button className="submit-form-users">EXCLUIR</button>
                    </Link>
                </main>
            </div>
        </div>
    )
}