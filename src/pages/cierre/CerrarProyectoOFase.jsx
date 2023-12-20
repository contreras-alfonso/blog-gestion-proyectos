import React from 'react'

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
        <p className="titulo">Salidas</p>


      </div>
    </div>


  </>
  )
}
