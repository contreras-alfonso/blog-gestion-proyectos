import React from 'react'
import { ContenedorImg } from '../../components/ContenedorImg'
import { ContenedorDoc } from '../../components/ContenedorDoc'

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
          <p className="subtitulo">Análisis de datos</p>
          <ContenedorImg img={'planificar_la_gestion_de_riesgos_3.jpeg'}/>
          <p className="titulo">Salidas</p>
          <p className="subtitulo">Información de desempeño de trabajo</p>
          <ContenedorDoc doc='Información de desempeño de trabajo.pdf' />
          <p className="subtitulo">Actualización del plan de dirección de proyecto</p>
          <ContenedorDoc doc='2plan para la dirección de proyectos.pdf' />

        </div>
      </div>


    </>
  )
}
