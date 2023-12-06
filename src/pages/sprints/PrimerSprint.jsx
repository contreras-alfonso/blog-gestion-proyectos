import React from 'react'
import { ContenedorImg } from '../../components/ContenedorImg'

export const PrimerSprint = () => {
    return (
        <>
            <h1 className='titulo_blog'>Primer Sprint</h1>
            <div className="contenedor_blog">

                <div className="contenedor_informacion_2">
                    {/* <img class="contenedor_informacion_img" src="pexels-cong-h-1404819.jpg" alt=""> */}
                    <p className="subtitulo">Cronograma del Sprint I</p>
                    <ContenedorImg img={'Cronograma - Sprint1.png'} size='90'/>
                    <p className="subtitulo">Backlog priorizado, epicas e historias de usuario</p>
                    <ContenedorImg img={'gp1.png'} size='90'/>
                    <ContenedorImg img={'gp2.png'} size='90'/>
                    <p className="subtitulo">Scrumboard</p>
                    <ContenedorImg img={'gp3.png'} size='90'/>
                    <p className="subtitulo">Diseño de la base de datos (MongoDB)</p>
                    <ContenedorImg img={'modelo_db.png'} size='90'/>
                    <p className="subtitulo">Código en Arduino IDE, para obtención de datos</p>
                    <ContenedorImg img={'sprint_codigo1.png'} size='90'/>
                    <ContenedorImg img={'sprint_codigo2.png'} size='90'/>
                    <p className="subtitulo">Prueba de la base de datos y el software</p>
                    <ContenedorImg img={'pruebas_db.png'} size='90'/>
                    <ContenedorImg img={'sprint1.png'} size='60'/>
                    <ContenedorImg img={'sprint1_1.png'} size='60'/>
                   


                </div>
            </div>


        </>
    )
}
