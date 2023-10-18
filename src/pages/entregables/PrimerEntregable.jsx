import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'

export const PrimerEntregable = () => {
  return (
    <>
    <h1 className='titulo_blog'>1. Primer entregable</h1>
    <div className="contenedor_blog">

        <div className="contenedor_informacion_2">
        <p className="subtitulo">Componentes y esquema</p>
        <ContenedorDoc doc={'Componentes y esquemas.pdf'}/>
        <p className="subtitulo">Lógica de control - Diagrama de flujo</p>
        <ContenedorImg img={'entregable1-diagrama-de-flujo.png'} size='30'/>
        <p className="subtitulo">Ensamblaje y pruebas unitarias</p>
        <ContenedorDoc doc={'Componentes y esquemas.pdf'}/>

        </div>

    </div>
</>
  )
}
