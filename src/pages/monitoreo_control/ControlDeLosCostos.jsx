import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const ControlDeLosCostos = () => {
  return (
    <>
    <h1 className='titulo_blog'>3. Control de los costos</h1>
    <div className="contenedor_blog">
        <div className="contenedor_informacion_2">
            <p className="titulo">Entradas</p>
            <p className="subtitulo">Plan para la dirección de proyectos</p>
            <ContenedorDoc doc='plan para la dirección de proyectos.pdf'/>
            <p className="subtitulo">Plan para la gestión de costos</p>
            <ContenedorDoc doc='Plan-para-la-Gestión-de-Costo.pdf'/>
            <p className="subtitulo">Línea base de costos</p>
            <ContenedorDoc doc='Salida- Linea base de costos.pdf'/>
            <p className="titulo">Herramientas</p>
            <p className="titulo">Salidas</p>
        </div>

    </div>
</>
  )
}
