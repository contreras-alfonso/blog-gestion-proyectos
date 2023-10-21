import React, { useState } from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'
import { ModalImg } from '../../components/ModalImg'

export const ValidarElAlcance = () => {

  const images = ["/images/entregable1_6.png","/images/entregable1_1.png","/images/entregable1_2.png","/images/entregable1_3.png","/images/entregable1_4.png","/images/entregable1_5.png"]
  const [modalImg,setModalImg] = useState(false);
  const [imagenSeleccionada,setImagenSeleccionada] = useState('');
  
  const handleAsignarImagen = (imagen) => {
    setImagenSeleccionada(imagen);
    setModalImg(true);
  }

  return (
    <>
    <h1 className='titulo_blog'>Validar el alcance</h1>
    <div className="contenedor_blog">
        <div className="contenedor_informacion_2">
            <p className="titulo">Entradas</p>
            <p className="subtitulo">Línea base del alcance</p>
            <ContenedorDoc doc='Línea Base del Alcance.pdf'/>
            <p className="subtitulo">Matriz de trazabilidad de requisitos</p>
            <ContenedorDoc doc='Copia de Entrada - Matriz de trazabilidad de requisitos.pdf'/>
            <p className="subtitulo">Plan para la gestión del alcance</p>
            <ContenedorDoc doc='plan-de-gestion-del-alcance.pdf'/>
            <p className="subtitulo">Entregables verificados</p>
            <ContenedorDoc doc={'Componentes y esquemas.pdf'}/>
            <p className="subtitulo">Plan de Gestión de Requisitos</p>
            <ContenedorDoc doc='Plan de Gestión de Requisitos.pdf'/>
            <p className="titulo">Herramientas</p>

            <p className="subtitulo">Reuniones</p>
            <p className="parrafo">Se realizó una reunión para definir y votar con respecto a si el avance del proyecto como tambien los entregables cumplen con los objetivos definidos en el alcance y segun los requerimientos del proyecto hasta el punto actual del cronograma.</p>
            {/* TODO: cambiar imagen de reunion */}
            <ContenedorImg img={'herramientas_reunion.png'}/>

            <p className="titulo">Salidas</p>

            <p className="subtitulo">Entregables aceptados</p>
            <ContenedorDoc doc={'Componentes y esquemas.pdf'}/>

            <div className=" rounded mx-auto p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {images.map(e=>{return(
                      <div key={e} className="bg-white p-2 cursor-pointer">
                        <img onClick={()=>{handleAsignarImagen(e)}} className="hover:scale-105 duration-300 w-full h-full rounded-lg" src={e} alt={e} />
                      </div>
                    )})}

                  </div>
            </div>
            
            <p className="subtitulo">Informe de Desempeño del Proyecto</p>
            <ContenedorDoc doc={'Informe de Desempeño del Proyecto.pdf'}/>
            <p className="subtitulo">Registro de lecciones aprendidas</p>
            <ContenedorDoc doc={'Registro de Lecciones Aprendidas.pdf'}/>

        </div>

    </div>

    {modalImg && (
      <ModalImg setModalImg={setModalImg} imagenSeleccionada={imagenSeleccionada}/>
      )}
</>
  )
}
