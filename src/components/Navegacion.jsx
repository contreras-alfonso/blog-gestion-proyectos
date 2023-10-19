import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Navegacion = ({navegacion,setNavegacion}) => {

    const [fixed,setFixed] = useState(false);
    const [fase,setFase] = useState('');
    const [proceso,setProceso] = useState('');
    const {pathname} = useLocation();

    /* states */

    const [grupoDeProcesosDeInicio,setGrupoDeProcesosDeInicio] = useState(false);
    const [grupoDeProcesosDePlanificacion,setGrupoDeProcesosDePlanificacion] = useState(false);
    const [grupoDeProcesosDeEjecucion,setGrupoDeProcesosDeEjecucion] = useState(false);
    const [grupoDeProcesosDeMonitoreoYControl,setGrupoDeProcesosDeMonitoreoYControl] = useState(false);
    const [grupoDeProcesosDeCierre,setGrupoDeProcesosDeCierre] = useState(false);
    const [entregables,setEntregables] = useState(false);
    const [actividadGrupal,setActividadGrupal] = useState(false);


    const rutas = [
        {
            fase: "grupo_de_procesos_de_inicio",
            nombreFase: "Grupo de procesos de inicio",
            state: grupoDeProcesosDeInicio,
            setState: setGrupoDeProcesosDeInicio,
            subprocesos:[
                {
                    procesoRuta: "desarrollar_el_acta_de_consitucion",
                    procesoNombre: "Desarrollar el acta de constitución del proyecto",
                },
                {
                    procesoRuta: "identificar_los_interesados",
                    procesoNombre: "Identificar los interesados",
                },
            ]
        },
        {
            fase:"grupo_de_procesos_de_planificacion",
            nombreFase: "Grupo de procesos de planificación",
            state: grupoDeProcesosDePlanificacion,
            setState: setGrupoDeProcesosDePlanificacion,
            subprocesos:[
                {
                    procesoRuta: "desarrollar_el_plan_para_la_direccion_del_proyecto",
                    procesoNombre: "Desarrollar el plan para la dirección del proyecto",
                },
                {
                    procesoRuta: "planificar_la_gestion_del_alcance",
                    procesoNombre: "Planificar la gestión del alcance",
                },
                {
                    procesoRuta: "recopilar_requisitos",
                    procesoNombre: "Recopilar requisitos",
                },
                {
                    procesoRuta: "definir_el_alcance",
                    procesoNombre: "Definir el alcance",
                },
                {
                    procesoRuta: "crear_la_edt_wbs",
                    procesoNombre: "Crear la EDT/WBS",
                },
                {
                    procesoRuta: "planificar_la_gestion_del_cronograma",
                    procesoNombre: "Planificar la gestión del cronograma",
                },
                {
                    procesoRuta: "definir_las_actividades",
                    procesoNombre: "Definir las actividades",
                },
                {
                    procesoRuta: "secuenciar_las_actividades",
                    procesoNombre: "Secuenciar las actividades",
                },
                {
                    procesoRuta: "estimar_la_duracion_de_las_actividades",
                    procesoNombre: "Estimar la duración de las actividades",
                },
                {
                    procesoRuta: "desarrollar_el_cronograma",
                    procesoNombre: "Desarrollar el cronograma",
                },
                {
                    procesoRuta: "planificar_la_gestion_de_los_costos",
                    procesoNombre: "Planificar la gestión de los costos",
                },
                {
                    procesoRuta: "estimar_los_costos",
                    procesoNombre: "Estimar los costos",
                },
                {
                    procesoRuta: "determinar_el_presupuesto",
                    procesoNombre: "Determinar el presupuesto",
                },
                {
                    procesoRuta: "planificar_el_involucramiento_de_los_interesados",
                    procesoNombre: "Planificar el involucramiento de los interesados",
                },



            ]
        },
        {
            fase:"grupo_de_procesos_de_ejecucion",
            nombreFase: "Grupo de procesos de ejecución",
            state: grupoDeProcesosDeEjecucion,
            setState: setGrupoDeProcesosDeEjecucion,
            subprocesos:[
                {
                    procesoRuta: "dirigir_y_gestionar_el_trabajo_del_proyecto",
                    procesoNombre: "Dirigir y gestionar el trabajo del proyecto",
                },
                {
                    procesoRuta: "gestionar_el_conocimiento_del_proyecto",
                    procesoNombre: "Gestionar el conocimiento del proyecto",
                },
                {
                    procesoRuta: "gestionar_la_participacion_de_los_interesados",
                    procesoNombre: "Gestionar la participación de los interesados",
                },


            ]
        },
        {
            fase:"grupo_de_procesos_de_monitoreo_y_control",
            nombreFase: "Grupo de procesos de monitoreo y control",
            state: grupoDeProcesosDeMonitoreoYControl,
            setState: setGrupoDeProcesosDeMonitoreoYControl,
            subprocesos:[
                {
                    procesoRuta: "monitorear_y_controlar_el_trabajo_del_proyecto",
                    procesoNombre: "Monitorear y controlar el trabajo del proyecto",
                },
                {
                    procesoRuta: "realizar_el_control_integrado_de_cambios",
                    procesoNombre: "Realizar el control integrado de cambios",
                },
                {
                    procesoRuta: "validar_el_alcance",
                    procesoNombre: "Validar el alcance",
                },
                {
                    procesoRuta: "controlar_el_alcance",
                    procesoNombre: "Controlar el alcance",
                },
                {
                    procesoRuta: "controlar_el_cronograma",
                    procesoNombre: "Controlar el cronograma",
                },
                {
                    procesoRuta: "controlar_los_costos",
                    procesoNombre: "Controlar los costos",
                },
                {
                    procesoRuta: "monitorear_el_involucramiento_de_los_interesados",
                    procesoNombre: "Monitorear el involucramiento de los interesados",
                },
            ]
        },

        {
            fase:"grupo_de_procesos_de_cierre",
            nombreFase: "Gestión de interesados del proyecto",
            state: grupoDeProcesosDeCierre,
            setState: setGrupoDeProcesosDeCierre,
            subprocesos:[
   
            ]
        },

        {
            fase:"entregables",
            nombreFase: "Entregable",
            state: entregables,
            setState: setEntregables,
            subprocesos:[
                {
                    procesoRuta: "primer_entregable",
                    procesoNombre: "Primer entregable",
                },
            ]
        },

        {
            fase:"sesion",
            nombreFase: "Actividad. Sesión 6",
            state: actividadGrupal,
            setState: setActividadGrupal,
            subprocesos:[
                {
                    procesoRuta: "actividad_sesion",
                    procesoNombre: "Actividad Grupal",
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
                                    e.state === true ? (<i className="fa-sharp fa-solid fa-chevron-up"></i>) : (<i className="fa-solid fa-chevron-down"></i>)
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