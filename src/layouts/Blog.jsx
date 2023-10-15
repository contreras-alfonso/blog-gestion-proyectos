import React, { useState } from 'react'
import '../styles/seccion.css'
import { Outlet } from 'react-router-dom'
import Navegacion from '../components/Navegacion'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'

const Blog = () => {


  return (
    <>
        <Header/>

        <Outlet/>

        {/* <footer className="footer_blog">
            <p>Gestión de proyectos de TI</p>
        </footer> */}
    </>
  )
}

export default Blog