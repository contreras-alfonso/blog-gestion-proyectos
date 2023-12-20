import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const PlanificarLaGestionDeLasAdquisiciones = () => {
  return (
    <>
      <h1 className='titulo_blog'>Planificar la gestión de las Adquisiciones</h1>
      <div className="contenedor_blog">

        <div className="contenedor_informacion_2">
          <p className="titulo">Entradas</p>
          <p className="subtitulo">Acta de consitución del proyecto</p>
          <ContenedorDoc doc='Acta de constitucion del proyecto.pdf' />
          <p className="subtitulo">Plan de direccion de proyecto</p>
          <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />


          <p className="subtitulo">Factores Ambientales y Activos</p>

          <ContenedorDoc doc='FACTORES AMBIENTALES.pdf' />
       
          <p className="titulo">Herramientas</p>
          <p className="subtitulo">Recopilación de datos</p>
          <ContenedorDoc doc='Herramienta - Recopilacion de datos.pdf' />
          <p className="subtitulo">Criterios de selección de proveedores</p>
          <ContenedorDoc doc='Herramienta - Criterios de seleccion de proveedores.pdf' />
          <p className="titulo">Salidas</p>
          <p className="subtitulo">Plan de gestión de las adquisiciones</p>
          <ContenedorDoc doc='Salida - Plan para la Gestión de las Adquisiciones.pdf' />
          <p className="subtitulo">Estrategia de las adquisiciones</p>
          <ContenedorDoc doc='Salida - ESTRATEGIA DE ADQUISICIONES.pdf' />
          <p className="subtitulo">Documentos de licitaciones</p>
          <ContenedorDoc doc='Salida - Documentos de licitaciones1.pdf' />
          <ContenedorDoc doc='Salida - Documentos de licitaciones2.pdf' />
          <p className="subtitulo">Decisiones de Hacer o comprar</p>
          <ContenedorDoc doc='Salida - DECISIONES DE HACER O COMPRAR.pdf' />
        </div>
      </div>


    </>
  )
}
