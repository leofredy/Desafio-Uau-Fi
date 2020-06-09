import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import { IoMdPower, IoMdMenu } from 'react-icons/io'
import logo from '../../assets/logo.svg'

import '../CSS/foundation.css'
import './style.css'

export default function Users() {
    const ninjaID = localStorage.getItem('NinjaID')
    const [id, setID] = useState('')
    const history = useHistory()

    useEffect(()=>{
        setID(ninjaID)
    }, [])
    
    async function handleDelete(){
        const data = {
            headers:{
                authorization: id
            }
        }
        try{
            const response = await api.delete('delete', data)
            localStorage.clear()
            history.push('/')
        }catch (error){
            console.log(error)
        }
    }
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
                    <button onClick={stylesMethods.handleDropdown} >
                        <IoMdMenu className="button-dropdown-users" color="#DF423A" size="30px" />
                    </button>
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
                                <div className="pass-form-delete"></div>
                            </div>
                        </form>
                    </div>
                    <button onClick={handleDelete} className="submit-form-users">EXCLUIR</button>
                </main>
            </div>
        </div>
    )
}