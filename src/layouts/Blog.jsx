import React, { useState } from 'react'
import '../styles/seccion.css'
import { Outlet } from 'react-router-dom'
import Navegacion from '../components/Navegacion'
import { Link } from 'react-router-dom'

const Blog = () => {


  return (
    <>
        <header className="header">
            <div className="header_enlaces_blog">
                <Link to="/">
                <i className="fa-duotone fa-house header_enlace" />
                </Link>
                <a href="#" className="barra_menu">
                <i className="fa-solid fa-bars icono_menu" />
                </a>
            </div>
        </header>

        <Navegacion/>

        <Outlet/>

        <footer className="footer_blog">
            <p>Gestión de proyectos de TI</p>
        </footer>
    </>
  )
}

export default Blog