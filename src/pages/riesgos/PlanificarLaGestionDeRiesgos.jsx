import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const PlanificarLaGestionDeRiesgos = () => {
  return (
    <>
    <h1 className='titulo_blog'>Planificar la Gestion de Riesgos</h1>
    <div className="contenedor_blog">

        <div className="contenedor_informacion_2">
            <p className="titulo">Entradas</p>
            <p className="subtitulo">Acta de consitución del proyecto</p>
            <ContenedorDoc doc='Acta de constitucion del proyecto.pdf' />
            <p className="subtitulo">Plan de direccion de proyecto</p>
            <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />
           
           
            <p className="subtitulo">Factores Ambientales y Activos</p>
            <ContenedorDoc doc='FACTORES AMBIENTALES.pdf' />
            <p className="titulo">Herramientas</p>
            <p className="subtitulo">Análisis de datos</p>
            <ContenedorImg img={'Herramienta - analisis de datos1.png'} size='60'/>
            <ContenedorImg img={'Herramienta - analisis de datos2.png'} size='60'/>

            <p className="titulo">Salidas</p>
            <p className="subtitulo">Plan para la Gestión de los Riesgos</p>
            <ContenedorDoc doc='Salida - Plan para la Gestión de los Riesgos.pdf' />
        </div>
    </div>


</>
  )
}
