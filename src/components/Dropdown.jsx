import React from 'react'
import rutasDropdown from '../helpers/rutasDropdown'
import '../helpers/dropdown';

export const Dropdown = () => {
    const rutas = rutasDropdown()
    return (
        <>
        {rutas.map(e=>(
            <div key={crypto.randomUUID()} className="">
                {/*---------------- LEVEL 1 ---------------------*/}
                <div className="dropdown relative inline-flex cursor-pointer">
                    {/* dropdown text */}
                    <span className="dropdown-text flex px-4 py-3 bg-gray-400 rounded text-gray-800 items-center hover:bg-gray-800 hover:text-white whitespace-no-wrap">
                        {e.nombreGrupo}
                        <i className="material-icons ml-2 h-4 w-4 text-2xl inline-flex items-center justify-center">
                            keyboard_arrow_down
                        </i>
                    </span>
                    {/* dropdown text */}
                    {/* dropdown menu */}
                    
                    <div className="dropdown-menu flex flex-col hidden absolute">
                        {e.areas.map(area=>(
                        <div className="rounded flex flex-col flex-grow bg-red-400 divide-y divide-gray-200 z-40">
                            <div className="dropdown-item">
                                {/*---------------- LEVEL 2 ---------------------*/}
                                <div className="dropdown relative flex">
                                    {/* dropdown text */}
                                    <span className="dropdown-text flex px-4 py-3 bg-gray-400 rounded text-gray-800 items-center hover:bg-gray-800 hover:text-white whitespace-no-wrap">
                                        {area.nombreArea}
                                        <i className="material-icons ml-2 h-4 w-4 text-2xl inline-flex items-center justify-center">
                                            keyboard_arrow_down
                                        </i>
                                    </span>
                                  
                                    <div className=" dropdown-menu flex flex-grow hidden absolute">
                                        
                                        <div className="rounded flex flex-col flex-grow divide-y divide-gray-200">
                                        {area.procesos.map(proceso=>(
                                            <div className="bg-red-200  dropdown-item flex flex-grow">
                                                <a
                                                    href="#"
                                                    className="dropdown-link flex flex-grow px-4 py-3 text-gray-800 whitespace-no-wrap rounded hover:bg-gray-800 hover:text-white"
                                                >
                                                    {proceso.nombreProceso}
                                                </a>
                                            </div>
                                            ))}
                                        </div>
                                       
                                    </div>
                                  
                                    {/* dropdown menu */}
                                </div>
                                {/*---------------- LEVEL 2 ---------------------*/}
                            </div>
                        </div>
                          ))}
                    </div>
                  
                    {/* dropdown menu */}
                </div>
                {/*---------------- LEVEL 1 ---------------------*/}
            </div>
        ))}
        </>

    )
}
