import React, { useEffect, useState } from 'react'
import { Link, useHistory  } from 'react-router-dom'

import api from '../../services/api'

import logo from '../../assets/logo.svg'
import { FiPower, FiSearch, FiMenu } from 'react-icons/fi'

import '../CSS/foundation.css'
import './style.css'

export default function Profile() {
    function handleDropdown(){
        document.querySelector('.nav-dropdown-profile')
            .classList.toggle('visible')
    }
    const [ninjasAPI, setNinjasAPI] = useState([])
    const [count, setCount] = useState(0)
    const [list, setList] = useState([])
    const [filter, setFilter] = useState('')
    const ninjaName = localStorage.getItem('NinjaName')

    const history = useHistory()

    useEffect(() => {
        api.get('count')
            .then(response => {
                setCount(response.data)
            })
    }, [])
    useEffect(() => {
        api.get('profile')
            .then(response => {
                setNinjasAPI(response.data)
                setList(response.data)
            })
    }, [])
    useEffect( () => {
        setList(ninjasAPI.filter(element => element.name.includes(filter)))
    }, [filter])

    function handleLogon(){
        localStorage.clear()
        history.push('/')
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
                    <div onClick={handleDropdown} >
                        <FiMenu className="button-dropdown-profile" color="#DF423A" size="30px" />
                    </div>
                    </div>
                </div>
                <nav className="nav-dropdown-profile visible">
                    <ul className="list-dropdown-profile">
                        <li>
                            <Link to="/user">Minha conta</Link>
                        </li>
                        <li>
                            <button onClick={handleLogon}>Sair</button>
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
                        <h1 className="ninja-profile">Ninja: {ninjaName}</h1>
                    </div>
                    <div className="presentation-profile presentation-account">
                        <Link to="/user">
                            <button className="my-account">MINHA CONTA</button>
                        </Link>
                        <button onClick={handleLogon}>
                            <FiPower className="power-profile" color="#DF423A" size="40"/>
                        </button>
                    </div>
                </nav>
                <header className="header-profile">
                    <h2 className="counter-profile">TOTAL DE CONTAS: { count }</h2>
                    <form action="">
                        <div className="search-profile">
                            <input 
                                className="input-profile" 
                                type="search" 
                                placeholder="Pesquisar..."
                                value={filter}
                                onChange={ e => setFilter(e.target.value) }
                            />
                            <button className="button-profile"><FiSearch color="#FFF" size="18"/></button>
                        </div>
                    </form>
                </header>
                <section className="section-profile">
                    <ul className="list-item">
                        {list.map(element => (
                            <li key={element.email} className="container-item">
                                <h1 className="title-item">NINJA</h1>
                                <div className="info-item">
                                    <h2 className="description">NOME: </h2>
                                    <h3 className="ninja">{element.name}</h3>
                                </div>
                                <div className="info-item">
                                    <h2 className="description">E-MAIL: </h2>
                                    <h3 className="ninja">{element.email}</h3>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    )
}