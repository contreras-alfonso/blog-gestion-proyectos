import React, { useState } from 'react'

export const SeccionesNavegacion = () => {

    const [grupoDeProcesosDeInicio,setGrupoDeProcesosDeInicio] = useState(false);
    const [grupoDeProcesosDePlanificacion,setGrupoDeProcesosDePlanificacion] = useState(false);
    const [grupoDeProcesosDeEjecucion,setGrupoDeProcesosDeEjecucion] = useState(false);
    const [grupoDeProcesosDeMonitoreoYControl,setGrupoDeProcesosDeMonitoreoYControl] = useState(false);
    const [grupoDeProcesosDeCierre,setGrupoDeProcesosDeCierre] = useState(false);
    const [gestionDeLaIntegracionDelProyecto1_1,setGestionDeLaIntegracionDelProyecto1_1] = useState(false);
    const [gestionDeLosInteresadosDelProyecto1_10,setGestionDeLosInteresadosDelProyecto1_10] = useState(false);
    
    const [gestionDeLaIntegracionDelProyecto2_1,setGestionDeLaIntegracionDelProyecto2_1] = useState(false);
    const [gestionDelAlcanceDelProyecto2_2,setGestionDelAlcanceDelProyecto2_2] = useState(false);
    const [gestionDelCronogramaDelProyecto2_3,setGestionDelCronogramaDelProyecto2_3] = useState(false);
    const [gestionDeLosCostosDelProyecto2_4,setGestionDeLosCostosDelProyecto2_4] = useState(false);
    const [gestionDeLaCalidadDelProyecto2_5,setGestionDeLaCalidadDelProyecto2_5] = useState(false);
    const [gestionDeLosRecursosDelProyecto2_6,setGestionDeLosRecursosDelProyecto2_6] = useState(false);
    const [gestionDeLasComunicacionesDelProyecto2_7,setGestionDeLasComunicacionesDelProyecto2_7] = useState(false);
    const [gestionDeLosRiesgosDelProyecto2_8,setGestionDeLosRiesgosDelProyecto2_8] = useState(false);
    const [gestionDeLasAdquisicionesDelProyecto2_9,setGestionDeLasAdquisicionesDelProyecto2_9] = useState(false);
    const [gestionDeLosInteresadosDelProyecto2_10,setGestionDeLosInteresadosDelProyecto2_10] = useState(false);


    const [gestionDeLaIntegracionDelProyecto3_1,setGestionDeLaIntegracionDelProyecto3_1] = useState(false);
    const [gestionDeLaCalidadDelProyecto3_5,setGestionDeLaCalidadDelProyecto3_5] = useState(false);
    const [gestionDeLosRecursosDelProyecto3_6,setGestionDeLosRecursosDelProyecto3_6] = useState(false);
    const [gestionDeLasComunicacionesDelProyecto3_7,setGestionDeLasComunicacionesDelProyecto3_7] = useState(false);
    const [gestionDeLosRiesgosDelProyecto3_8,setGestionDeLosRiesgosDelProyecto3_8] = useState(false);
    const [gestionDeLasAdquisicionesDelProyecto3_9,setGestionDeLasAdquisicionesDelProyecto3_9] = useState(false);
    const [gestionDeLosInteresadosDelProyecto3_10,setGestionDeLosInteresadosDelProyecto3_10] = useState(false);


    const [gestionDeLaIntegracionDelProyecto4_1,setGestionDeLaIntegracionDelProyecto4_1] = useState(false);
    const [gestionDelAlcanceDelProyecto4_2,setGestionDelAlcanceDelProyecto4_2] = useState(false);
    const [gestionDelCronogramaDelProyecto4_3,setGestionDelCronogramaDelProyecto4_3] = useState(false);
    const [gestionDeLosCostosDelProyecto4_4,setGestionDeLosCostosDelProyecto4_4] = useState(false);
    const [gestionDeLaCalidadDelProyecto4_5,setGestionDeLaCalidadDelProyecto4_5] = useState(false);
    const [gestionDeLosRecursosDelProyecto4_6,setGestionDeLosRecursosDelProyecto4_6] = useState(false);
    const [gestionDeLasComunicacionesDelProyecto4_7,setGestionDeLasComunicacionesDelProyecto4_7] = useState(false);
    const [gestionDeLosRiesgosDelProyecto4_8,setGestionDeLosRiesgosDelProyecto4_8] = useState(false);
    const [gestionDeLasAdquisicionesDelProyecto4_9,setGestionDeLasAdquisicionesDelProyecto4_9] = useState(false);
    const [gestionDeLosInteresadosDelProyecto4_10,setGestionDeLosInteresadosDelProyecto4_10] = useState(false);
    
    
    const [gestionDeLaIntegracionDelProyecto5_1,setGestionDeLaIntegracionDelProyecto5_1] = useState(false);

    const [sprints,setSprints] = useState(false);

  return [
    {
        nombreGrupo: "1. Grupo de procesos de inicio",
        rutaGrupo: "grupo_de_procesos_de_inicio",
        state:  grupoDeProcesosDeInicio,
        setState: setGrupoDeProcesosDeInicio,
        areas:[
            {
                nombreArea: "1.1 Gestión de Integración del proyecto",
                state:  gestionDeLaIntegracionDelProyecto1_1,
                setState: setGestionDeLaIntegracionDelProyecto1_1,
                procesos:[
                    {
                        nombreProceso:'1.1.1 Desarrollar el Acta de Constitución del Proyecto',
                        rutaProceso: 'desarrollar_el_acta_de_consitucion',
                    },
                ]
            },
            {
                nombreArea: "1.10 Gestión de los Interesados del Proyecto",
                state:  gestionDeLosInteresadosDelProyecto1_10,
                setState: setGestionDeLosInteresadosDelProyecto1_10,
                procesos:[
                    {
                        nombreProceso:'1.10.1 Identificar a los interesados',
                        rutaProceso: 'identificar_los_interesados',
                    },
                ]
            },

        ]
    },

    {
        nombreGrupo: "2. Grupo de Procesos de Planificación",
        rutaGrupo: "grupo_de_procesos_de_planificacion",
        state: grupoDeProcesosDePlanificacion ,
        setState: setGrupoDeProcesosDePlanificacion,
        areas:[
            // {
            //     nombreArea: "2.1 Gestión de Integración del proyecto",
            //     state:  gestionDeLaIntegracionDelProyecto2_1,
            //     setState: setGestionDeLaIntegracionDelProyecto2_1,
            //     procesos:[
            //         {
            //             nombreProceso:'2.1.1 Desarrollar el Plan para la dirección del proyecto',
            //             rutaProceso: 'desarrollar_el_plan_para_la_direccion_del_proyecto',
            //         },
            //     ]
            // },

            {
                nombreArea: "2.2 Gestión del alcance del proyecto",
                state:  gestionDelAlcanceDelProyecto2_2,
                setState: setGestionDelAlcanceDelProyecto2_2,
                procesos:[
                    {
                        nombreProceso:'2.2.1 Planificar la Gestión del Alcance',
                        rutaProceso: 'planificar_la_gestion_del_alcance',
                    },
                    {
                        nombreProceso:'2.2.2 Recopilar Requisitos',
                        rutaProceso: 'recopilar_requisitos',
                    },
                    {
                        nombreProceso:'2.2.3 Definir el Alcance',
                        rutaProceso: 'definir_el_alcance',
                    },
                    {
                        nombreProceso:'2.2.4 Crear la EDT/WBS',
                        rutaProceso: 'crear_la_edt_wbs',
                    },
                ]
            },

            {
                nombreArea: "2.3 Gestión del Cronograma del Proyecto",
                state: gestionDelCronogramaDelProyecto2_3,
                setState: setGestionDelCronogramaDelProyecto2_3,
                procesos:[
                    {
                        nombreProceso:'2.3.1 Planificar la Gestión del Cronograma',
                        rutaProceso: 'planificar_la_gestion_del_cronograma',
                    },
                    {
                        nombreProceso:'2.3.2 Definir las Actividades',
                        rutaProceso: 'definir_las_actividades',
                    },
                    {
                        nombreProceso:'2.3.3 Secuenciar las Actividades',
                        rutaProceso: 'secuenciar_las_actividades',
                    },
                    {
                        nombreProceso:'2.3.4 Estimar la Duración de las Actividades',
                        rutaProceso: 'estimar_la_duracion_de_las_actividades',
                    },
                    {
                        nombreProceso:'2.3.5 Desarrollar el Cronograma',
                        rutaProceso: 'desarrollar_el_cronograma',
                    },
                ]
            },

            {
                nombreArea: "2.4 Gestión de los Costos del Proyecto",
                state:  gestionDeLosCostosDelProyecto2_4,
                setState: setGestionDeLosCostosDelProyecto2_4,
                procesos:[
                    {
                        nombreProceso:'2.4.1 Planificar la Gestión de los Costos',
                        rutaProceso: 'planificar_la_gestion_de_los_costos',
                    },
                    {
                        nombreProceso:'2.4.2 Estimar los Costos',
                        rutaProceso: 'estimar_los_costos',
                    },
                    {
                        nombreProceso:'2.4.3 Determinar el presupuesto',
                        rutaProceso: 'determinar_el_presupuesto',
                    },
                ]
            },

            {
                nombreArea: "2.5 Gestión de la Calidad del Proyecto",
                state:  gestionDeLaCalidadDelProyecto2_5,
                setState:setGestionDeLaCalidadDelProyecto2_5 ,
                procesos:[
                    {
                        nombreProceso:'2.5.1 Planificar la Gestión de la Calidad',
                        rutaProceso: 'planificar_la_gestion_de_la_calidad',
                    },
                ]
            },

            // {
            //     nombreArea: "2.6. Gestión de los Recursos del Proyecto",
            //     state: gestionDeLosRecursosDelProyecto2_6 ,
            //     setState: setGestionDeLosRecursosDelProyecto2_6,
            //     procesos:[
            //         {
            //             nombreProceso:'2.6.1 Planificar la Gestión de Recursos',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //         {
            //             nombreProceso:'2.6.2 Estimar los Recursos de las Actividades',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //     ]
            // },

            // {
            //     nombreArea: "2.7. Gestión de las comunicaciones del Proyecto",
            //     state:  gestionDeLasComunicacionesDelProyecto2_7,
            //     setState: setGestionDeLasComunicacionesDelProyecto2_7,
            //     procesos:[
            //         {
            //             nombreProceso:'2.7.1 Planificar la Gestión de las comunicaciones',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //     ]
            // },

            // {
            //     nombreArea: "2.8 Gestión de los Riesgos del Proyecto",
            //     state: gestionDeLosRiesgosDelProyecto2_8 ,
            //     setState:setGestionDeLosRiesgosDelProyecto2_8 ,
            //     procesos:[
            //         {
            //             nombreProceso:'2.8.1 Planificar la Gestión de los Riesgos',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //         {
            //             nombreProceso:'2.8.2 Identificar los Riesgos',
            //             rutaProceso: '2.3 Definir el Alcance',
            //         },
            //         {
            //             nombreProceso:'2.8.3 Realizar el Análisis Cualitativo de Riesgos',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //         {
            //             nombreProceso:'2.8.4 Realizar el análisis cuantitativo de Riesgos',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //         {
            //             nombreProceso:'2.8.5 Planificar la Respuesta a los Riesgos',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //     ]
            // },

            // {
            //     nombreArea: "2.9 Gestión de las Adquisiciones del Proyecto",
            //     state:  gestionDeLasAdquisicionesDelProyecto2_9,
            //     setState: setGestionDeLasAdquisicionesDelProyecto2_9,
            //     procesos:[
            //         {
            //             nombreProceso:'2.9.1 Planificar la Gestión de las Adquisiciones',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //     ]
            // },

            
            {
                nombreArea: "2.10. Gestión de los Interesados del Proyecto",
                state: gestionDeLosInteresadosDelProyecto2_10 ,
                setState:setGestionDeLosInteresadosDelProyecto2_10 ,
                procesos:[
                    {
                        nombreProceso:'2.10.1 Planificar el involucramiento de los Interesados',
                        rutaProceso: 'planificar_el_involucramiento_de_los_interesados',
                    },
                ]
            },

        ]
    },

    {
        nombreGrupo: "3. Grupo de Procesos de Ejecución",
        rutaGrupo: "grupo_de_procesos_de_ejecucion",
        state: grupoDeProcesosDeEjecucion ,
        setState: setGrupoDeProcesosDeEjecucion,
        areas:[
            {
                nombreArea: "3.1 Gestión de Integración del proyecto",
                state: gestionDeLaIntegracionDelProyecto3_1 ,
                setState:setGestionDeLaIntegracionDelProyecto3_1 ,
                procesos:[
                    {
                        nombreProceso:'3.1.1 Dirigir y Gestionar el Trabajo del Proyecto',
                        rutaProceso: 'dirigir_y_gestionar_el_trabajo_del_proyecto',
                    },
                    {
                        nombreProceso:'3.1.2 Gestionar el Conocimiento del Proyecto',
                        rutaProceso: 'gestionar_el_conocimiento_del_proyecto',
                    },
                ]
            },

            {
                nombreArea: "3.5. Gestión de la Calidad del Proyecto",
                state:  gestionDeLaCalidadDelProyecto3_5,
                setState: setGestionDeLaCalidadDelProyecto3_5 ,
                procesos:[
                    {
                        nombreProceso:'3.5.1 Gestionar la Calidad',
                        rutaProceso: 'desarrollar_el_acta_de_consitucion',
                    },
                ]
            },

            // {
            //     nombreArea: "3.6. Gestión de los Recursos del Proyecto",
            //     state:  gestionDeLosRecursosDelProyecto3_6,
            //     setState: setGestionDeLosRecursosDelProyecto3_6,
            //     procesos:[
            //         {
            //             nombreProceso:'3.6.1 Adquirir Recursos',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //         {
            //             nombreProceso:'3.6.2 Desarrollar el equipo',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //         {
            //             nombreProceso:'3.6.3 Dirigir el Equipo',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //     ]
            // },

            // {
            //     nombreArea: "3.7. Gestión de las comunicaciones del Proyecto",
            //     state:  gestionDeLasComunicacionesDelProyecto3_7,
            //     setState: setGestionDeLasComunicacionesDelProyecto3_7,
            //     procesos:[
            //         {
            //             nombreProceso:'3.7.1 Gestionar las Comunicaciones',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //     ]
            // },

            // {
            //     nombreArea: "3.8. Gestión de los Riesgos del Proyecto",
            //     state:  gestionDeLosRiesgosDelProyecto3_8,
            //     setState: setGestionDeLosRiesgosDelProyecto3_8,
            //     procesos:[
            //         {
            //             nombreProceso:'3.8.1 Implementar la Respuesta a los Riesgos',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //     ]
            // },

            // {
            //     nombreArea: "3.9 Gestión de las Adquisiciones del Proyecto",
            //     state:  gestionDeLasAdquisicionesDelProyecto3_9,
            //     setState: setGestionDeLasAdquisicionesDelProyecto3_9,
            //     procesos:[
            //         {
            //             nombreProceso:'3.9.1 Efectuar las Adquisiciones',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //     ]
            // },

            
            {
                nombreArea: "3.10 Gestión de los Interesados del Proyecto",
                state:  gestionDeLosInteresadosDelProyecto3_10,
                setState: setGestionDeLosInteresadosDelProyecto3_10,
                procesos:[
                    {
                        nombreProceso:'3.10.1 Gestionar la Participación de los Interesados',
                        rutaProceso: 'gestionar_la_participacion_de_los_interesados',
                    },
                ]
            },

        ]
    },

    {
        nombreGrupo: "4 Grupo de Procesos de Monitoreo y Control",
        rutaGrupo: "grupo_de_procesos_de_monitoreo_y_control",
        state: grupoDeProcesosDeMonitoreoYControl ,
        setState: setGrupoDeProcesosDeMonitoreoYControl,
        areas:[
            {
                nombreArea: "4.1 Gestión de Integración del proyecto",
                state:  gestionDeLaIntegracionDelProyecto4_1,
                setState: setGestionDeLaIntegracionDelProyecto4_1,
                procesos:[
                    {
                        nombreProceso:'4.1.1 Monitorear y Controlar el Trabajo del Proyecto',
                        rutaProceso: 'monitorear_y_controlar_el_trabajo_del_proyecto',
                    },
                    {
                        nombreProceso:'4.1.2 Realizar el Control Integrado de Cambios',
                        rutaProceso: 'realizar_el_control_integrado_de_cambios',
                    },
                ]
            },

            {
                nombreArea: "4.2. Gestión del alcance del proyecto",
                state:  gestionDelAlcanceDelProyecto4_2,
                setState: setGestionDelAlcanceDelProyecto4_2,
                procesos:[
                    {
                        nombreProceso:'4.2.1 Validar el Alcance',
                        rutaProceso: 'validar_el_alcance',
                    },
                    {
                        nombreProceso:'4.2.2 Controlar el Alcance',
                        rutaProceso: 'controlar_el_alcance',
                    },
                ]
            },

            {
                nombreArea: "4.3 Gestión del Cronograma del Proyecto",
                state:  gestionDelCronogramaDelProyecto4_3,
                setState: setGestionDelCronogramaDelProyecto4_3,
                procesos:[
                    {
                        nombreProceso:'4.3.1 Controlar el Cronograma',
                        rutaProceso: 'controlar_el_cronograma',
                    },
                ]
            },

            {
                nombreArea: "4.4 Gestión de los Costos del Proyecto",
                state:  gestionDeLosCostosDelProyecto4_4,
                setState: setGestionDeLosCostosDelProyecto4_4,
                procesos:[
                    {
                        nombreProceso:'4.4.1 Controlar los Costos',
                        rutaProceso: 'controlar_los_costos',
                    },
                ]
            },

            {
                nombreArea: "4.5 Gestión de la Calidad del Proyecto",
                state:  gestionDeLaCalidadDelProyecto4_5,
                setState: setGestionDeLaCalidadDelProyecto4_5,
                procesos:[
                    {
                        nombreProceso:'4.5.1 Controlar la Calidad',
                        rutaProceso: 'desarrollar_el_acta_de_consitucion',
                    },
                ]
            },

            // {
            //     nombreArea: "4.6 Gestión de los Recursos del Proyecto",
            //     state:  gestionDeLosRecursosDelProyecto4_6,
            //     setState: setGestionDeLosRecursosDelProyecto4_6,
            //     procesos:[
            //         {
            //             nombreProceso:'4.6.1 Controlar los Recursos',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //     ]
            // },

            // {
            //     nombreArea: "4.7 Gestión de las comunicaciones del Proyecto",
            //     state: gestionDeLasComunicacionesDelProyecto4_7 ,
            //     setState: setGestionDeLasComunicacionesDelProyecto4_7,
            //     procesos:[
            //         {
            //             nombreProceso:'4.7.1 Monitorear las Comunicaciones',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //     ]
            // },

            // {
            //     nombreArea: "4.8 Gestión de los Riesgos del Proyecto",
            //     state:  gestionDeLosRiesgosDelProyecto4_8,
            //     setState: setGestionDeLosRiesgosDelProyecto4_8,
            //     procesos:[
            //         {
            //             nombreProceso:'4.8.1 Monitorear los Riesgos',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //     ]
            // },

            // {
            //     nombreArea: "4.9 Gestión de las Adquisiciones del Proyecto",
            //     state:  gestionDeLasAdquisicionesDelProyecto4_9,
            //     setState: setGestionDeLasAdquisicionesDelProyecto4_9,
            //     procesos:[
            //         {
            //             nombreProceso:'4.9.1 Controlar las Adquisiciones',
            //             rutaProceso: 'desarrollar_el_acta_de_consitucion',
            //         },
            //     ]
            // },

            
            {
                nombreArea: "4.10 Gestión de los Interesados del Proyecto",
                state:  gestionDeLosInteresadosDelProyecto4_10,
                setState: setGestionDeLosInteresadosDelProyecto4_10,
                procesos:[
                    {
                        nombreProceso:'4.10.1 Monitorear el Involucramiento de los Interesados',
                        rutaProceso: 'monitorear_el_involucramiento_de_los_interesados',
                    },
                ]
            },

        ]
    },

    // {
    //     nombreGrupo: "5. Grupo de Procesos de Cierre",
    //     state: grupoDeProcesosDeCierre ,
    //     setState: setGrupoDeProcesosDeCierre ,
    //     areas:[
    //         {
    //             nombreArea: "5.1 Gestión de Integración del proyecto",
    //             state: gestionDeLaIntegracionDelProyecto5_1 ,
    //             setState: setGestionDeLaIntegracionDelProyecto5_1,
    //             procesos:[
    //                 {
    //                     nombreProceso:'5.1.1 Cerrar Proyecto o Fase',
    //                     rutaProceso: 'desarrollar_el_acta_de_consitucion',
    //                 },
    //             ]
    //         },

    //     ]
    // },

    {
        nombreGrupo: "Entregables",
        rutaGrupo: "sprints",
        state:  sprints,
        setState: setSprints,
        single:[
            {
                nombreProceso:'Primer Entregable',
                rutaProceso: '/entregables/primer_entregable',
            },
            {
                nombreProceso:'Sprint I',
                rutaProceso: '/sprints/sprint_1',
            },
            {
                nombreProceso:'Sprint II',
                rutaProceso: '/sprints/sprint_2',
            }
        ]
    },
    
]
}
