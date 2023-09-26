import React, { useState } from 'react'
import "../styles/index.css"
import { Link } from 'react-router-dom'

const Index = () => {


  return (
    <>
        <section className="landing_page" id="inicio">
            <header className={`landing_page_header`}>
            <div className="header_titulo_univ">
                <a href="" className="logo">
                UNTELS
                </a>
            </div>
            <div className="header_enlaces">
                <a href="#inicio">Inicio</a>
                <a href="#empresa">Sobre la empresa</a>
                <a href="#proyecto">Proyecto</a>
                <a href="#nosotros">Nosotros</a>
            </div>
            <div className="contenedor_barra_menu">
                <i className="fa-solid fa-bars icono_barra" />
            </div>
            </header>
            <div className="menu_responsive menu_oculto">
            <a href="#inicio">Inicio</a>
            <a href="#empresa">Sobre la empresa</a>
            <a href="#proyecto">Proyecto</a>
            <a href="#nosotros">Nosotros</a>
            </div>
            <div className="anti_movimiento anti_movimiento_inactivo">w</div>
            <div className="landing_page_centro">
            <p className="frase">
                IMPLEMENTACIÓN DE UN SISTEMA AUTOMATIZADO DE RIEGO PARA EL CUIDADO Y
                PRESERVACIÓN DEL VIVERO "LA CASA DE PLANTAS Y FLORES"
            </p>
            <Link to="procesos_de_inicio/desarrollar_el_acta_de_consitucion">
                <button className="btn btn_secciones">Ver secciones</button>
            </Link>
            </div>
            <div className="landing_page_final">
            <a href="#empresa" className="btn_abajo">
                <i className="fa-sharp fa-solid fa-chevron-down icono_abajo" />
            </a>
            </div>
        </section>
        <div className="contenedor_empresa" id="empresa">
            <div className="container_imagen_vivero">
            <img src="src/images/vivero_imagen.jpg" alt="imagen_vivero" />
            </div>
            <div className="container_empresa_descripcion">
            <h3>Vivero "La casa de plantas y flores"</h3>
            <p>
                Vivero La Casa de Plantas y Flores es una empresa que se encarga de la
                producción y comercialización de plantas ornamentales y productos
                afines. Además, brinda servicios de fumigación, poda y corte de árboles,
                charlas de capacitación y formación, entre otros.
            </p>
            </div>
        </div>
        <div className="contenedor_proyecto" id="proyecto">
            <p className="titulo_contenedor_proyecto">Sobre nuestro proyecto</p>
            <div className="container_card_proyecto">
            <div className="card_proyecto">
                <p className="card_proyecto_titulo">Descripción</p>
                <p className="card_proyecto_descri">
                El proyecto consiste en la instalación de un sistema de riego
                automatizado para el suministro de agua a las plantas en el vivero. El
                sistema de riego se controlará mediante un software que ajustará la
                cantidad y la frecuencia del agua suministrada a las plantas según las
                necesidades específicas de cada especie y las condiciones climáticas
                del entorno. La instalación del sistema de riego también incluirá
                sensores de humedad del suelo para medir el nivel de humedad del suelo
                y ajustar el riego en consecuencia.
                </p>
            </div>
            <div className="card_proyecto">
                <p className="card_proyecto_titulo">Propósito</p>
                <p className="card_proyecto_descri">
                El propósito del proyecto es mejorar la eficiencia en el uso del agua
                y los recursos, mientras se garantiza el suministro adecuado de agua a
                las plantas, así como un control de la temperatura y estado del
                ambiente en el que se encuentran. El objetivo principal es lograr una
                gestión eficiente del agua y reducir el consumo de este, así como
                también mejorar el crecimiento y la productividad de las plantas, lo
                que resulta en una mayor calidad y cantidad de productos obtenidos.
                </p>
            </div>
            <div className="card_proyecto">
                <p className="card_proyecto_titulo">Justificación</p>
                <p className="card_proyecto_descri">
                La justificación de este proyecto radica en el hecho de que la
                automatización del riego en los viveros puede ayudar a reducir la
                cantidad de agua utilizada, reducir los costos de energía y mejorar la
                calidad y cantidad de la producción de las plantas. Además, la
                automatización del sistema de riego también puede reducir el tiempo y
                el esfuerzo requeridos para regar manualmente las plantas, lo que
                permite a los trabajadores del vivero centrarse en otras tareas
                importantes, como el control de plagas y enfermedades, la
                fertilización y el mantenimiento general del vivero.
                </p>
            </div>
            </div>
            <div className="contenedor_proyecto_btnActa">
            <a href="src/docs/Acta de Constitución del Proyecto.docx" download="">
                <button className="btn btn_descargar_acta">
                Descargar acta constitutiva
                </button>
            </a>
            </div>
        </div>
        <div className="nosotros_container" id="nosotros">
            <h1>Nuestro equipo</h1>
            <div className="contenedor_nosotros_card">
            <div className="card_nosotros">
                <div className="container_img_perfil">
                <img src="src/images/vera.jpg" alt="" className="img_perfil" />
                </div>
                <p className="card_nombre_integrante">Vera Rodriguez José</p>
            </div>
            <div className="card_nosotros">
                <div className="container_img_perfil">
                <img src="src/images/contreras.jpg" alt="" className="img_perfil" />
                </div>
                <p className="card_nombre_integrante">Contreras Gómez Paulino</p>
            </div>
            <div className="card_nosotros">
                <div className="container_img_perfil">
                <img src="src/images/motta.jpg" alt="" className="img_perfil" />
                </div>
                <p className="card_nombre_integrante">Motta Mendoza Miguel</p>
            </div>
            <div className="card_nosotros">
                <div className="container_img_perfil">
                <img src="src/images/alva.jpg" alt="" className="img_perfil" />
                </div>
                <p className="card_nombre_integrante">Alva Chanta Edson</p>
            </div>
            </div>
        </div>
        <footer className="footer">
            <p>Gestión de proyectos de TI</p>
        </footer>
        </>

  )
}

export default Index