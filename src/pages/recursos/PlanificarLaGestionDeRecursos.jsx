import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const PlanificarLaGestionDeRecursos = () => {
  return (
    <>
       <>
            <h1 className='titulo_blog'>Planificar la gestión de los recursos</h1>
            <div className="contenedor_blog">

                <div className="contenedor_informacion_2">
                 
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
                    <p className="parrafo"> El Plan de Dirección de Proyectos es un componente clave del conjunto de documentos que conforman el plan del proyecto. Este plan es parte del proceso de desarrollo del plan del proyecto según lo define el Project Management Institute (PMI) en su marco de referencia PMBOK </p>
                    <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />
                    <p className="subtitulo">Documentos del proyecto</p>
                    <ContenedorDoc doc='Salida - Documentacion de Requisitos.pdf' />
                    <p className="subtitulo">Factores ambientales y activos</p>
                    <ContenedorDoc doc='FACTORES AMBIENTALES.pdf' />
                   

                    <p className="titulo">Herramientas</p>
                    <p className="subtitulo">Matríz de recursos</p>
                    <ContenedorDoc doc='Herramienta - Representacion de datos - Matriz de recursos.pdf' />
                    <p className="subtitulo">Matríz de responsabilidades</p>
                    <ContenedorDoc doc='Herramienta - Representacion de datos - Matriz de responsabilidades.pdf' />
                  
                   
                    <p className="titulo">Salida</p>
                    <p className="subtitulo">Plan para la Gestión de los recursos</p>
                    <ContenedorDoc doc='Salida - Plan para la Gestion de los recursos.pdf' />
                    <p className="subtitulo">Acta de Constitución del Equipo</p>
                    <ContenedorDoc doc='Salida - Acta de Constitución del Equipo.pdf' />
            

                </div>
            </div>


        </>
    
    </>
  )
}
