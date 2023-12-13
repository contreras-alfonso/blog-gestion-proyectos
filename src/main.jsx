import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './pages/Index';
import Blog from './layouts/Blog';
import AnalisisDeInteresados from './pages/procesos_de_inicio/AnalisisDeInteresados';
import DesarrollarActaConstitucion from './pages/procesos_de_inicio/DesarrollarActaConsitucion';
import AnalisisDeProblemasYObjetivos from './pages/procesos_de_inicio/AnalisisDeProblemasYObjetivos';
import MatrizDeMarcoLogico from './pages/procesos_de_inicio/MatrizDeMarcoLogico';
import PlanificarLaGestionDelAlcance from './pages/gestion_del_alcance_del_proyecto/PlanificarLaGestionDelAlcance';
import RecopilarRequisitos from './pages/gestion_del_alcance_del_proyecto/RecopilarRequisitos';
import DefinirElAlcance from './pages/gestion_del_alcance_del_proyecto/DefinirElAlcance';
import PlanificarLaGestionDelCronograma from './pages/gestion_del_cronograma_del_proyecto/PlanificarLaGestionDelCronograma';
import DefinirLasActividades from './pages/gestion_del_cronograma_del_proyecto/DefinirLasActividades';
import SecuenciarLasActividades from './pages/gestion_del_cronograma_del_proyecto/SecuenciarLasActividades';
import EstimarLaDuracionDeLasActividades from './pages/gestion_del_cronograma_del_proyecto/EstimarLaDuracionDeLasActividades';
import DesarrollarElCronograma from './pages/gestion_del_cronograma_del_proyecto/DesarrollarElCronograma';
import PlanificarLaGestionDeLosCostos from './pages/gestion_de_los_costos_del_proyecto/PlanificarLaGestionDeLosCostos';
import EstimarLosCostos from './pages/gestion_de_los_costos_del_proyecto/EstimarLosCostos';
import DeterminarElPresupuesto from './pages/gestion_de_los_costos_del_proyecto/DeterminarElPresupuesto';
import CrearLaEdtWbs from './pages/gestion_del_alcance_del_proyecto/CrearLaEdtWbs';
import AnalisisDeAlternativas from './pages/procesos_de_inicio/AnalisisDeAlternativas';
import { ActividadSesion } from './pages/actividad_sesiones/ActividadSesion';
import { IdentificarInteresados } from './pages/gestion_de_los_interesados_del_proyecto/IdentificarInteresados';
import { PlanificarInvolucramientoInteresados } from './pages/gestion_de_los_interesados_del_proyecto/PlanificarInvolucramientoInteresados';
import { PrimerEntregable } from './pages/entregables/PrimerEntregable';
import { ControlDeInvolucramientoDeLosInteresados } from './pages/monitoreo_control/ControlDeInvolucramientoDeLosInteresados';
import { ControlDelCronograma } from './pages/monitoreo_control/ControlDelCronograma';
import { ControlDeLosCostos } from './pages/monitoreo_control/ControlDeLosCostos';
import { DirigirYGestionarElTrabajoDelProyecto } from './pages/grupo_de_procesos_de_ejecucion/DirigirYGestionarElTrabajoDelProyecto';
import { GestionarElConocimientoDelProyecto } from './pages/grupo_de_procesos_de_ejecucion/GestionarElConocimientoDelProyecto';
import { GestionarLaParticipacionDeLosInteresados } from './pages/grupo_de_procesos_de_ejecucion/GestionarLaParticipacionDeLosInteresados';
import { MonitorearYControlarElTrabajoDelProyecto } from './pages/grupo_de_procesos_de_monitoreo_y_control/MonitorearYControlarElTrabajoDelProyecto';
import { RealizarElControlIntegradoDeCambios } from './pages/grupo_de_procesos_de_monitoreo_y_control/RealizarElControlIntegradoDeCambios';
import { ValidarElAlcance } from './pages/grupo_de_procesos_de_monitoreo_y_control/ValidarElAlcance';
import { ControlarElAlcance } from './pages/grupo_de_procesos_de_monitoreo_y_control/ControlarElAlcance';
import { DesarrollarElPlanParaLaDireccionDelProyecto } from './pages/grupo_de_procesos_de_planificacion/DesarrollarElPlanParaLaDireccionDelProyecto';
import { PrimerSprint } from './pages/sprints/PrimerSprint';
import { SegundoSprint } from './pages/sprints/SegundoSprint';
import { PlanificarLaGestionDeLaCalidad } from './pages/calidad/PlanificarLaGestionDeLaCalidad';
import { GestionarLaCalidad } from './pages/calidad/GestionarLaCalidad';
import { ControlarLaCalidad } from './pages/calidad/ControlarLaCalidad';
import { PlanificarLaGestionDeRecursos } from './pages/recursos/PlanificarLaGestionDeRecursos';
import { EstimarLosRecursosDeLasActividades } from './pages/recursos/EstimarLosRecursosDeLasActividades';
import { AdquirirRecursos } from './pages/recursos/AdquirirRecursos';
import { DesarrollarElEquipo } from './pages/recursos/DesarrollarElEquipo';
import { DirigirElEquipo } from './pages/recursos/DirigirElEquipo';
import { ControlarLosRecursos } from './pages/recursos/ControlarLosRecursos';
import { TercerSprint } from './pages/sprints/TercerSprint';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/grupo_de_procesos_de_inicio",
    element: <Blog/>,
    children: [
      {
        path: "desarrollar_el_acta_de_consitucion",
        element: <DesarrollarActaConstitucion/>,
      },
      {
        path: "identificar_los_interesados",
        element: <AnalisisDeInteresados/>,
      },
    ],
  },

  {
    path: "/grupo_de_procesos_de_planificacion",
    element: <Blog/>,
    children: [
      {
        path: "desarrollar_el_plan_para_la_direccion_del_proyecto",
        element: <DesarrollarElPlanParaLaDireccionDelProyecto/>,
      },
      {
        path: "planificar_la_gestion_del_alcance",
        element: <PlanificarLaGestionDelAlcance/>,
      },
      {
        path: "recopilar_requisitos",
        element: <RecopilarRequisitos/>,
      },
      {
        path: "definir_el_alcance",
        element: <DefinirElAlcance/>,
      },
      {
        path: "crear_la_edt_wbs",
        element: <CrearLaEdtWbs/>,
      },

      {
        path: "planificar_la_gestion_del_cronograma",
        element: <PlanificarLaGestionDelCronograma/>,
      },
      {
        path: "definir_las_actividades",
        element: <DefinirLasActividades/>,
      },
      {
        path: "secuenciar_las_actividades",
        element: <SecuenciarLasActividades/>,
      },
      {
        path: "estimar_la_duracion_de_las_actividades",
        element: <EstimarLaDuracionDeLasActividades/>,
      },
      {
        path: "desarrollar_el_cronograma",
        element: <DesarrollarElCronograma/>,
      },
      {
        path: "planificar_la_gestion_de_los_costos",
        element: <PlanificarLaGestionDeLosCostos/>,
      },
      {
        path: "estimar_los_costos",
        element: <EstimarLosCostos/>,
      },
      {
        path: "determinar_el_presupuesto",
        element: <DeterminarElPresupuesto/>,
      },
      {
        path: "planificar_el_involucramiento_de_los_interesados",
        element: <PlanificarInvolucramientoInteresados/>,
      },
      {
        path: "planificar_la_gestion_de_la_calidad",
        element: <PlanificarLaGestionDeLaCalidad/>,
      },
      {
        path: "planificar_la_gestion_de_recursos",
        element: <PlanificarLaGestionDeRecursos/>,
      },
      {
        path: "estimar_los_recursos_de_las_actividades",
        element: <EstimarLosRecursosDeLasActividades/>,
      },
    ],
  },

  {
    path: "/grupo_de_procesos_de_ejecucion",
    element: <Blog/>,
    children: [
      {
        path: "dirigir_y_gestionar_el_trabajo_del_proyecto",
        element: <DirigirYGestionarElTrabajoDelProyecto/>,
      },
      {
        path: "gestionar_el_conocimiento_del_proyecto",
        element: <GestionarElConocimientoDelProyecto/>,
      },
      {
        path: "gestionar_la_participacion_de_los_interesados",
        element: <GestionarLaParticipacionDeLosInteresados/>,
      },
      {
        path: "gestionar_la_calidad",
        element: <GestionarLaCalidad/>,
      },
      {
        path: "adquirir_recursos",
        element: <AdquirirRecursos/>,
      },
      {
        path: "desarrollar_el_equipo",
        element: <DesarrollarElEquipo/>,
      },
      {
        path: "dirigir_el_equipo",
        element: <DirigirElEquipo/>,
      },
    ],
  },
  
  {
    path: "/grupo_de_procesos_de_monitoreo_y_control",
    element: <Blog/>,
    children: [
      {
        path: "monitorear_y_controlar_el_trabajo_del_proyecto",
        element: <MonitorearYControlarElTrabajoDelProyecto/>,
      },
      {
        path: "realizar_el_control_integrado_de_cambios",
        element: <RealizarElControlIntegradoDeCambios/>,
      },
      {
        path: "validar_el_alcance",
        element: <ValidarElAlcance/>,
      },
      {
        path: "controlar_el_alcance",
        element: <ControlarElAlcance/>,
      },
      {
        path: "controlar_el_cronograma",
        element: <ControlDelCronograma/>,
      },
      {
        path: "controlar_los_costos",
        element: <ControlDeLosCostos/>,
      },
      {
        path: "monitorear_el_involucramiento_de_los_interesados",
        element: <ControlDeInvolucramientoDeLosInteresados/>,
      },
      {
        path: "controlar_la_calidad",
        element: <ControlarLaCalidad/>,
      },
      {
        path: "controlar_los_recursos",
        element: <ControlarLosRecursos/>,
      },
    ],
  },


  {
    path: "/entregables",
    element: <Blog/>,
    children: [
      {
        path: "primer_entregable",
        element: <PrimerEntregable/>,
      },
    ],
  },

  {
    path: "/sprints",
    element: <Blog/>,
    children: [
      {
        path: "sprint_1",
        element: <PrimerSprint/>,
      },
      {
        path: "sprint_2",
        element: <SegundoSprint/>,
      },

      {
        path: "sprint_3",
        element: <TercerSprint/>,
      },
    ],
  },

  {
    path: "/sesion",
    element: <Blog/>,
    children: [
      {
        path: "actividad_sesion",
        element: <ActividadSesion/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
