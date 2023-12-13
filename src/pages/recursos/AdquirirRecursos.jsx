import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const AdquirirRecursos = () => {
  return (
    <>
      <>
        <h1 className='titulo_blog'>Adquirir Recursos</h1>
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
            <p className="subtitulo">Toma de decisiones</p>
            <ContenedorDoc doc='TOMA DE DESICIONES.pdf' />

            <p className="titulo">Salida</p>
            <p className="subtitulo">Asignación de recursos</p>
                    <ContenedorImg img={'asignacion de recursos 1.png'} size='90'/>
                    <ContenedorImg img={'asignacion de recursos 2.png'} size='90'/>
                    <ContenedorImg img={'asignacion de recursos 3.png'} size='90'/>

          </div>
        </div>


      </>
    </>
  )
}
