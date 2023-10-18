import React from 'react'

export const ModalImg = ({setModalImg,imagenSeleccionada}) => {
  return (
    <div className='flex items-center justify-center w-full h-screen fixed bottom-0 top-0 z-50 bg-black/95'>
        <p onClick={()=>{setModalImg(false)}} className='text-black/90 bg-white h-1 w-1 p-4 rounded-full flex items-center justify-center cursor-pointer absolute top-5 right-5'><i className="fa-solid fa-xmark"></i></p>
        <img src={imagenSeleccionada} className='w-9/12 h-4/5 rounded-lg' alt={imagenSeleccionada} />
    </div>
  )
}
