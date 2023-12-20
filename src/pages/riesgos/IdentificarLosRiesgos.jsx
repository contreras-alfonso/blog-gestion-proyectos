import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const IdentificarLosRiesgos = () => {
    return (
        <>
            <h1 className='titulo_blog'>Identificar Los Riesgos</h1>
            <div className="contenedor_blog">

                <div className="contenedor_informacion_2">
                    <p className="titulo">Entradas</p>
                    <p className="subtitulo">Plan de direccion de proyecto</p>
                    <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />
                   
                    {/* <p className="subtitulo">Documentación de las adquisiciones</p>
                    <ContenedorDoc doc='plan para la dirección de proyectos.pdf' /> */}

                    <p className="subtitulo">Factores Ambientales y Activos</p>
                    <ContenedorDoc doc='FACTORES AMBIENTALES.pdf' />
                    <p className="titulo">Herramientas</p>
                    <p className="subtitulo">Analisis FODA Recopilacion y analisis de datos</p>
                    <ContenedorDoc doc='Herramienta - Analisis FODA Recopilacion y analisis.pdf' />
                   
                    <p className="subtitulo">Listas rapidas</p>
                    <ContenedorDoc doc='Herramienta - Lista rapida.pdf' />
                   
                    {/* <p className="subtitulo">Reuniones</p> */}
                    <p className="titulo">Salidas</p>
                    <p className="subtitulo">Registro de riesgos</p>
                    <ContenedorDoc doc='Salida - Registro de riesgos.pdf' />
                  
                    <p className="subtitulo">Informe de riesgos</p>
                    <ContenedorDoc doc='Salida - Informe de riesgos.pdf' />

                </div>
            </div>


        </>
    )
}
