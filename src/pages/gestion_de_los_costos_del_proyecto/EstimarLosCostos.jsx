import React from 'react'

const EstimarLosCostos = () => {
  return (
    <>
    <h1 className='titulo_blog'>2. Estimar los costos</h1>
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
        href="../../src/docs/plan para la dirección de proyectos.pdf"
        className="enlace_pdf"
        target="_blank"
      >
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="../../src/docs/plan para la dirección de proyectos.pdf"
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
        href="../../src/docs/FACTORES AMBIENTALES.pdf"
        className="enlace_pdf"
        target="_blank"
      >
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="../../src/docs/FACTORES AMBIENTALES.pdf"
      />
    </div>
    <p className="titulo">Herramienta</p>
    <p className="subtitulo">Estimacion basada en 3 valores</p>
    <div className="contenedor_pdf">
      <a
        href="../../src/docs/Herramienta - Estimacion basada en 3 valores.pdf"
        className="enlace_pdf"
        target="_blank"
      >
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="../../src/docs/Herramienta - Estimacion basada en 3 valores.pdf"
      />
    </div>
    <p className="subtitulo">Análisis de reserva</p>
    <div className="contenedor_pdf">
      <a
        href="../../src/docs/Herramienta - Análisis de reserva .pdf"
        className="enlace_pdf"
        target="_blank"
      >
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="../../src/docs/Herramienta - Análisis de reserva .pdf"
      />
    </div>
    <p className="titulo">Salida</p>
    <p className="subtitulo">Estimación de costos</p>
    <div className="contenedor_pdf">
      <a
        href="../../src/docs/Salida - Estimacion de costos.pdf"
        className="enlace_pdf"
        target="_blank"
      >
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="../../src/docs/Salida - Estimacion de costos.pdf"
      />
    </div>
  </div>
</div>


</>
  )
}

export default EstimarLosCostos