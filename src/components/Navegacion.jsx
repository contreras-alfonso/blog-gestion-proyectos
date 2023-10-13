import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Navegacion = ({navegacion,setNavegacion}) => {

    const [fixed,setFixed] = useState(false);
    const [fase,setFase] = useState('');
    const [proceso,setProceso] = useState('');
    const {pathname} = useLocation();

    /* states */

    const [procesosDeInicio,setProcesosDeInicio] = useState(false);
    const [gestionDelAlcanceDelProyecto,setGestionDelAlcanceDelProyecto] = useState(false);
    const [gestionDeCronogramaDelProyecto,setGestionDeCronogramaDelProyecto] = useState(false);
    const [gestionDeLosCostosDelProyecto,setGestionDeLosCostosDelProyecto] = useState(false);
    const [actividadSesion,setActividadSesion] = useState(false);

    const rutas = [
        {
            fase: "procesos_de_inicio",
            nombreFase: "Procesos de inicio",
            state: procesosDeInicio,
            setState: setProcesosDeInicio,
            subprocesos:[
                {
                    procesoRuta: "desarrollar_el_acta_de_consitucion",
                    procesoNombre: "1. Desarrollar el acta de constitución",
                },
                {
                    procesoRuta: "analisis_de_los_interesados",
                    procesoNombre: "2. Análisis de interesados",
                },
                {
                    procesoRuta: "analisis_de_alternativas",
                    procesoNombre: "3. Análisis de alternativas",
                },
                {
                    procesoRuta: "analisis_de_problemas_y_objetivos",
                    procesoNombre: "4. Análisis de problemas y objetivos",
                },
                {
                    procesoRuta: "matriz_de_marco_logico",
                    procesoNombre: "5. Matriz de marco lógico",
                },
            ]
        },
        {
            fase:"gestion_del_alcance_del_proyecto",
            nombreFase: "Gestión del alcance del proyecto",
            state: gestionDelAlcanceDelProyecto,
            setState: setGestionDelAlcanceDelProyecto,
            subprocesos:[
                {
                    procesoRuta: "planificar_la_gestion_del_alcance",
                    procesoNombre: "1. Planificar la gestión del alcance",
                },
                {
                    procesoRuta: "recopilar_requisitos",
                    procesoNombre: "2. Recopilar requisitos",
                },
                {
                    procesoRuta: "definir_el_alcance",
                    procesoNombre: "3. Definir el alcance",
                },
                {
                    procesoRuta: "crear_la_edt_wbs",
                    procesoNombre: "4. Crear la EDT/WBS",
                },
            ]
        },
        {
            fase:"gestion_del_cronograma_del_proyecto",
            nombreFase: "Gestión del cronograma del proyecto",
            state: gestionDeCronogramaDelProyecto,
            setState: setGestionDeCronogramaDelProyecto,
            subprocesos:[
                {
                    procesoRuta: "planificar_la_gestion_del_cronograma",
                    procesoNombre: "1. Planificar la gestión del cronograma",
                },
                {
                    procesoRuta: "definir_las_actividades",
                    procesoNombre: "2. Definir las actividades",
                },
                {
                    procesoRuta: "secuenciar_las_actividades",
                    procesoNombre: "3. Secuenciar las actividades",
                },
                {
                    procesoRuta: "estimar_la_duracion_de_las_actividades",
                    procesoNombre: "4. Estimar la duración de las actividades",
                },
                {
                    procesoRuta: "desarrollar_el_cronograma",
                    procesoNombre: "5. Desarrollar el cronograma",
                },
            ]
        },
        {
            fase:"gestion_de_los_costos_del_proyecto",
            nombreFase: "Gestión de los costos del proyecto",
            state: gestionDeLosCostosDelProyecto,
            setState: setGestionDeLosCostosDelProyecto,
            subprocesos:[
                {
                    procesoRuta: "planificar_la_gestion_de_los_costos",
                    procesoNombre: "1. Planificar la gestión de los costos",
                },
                {
                    procesoRuta: "estimar_los_costos",
                    procesoNombre: "2. Estimar los costos",
                },
                {
                    procesoRuta: "determinar_el_presupuesto",
                    procesoNombre: "3. Determinar el presupuesto",
                },
            ]
        },

        {
            fase:"sesion",
            nombreFase: "Sesión 6. Actividad",
            state: actividadSesion,
            setState: setActividadSesion,
            subprocesos:[
                {
                    procesoRuta: "actividad_sesion",
                    procesoNombre: "1. Actividad grupal",
                },
            ]
        },
    ]





    useEffect(()=>{
        const locationArr = pathname.split('/');
        setFase(locationArr[1]);
        setProceso(locationArr[2]);
    },[])

    const verificarScroll = () => {
      if(window.scrollY>100){
        setFixed(true);
        return;
      }
      setFixed(false);
    }
  
    window.addEventListener('scroll',verificarScroll);

  return (
    <>
        <div className={`contenedor_padre_sidebar ${!navegacion && 'w-0'}`}>

            <div onClick={()=>{setNavegacion(!navegacion)}} className={`bloque_sidebar ${!navegacion && 'none'}`}>

            </div>
            <nav className={`sidebar ${navegacion ? 'w-350' : 'w-0'}`}>
                <ul className={`${navegacion ? '' : 'none'}`}>
                    {rutas.map(e=>{
                        return (
                        <div key={e.fase} className={`container_sidebar`}>
                            <li onClick={()=>{e.setState(!e.state)}} className={`lista ${e.fase === fase && 'lista_activa'}`}>
                                <p className={`${fase === e.fase && ''}`}>{e.nombreFase}</p>
                                {
                                    e.state === true ? (<i class="fa-sharp fa-solid fa-chevron-up"></i>) : (<i className="fa-solid fa-chevron-down"></i>)
                                }
                            </li>
                            <ul className={`subseccion ${!e.state && 'none'}`}>
                            {e.subprocesos.map(subproceso=>{return(
                                <li onClick={()=>{setNavegacion(!navegacion)}} className={`${subproceso.procesoRuta === proceso && 'subseccionActiva'}`} key={subproceso.procesoNombre}><a href={`/${e.fase}/${subproceso.procesoRuta}`}>{subproceso.procesoNombre}</a></li>
                            )})}
                            </ul>
                        </div>
                        )
                    })}
                </ul>
            </nav>
        </div>

    </>
  )
}

export default Navegacion