import React from 'react'

const EstimarLaDuracionDeLasActividades = () => {
  return (
    <>
    <h1 className='titulo_blog'>Estimar la duración de las actividades</h1>
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

    <p className="subtitulo">Estimación por tres valores</p>
    <p className="parrafo">
      La exactitud de las estimaciones de la duración por un único valor puede
      mejorarse si se tienen en cuenta la incertidumbre y el riesgo. El uso de
      estimaciones basadas en tres valores ayuda a definir un rango aproximado
      de duración de una actividad:
    </p>
    <p className="parrafo">
      <i className="fa-solid fa-check check-verde" />
      <strong> Más probable (tM)</strong> Esta estimación se basa en la duración
      de la actividad, en función de los recursos que probablemente le sean
      asignados, de su productividad, de las expectativas realistas de
      disponibilidad para la actividad, de las dependencias de otros
      participantes y de las interrupciones.
    </p>
    <p className="parrafo">
      <i className="fa-solid fa-check check-verde" />
      <strong> MOptimista (tO)</strong> Estima la duración de la actividad sobre
      la base del análisis del mejor escenario para esa actividad.
    </p>
    <p className="parrafo">
      <i className="fa-solid fa-check check-verde" />
      <strong>Pesimista (tP)</strong> Estima la duración sobre la base del
      análisis del peor escenario para esa actividad.
    </p>
    <p className="titulo">Salidas</p>
    <p className="subtitulo">Estimación de la duración</p>
    <p className="parrafo">
      Las estimaciones de la duración son evaluaciones cuantitativas del número
      probable de períodos de tiempo requeridos para completar una actividad,
      una fase o un proyecto.
    </p>
    <div className="contenedor_pdf">
      <a
        href="/docs/ESTIMACION.pdf"
        className="enlace_pdf"
        target="_blank"
      >
         <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="/docs/ESTIMACION.pdf"
      />
    </div>
  </div>
</div>


</>
  )
}

export default EstimarLaDuracionDeLasActividades