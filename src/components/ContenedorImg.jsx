import React from 'react'

export const ContenedorImg = ({img,size='80'}) => {
  return (
    <div className="contenedor_imagen_blog">
    <img
      src={`/images/${img}`}
      alt={img}
      className={`contenedor_informacion_img_${size}`}
    />
  </div>
  )
}
