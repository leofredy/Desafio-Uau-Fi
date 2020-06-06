import React from 'react'
import { Link } from 'react-router-dom'

import banner from '../../assets/baner.png'
import logo from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'
import '../CSS/foundation.css'
import '../home/style-home-create.css'
import './style.css'

export default function Home(){
    return (
        <div className="container-home">
            <main>
                <section>
                    <img className="logo-naruto" src={ logo } alt=""/>
                    <div className="box-form-botao">
                        <div className="container-form naruto-form">
                            <form action="">
                                <h1 className="naruto-form-login">Cadastra-se já</h1>
                                <div className="info-form">
                                    <label>Nome</label>
                                    <input className="naruto-form-input" type="text" placeholder="Nome de usuário"/>
                                </div>
                                <div className="info-form">
                                    <label>E-mail</label>
                                    <input className="naruto-form-input" type="email" placeholder="Digite um e-mail válido"/>
                                </div>
                                <div className="info-form">
                                    <label>Senha</label>
                                    <input className="naruto-form-input input2" type="password" placeholder="Criar senha"/>
                                </div>
                                <div className="container-create-account">
                                    <FiArrowLeft color="#DF423A" size="20"/>
                                    <Link className="create-account" to="/">Voltar para o início</Link>
                                </div>
                            </form>
                        </div>
                        <Link to="/">
                            <button className="botao-entrar">CONTINUAR</button>
                        </Link>
                    </div>
                </section>
                <img className="banner-naruto" src={ banner } alt=""/>
            </main>
        </div>
    )
}