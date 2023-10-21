import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const GestionarElConocimientoDelProyecto = () => {
  return (
    <>
    <h1 className='titulo_blog'>Gestionar el conocimiento del proyecto</h1>
    <div className="contenedor_blog">
        <div className="contenedor_informacion_2">
            <p className="titulo">Entradas</p>
            <p className="subtitulo">Plan para la dirección de proyectos</p>
            <ContenedorDoc doc='plan para la dirección de proyectos.pdf'/>
            <p className="subtitulo">Factores ambientales</p>
            <ContenedorDoc doc='FACTORES AMBIENTALES.pdf'/>
            <p className="subtitulo">Registro de interesados</p>
            <ContenedorDoc doc='salida - interesados cubo.pdf'/>
            <p className="subtitulo">Componentes y esquema</p>
            <p className="parrafo"><i class="fa-solid fa-check check-verde"></i> En esta etapa, se han identificado y seleccionado los sensores clave que se integrarán en el sistema. Estos incluyen sensores de humedad del suelo de alta precisión, capaces de medir con exactitud los niveles de humedad en diferentes condiciones ambientales. También se identificaron los microcrontroladores a usar</p>
            <ContenedorDoc doc={'Componentes y esquemas.pdf'}/>

            <p className="titulo">Herramientas</p>

            <p className="subtitulo">Reuniones</p>
                {/* TODO: cambio de imagen */}
            <p className="parrafo"></p>
            <ContenedorImg img={'herramientas_reunion.png'}/>
            <p className="parrafo"><i className="fa-solid fa-circle-info"></i> Algunos de los temas clave que se abordaron durante estas reuniones virtuales:</p>

            <p className="parrafo"><i className="fa-solid fa-check check-verde"></i> Actualización del progreso:<br/>Informes detallados sobre el progreso logrado, incluidos el cronograma y los obstáculos identificados.<br/>Actualización del estado de la implementación del sistema de riego automatizado.</p>

            <p className="parrafo"><i className="fa-solid fa-check check-verde"></i> Identificación de obstáculos y desafíos:<br/>Discusión sobre los desafíos identificados durante el diseño y la integración del hardware.<br/>Estrategias para superar los obstáculos, incluida la asignación de recursos adicionales o la reevaluación de los plazos para asegurar la entrega oportuna del proyecto.</p>

            <p className="parrafo"><i className="fa-solid fa-check check-verde"></i> Coordinación entre los equipos:<br/>Coordinación entre el equipo de desarrollo para garantizar una integración sin problemas entre los componentes del sistema.<br/>Facilitación de la comunicación entre el equipo para asegurar una comprensión clara de los requisitos y criterios de aceptación del proyecto.</p>

            <p className="parrafo"><i className="fa-solid fa-check check-verde"></i> Mejora continua:<br/>Exploración de oportunidades para mejorar los procesos de desarrollo y de integración del sistema de riego automatizado a través de la retroalimentación del equipo y la implementación de cambios recomendados.</p>

            <p className="titulo">Salidas</p>
            <p className="subtitulo">Registro de lecciones aprendidas</p>
            <ContenedorDoc doc={'Registro de Lecciones Aprendidas.pdf'}/>

            

        </div>

    </div>
</>
  )
}
