import React from 'react'
import { ContenedorImg } from '../../components/ContenedorImg'
import { ContenedorDoc } from '../../components/ContenedorDoc'

export const TercerSprint = () => {
    return (
        <>
            <h1 className='titulo_blog'>Tercer Sprint</h1>
            <div className="contenedor_blog">

                <div className="contenedor_informacion_2">
                    {/* <img class="contenedor_informacion_img" src="pexels-cong-h-1404819.jpg" alt=""> */}
                    <p className="subtitulo">Cronograma del Sprint III</p>
                    <ContenedorImg img={'cronograma_sprint3.jpeg'} size='90' />
                    <p className="subtitulo">Actualización del cronograma Sprint III</p>
                    <ContenedorImg img={'Actualizacion del cronograma Sprint III.jpeg'} size='90' />
                    <p className="subtitulo">Informe avance Sprint III</p>
                    <ContenedorImg img={'Informe_avance_sprint3.jpeg'} size='80' />
                    <p className="subtitulo">Implementación</p>
                    <ContenedorImg img={'implementacion2.jpeg'} size='60' />
                    <ContenedorImg img={'Implementacion1.jpeg'} size='60' />
                    <p className="subtitulo">Cronograma completo</p>
                    <ContenedorDoc doc='cronograma completo.pdf' />



                </div>
            </div>


        </>
    )
}