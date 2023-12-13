import React from 'react'
import { ContenedorImg } from '../../components/ContenedorImg'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const EstimarLosRecursosDeLasActividades = () => {
  return (
    <>
       <>
            <h1 className='titulo_blog'>Estimar los recursos de las actividades</h1>
            <div className="contenedor_blog">

                <div className="contenedor_informacion_2">
                 
                    <p className="titulo">Entradas</p>

                    <p className="subtitulo">Plan de direccion de proyecto</p>
                    <p className="parrafo"> El Plan de Dirección de Proyectos es un componente clave del conjunto de documentos que conforman el plan del proyecto. Este plan es parte del proceso de desarrollo del plan del proyecto según lo define el Project Management Institute (PMI) en su marco de referencia PMBOK </p>
                    <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />
                    <p className="subtitulo">Factores ambientales y activos</p>
                    <ContenedorDoc doc='FACTORES AMBIENTALES.pdf' />
                   

                    <p className="titulo">Herramientas</p>
                    <p className="subtitulo">Estimación ascendente</p>
                    <ContenedorImg img={'Herramienta - Estimación ascendente.jpg'} size='100'/>
                 
                    <p className="titulo">Salida</p>
                    <p className="subtitulo">Estructura desglose de recursos</p>
                    <ContenedorImg img={'Salida - ESTRUCTURA DESGLOSE RECURSOS.jpg'} size='100'/>

                </div>
            </div>


        </>
    </>
  )
}
