import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const PlanificarInvolucramientoInteresados = () => {
  return (
    <>
    <h1 className='titulo_blog'>2. Planificar involucramiento de interesados</h1>
    <div className="contenedor_blog">
        <div className="contenedor_informacion_2">
            <p className="titulo">Entradas</p>

            <p className="subtitulo">Acta de constitucion</p>
            <ContenedorDoc doc='Acta de constitucion del proyecto.pdf'/>
            <p className="subtitulo">Plan de direccion de proyecto</p>
            <ContenedorDoc doc='plan para la dirección de proyectos.pdf'/>
            <p className="subtitulo">Factores ambientales y activos</p>
            <ContenedorDoc doc='FACTORES AMBIENTALES.pdf'/>
            <p className="subtitulo">Documentos del proyecto</p>
            
            <p className="titulo">Herramientas</p>
            <p className="subtitulo">Análisis de datos</p>

            <p className="titulo">Salidas</p>
            <p className="subtitulo">Plan de involucramiento de los interesados</p>

        </div>

    </div>
</>
  )
}
