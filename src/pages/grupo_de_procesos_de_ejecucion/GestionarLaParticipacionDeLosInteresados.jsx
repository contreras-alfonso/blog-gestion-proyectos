import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const GestionarLaParticipacionDeLosInteresados = () => {
  return (
    <>
    <h1 className='titulo_blog'>Gestionar la participación de los interesados</h1>
    <div className="contenedor_blog">
        <div className="contenedor_informacion_2">
            <p className="titulo">Entradas</p>
            <p className="subtitulo">Factores ambientales y activos de la organización</p>
            <ContenedorDoc doc='FACTORES AMBIENTALES.pdf'/>
            <p className="subtitulo">Plan para la dirección de proyectos</p>
            <ContenedorDoc doc='plan para la dirección de proyectos.pdf'/>

            <p className="titulo">Salidas</p>

            <ContenedorDoc doc='plan para la dirección de proyectos.pdf'/>

        </div>

    </div>
</>
  )
}
