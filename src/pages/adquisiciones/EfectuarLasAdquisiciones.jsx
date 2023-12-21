import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const EfectuarLasAdquisiciones = () => {
  return (
    <>
      <h1 className='titulo_blog'>Efectuar las Adquisiciones</h1>
      <div className="contenedor_blog">

        <div className="contenedor_informacion_2">
          <p className="titulo">Entradas</p>
          <p className="subtitulo">Plan de direccion de proyecto</p>
          <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />
          <p className="subtitulo">Documentos del proyecto</p>
          <ContenedorDoc doc='Salida - Plan para la Gestión de las Adquisiciones.pdf' />
          <p className="subtitulo">Factores Ambientales y Activos</p>

          <ContenedorDoc doc='FACTORES AMBIENTALES.pdf' />
          <p className="titulo">Herramientas</p>
          <p className="subtitulo">Análisis de datos - Evaluación de propuestas</p>
          <ContenedorDoc doc='ANALISIS DE DATOS - EVALUACION DE PROPUESTAS.xlsx - Hoja1.pdf' />
          <p className="subtitulo">Habilidades Interpersonales y de Equipo</p>
          <ContenedorDoc doc='Habilidades Interpersonales y de Equipo.pdf' />

          <p className="titulo">Salidas</p>
          <p className="subtitulo">Vendedor Seleccionado</p>
          <ContenedorImg img={'vendedor_seleccionado.png'} size='60' />
          <p className="subtitulo">Actualizaciones a los documentos del proyecto</p>
          <ContenedorDoc doc='2plan para la dirección de proyectos.pdf' />
        </div>
      </div>


    </>
  )
}
