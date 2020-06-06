import React from 'react'
import { Link } from 'react-router-dom'

import banner from '../../assets/baner.png'
import logo from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import '../CSS/foundation.css'
import './style-home-create.css'

export default function Home(){
    return (
        <div className="container-home">
            <main>
                <section>
                    <img className="logo-naruto-home" src={ logo } alt=""/>
                    <div className="container-form">
                        <form action="">
                            <h1 className="naruto-form-login">Faça seu login</h1>
                            <div className="info-form">
                                <label>Nome</label>
                                <input className="naruto-form-input" type="text" placeholder="Nome de usuário"/>
                            </div>
                            <div className="info-form">
                                <label>Senha</label>
                                <input className="naruto-form-input input2" type="password" placeholder="Digite sua senha"/>
                            </div>
                            <div className="container-create-account">
                                <FiLogIn className="icon-login" color="#DF423A" size="20"/>
                                <Link className="create-account" to="/create">CRIAR CONTA</Link>
                            </div>
                        </form>
                    </div>
                    <Link to="/profile">
                        <button className="botao-entrar">ENTRAR</button>
                    </Link>
                </section>
                <img className="banner-naruto" src={ banner } alt=""/>
            </main>
        </div>
    )
}