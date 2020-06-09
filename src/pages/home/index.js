import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import banner from '../../assets/baner.png'
import logo from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import '../CSS/foundation.css'
import './style-home-create.css'

export default function Home(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    async function handleLogin(){
        const data = {
            email,
            password
        }
        
        try{
            const response = await api.post('/', data)
            localStorage.setItem('NinjaName', response.data.name)
            localStorage.setItem('NinjaEmail', response.data.email)
            localStorage.setItem('NinjaID', response.data.id)
            history.push('/profile')
        }catch (error){
            alert('Invalid credentials.')
        }
    }

    return (
        <div className="container-home">
            <main>
                <section>
                    <img className="logo-naruto-home" src={ logo } alt=""/>
                    <div className="container-form">
                        <form action="">
                            <h1 className="naruto-form-login">Faça seu login</h1>
                            <div className="info-form">
                                <label>E-mail</label>
                                <input 
                                    className="naruto-form-input" 
                                    type="text" 
                                    placeholder="Digite seu e-mail"
                                    value={email}
                                    onChange={ e => setEmail(e.target.value) }
                                />
                            </div>
                            <div className="info-form">
                                <label>Senha</label>
                                <input 
                                    className="naruto-form-input input2" 
                                    type="password" 
                                    placeholder="Digite sua senha"
                                    value={password}
                                    onChange={ e => setPassword(e.target.value) }
                                />
                            </div>
                            <div className="container-create-account">
                                <FiLogIn className="icon-login" color="#DF423A" size="20"/>
                                <Link className="create-account" to="/create">CRIAR CONTA</Link>
                            </div>
                        </form>
                    </div>
                    <button className="botao-entrar" onClick={handleLogin}>ENTRAR</button>
                </section>
                <img className="banner-naruto" src={ banner } alt=""/>
            </main>
        </div>
    )
}