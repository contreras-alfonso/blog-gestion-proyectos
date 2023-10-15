import React from 'react'

const PlanificarLaGestionDelCronograma = () => {
  return (
    <>
    <h1 className='titulo_blog'>1. Planificar la gestión del cronograma</h1>
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
        href="/docs/Acta de constitucion del proyecto.pdf"
        className="enlace_pdf"
        target="_blank"
      >
         <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="/docs/Acta de constitucion del proyecto.pdf"
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
    <p className="subtitulo">Análisis de datos</p>
    <p className="parrafo">
      Un ejemplo de una técnica de análisis de datos que puede utilizarse en
      este proceso incluye, entre otras, el análisis de alternativas. El
      análisis de alternativas se puede utilizar para evaluar formas de
      satisfacer las necesidades y los objetivos definidos en el acta de
      constitución.
    </p>
    <div className="contenedor_imagen_blog">
      <img
        src="/images/analisis_datos-analisis-de-alternativas.png"
        alt="analisi de alternativas"
        className="contenedor_informacion_img"
      />
    </div>
    <p className="titulo">Salidas</p>
    <p className="subtitulo">Plan de gestión del cronograma</p>
    <div className="contenedor_pdf">
      <a
        href="/docs/Planificar gestion cronograma.pdf"
        className="enlace_pdf"
        target="_blank"
      >
         <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="/docs/Planificar gestion cronograma.pdf"
      />
    </div>
  </div>
</div>


</>
  )
}

export default PlanificarLaGestionDelCronograma