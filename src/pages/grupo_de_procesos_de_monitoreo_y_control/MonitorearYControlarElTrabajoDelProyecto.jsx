import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const MonitorearYControlarElTrabajoDelProyecto = () => {
  return (
    <>
    <h1 className='titulo_blog'>Monitorear y controlar el trabajo del proyecto</h1>
    <div className="contenedor_blog">
        <div className="contenedor_informacion_2">
            <p className="titulo">Entradas</p>
            <p className="subtitulo">Plan para la dirección de proyectos</p>
            <ContenedorDoc doc='plan para la dirección de proyectos.pdf'/>
            <p className="subtitulo">Factores ambientales</p>
            <ContenedorDoc doc='FACTORES AMBIENTALES.pdf'/>
            <p className="titulo">Herramientas</p>
            <p className="subtitulo">Análisis de variación</p>
            <ContenedorDoc doc={'Analisis de variación.pdf'}/>
            <p className="subtitulo">Análisis de valor ganado</p>
            <ContenedorDoc doc={'Analisis de valor ganado.pdf'}/>
            <p className="subtitulo">Reuniones</p>
                {/* TODO: falta el parrafo */}
            <p className="parrafo"></p>
            <p className="parrafo">
            <i class="fa-solid fa-check check-verde"></i> Las reuniones de monitoreo de abordaron los siguientes aspectos:<br/><br/>- Revisión de cronograma y objetivos: Discusión sobre el progreso de las tareas y actividades en relación al cronograma y objetivos establecidos.<br/>- Estado de las tareas individuales y del equipo: Evaluación del estado actual de las tareas asignadas a los miembros del equipo y discusión sobre cualquier problema o retraso identificado.<br/>- Ajustes y reprogramación: Consideración de posibles ajustes en la programación de tareas o reprogramación de actividades ante cambios imprevistos y garantizar la entrega del proyecto.<br/>- Comunicación y coordinación: Discusión sobre la efectividad de la comunicación entre los miembros del equipo y la coordinación de actividades.</p>
            {/* TODO: imagen  */}
            <ContenedorImg img={'herramientas_reunion.png'}/>


            <p className="titulo">Salidas</p>
            <p className="subtitulo">Informe de desempeño de Trabajo del Proyecto</p>
            <ContenedorDoc doc={'Informe de desempeño de Trabajo del Proyecto.pdf'}/>
            <p className="subtitulo">Registro de lecciones aprendidas</p>
            <ContenedorDoc doc={'Registro de Lecciones Aprendidas.pdf'}/>

           

        </div>

    </div>
</>
  )
}
