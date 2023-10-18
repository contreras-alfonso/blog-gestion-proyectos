import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const IdentificarInteresados = () => {
  return (
    <>
        <h1 className='titulo_blog'>1. Identificar Interesados</h1>
        <div className="contenedor_blog">
            <div className="contenedor_informacion_2">
            <p className="titulo">Entradas</p>
            <p className="subtitulo">Acta de constitucion</p>
            <ContenedorDoc doc='Acta de constitucion del proyecto.pdf'/>
            <p className="subtitulo">Plan de direccion de proyecto</p>
            <ContenedorDoc doc='plan para la dirección de proyectos.pdf'/>
            <p className="subtitulo">Factores ambientales y activos</p>
            <ContenedorDoc doc='FACTORES AMBIENTALES.pdf'/>
            <p className="titulo">Herramientas</p>
            <p className="subtitulo">Análisis de datos</p>
            <p className="titulo">Salidas</p>
            <p className="subtitulo">Registro de interesados</p>
            </div>

        </div>
    </>
  )
}
