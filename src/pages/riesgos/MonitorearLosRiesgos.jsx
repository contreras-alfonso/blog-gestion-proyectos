import React from 'react'

export const MonitorearLosRiesgos = () => {
  return (
    <>
      <h1 className='titulo_blog'>Monitorear Los Riesgos</h1>
      <div className="contenedor_blog">

        <div className="contenedor_informacion_2">
          <p className="titulo">Entradas</p>
          <p className="subtitulo">Plan de direccion de proyecto</p>
          <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />
          <p className="subtitulo">Documentos del proyecto</p>
          <ContenedorDoc doc='Salida - Registro de riesgos.pdf' />
          <p className="titulo">Herramientas</p>
          <p className="titulo">Salidas</p>


        </div>
      </div>


    </>
  )
}
