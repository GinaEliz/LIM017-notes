import { useState } from "react"
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { AlertError } from "../components/AlertError";
import Logo from '../assets/logo.png';
import Image from '../assets/image2.png';
import Image2 from '../assets/image3.png';
import Swal from "sweetalert2";
import '../styles/FormSesion.css';

export function Login() {

  const [user, setUser] = useState({
    email: '',
    password:'',
  });
  const { login, loginWithGoogle, resetPassword } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState ();

  const handleChange = ({target: {name, value}}) => { 
    setUser({...user, [name]: value})
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      if (!user.password || !user.email) {
        setError("Rellene los campos");
      } else {
        try {
          await login(user.email, user.password);
          Swal.fire({
            position: "center",
            imageUrl: "https://i.postimg.cc/0549mYmM/12.png",
            imageHeight: 300,
            imageAlt: "A tall image",
            title: "Wellcome to DreamsNote",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/note');
        } catch (error) {
          setError(error.mesagge);
          if (error.code === "auth/user-not-found") {
            setError("El usuario no existe");
          } else if (error.code === "auth/weak-password") {
            setError("La contraseña debe contener más de 6 caracteres");
          } else if (error.code === "auth/wrong-password") {
            setError("La contraseña ingresa es incorrecta");
          }
        }
      }
    };

   const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      Swal.fire({
        position: "center",
        imageUrl: "https://i.postimg.cc/0549mYmM/12.png",
        imageHeight: 300,
        imageAlt: "A tall image",
        title: "Wellcome to DreamsNote",
        showConfirmButton: false,
        timer: 2500,
      });
      navigate('/note');
    } catch (error) {
      setError(error.message);
    }
  };
   const handleResetPassword = async () => {
    if (!user.email) return setError("Porfavor ingrese su correo");
    try {
      await resetPassword(user.email);
      alert("Se envio un mensaje a su correo");
    } catch (error) {
      setError(error.mesagge);
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
          type='email' 
          name='email' 
          placeholder='ingresa tu correo' 
          onChange={handleChange} 
        />

        <input 
        className="form-input"
          type='password' 
          name='password' 
          id='password' 
          onChange={handleChange} 
          placeholder='ingresa tu contraseña' 
          
         
        />

        <section className="form__buttons">
          <div className="button-register-container">
            <button className="button-option">Iniciar Sesion</button>
            <button className="button-option" onClick={handleGoogleSignin}>
              Iniciar sesion con Google
            </button>
          </div>
          <div className="other_enlaces">
            <Link to="/register" className="button-info-register">
              ¿Eres nuevo por aquí? Registrate ahora
            </Link>
            <a
              href="#!"
              onClick={handleResetPassword}
              className="forgot-passoword-register"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </section>
      </form>
      </div>
      </div>
    
      <footer>
          <img className='portada1' src={Image2} alt="logo" />
      </footer>
    </div>
   )
  }

export default Login;
