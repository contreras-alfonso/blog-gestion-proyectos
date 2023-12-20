import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navegacion from './Navegacion';

export const Header = () => {

    const [navegacion,setNavegacion] = useState(true);
    const [headerFixed,setHeaderFixed] = useState(false);

    const cambiarState = () => {
        if(scrollY>100){
            setHeaderFixed(true);
            return;
        }
        setHeaderFixed(false)
    }

    window.addEventListener('scroll',cambiarState);

  return (
    <>
        <header className={`header ${headerFixed && 'header_fixed'}`}>
            <i onClick={()=>{setNavegacion(!navegacion)}} className="fa-solid fa-bars header_enlace"></i>
            <div className="header_enlaces_blog">
                <a href="/">
                <i className="fa-duotone fa-house header_enlace" />
                </a>
               
            </div>
            
        </header>

        <Navegacion navegacion={navegacion} setNavegacion={setNavegacion}/>
    </>

  )
}
