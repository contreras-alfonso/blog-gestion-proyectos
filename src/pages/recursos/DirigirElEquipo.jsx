import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const DirigirElEquipo = () => {
  return (
    <>
      <>
        <h1 className='titulo_blog'>Dirigir el equipo</h1>
        <div className="contenedor_blog">

          <div className="contenedor_informacion_2">

            <p className="titulo">Entradas</p>
            <p className="subtitulo">Plan de direccion de proyecto</p>
            <p className="parrafo"> El Plan de Dirección de Proyectos es un componente clave del conjunto de documentos que conforman el plan del proyecto. Este plan es parte del proceso de desarrollo del plan del proyecto según lo define el Project Management Institute (PMI) en su marco de referencia PMBOK </p>
            <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />
            <p className="subtitulo">Plan para la Gestión de los recursos</p>
            <ContenedorDoc doc='Salida - Plan para la Gestion de los recursos.pdf' />
            <p className="subtitulo">Documentos del proyecto</p>
            <ContenedorDoc doc='Acta de constitucion del proyecto.pdf' />
            <p className="subtitulo">Informe de desempeño del trabajo</p>
            <ContenedorDoc doc='INFORMACION DEL DESEMPEÑO DEL TRABAJO.pdf' />
            <p className="subtitulo">Factores ambientales y activos</p>
            <ContenedorDoc doc='FACTORES AMBIENTALES.pdf' />




            <p className="titulo">Herramientas</p>
            <p className="subtitulo">Habilidades Interpersonales y de Equipo</p>
       
            <ContenedorDoc doc='Habilidades Interpersonales y de Equipo.pdf' />
            <p className="titulo">Salidas</p>
            <p className="subtitulo">Actualizaciones al plan para la dirección de proyectos</p>
            <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />


            <p className="subtitulo">Actualización a los factores ambientales</p>
            <ContenedorDoc doc='FACTORES AMBIENTALES.pdf' />

          </div>
        </div>


      </>

    </>
  )
}
