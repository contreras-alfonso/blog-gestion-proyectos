import React from 'react'

export const ActividadSesion = () => {
  return (
    <>
    <h1 className='titulo_blog'>1. Actividad sesión 6</h1>
    <div className="contenedor_blog">
    <div className="contenedor_informacion_2">
    <div className="contenedor_pdf">
      <a
        href="/docs/Caso práctico - grupal.pdf"
        className="enlace_pdf"
        target="_blank"
      >
        <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
      <object
        className="pdfview"
        type="application/pdf"
        data="/docs/Caso práctico - grupal.pdf"
      />
    </div>
    </div>

</div>


</>
  )
}
