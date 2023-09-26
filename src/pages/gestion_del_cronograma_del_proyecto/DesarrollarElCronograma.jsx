import React from 'react'

const DesarrollarElCronograma = () => {
  return (
    <>
    <h1 className='titulo_blog'>5. Desarrollar el cronograma</h1>
    <div className="contenedor_blog">

  <div className="contenedor_informacion_2">
    <p className="titulo">Entradas</p>
    <p className="subtitulo">Plan para la dirección del proyecto</p>
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
    <p className="subtitulo">Documentos del proyecto</p>
    <div className="contenedor_pdf">
      <a
        href="../../src/docs/Salida - Atributos de Actividades.pdf"
        className="enlace_pdf"
        target="_blank"
      >
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="../../src/docs/Salida - Atributos de Actividades.pdf"
      />
    </div>
    <p className="titulo">Herramientas</p>
    <p className="subtitulo">Método de la ruta critica</p>
    <p className="parrafo">
      El método de la ruta crítica se utiliza para estimar la mínima duración
      del proyecto y determinar el nivel de flexibilidad en la programación de
      los caminos de red lógicos dentro del modelo de programación. Esta técnica
      de análisis de la red del cronograma calcula las fechas de inicio y
      finalización, tempranas y tardías, para todas las actividades, sin tener
      en cuenta las limitaciones de recursos, y realiza un análisis que recorre
      hacia adelante y hacia atrás toda la red del cronograma.
    </p>
    <div className="contenedor_imagen_blog">
      <img
        src="../../src/images/ruta_critica.png"
        alt="analisi de alternativas"
        className="contenedor_informacion_img_80"
      />
    </div>
    <div className="contenedor_imagen_blog">
      <img
        src="../../src/images/imagen ruta critica.jpeg"
        alt="analisi de alternativas"
        className="contenedor_informacion_img"
      />
    </div>
    <p className="titulo">Salidas</p>
    <p className="subtitulo">Linea base del cronograma</p>
    <div className="contenedor_pdf">
      <a
        href="../../src/docs/linea-base-del-cronograma.pdf"
        className="enlace_pdf"
        target="_blank"
      >
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="../../src/docs/linea-base-del-cronograma.pdf"
      />
    </div>
    <p className="subtitulo">Cronograma del proyecto</p>
    <p className="parrafo">
      El cronograma del proyecto es una salida de un modelo de programación que
      presenta actividades vinculadas con fechas planificadas, duraciones, hitos
      y recursos. El cronograma del proyecto debe contener, como mínimo, una
      fecha de inicio y una fecha de finalización planificadas para cada
      actividad. Si la planificación de recursos se realiza en una etapa
      temprana, el cronograma mantendrá su carácter preliminar hasta que se
      hayan confirmado las asignaciones de recursos y se hayan establecido las
      fechas de inicio y finalización programadas.
    </p>
    <p className="enlace">
      <a
        className="enlace_d"
        target="_blank"
        href="https://sharing.clickup.com/9008198761/g/8cewd39-265/gantt"
      >
        https://sharing.clickup.com/9008198761/g/8cewd39-265/gantt
      </a>
    </p>
    <p className="subtitulo">Cronograma de actividades del proyecto</p>
    <div className="contenedor_pdf">
      <a
        href="../../src/docs/Salida - Cronograma de Actividades.pdf"
        className="enlace_pdf"
        target="_blank"
      >
        Visualizar pdf <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="../../src/docs/Salida - Cronograma de Actividades.pdf"
      />
    </div>
  </div>
</div>


</>
  )
}

export default DesarrollarElCronograma