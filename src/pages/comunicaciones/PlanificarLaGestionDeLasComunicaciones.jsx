import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const PlanificarLaGestionDeLasComunicaciones = () => {
  return (
    <>
    <h1 className='titulo_blog'>Planificar la gestión de las comunicaciones</h1>
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

        <p className="subtitulo">Analisis de requisitos de comunicación</p>
        <ContenedorDoc doc='Herramientas - Análisis de Requisitos de Comunicación.pdf' />
        <p className="subtitulo">Tecnologia de la comunicación</p>
        <ContenedorImg img={'Herramientas - Tecnologias de comunicacion.png'} size='60'/>
        <p className="titulo">Salidas</p>
        <p className="subtitulo">Plan de gestion de las comunicaciones</p>

        <ContenedorDoc doc='Salida - Plan para la Gestión de las Comunicaciones.pdf' />


      </div>
    </div>


  </>
  )
}
