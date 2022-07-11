import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';
import Image from '../assets/image2.png';
import Image2 from '../assets/image3.png';

const RegisterNote = () => {
    return (
      <div>
        <nav>
      <img className='portada' src={Image} alt="logo" />
    </nav>

    <div className='form-container-all'>
    
    <div className='notes-image-container'>
        <img className='notes' src={Logo} alt="logo" />
    </div>

    <div className="form-message">
        <h1 className="form-message-title">Inicia sesión </h1>
        <h3 className="form-message-subtitle">
          Ingresa tu dirección de correo eléctronico y contraseña para acceder a
          tu cuenta
        </h3>

    <form  className='form-container'> 
      <input
      className="form-input"
        type="text"
        placeholder="Ingresa tu nombre"
        name="name"
        id="name"
      />
      <input 
      className="form-input"
        type='email' 
        placeholder='ingresa tu correo' 
        name='email' 
      />

      <input 
      className="form-input"
        type='password' 
        placeholder='ingresa tu contraseña' 
        name='password' 
        id='password' 
      />

      <input
      className="form-input"
        type="password"
        placeholder="Confirma tu contraseña"
        name="passwordconfirm"
        id="passwordconfirm"
      />

      <div className="form__buttons">
            <button className="button-option">Registrate ahora</button>
            <p>o</p>
            <Link to="/login" className="other-option"> Iniciar sesión</Link>
      </div>
    </form>
    </div>
    </div>
  
    <footer>
        <img className='portada1' src={Image2} alt="logo" />
    </footer>
      </div>
    )
  }
  
  export default RegisterNote;