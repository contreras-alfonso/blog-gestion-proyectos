import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const DirigirYGestionarElTrabajoDelProyecto = () => {
  return (
    <>
        <h1 className='titulo_blog'>Dirigir y gestionar el trabajo del proyecto</h1>
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
