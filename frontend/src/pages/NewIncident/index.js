import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import Logo from '../../assets/logo.svg'

export default function Newincident() {
    return (
        <div className="container-new-incident">
            <div className="content">
                <section>
                    <img src={Logo} alt="Be The Hero" />
                    
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile ">
                        <FiArrowLeft size={16} color='#E02041' />
                        Voltar para home
                    </Link>
                </section>
                <form>
                    <input placeholder="Titulo do caso"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Valor em reais"/>
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}