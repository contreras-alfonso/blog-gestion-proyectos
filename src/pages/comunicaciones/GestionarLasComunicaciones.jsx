import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const GestionarLasComunicaciones = () => {
  return (
    <>
    <h1 className='titulo_blog'>Gestionar las comunicaciones</h1>
    <div className="contenedor_blog">

      <div className="contenedor_informacion_2">
        <p className="titulo">Entradas</p>
        <p className="subtitulo">Plan de direccion de proyecto</p>
          <ContenedorDoc doc='plan para la dirección de proyectos.pdf' />
          <p className="subtitulo">Documentos del proyecto</p>
          <ContenedorDoc doc='Salida - Plan para la Gestión de las Comunicaciones.pdf' />
          <p className="subtitulo">Factores Ambientales y Activos</p>
          <ContenedorDoc doc='FACTORES AMBIENTALES.pdf' />
        <p className="titulo">Herramientas</p>
<p className="subtitulo">Tecnologías de comunicación</p>
        <ContenedorImg img={'Herramientas - Tecnologias de comunicacion.png'} size='60'/>
        <p className="subtitulo">	Habilidades interpersonales y de equipo
</p>
<ContenedorDoc doc='Habilidades Interpersonales y de Equipo.pdf' />
<p className="subtitulo">Reuniones
</p>

<ContenedorImg img={'reunion_final2.jpeg'}/>

        <p className="titulo">Salidas</p>
<p className="subtitulo">Actualización del plan de gestión de comunicaciones</p>
        <ContenedorDoc doc='Salida - Plan para la Gestión de las Comunicaciones.pdf' />
        <p className="subtitulo">Actualización del plan de dirección de proyecto</p>
        <ContenedorDoc doc='2plan para la dirección de proyectos.pdf' />
      </div>
    </div>


  </>
  )
}
