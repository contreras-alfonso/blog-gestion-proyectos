import React from 'react'

const AnalisisDeInteresados = () => {
  return (
    <>
        <h1 className='titulo_blog'>2. Análisis de interesados</h1>
        <div className="contenedor_blog">
            <div className="contenedor_informacion_2">
                <p className="titulo">Entradas</p>
                <p className="subtitulo">Caso del negocio</p>
                <p className="parrafo">
                Se ha identificado que en el vivero “La Casa de Plantas y Flores” existen
                áreas de mejoras en los procesos y en el uso de los recursos disponibles.
                El sistema de riego actual presenta ineficiencias, generando consumos
                sustanciales de agua, afectando negativamente la calidad de plantas y
                aumentando los costos de producción, además, el uso de materia prima no
                esta siendo optimizado, lo que resulta en mayores gastos. <br />
                <br />
                Nuestro proyecto propone la implementación de un sistema de riego
                inteligente, la optimización del uso de la materia prima y la mejora de
                los procesos involucrados en la producción de plantas con el objetivo de
                optimizar el uso de los recursos y mejorar la eficiencia de los procesos.
                Con estas mejoras buscamos reducir los costos operativos, minimizar el
                desperdicio de recursos, mejorar la calidad de las plantas e incrementar
                la sostenibilidad.
                </p>
                <p className="subtitulo">Factores ambientales y Activos</p>
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
                <p className="subtitulo">Lista de interesados</p>
                <div className="contenedor_imagen_blog">
                <img
                    src="/images/lista_interesados.png"
                    alt="lista de interesado"
                    className="contenedor_informacion_img_70"
                />
                </div>
                <p className="titulo">Herramientas</p>
                <p className="subtitulo">Cubo de interesados</p>
                <p className="parrafo">
                Es una herramienta utilizada en la gestión de proyectos y la toma de
                decisiones estratégicas para identificar y analizar a los diferentes
                actores o grupos de interés que pueden afectar o ser afectados por un
                proyecto, una organización o una iniciativa.
                </p>
                <div className="contenedor_imagen_blog">
                <img
                    src="/images/clasificacion_cubo_interesados.png"
                    alt="clasificacion cubo de interesados"
                    className="contenedor_informacion_img_70"
                />
                </div>
                {/* <div class="contenedor_imagen_blog"><img src="/images/cubo_interesados.png" alt="" class="contenedor_informacion_img_small"></div> */}
                <p className="titulo">Salidas</p>
                <p className="subtitulo">Clasificación de interesados</p>
                <div className="contenedor_imagen_blog">
                <img
                    src="/images/clasificacion_interesados.png"
                    alt=""
                    className="contenedor_informacion_img"
                />
                </div>
            </div>
        </div>

    </>
  )
}

export default AnalisisDeInteresados