import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const IdentificarInteresados = () => {
  return (
    <>
        <h1 className='titulo_blog'>Identificar Interesados</h1>
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
            <p className="subtitulo">Cubo de interesados</p>
            <p className="parrafo">Es una herramienta utilizada en la gestión de proyectos y la toma de decisiones estratégicas para identificar y analizar a los diferentes actores o grupos de interés que pueden afectar o ser afectados por un proyecto, una organización o una iniciativa.</p>
            <ContenedorImg img={'clasificacion_cubo_interesados.png'} />
            <p className="titulo">Salidas</p>
            <p className="subtitulo">Registro de interesados</p>
            <ContenedorDoc doc='salida - interesados cubo.pdf'/>
            </div>

        </div>
    </>
  )
}
