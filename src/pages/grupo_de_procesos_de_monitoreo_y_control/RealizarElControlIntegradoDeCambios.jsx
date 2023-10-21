import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const RealizarElControlIntegradoDeCambios = () => {
  return (
    <>
    <h1 className='titulo_blog'>Realizar el control integrado de cambios</h1>
    <div className="contenedor_blog">
        <div className="contenedor_informacion_2">
            <p className="titulo">Entradas</p>

            <p className="subtitulo">Factores ambientales</p>
            <ContenedorDoc doc='FACTORES AMBIENTALES.pdf'/>
            <p className="subtitulo">Línea base del alcance</p>
            <ContenedorDoc doc='Línea Base del Alcance.pdf'/>
            <p className="subtitulo">Línea base del cronograma</p>
            <ContenedorDoc doc='linea-base-del-cronograma.pdf'/>
            <p className="subtitulo">Matriz de trazabilidad de requisitos</p>
            <ContenedorDoc doc='Copia de Entrada - Matriz de trazabilidad de requisitos.pdf'/>
            <p className="subtitulo">Línea base de costos.pdf</p>
            <ContenedorDoc doc='Salida- Linea base de costos.pdf'/>

            <p className="titulo">Herramientas</p>

            <p className="subtitulo">Reuniones</p>
                {/* TODO: falta el parrafo */}
            <p className="parrafo"></p>
            <ContenedorImg img={'herramientas_reunion.png'}/>

            <p className="titulo">Salidas</p>

            <p className="subtitulo">Plan para la dirección de proyectos</p>
            <ContenedorDoc doc='plan para la dirección de proyectos.pdf'/>

        </div>

    </div>
</>
  )
}
