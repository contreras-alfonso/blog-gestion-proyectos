import React from 'react'
import { ContenedorImg } from '../../components/ContenedorImg'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const RealizarElAnalisisCuantitativoDeRiesgos = () => {
  return (
    <>
      <h1 className='titulo_blog'>Realizar el analisis cuantitativo de los Riesgos</h1>
      <div className="contenedor_blog">

        <div className="contenedor_informacion_2">
          <p className="titulo">Entradas</p>
          <p className="subtitulo">Plan de direccion de proyecto</p>
          <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />
          <p className="subtitulo">Documentos del proyecto</p>
          <ContenedorDoc doc='Salida - Registro de riesgos.pdf' />
          <p className="subtitulo">Factores Ambientales y Activos</p>
          <ContenedorDoc doc='FACTORES AMBIENTALES.pdf' />
          <p className="titulo">Herramientas</p>
          <p className="subtitulo">Habilidades Interpersonales y de Equipo</p>
          <ContenedorDoc doc='Habilidades Interpersonales y de Equipo.pdf' />

          <p className="subtitulo">Análisis de datos - Análisis de sensibilidad</p>
          <ContenedorImg img={'analisis_de_sensibilidad.png'} />
          <p className="titulo">Salidas</p>
          <p className="subtitulo">Actualizaciones a los documentos del proyecto</p>
          <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />

        </div>
      </div>


    </>
  )
}
