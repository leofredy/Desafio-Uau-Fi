import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import banner from '../../assets/baner.png'
import logo from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'
import '../CSS/foundation.css'
import '../home/style-home-create.css'
import './style.css'

export default function Create(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    async function handleCreate(){
        const data = {
            name, 
            email,
            password
        }
        
        try {
            const response = await api.post('create', data)
            alert('Cadastrado com sucesso!')
            history.push('/')
        }catch(error){
            alert('Erro ao cadastrar, tente novamente!')
        }
    
    }

    return (
        <div className="container-home">
            <main>
                <section>
                    <img className="logo-naruto" src={ logo } alt=""/>
                    <div className="box-form-botao">
                        <div className="container-form naruto-form">
                            <form onSubmit={() =>{}}>
                                <h1 className="naruto-form-login">Cadastra-se já</h1>
                                <div className="info-form">
                                    <label>Nome</label>
                                    <input 
                                        className="naruto-form-input" 
                                        type="text" 
                                        placeholder="Nome de usuário. Obs: espaços desncessario serão ignorados"
                                        value={name}
                                        onChange={ e => setName(e.target.value) }
                                    />
                                </div>
                                <div className="info-form">
                                    <label>E-mail</label>
                                    <input 
                                        className="naruto-form-input" 
                                        type="email" 
                                        placeholder="Digite um e-mail válido. Obs: espaços desncessario serão ignorados"
                                        value={email}
                                        onChange={ e => setEmail(e.target.value) }
                                    />
                                </div>
                                <div className="info-form">
                                    <label>Senha</label>
                                    <input 
                                        className="naruto-form-input input2" 
                                        type="password" 
                                        placeholder="Criar senha. Obs: espaços desncessario serão ignorados"
                                        value={password}
                                        onChange={ e => setPassword(e.target.value) }
                                    />
                                </div>
                                <div className="container-create-account">
                                    <FiArrowLeft color="#DF423A" size="20"/>
                                    <Link className="create-account" to="/">Voltar para o início</Link>
                                </div>
                                
                            </form>
                        </div>
                        <button className="botao-entrar" onClick={handleCreate}>CONTINUAR</button>
                    </div>
                </section>
                <img className="banner-naruto" src={ banner } alt=""/>
            </main>
        </div>
    )
}