import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const PlanificarInvolucramientoInteresados = () => {
  return (
    <>
    <h1 className='titulo_blog'>Planificar involucramiento de interesados</h1>
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
            <ContenedorDoc doc='salida - interesados cubo.pdf'/>

            <p className="titulo">Salidas</p>
            <p className="subtitulo">Plan de involucramiento de los interesados</p>
            <ContenedorDoc doc='PLAN DE GESTION DE INTERESADOS DEL PROEYCTO.pdf'/>

        </div>

    </div>
</>
  )
}
