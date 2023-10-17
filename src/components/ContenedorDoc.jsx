import React from 'react'

export const ContenedorDoc = ({doc}) => {
  return (
    <div className="contenedor_pdf">
        <a
        href={`/docs/${doc}`}
        className="enlace_pdf"
        target="_blank"
        >
        <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
        <object
        className="pdfview"
        type="application/pdf"
        data={`/docs/${doc}`}
        />
    </div>
  )
}
