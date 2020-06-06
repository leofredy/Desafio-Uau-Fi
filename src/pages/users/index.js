import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { IoMdTrash ,IoMdPower, IoMdCreate, IoMdMenu } from 'react-icons/io'
import logo from '../../assets/logo.svg'

import '../CSS/foundation.css'
import './style.css'

export default function Users() {
    const [disable, setDisable] = useState(true)
    
    const stylesMethods = {
        handleDropdown(){
            document.querySelector('.nav-dropdown-users')
                .classList.toggle('visible')
        },
        changeInput(){
            setDisable(!disable)
        }
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
                            <button className="my-account">VOLTAR PARA INÍCIO</button>
                        </Link>
                        <Link to="/">
                            <IoMdPower className="power-users" color="#DF423A" size="40"/>
                        </Link>
                    </div>
                </nav>
                <main className="main-users">
                    <div className="container-form-users">
                        <form action="">
                            <div className="presentation-form-users">
                                <h1 className="name-ninja-users">LEONARDO FREDERICO DA SILVA</h1>
                                <div className="change-icons-users">
                                    <Link to="#" onClick={stylesMethods.changeInput}>
                                        <div className="change-span-users">
                                            <IoMdCreate color="#DF423A" size="25" />
                                            <h3 className="span-users">Editar</h3>
                                        </div>
                                    </Link>
                                    <Link to="/user/delete">
                                        <div className="change-span-users">
                                            <IoMdTrash color="#DF423A" size="25" />
                                            <h3 className="span-users">Excluir</h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <label className="label-form-users">NOME</label>
                            <input className="input-form-users" disabled={disable} type="text"/>
                            <label className="label-form-users">E-MAIL</label>
                            <input className="input-form-users" disabled={disable} type="text"/>
                            <div className="box-pass-form-users">
                                <div className="pass-form-users">
                                    <label className="label-form-users">SENHA</label>
                                    <input className="input-form-users" disabled={disable} type="text"/>
                                </div>
                                <div className="pass-form-users">
                                    <label className="label-form-users">NOVA SENHA</label>
                                    <input className="input-form-users" disabled={disable} type="text"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Link className="box-button-form-users">
                        <button className="submit-form-users">SALVAR ALTERAÇÕES</button>
                    </Link>
                </main>
            </div>
        </div>
    )
}