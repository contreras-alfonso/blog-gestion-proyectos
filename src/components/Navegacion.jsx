import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Navegacion = () => {

    const [fixed,setFixed] = useState(false);
    const [fase,setFase] = useState('');
    const [proceso,setProceso] = useState('');
    const {pathname} = useLocation();

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
    <nav className={`navbar_blog ${fixed ? 'fixed' : ''}`}>
        <ul>
            
            <li>
                <a className={`${fase=='procesos_de_inicio' && 'seccion_activa'}`} href="#">
                    Procesos de inicio
                </a>
                <ul>
                    <li>
                        <a href="/procesos_de_inicio/desarrollar_el_acta_de_consitucion" className={`${proceso==='desarrollar_el_acta_de_consitucion' ?  'seccion_activa' : ''}`} >1. Desarrollar el acta de constitución</a>
                        <a href="/procesos_de_inicio/analisis_de_los_interesados" className={`${proceso==='analisis_de_los_interesados' ?  'seccion_activa' : ''}`} >2. Análisis de interesados</a>
                        <a href="/procesos_de_inicio/analisis_de_alternativas" className={`${proceso==='analisis_de_alternativas' ?  'seccion_activa' : ''}`} >3. Análisis de alternativas</a>
                        <a href="/procesos_de_inicio/analisis_de_problemas_y_objetivos" className={`${proceso==='analisis_de_problemas_y_objetivos' ?  'seccion_activa' : ''}`} >4. Análisis de problemas y objetivos</a>
                        <a href="/procesos_de_inicio/matriz_de_marco_logico" className={`${proceso==='matriz_de_marco_logico' ?  'seccion_activa' : ''}`} >5. Matriz de marco lógico</a>

                    </li>
                </ul>
            </li>

            <li>
                <a className={`${fase=='gestion_del_alcance_del_proyecto' && 'seccion_activa'}`} href="#">
                    Gestión del alcance del proyecto
                </a>
                <ul>
                    <li>
                        <a href="/gestion_del_alcance_del_proyecto/planificar_la_gestion_del_alcance" className={`${proceso==='planificar_la_gestion_del_alcance' ?  'seccion_activa' : ''}`} >1. Planificar la gestión del alcance</a>
                        <a href="/gestion_del_alcance_del_proyecto/recopilar_requisitos" className={`${proceso==='recopilar_requisitos' ?  'seccion_activa' : ''}`} >2. Recopilar requisitos</a>
                        <a href="/gestion_del_alcance_del_proyecto/definir_el_alcance" className={`${proceso==='definir_el_alcance' ?  'seccion_activa' : ''}`} >3. Definir el alcance</a>
                        <a href="/gestion_del_alcance_del_proyecto/crear_la_edt_wbs" className={`${proceso==='crear_la_edt_wbs' ?  'seccion_activa' : ''}`} >4. Crear la EDT/WBS</a>

                    </li>
                </ul>
            </li>

            <li>
                <a className={`${fase=='gestion_del_cronograma_del_proyecto' && 'seccion_activa'}`} href="#">
                    Gestión de cronograma del proyecto
                </a>
                <ul>
                    <li>
                        <a href="/gestion_del_cronograma_del_proyecto/planificar_la_gestion_del_cronograma" className={`${proceso==='planificar_la_gestion_del_cronograma' ?  'seccion_activa' : ''}`} >1. Planificar la gestión del cronograma</a>
                        <a href="/gestion_del_cronograma_del_proyecto/definir_las_actividades" className={`${proceso==='definir_las_actividades' ?  'seccion_activa' : ''}`} >2. Definir las actividades</a>
                        <a href="/gestion_del_cronograma_del_proyecto/secuenciar_las_actividades" className={`${proceso==='secuenciar_las_actividades' ?  'seccion_activa' : ''}`} >3. Secuenciar las actividades</a>
                        <a href="/gestion_del_cronograma_del_proyecto/estimar_la_duracion_de_las_actividades" className={`${proceso==='estimar_la_duracion_de_las_actividades' ?  'seccion_activa' : ''}`} >4. Estimar la duración de las actividades</a>
                        <a href="/gestion_del_cronograma_del_proyecto/desarrollar_el_cronograma" className={`${proceso==='desarrollar_el_cronograma' ?  'seccion_activa' : ''}`} >5. Desarrollar el cronograma</a>

                    </li>
                </ul>
            </li>

            <li>
                <a className={`${fase=='gestion_de_los_costos_del_proyecto' && 'seccion_activa'}`} href="#">
                    Gestión de los costos del proyecto
                </a>
                <ul>
                    <li>
                        <a href="/gestion_de_los_costos_del_proyecto/planificar_la_gestion_de_los_costos" className={`${proceso==='planificar_la_gestion_de_los_costos' ?  'seccion_activa' : ''}`} >1. Planificar la gestión de los costos</a>
                        <a href="/gestion_de_los_costos_del_proyecto/estimar_los_costos" className={`${proceso==='estimar_los_costos' ?  'seccion_activa' : ''}`} >2. Estimar los costos</a>
                        <a href="/gestion_de_los_costos_del_proyecto/determinar_el_presupuesto" className={`${proceso==='determinar_el_presupuesto' ?  'seccion_activa' : ''}`} >3. Determinar el presupuesto</a>

                    </li>
                </ul>
            </li>

        </ul>
        </nav>
    </>
  )
}

export default Navegacion