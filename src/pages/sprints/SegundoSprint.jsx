import React from 'react'
import { ContenedorImg } from '../../components/ContenedorImg'

export const SegundoSprint = () => {
    return (
        <>
            <h1 className='titulo_blog'>Segundo Sprint</h1>
            <div className="contenedor_blog">

                <div className="contenedor_informacion_2">
                    {/* <img class="contenedor_informacion_img" src="pexels-cong-h-1404819.jpg" alt=""> */}
                    <p className="subtitulo">Cronograma del Sprint II</p>
                    <ContenedorImg img={'Cronograma - Sprint2 - p1.png'} size='90'/>
                    <ContenedorImg img={'Cronograma - Sprint2 - p2.png'} size='90'/>
                    <p className="subtitulo">Actualización del cronograma</p>
                    <ContenedorImg img={'sprint2 - avance final1.png'} size='90'/>
                    <ContenedorImg img={'sprint2 - avance final2.png'} size='90'/>
                    <p className="subtitulo">Diseño de la interfaz</p>
                    <ContenedorImg img={'sprint2 - paleta.png'} size='30'/>
                    <ContenedorImg img={'Diseño_web_vivero.png'} size='90'/>
                    <p className="subtitulo">Realización del codigo para el frontend</p>
                    <ContenedorImg img={'codigo_interfaz_sprint2.png'} size='90'/>
                    <p className="subtitulo">Diseño final de la interfaz</p>
                    <ContenedorImg img={'sprint2_login.png'} size='90'/>
                    <ContenedorImg img={'sprint2_dashboard.png'} size='90'/>
                    <ContenedorImg img={'sprint2_sistema.png'} size='90'/>
                    <ContenedorImg img={'sprint2_notificaciones.png'} size='90'/>
                    <p className="subtitulo">Integración con la maqueta</p>
                    <video src="/images/video_sprint2.mp4" autoPlay loop muted className='mx-auto rounded-lg w-5/6'></video>
                    <ContenedorImg img={'sprint2_datorecepcion.png'} size='90'/>


                </div>
            </div>


        </>
    )
}
