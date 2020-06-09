import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

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

    const ninjaName = localStorage.getItem('NinjaName')
    const ninjaEmail = localStorage.getItem('NinjaEmail')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newpassword, setNewPassword] = useState('')

    const history = useHistory()

    useEffect(()=>{
        setName(ninjaName)
        setEmail(ninjaEmail)
    }, [ninjaName])

    async function handleUpdate(){
        const response = await api.put('user', {
            name,
            email,
            password,
            newpassword
        })
        localStorage.setItem('NinjaName', name)
        history.push('/')
    }

    function handleLogon(){
        localStorage.clear()
        history.push('/')
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
                    <button onClick={stylesMethods.handleDropdown} >
                        <IoMdMenu className="button-dropdown-users" color="#DF423A" size="30px" />
                    </button>
                    </div>
                </div>
                <nav className="nav-dropdown-users visible">
                    <ul className="list-dropdown-users">
                        <li>
                            <Link to="/profile">Voltar para início</Link>
                        </li>
                        <li>
                            <button onClick={handleLogon}>Sair</button>
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
                                <h1 className="name-ninja-users">{ninjaName}</h1>
                                <div className="change-icons-users">
                                    <Link to="#" onClick={stylesMethods.changeInput}>
                                        <div className="change-span-users">
                                            <IoMdCreate color="#DF423A" size="25" />
                                            <h3 className="span-users">Editar</h3>
                                        </div>
                                    </Link>
                                    <Link to="/delete">
                                        <div className="change-span-users">
                                            <IoMdTrash color="#DF423A" size="25" />
                                            <h3 className="span-users">Excluir</h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <label className="label-form-users">NOME</label>
                            <input 
                                className="input-form-users" 
                                disabled={disable} 
                                type="text"
                                value={name}
                                onChange={ e => setName(e.target.value) }
                            />
                            <label className="label-form-users">E-MAIL</label>
                            <input 
                                className="input-form-users" 
                                disabled={true} 
                                type="email" 
                                value={ninjaEmail}
                            />
                            <div className="box-pass-form-users">
                                <div className="pass-form-users">
                                    <label className="label-form-users">SENHA</label>
                                    <input 
                                        className="input-form-users" 
                                        disabled={disable} 
                                        type="password"
                                        value={password}
                                        onChange={ e => setPassword(e.target.value) }
                                    />
                                </div>
                                <div className="pass-form-users">
                                    <label className="label-form-users">NOVA SENHA</label>
                                    <input 
                                        className="input-form-users" 
                                        disabled={disable} 
                                        type="password"
                                        value={newpassword}
                                        onChange={ e => setNewPassword(e.target.value) }
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <button onClick={handleUpdate} className="submit-form-users">SALVAR ALTERAÇÕES</button>
                </main>
            </div>
        </div>
    )
}