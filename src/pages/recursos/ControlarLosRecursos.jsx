import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const ControlarLosRecursos = () => {
  return (
    <>
       <>
            <h1 className='titulo_blog'>Controlar los recursos</h1>
            <div className="contenedor_blog">

                <div className="contenedor_informacion_2">
                 
                    <p className="titulo">Entradas</p>

                    <p className="subtitulo">Plan de direccion de proyecto</p>
                    <p className="parrafo"> El Plan de Dirección de Proyectos es un componente clave del conjunto de documentos que conforman el plan del proyecto. Este plan es parte del proceso de desarrollo del plan del proyecto según lo define el Project Management Institute (PMI) en su marco de referencia PMBOK </p>
                    <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />
                    <p className="subtitulo">Plan de gestión de recursos</p>
                    <ContenedorDoc doc='Salida - Plan para la Gestion de los recursos.pdf' />
                    <p className="subtitulo">Asignación de recursos</p>
                    <ContenedorImg img={'asignacion de recursos 1.png'} size='90'/>
                    <ContenedorImg img={'asignacion de recursos 2.png'} size='90'/>
                    <ContenedorImg img={'asignacion de recursos 3.png'} size='90'/>
                    <p className="subtitulo">Cronograma del proyecto</p>
                    <ContenedorDoc doc='cronograma completo.pdf' />
                    <p className="subtitulo">Factores ambientales y activos</p>
                    <ContenedorDoc doc='FACTORES AMBIENTALES.pdf' />
                   

                    <p className="titulo">Herramientas</p>
                    <p className="subtitulo">Habilidades Interpersonales y de Equipo.pdf</p>
                    <ContenedorDoc doc='Habilidades Interpersonales y de Equipo.pdf' />
                   
                    <p className="titulo">Salida</p>
                    <p className="subtitulo">Actualizaciones al plan para la dirección de proyectos</p>
            <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />
            <p className="subtitulo">Información del desempeño del trabajo</p>
            <ContenedorDoc doc='INFORMACION DEL DESEMPEÑO DEL TRABAJO.pdf' />
               

                </div>
            </div>


        </>
    </>
  )
}
