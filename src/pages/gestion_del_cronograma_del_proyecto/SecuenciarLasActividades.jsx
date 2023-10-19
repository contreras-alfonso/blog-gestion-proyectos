import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

const SecuenciarLasActividades = () => {
  return (
    <>
    <h1 className='titulo_blog'>Secuenciar las actividades</h1>
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
    <p className="subtitulo">Documentos del proyecto</p>
    <div className="contenedor_pdf">
      <a
        href="/docs/Salida - Atributos de Actividades.pdf"
        className="enlace_pdf"
        target="_blank"
      >
         <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="/docs/Salida - Atributos de Actividades.pdf"
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
    <p className="subtitulo">Método de diagramación por precendencia</p>
    <p className="parrafo">
      En el MDP, las actividades se representan mediante nodos o cajas, y las
      relaciones de precedencia se muestran mediante flechas que conectan los
      nodos. Cada actividad se representa por su nombre o número y puede incluir
      información adicional, como la duración estimada de la actividad.
    </p>
    <div className="contenedor_imagen_blog">
      <img
        src="/images/Herramienta - Metodo de Diagramacion por Precedencia.png"
        alt="analisi de alternativas"
        className="contenedor_informacion_img"
      />
    </div>
    <p className="titulo">Salidas</p>
    <p className="subtitulo">Diagrama de red del cronograma del proyecto</p>
    <p className="parrafo">
      Es una representación gráfica de las actividades del proyecto y las
      relaciones de precedencia entre ellas. Este tipo de diagrama se utiliza
      para planificar, programar y visualizar el flujo de trabajo del proyecto,
      incluyendo la secuencia de actividades, las dependencias y las
      interrelaciones entre ellas
    </p>
    <ContenedorDoc doc='Salida - Diagrama de Red del cronograma del proyecto.pdf'/>
  </div>
</div>


</>
  )
}

export default SecuenciarLasActividades