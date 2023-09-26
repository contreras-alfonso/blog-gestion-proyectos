import React from 'react'

const RecopilarRequisitos = () => {
  return (
    <>
    <h1 className='titulo_blog'>2. Recopilar requisitos</h1>
    <div className="contenedor_blog">

  <div className="contenedor_informacion_2">
    <p className="titulo">Entradas</p>
    <p className="subtitulo">Acta de constitución</p>
    <p className="parrafo">
      Es un documento emitido por el iniciador del proyecto o patrocinador, que
      autoriza formalmente la existencia de un proyceto y confiere al director
      del proyecto la autoridad para aplicar los recursos de la organizacion a
      las actividades del proyecto. Documenta la informacion de alto nivel
      acerca del proyecto y del producto, servicio o resultado que el proyecto
      pretende satisfacer.
    </p>
    <div className="contenedor_pdf">
      <a
        href="../../src/docs/Acta de constitucion del proyecto.pdf"
        className="enlace_pdf"
        target="_blank"
      >
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="../../src/docs/Acta de constitucion del proyecto.pdf"
      />
    </div>
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
      Los factores ambientales y activos de la empresa que pueden influir en el
      proceso y desarrollar el Acta de Constitución del Proyecto incluyen
      estándares gubernamentales o de la industria, estándares del producto,
      estándares de calidad, estándares de seguridad y estándares de
      fabricación.
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
    <p className="titulo">Herramientas</p>
    <p className="subtitulo">Recopilación de datos</p>
    <p className="subtitulo2">
      <i className="fa-solid fa-check check-verde" /> Cuestionario
    </p>
    <p className="parrafo">
      Se consideró la realización de un cuestionario dirigido al encargado del
      vivero con el fin de obtener información cercana sobre las necesidades o
      requisitos del negocio.
    </p>
    <div className="contenedor_pdf">
      <a
        href="../../src/docs/Herramienta - Recopilacion de datos - Cuestionario.pdf"
        className="enlace_pdf"
        target="_blank"
      >
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="../../src/docs/Herramienta - Recopilacion de datos - Cuestionario.pdf"
      />
    </div>
    <p className="subtitulo2">
      <i className="fa-solid fa-check check-verde" /> Tormenta de ideas
    </p>
    <p className="parrafo">
      También se utilizó la técnica de Tormenta de ideas mediante una reunión
      con los miembros del equipo del proyecto con el fin de generar y recopilar
      múltiples ideas relacionadas con los requisitos del proyecto y del
      producto/servicio.
    </p>
    <div className="contenedor_imagen_blog">
      <img
        src="../../src/images/Herramienta - Recopilacion de datos - Tormenta de ideas1.png"
        alt="tormenta ideas"
        className="contenedor_informacion_img"
      />
    </div>
    <p className="subtitulo">Análisis de datos</p>
    <p className="parrafo">
      Entre las técnicas de análisis de datos tenemos el análisis de documentos,
      el cual consiste en la revisión y evaluación de cualquier información
      documentada pertinente. En este caso tenemos la información de los
      factores ambientales y activos documentados, así como caso de negocio y
      análisis de problemas y objetivos documentados como se muestra a
      continuación:
    </p>
    <div className="contenedor_pdf">
      <a
        href="../../src/docs/Herramienta -Analisis de datos - Caso de Negocio.pdf"
        className="enlace_pdf"
        target="_blank"
      >
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="../../src/docs/Herramienta -Analisis de datos - Caso de Negocio.pdf"
      />
    </div>
    <p className="subtitulo">Representación de datos</p>
    <p className="parrafo">
      Para la representación de datos se consideró utilizar el Diagrama de
      afinidad ya que estos diagramas permiten clasificar en grupos un gran
      número de ideas para su revisión y análisis. Para la clasificación se
      consideraron los siguientes grupos de requisitos:
      <br />
      <br />
      <i className="fa-solid fa-check check-verde" /> Requisitos del Negocio
      <br />
      <i className="fa-solid fa-check check-verde" /> Requisitos de los
      interesados
      <br />
      <i className="fa-solid fa-check check-verde" /> Requisitos de la solución
      <br />
      <i className="fa-solid fa-check check-verde" /> Requisitos de la
      transición
      <br />
      <i className="fa-solid fa-check check-verde" /> Requisitos del proyecto
    </p>
    <div className="contenedor_imagen_blog">
      <img
        src="../../src/images/Herramienta - Representacion de datos - Diagrama de afinidad.png"
        alt="Representacion de datos"
        className="contenedor_informacion_img"
      />
    </div>
    <p className="titulo">Salidas</p>
    <p className="subtitulo">Documentación de requisitos</p>
    <div className="contenedor_pdf">
      <a
        href="../../src/docs/Salida - Documentacion de Requisitos.pdf"
        className="enlace_pdf"
        target="_blank"
      >
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="../../src/docs/Salida - Documentacion de Requisitos.pdf"
      />
    </div>
  </div>
</div>


</>
  )
}

export default RecopilarRequisitos