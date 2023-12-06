import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const PlanificarLaGestionDeLaCalidad = () => {
    return (
        <>
            <h1 className='titulo_blog'>Planificar la Gestión de la Calidad</h1>
            <div className="contenedor_blog">

                <div className="contenedor_informacion_2">
                    {/* <img class="contenedor_informacion_img" src="pexels-cong-h-1404819.jpg" alt=""> */}
                    <p className="titulo">Entradas</p>
                    <p className="subtitulo">Acta de constitución</p>
                    <p className="parrafo">
                        Desarrollar el Plan para la Dirección del Proyecto es el proceso de
                        definir, preparar y coordinar todos los componentes del plan y
                        consolidarlos en un plan integral para la dirección del proyecto. El
                        beneficio clave de este proceso es la producción de un documento
                        comprehensivo que define la base para todo el trabajo del proyecto y el
                        modo en que se realizará el trabajo. Este proceso se lleva a cabo una
                        única vez o en puntos predefinidos del proyecto.
                    </p>
                    <ContenedorDoc doc='Acta de constitucion del proyecto.pdf' />
                    <p className="subtitulo">Plan de direccion de proyecto</p>
                    <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />
                    <p className="subtitulo">Factores ambientales y activos</p>
                    <ContenedorDoc doc='FACTORES AMBIENTALES.pdf' />
                    <p className="subtitulo">Norma ISO 9001</p>
                    <ContenedorDoc doc='NORMA_ISO_9001-2015_Req.PDF' />

                    <p className="titulo">Herramienta</p>
                    <p className="subtitulo">Toma de decisiones</p>
                    <p className="parrafo">Una técnica para la toma de decisiones que puede utilizarse para este proceso incluye, entre otros, el análisis de decisiones con múltiples criterios. Las herramientas de análisis de decisiones con múltiples criterios se pueden utilizar para identificar los principales incidentes y las alternativas adecuadas a fin de ser priorizados. Los criterios se priorizan y se les asigna
                        un peso antes de aplicarlos a todas las alternativas disponibles, para obtener una puntuación para cada alternativa.</p>
                    <ContenedorDoc doc='Herramienta - Analisis de Decisiones con Múltiples Criterios para Priorizar Métricas de Calidad.pdf' />
                    <p className="titulo">Salida</p>
                    <p className="subtitulo">Plan para la Gestión de la Calidad</p>
                    <p className="parrafo">El Plan de Gestión de la Calidad establece el enfoque y las actividades para garantizar que el
                        proyecto de implementación del sistema de riego automatizado cumpla con los estándares de
                        calidad establecidos.</p>
                    <ContenedorDoc doc='Salida - Plan para la Gestión de la Calidad.pdf' />
                    <p className="subtitulo">Métricas de calidad</p>
                    <p className="parrafo">A continuación, se presenta un cuadro que resume los resultados del análisis de decisiones con múltiples criterios para priorizar las métricas de calidad del proyecto de implementación del sistema de riego automatizado con Arduino e interfaz web para un vivero:</p>
                    <ContenedorDoc doc='Salida - Metricas de calidad.pdf' />
                </div>
            </div>


        </>
    )
}
