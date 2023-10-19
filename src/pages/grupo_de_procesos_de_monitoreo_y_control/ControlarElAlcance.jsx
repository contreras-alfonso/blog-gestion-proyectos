import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const ControlarElAlcance = () => {
  return (
    <>
    <h1 className='titulo_blog'>Controlar el alcance</h1>
    <div className="contenedor_blog">
        <div className="contenedor_informacion_2">
            <p className="titulo">Entradas</p>

            <p className="titulo">Herramientas</p>

            <p className="titulo">Salidas</p>

            <ContenedorDoc doc='plan para la dirección de proyectos.pdf'/>

        </div>

    </div>
</>
  )
}
