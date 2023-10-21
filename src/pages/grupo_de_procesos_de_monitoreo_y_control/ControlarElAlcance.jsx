import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const ControlarElAlcance = () => {
  return (
    <>
    <h1 className='titulo_blog'>Controlar el alcance</h1>
    <div className="contenedor_blog">
        <div className="contenedor_informacion_2">
            <p className="titulo">Entradas</p>
            <p className="subtitulo">Plan para la gestión del alcance</p>
            <ContenedorDoc doc='plan-de-gestion-del-alcance.pdf'/>

            <p className="subtitulo">Plan para la gestión de requisitos</p>
            <ContenedorDoc doc='Plan de Gestión de Requisitos.pdf'/>
            

            <p className="subtitulo">Línea base del alcance</p>
            <ContenedorDoc doc='Línea Base del Alcance.pdf'/>
          

            <p className="subtitulo">Matriz de trazabilidad de requisitos</p>
            <ContenedorDoc doc='Copia de Entrada - Matriz de trazabilidad de requisitos.pdf'/>

            <p className="subtitulo">Factores ambientales y activos</p>
            <ContenedorDoc doc='FACTORES AMBIENTALES.pdf'/>
          
      

            <p className="titulo">Herramientas</p>
            <p className="subtitulo">Análisis de tendencias</p>
            <ContenedorDoc doc='ANALISIS DE TENDENCIAS.pdf'/>

            <p className="titulo">Salidas</p>

            <p className="subtitulo">Informe de desempeño de Trabajo del Proyecto</p>
            <ContenedorDoc doc='Informe de desempeño de Trabajo del Proyecto.pdf'/>
         

        </div>

    </div>
</>
  )
}
