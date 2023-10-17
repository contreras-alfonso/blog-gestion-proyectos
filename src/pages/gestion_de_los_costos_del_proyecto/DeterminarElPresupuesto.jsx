import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

const DeterminarElPresupuesto = () => {
  return (
    <>
    <h1 className='titulo_blog'>3. Determinar el presupuesto</h1>
    <div className="contenedor_blog">

  <div className="contenedor_informacion_2">
    <p className="titulo">Entradas</p>
    <p className="subtitulo">Plan para la dirección del proyecto</p>
    <p className="parrafo">
      Desarrollar el Plan para la Dirección del Proyecto es el proceso de
      definir, preparar y coordinar todos los componentes del plan y
      consolidarlos en un plan integral para la dirección del proyecto. El
      beneficio clave de este proceso es la producción de un documento
      comprehensivo que define la base para todo el trabajo del proyecto y el
      modo en que se realizará el trabajo. Este proceso se lleva a cabo una
      única vez o en puntos predefinidos del proyecto.
    </p>
    <div className="contenedor_pdf">
      <a
        href="/docs/plan para la dirección de proyectos.pdf"
        className="enlace_pdf"
        target="_blank"
      >
         <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="/docs/plan para la dirección de proyectos.pdf"
      />
    </div>
    <p className="subtitulo">Factores ambientales y Activos</p>
    <p className="parrafo">
      Los factores ambientales de una empresa se refieren a todas aquellas
      variables externas que pueden afectar su funcionamiento y desempeño. Estos
      factores pueden tener un impacto significativo en las operaciones de la
      empresa, su estrategia y su capacidad para alcanzar sus objetivos.
    </p>
    <div className="contenedor_pdf">
      <a
        href="/docs/FACTORES AMBIENTALES.pdf"
        className="enlace_pdf"
        target="_blank"
      >
         <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="/docs/FACTORES AMBIENTALES.pdf"
      />
    </div>
    <p className="titulo">Herramientas</p>
    <p className="subtitulo">Análisis de reserva</p>
    <div className="contenedor_pdf">
      <a
        href="/docs/Herramienta - Análisis de reserva .pdf"
        className="enlace_pdf"
        target="_blank"
      >
         <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="/docs/Herramienta - Análisis de reserva .pdf"
      />
    </div>
    <p className="titulo">Salidas</p>
    <p className="subtitulo">Linea base de costos</p>
    <div className="contenedor_pdf">
      <a
        href="/docs/Salida- Linea base de costos.pdf"
        className="enlace_pdf"
        target="_blank"
      >
         <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="/docs/Salida- Linea base de costos.pdf"
      />
    </div>
    <p className="subtitulo">Presupuesto por tipo componente y paquete</p>
    <div className="contenedor_pdf">
      <a
        href="/docs/Salida- Presupuesto por tipo Componente y paquete.pdf"
        className="enlace_pdf"
        target="_blank"
      >
         <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="/docs/Salida- Presupuesto por tipo Componente y paquete.pdf"
      />
    </div>

  </div>
</div>


</>
  )
}

export default DeterminarElPresupuesto