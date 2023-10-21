import React, { useState } from 'react'
import { ContenedorDoc } from '../../components/ContenedorDoc'
import { ContenedorImg } from '../../components/ContenedorImg'
import { ModalImg } from '../../components/ModalImg'

export const DirigirYGestionarElTrabajoDelProyecto = () => {

  const images = ["/images/entregable1_6.png","/images/entregable1_1.png","/images/entregable1_2.png","/images/entregable1_3.png","/images/entregable1_4.png","/images/entregable1_5.png"]
  const [modalImg,setModalImg] = useState(false);
  const [imagenSeleccionada,setImagenSeleccionada] = useState('');
  
  const handleAsignarImagen = (imagen) => {
    setImagenSeleccionada(imagen);
    setModalImg(true);
  }

  return (
    <>
        <h1 className='titulo_blog'>Dirigir y gestionar el trabajo del proyecto</h1>
        <div className="contenedor_blog">
            <div className="contenedor_informacion_2">

                <p className="titulo">Entradas</p>
                <p className="subtitulo">Plan para la dirección de proyectos</p>
                <ContenedorDoc doc='plan para la dirección de proyectos.pdf'/>
                <p className="subtitulo">Factores ambientales</p>
                <ContenedorDoc doc='FACTORES AMBIENTALES.pdf'/>
                <p className="subtitulo">Lista de hitos</p>
                <ContenedorDoc doc='Lista de hitos.pdf'/>
                <p className="subtitulo">Cronogrma de actividades</p>
                <ContenedorDoc doc='Salida - Cronograma de Actividades.pdf'/>

                <p className="titulo">Herramientas</p>
                <p className="subtitulo">Reuniones</p>
                {/* TODO: falta el parrafo */}
                <p className="parrafo"></p>
                <ContenedorImg img={'herramientas_reunion.png'}/>

                <p className="titulo">Salidas</p>
                <p className="subtitulo">Componentes y esquema</p>
                <p className="parrafo"><i class="fa-solid fa-check check-verde"></i> En esta etapa, se han identificado y seleccionado los sensores clave que se integrarán en el sistema. Estos incluyen sensores de humedad del suelo de alta precisión, capaces de medir con exactitud los niveles de humedad en diferentes condiciones ambientales. También se identificaron los microcrontroladores a usar</p>
                <ContenedorDoc doc={'Componentes y esquemas.pdf'}/>
                <p className="subtitulo">Ensamblaje y pruebas unitarias</p>
                <p className="parrafo">
                <i class="fa-solid fa-check check-verde"></i> En esta etapa, ensamblamos todas las partes del sistema y nos aseguramos de que funcionaran bien por separado. Probamos cada parte para verificar que estuvieran trabajando correctamente. Esto nos aseguró de que el sistema cumpla con las pruebas sometidas y funcione sin problemas.</p>

                <div className=" rounded mx-auto p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {images.map(e=>{return(
                      <div key={e} className="bg-white p-2 cursor-pointer">
                        <img onClick={()=>{handleAsignarImagen(e)}} className="hover:scale-105 duration-300 w-full h-full rounded-lg" src={e} alt={e} />
                      </div>
                    )})}

                  </div>
                </div>

            </div>

        </div>

      {modalImg && (
      <ModalImg setModalImg={setModalImg} imagenSeleccionada={imagenSeleccionada}/>
      )}
    </>
  )
}
