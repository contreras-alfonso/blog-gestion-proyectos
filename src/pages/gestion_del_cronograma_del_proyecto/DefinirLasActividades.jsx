import React from 'react'

const DefinirLasActividades = () => {
  return (
    <>
    <h1 className='titulo_blog'>2. Definir las actividades</h1>
    <div className="contenedor_blog">

  <div className="contenedor_informacion_2">
    <p className="titulo">Entradas</p>
    <p className="subtitulo">Plan para la dirección del proyecto</p>
    <div className="contenedor_pdf">
      <a
        href="/docs/plan para la dirección de proyectos.pdf"
        className="enlace_pdf"
        target="_blank"
      >
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
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
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="/docs/FACTORES AMBIENTALES.pdf"
      />
    </div>
    <p className="titulo">Herramientas</p>
    <p className="subtitulo">Descomposición</p>
    <div className="contenedor_imagen_blog">
      <img
        src="/images/Herramienta - Descomposicion.png"
        alt="Descomposicion"
        className="contenedor_informacion_img"
      />
    </div>
    <p className="titulo">Salidas</p>
    <p className="subtitulo">Lista de actividades </p>
    <div className="contenedor_pdf">
      <a
        href="/docs/Salida - Lista de Actividades.pdf"
        className="enlace_pdf"
        target="_blank"
      >
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="/docs/Salida - Lista de Actividades.pdf"
      />
    </div>
    <p className="subtitulo">Atributos de actividades</p>
    <div className="contenedor_pdf">
      <a
        href="/docs/Salida - Atributos de Actividades.pdf"
        className="enlace_pdf"
        target="_blank"
      >
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="/docs/Salida - Atributos de Actividades.pdf"
      />
    </div>
  </div>
</div>


</>
  )
}

export default DefinirLasActividades