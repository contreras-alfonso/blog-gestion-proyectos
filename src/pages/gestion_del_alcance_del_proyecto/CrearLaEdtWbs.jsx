import React from 'react'

const CrearLaEdtWbs = () => {
  return (
    <>
    <h1 className='titulo_blog'>4. Crear la EDT/WBS</h1>
    <div className="contenedor_blog">

  <div className="contenedor_informacion_2">
    <p className="titulo">Entradas</p>
    <p className="subtitulo">Plan para la dirección del proyecto</p>
    <p className="parrafo">
      Los componentes del plan para la dirección del proyecto incluyen el plan
      para la gestión del alcance del proyecto. El plan para la gestión del
      alcance del proyecto documenta cómo será creada la EDT/WBS a partir del
      enunciado del alcance del proyecto.
    </p>
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
      Los factores ambientales y activos de la empresa que pueden influir en el
      proceso y desarrollar el Acta de Constitución del Proyecto incluyen
      estándares gubernamentales o de la industria, estándares del producto,
      estándares de calidad, estándares de seguridad y estándares de
      fabricación.
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
    <p className="parrafo">
      La descomposición jerárquica en niveles permite una división lógica y
      sistemática del trabajo, lo que facilita la asignación de
      responsabilidades y la asignación de recursos.
    </p>
    <div className="contenedor_imagen_blog">
      <img
        src="/images/EDT.png"
        alt="edt"
        className="contenedor_informacion_img"
      />
    </div>
    <p className="titulo">Salidas</p>
    <p className="subtitulo">Línea base del alcance</p>
    <p className="parrafo">
      En este documento se define y planifica que trabajos son necesarios para
      asegurarnos de que solo ese trabajo es el que se realizara en el proyecto.
    </p>
    <div className="contenedor_pdf">
      <a
        href="/docs/Línea Base del Alcance.pdf"
        className="enlace_pdf"
        target="_blank"
      >
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="/docs/Línea Base del Alcance.pdf"
      />
    </div>
  </div>
</div>


</>
  )
}

export default CrearLaEdtWbs