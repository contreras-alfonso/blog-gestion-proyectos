import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const DesarrollarElEquipo = () => {
  return (
    <>
       <>
            <h1 className='titulo_blog'>Desarrollar el equipo</h1>
            <div className="contenedor_blog">

                <div className="contenedor_informacion_2">
                 
                    <p className="titulo">Entradas</p>

                    <p className="subtitulo">Plan de direccion de proyecto</p>
                    <p className="parrafo"> El Plan de Dirección de Proyectos es un componente clave del conjunto de documentos que conforman el plan del proyecto. Este plan es parte del proceso de desarrollo del plan del proyecto según lo define el Project Management Institute (PMI) en su marco de referencia PMBOK </p>
                    <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />
                    <p className="subtitulo">Documentos del proyecto</p>
                    <ContenedorDoc doc='Salida - Documentacion de Requisitos.pdf' />
                    <p className="subtitulo">Factores ambientales y activos</p>
                    <ContenedorDoc doc='FACTORES AMBIENTALES.pdf' />

                    <p className="titulo">Herramientas</p>
                    <p className="subtitulo">Habilidades Interpersonales y de Equipo</p>
                    <ContenedorDoc doc='Habilidades Interpersonales y de Equipo.pdf' />
                    <p className="titulo">Salida</p>
                    <p className="subtitulo">Control de calidad</p>
                    <ContenedorDoc doc='Control de Calidad.pdf' />

                </div>
            </div>


        </>
    </>
  )
}
