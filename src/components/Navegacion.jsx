import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { SeccionesNavegacion } from '../helpers/SeccionesNavegacion';


const Navegacion = ({navegacion,setNavegacion}) => {

    const [fixed,setFixed] = useState(false);
    const [fase,setFase] = useState('');
    const [proceso,setProceso] = useState('');
    const {pathname} = useLocation();
    const rutas = SeccionesNavegacion()


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
            <nav className={`sidebar ${navegacion ? 'w-[480px] p-[25px]' : 'w-0'}`}>
                <div className={`flex flex-col gap-1  w-full ${navegacion ? '' : 'none'}`}>
                    {rutas.map(e=>
                      <div  key={crypto.randomUUID()} className='p-3 border border-black/30  rounded-lg'>
                        <div onClick={()=>{e.setState(!e.state)}} className={` cursor-pointer flex justify-between items-center text-sm  mt-1 pr-3 ${e.state && 'mb-3'}`}>
                          <p>{e.nombreGrupo}</p>
                          {e.state ? (<i className="fa-sharp fa-solid fa-chevron-up text-xs"></i>) : (<i className="fa-solid fa-chevron-down text-xs"></i>)}
                        </div>
                        {e.areas.map(area=>(
                          <div className={`${!e.state && 'none'}`} key={crypto.randomUUID()}>
                            <div onClick={()=>{area.setState(!area.state)}} className='cursor-pointer flex justify-between text-sm border border-dashed border-black/30 p-3 rounded-lg mb-1'>
                              <p>{area.nombreArea}</p>
                              {area.state ? (<i className="fa-sharp fa-solid fa-chevron-up text-xs"></i>) : (<i className="fa-solid fa-chevron-down text-xs"></i>)}
                            </div>
                            {area.procesos.map(proceso=>(
                              <div key={crypto.randomUUID()} className={`cursor-pointer flex justify-between text-[14px] hover:bg-gray-100 ml-3 rounded-lg mb-1 ${!area.state && 'none'}`}>
                                 <a className='p-3 block w-full font-normal' href={`/${e.rutaGrupo}/${proceso.rutaProceso}`}>{proceso.nombreProceso}</a>
                              </div>
                            ))}
                          </div>
                          
                        ))}
                      </div>
                    )}
                </div>
            </nav>
        </div>

    </>
  )
}

export default Navegacion