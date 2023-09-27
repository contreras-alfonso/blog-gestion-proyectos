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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/procesos_de_inicio",
    element: <Blog/>,
    children: [
      {
        path: "desarrollar_el_acta_de_consitucion",
        element: <DesarrollarActaConstitucion/>,
      },
      {
        path: "analisis_de_los_interesados",
        element: <AnalisisDeInteresados/>,
      },
      {
        path: "analisis_de_alternativas",
        element: <AnalisisDeAlternativas/>,
      },
      {
        path: "analisis_de_problemas_y_objetivos",
        element: <AnalisisDeProblemasYObjetivos/>,
      },
      {
        path: "matriz_de_marco_logico",
        element: <MatrizDeMarcoLogico/>,
      },
    ],
  },

  {
    path: "/gestion_del_alcance_del_proyecto",
    element: <Blog/>,
    children: [
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
    ],
  },

  {
    path: "/gestion_del_cronograma_del_proyecto",
    element: <Blog/>,
    children: [
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
    ],
  },
  
  {
    path: "/gestion_de_los_costos_del_proyecto",
    element: <Blog/>,
    children: [
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
