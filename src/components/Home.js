import React from 'react';
import { NavLink } from "react-router-dom";
import Image from '../assets/group.png';



const LandingHome = () => {
  return (
    <div>

        <div className='landing-container'>
            <div className="info-entrada-container"> 
                <figure className='image-container'>
                     <img className='notes' src={Image} alt="logo" />
                 </figure>
                
                <h1 className="banner-title">DREAMS NOTE</h1>
                <p className="info-entrada__paragraph"> Concéntrate, organízate y mantén la calma con DreamsNote.  <br/> 
                La mejor aplicación de lista de tareas y <br/> administrador de tareas número 1 del mundo.</p>

                <div className="button-container">
                     <NavLink to="/register" className="button1">
                        Registrate Ahora!
                     </NavLink>
                 </div>
            </div>

        </div>
       
    </div>
  )
}

export default LandingHome;