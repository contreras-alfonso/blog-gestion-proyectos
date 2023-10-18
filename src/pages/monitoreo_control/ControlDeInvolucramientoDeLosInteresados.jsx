import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

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
            {/* <p className="subtitulo">Matriz de evaluación de los interesados</p>
            <ContenedorDoc doc='salida - interesados cubo.pdf'/> */}
            <p className="subtitulo">Análisis causa raiz</p>
            
            <ContenedorImg img={'analisis causa raiz.jpeg'}/>
            <p className="subtitulo">Reunión</p>
            <ContenedorDoc doc='AGENDA DE LA REUNION.pdf'/>
            <p className="titulo">Salidas</p>
            <p className="subtitulo">Informe de desempeño del proyecto</p>
            <ContenedorDoc doc='Informe de Desempeño del Proyecto.pdf'/>
            
        </div>

    </div>
</>
  )
}
