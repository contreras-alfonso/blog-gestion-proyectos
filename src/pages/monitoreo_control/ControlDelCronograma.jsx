import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const ControlDelCronograma = () => {
  return (
    <>
    <h1 className='titulo_blog'>2. Control del cronograma</h1>
    <div className="contenedor_blog">
        <div className="contenedor_informacion_2">
            <p className="titulo">Entradas</p>
            <p className="subtitulo">Plan de gestion de cronograma </p>
            <ContenedorDoc doc='Planificar gestion cronograma.pdf'/>
            <p className="subtitulo">Linea base del cronograma </p>
            <ContenedorDoc doc='linea-base-del-cronograma.pdf'/>
            <p className="subtitulo">Linea base del alcance </p>
            <ContenedorDoc doc='Línea Base del Alcance.pdf'/>
            <p className="subtitulo">Cronograma del proyecto </p>
            <ContenedorDoc doc='Salida - Cronograma de Actividades.pdf'/>

            <p className="titulo">Herramientas</p>
            <p className="subtitulo">Análisis de datos </p>
            {/* TODO */}
            <p className="parrafo"></p>
            <p className="subtitulo">Gráfica de trabajo pendiente </p>
            <ContenedorDoc doc='Herramienta - Grafica de trabajo pendiente.pdf'/>

            <p className="subtitulo">Revisiones de desempeño </p>

            <ContenedorImg img='Herramienta - Revisiones de desempeño1.png'/>
            <ContenedorImg img='Herramienta - Revisiones de desempeño2.png'/>

            <p className="titulo">Salidas</p>

            <p className="subtitulo">Información de desempeño del trabajo</p>

            <ContenedorImg img='Salida - Informe de desempeño1.jpg'/>
            <ContenedorImg img='Salida - Informe de desempeño2.png'/>
            <ContenedorImg img='Salida - Informe de desempeño3.png'/>
        </div>

    </div>
</>
  )
}
