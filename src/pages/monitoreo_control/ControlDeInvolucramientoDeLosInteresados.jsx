import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const ControlDeInvolucramientoDeLosInteresados = () => {
  return (
    <>
    <h1 className='titulo_blog'>1. Control de involucramiento de los interesados</h1>
    <div className="contenedor_blog">
        <div className="contenedor_informacion_2">
            <p className="titulo">Entradas</p>
            <p className="subtitulo">Plan de dirección del proyecto</p>
            <ContenedorDoc doc='plan para la dirección de proyectos.pdf'/>
            <p className="subtitulo">Factores ambientales</p>
            <ContenedorDoc doc='FACTORES AMBIENTALES.pdf'/>
            <p className="subtitulo">Plan de involucramiento de los interesados</p>
            <ContenedorDoc doc='PLAN DE GESTION DE INTERESADOS DEL PROEYCTO.pdf'/>
            <p className="titulo">Herramientas</p>
            <p className="subtitulo">Matriz de evaluación de los interesados</p>
            <p className="subtitulo">Análisis causa raiz</p>
            <p className="subtitulo">Reunión</p>
            {/* <p className="titulo">Salidas</p> */}
            
        </div>

    </div>
</>
  )
}
