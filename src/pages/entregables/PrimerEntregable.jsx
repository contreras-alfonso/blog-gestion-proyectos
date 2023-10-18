import React from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'
import { Carousel } from '../../components/Carousel'

export const PrimerEntregable = () => {

  const images = ["/images/entregable1_1.png","/images/entregable1_2.png","/images/entregable1_3.png","/images/entregable1_4.png"]

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
        <Carousel slides={images}/>
        
        </div>

    </div>
</>
  )
}
