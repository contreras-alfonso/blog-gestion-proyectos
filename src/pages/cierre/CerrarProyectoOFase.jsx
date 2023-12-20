import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const CerrarProyectoOFase = () => {
  return (
    <>
    <h1 className='titulo_blog'>Cerrar el proyecto o Fase</h1>
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
        <p className="subtitulo">Reuniones</p>
        <p className="parrafo">En la siguiente reunion, se vio la implementación, validaciones y conclusiones finales del proyecto, para estar a corde con lo planteado en un inicio</p>
        <ContenedorImg img={'reuniones_final.jpeg'} ></ContenedorImg>
        <p className="titulo">Salidas</p>
        <p className="subtitulo">Informe de transferencia del proyecto</p>
        <ContenedorDoc doc='INFORME DE TRANSFERENCIA DEL PROYECTO DE AUTOMATIZACIÓN DEL RIEGO EN EL VIVERO.pdf' />
        <p className="subtitulo">Acta de aceptación del proyecto</p>
        <ContenedorDoc doc='SALIDA - ACTA DE ACEPTACION DEL PROYECTO.pdf' />
        <p className="subtitulo">Manual de usuario</p>
        <ContenedorDoc doc='MANUAL DE USUARIO.pdf' />


      </div>
    </div>


  </>
  )
}
