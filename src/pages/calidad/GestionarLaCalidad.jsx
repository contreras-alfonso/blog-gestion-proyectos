import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const GestionarLaCalidad = () => {
    return (
        <>
            <h1 className='titulo_blog'>Gestionar la Calidad</h1>
            <div className="contenedor_blog">

                <div className="contenedor_informacion_2">

                    <p className="titulo">Entradas</p>

                    <p className="subtitulo">Plan de direccion de proyectos</p>
                    <p className="parrafo"> El Plan de Dirección de Proyectos es un componente clave del conjunto de documentos que conforman el plan del proyecto. Este plan es parte del proceso de desarrollo del plan del proyecto según lo define el Project Management Institute (PMI) en su marco de referencia PMBOK </p>
                    <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />
                    <p className="subtitulo">Factores ambientales y activos</p>
                    <ContenedorDoc doc='FACTORES AMBIENTALES.pdf' />



                    <p className="titulo">Herramienta</p>
                    <p className="subtitulo">Toma de decisiones</p>
                    <ContenedorDoc doc='Analisis de desiciones con multiples criterios.pdf' />

                    <p className="titulo">Salida</p>
                    <p className="subtitulo">Informes de Calidad</p>
                    <p className="parrafo">
                        Los informes de calidad son documentos que proporcionan información detallada sobre la calidad de un producto, servicio, proceso o sistema. El propósito principal de un informe de calidad es evaluar y comunicar el grado de cumplimiento de los estándares, especificaciones o criterios predefinidos.</p>
                    <ContenedorDoc doc='INFORME DE CALIDAD PARA LA AUTOMATIZACIÓN DEL RIEGO EN EL VIVERO.pdf' />
                </div>
            </div>


        </>
    )
}
