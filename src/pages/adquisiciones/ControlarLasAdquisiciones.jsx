import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const ControlarLasAdquisiciones = () => {
  return (
    <>
      <h1 className='titulo_blog'>Controlar las Adquisiciones</h1>
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
    <p className="subtitulo">Habilidades Interpersonales y de Equipo</p>
          <ContenedorDoc doc='Habilidades Interpersonales y de Equipo.pdf' />
          <p className="subtitulo">Análisis de valor ganado</p>
          <ContenedorDoc doc='Analisis de valor ganado.pdf' />
      
          <p className="titulo">Salidas</p>
          <p className="subtitulo">Análisis de valor ganado</p>
          <ContenedorDoc doc='INFORMACION DEL DESEMPEÑO DEL TRABAJO.pdf' />
          <p className="subtitulo">Actualización del plan de dirección de proyecto
</p>
          <ContenedorDoc doc='2plan para la dirección de proyectos.pdf' />
          <p className="subtitulo">Actualización de factores y activos de la organización</p>
          <ContenedorDoc doc='FACTORES AMBIENTALES.pdf' />
        </div>
      </div>


    </>
  )
}
