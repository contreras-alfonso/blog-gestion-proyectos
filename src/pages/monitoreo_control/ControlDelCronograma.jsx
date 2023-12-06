import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const ControlDelCronograma = () => {
  return (
    <>
    <h1 className='titulo_blog'>Control del cronograma</h1>
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
        
            <p className="subtitulo">Gráfica de trabajo pendiente </p>
            <ContenedorDoc doc='Herramienta - Grafica de trabajo pendiente.pdf'/>

            <p className="subtitulo">Revisiones de desempeño </p>

            <ContenedorImg img='Herramienta - Revisiones de desempeño1.png'/>
            <ContenedorImg img='Herramienta - Revisiones de desempeño2.png'/>
            <ContenedorImg img={'Cronograma - Sprint1.png'} size='90'/>
            <ContenedorImg img={'Cronograma - Sprint2 - p1.png'} size='90'/>
            <ContenedorImg img={'Cronograma - Sprint2 - p2.png'} size='90'/>
           

            <p className="titulo">Salidas</p>

            <p className="subtitulo">Información de desempeño del trabajo</p>

            <ContenedorImg img='Salida - Informe de desempeño1.jpg'/>
            <ContenedorImg img={'Entrada - Cronograma del proyecto_page-0002.jpg'} size='90'/>
            <ContenedorImg img='Salida - Informe de desempeño2.png'/>
            <ContenedorImg img='Salida - Informe de desempeño3.png'/>
            <ContenedorDoc doc='SRA.pdf'/>
        </div>

    </div>
</>
  )
}
