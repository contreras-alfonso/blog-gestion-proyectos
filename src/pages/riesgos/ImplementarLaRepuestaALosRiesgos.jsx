import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const ImplementarLaRepuestaALosRiesgos = () => {
    return (
        <>
            <h1 className='titulo_blog'>Implementar la Respuesta a los Riesgos</h1>
            <div className="contenedor_blog">

                <div className="contenedor_informacion_2">
                    <p className="titulo">Entradas</p>
                    <p className="subtitulo">Plan de direccion de proyecto</p>
                    <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />
                    <p className="subtitulo">Documentos del proyecto</p>
                    <ContenedorDoc doc='Salida - Plan para la Gestión de los Riesgos.pdf' />
                    <p className="subtitulo">Factores Ambientales y Activos</p>
                    <ContenedorDoc doc='FACTORES AMBIENTALES.pdf' />
                    <p className="titulo">Herramientas</p>
                    <p className="subtitulo">Habilidades Interpersonales y de Equipo</p>
                    <ContenedorDoc doc='Habilidades Interpersonales y de Equipo.pdf' />
                    <p className="subtitulo"> Registro de riesgos</p>
                    <ContenedorDoc doc='Salida - Registro de riesgos.pdf' />

                    <p className="titulo">Salidas</p>
                    <p className="subtitulo">Actualización del plan de dirección de proyecto</p>
          <ContenedorDoc doc='2plan para la dirección de proyectos.pdf' />

                </div>
            </div>


        </>
    )
}
