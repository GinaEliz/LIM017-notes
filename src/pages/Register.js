import { useState } from "react"
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { AlertError } from "../components/AlertError";
import Logo from '../assets/logo.png';
import Image from '../assets/image2.png';
import Image2 from '../assets/image3.png';
import Swal from 'sweetalert2';
import '../styles/FormSesion.css';

 export function Register() {

  const [user, setUser] = useState({
    email: '',
    password:'',
  });
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState ();

  const handleChange = ({target: {name, value}}) =>  
    setUser({...user, [name]: value})

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      console.log(user);
      if (user.password !== user.passwordconfirm) {
        setError("Las contraseñas son distintas");
      } else {
        try {
          await signup(user.email, user.password);
          localStorage.setItem("nombre", user.name);
          await Swal.fire({
            position: "center",
            icon: "success",
            title: "Registro Exitoso",
            showConfirmButton: true,
            timer: 1500,
          });
          navigate("/login");
        } catch (error) {
          setError(error.mesagge);
          if (error.code === "auth/internal-error") {
            setError("El correo ingresado es invalido");
          } else if (error.code === "auth/invalid-email") {
            setError("El correo ingresado es invalido");
          } else if (error.code === "auth/weak-password") {
            setError("La contraseña debe contener más de 6 caracteres");
          } else if (error.code === "auth/email-already-in-use") {
            setError("Este correo ya está registrado");
          } else if (user.password !== user.passwordconfirm) {
            setError("Las contraseñas son distintas");
          }
        }
      }
    };

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
      {error && <AlertError mesagge={error} />}

    <form onSubmit={handleSubmit} className='form-container'> 
      <input
      className="form-input"
        type="text"
        placeholder="Ingresa tu nombre"
        name="name"
        id="name"
        onChange={handleChange}
      />
      <input 
      className="form-input"
        type='email' 
        placeholder='ingresa tu correo' 
        name='email' 
        onChange={handleChange} 
      />

      <input 
      className="form-input"
        type='password' 
        placeholder='ingresa tu contraseña' 
        name='password' 
        id='password' 
        onChange={handleChange}
      />

      <input
      className="form-input"
        type="password"
        placeholder="Confirma tu contraseña"
        name="passwordconfirm"
        id="passwordconfirm"
        onChange={handleChange}
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
 
export default Register