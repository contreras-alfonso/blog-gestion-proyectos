const landing_page_header = document.querySelector('.landing_page_header');
const anti_movimiento = document.querySelector('.anti_movimiento');
const menu_responsive = document.querySelector('.menu_responsive');
const contenedor_barra_menu = document.querySelector('.contenedor_barra_menu');
const menu_responsive_enlaces = document.querySelectorAll('.menu_responsive a');
const enlaces_herramientas = document.querySelectorAll('.enlace_herramienta');
const img_arbolProblemas = document.querySelector('.img_arbolProblemas');
const contenedor_descripcion = document.querySelector('.contenedor_descripcion');
const contenedor_spinner = document.querySelector('.contenedor_spinner');
const contenedor_imagenYdescripcion = document.querySelector('.contenedor_imagenYdescripcion');
const contenedor_imagen = document.querySelector('.contenedor_imagen');




enlaces_herramientas.forEach((e)=>{
    e.addEventListener('click',(e)=>{
        const enlace_activo = document.querySelector('.enlace_activo');
        if(enlace_activo){
            enlace_activo.classList.remove('enlace_activo');
        }
        e.target.classList.add('enlace_activo')
        e.preventDefault();
        const nombreAtributo = e.target.getAttribute('data-name');

        contenedor_imagenYdescripcion.style.height = '700px';
        contenedor_spinner.style.display = 'flex';
        contenedor_descripcion.style.display = 'none';
        contenedor_imagen.style.display = 'none';
        if(nombreAtributo==='arbol'){

            setTimeout(() => {
                img_arbolProblemas.src = 'images/arbol_problemas2.jpeg';
                img_arbolProblemas.alt = 'Arbol de problemas';
                contenedor_descripcion.innerHTML = `<p>El árbol de problemas es una herramienta utilizada en la planificación y resolución de problemas. Es una representación gráfica que permite identificar las causas y efectos de un problema, así como las relaciones entre ellos. Se utiliza principalmente en el campo de la gestión y la toma de decisiones.</p>
                <p>El árbol de problemas se construye a partir de un problema central, que se representa en la parte superior del árbol. A medida que se desciende por el árbol, se identifican las causas principales del problema, que se ramifican en diferentes ramas. Cada causa identificada se representa como un nodo en el árbol y se conecta con flechas que indican la relación de causa y efecto.</p>
    
                <p><i class="fa-solid fa-square-check check_verde"></i> Permite identificar y visualizar las causas de un problema de manera estructurada.</p>
                <p><i class="fa-solid fa-square-check check_verde"></i> Ayuda a comprender las relaciones de causa y efecto entre los elementos del problema.</p>
                <p><i class="fa-solid fa-square-check check_verde"></i> Facilita la colaboración y el trabajo en equipo al involucrar a todas las partes interesadas.</p>
                <p><i class="fa-solid fa-square-check check_verde"></i> Proporciona una base sólida para desarrollar estrategias y soluciones integrales.</p>
                <p><i class="fa-solid fa-square-check check_verde"></i> Ayuda a establecer objetivos claros y definir los resultados deseados.</p>`;

                
        contenedor_spinner.style.display = 'none';
        contenedor_descripcion.style.display = 'flex';
        contenedor_imagen.style.display = 'flex';
        contenedor_imagenYdescripcion.style.height = 'fit-content';
            }, 1000);

            return;
        }

        setTimeout(() => {
            img_arbolProblemas.src = 'images/mapa_empatia2.jpeg';
            img_arbolProblemas.alt = 'mapa de empatia';
            contenedor_descripcion.innerHTML = `<p>
            El mapa de empatía es una herramienta utilizada en el diseño de productos, servicios o experiencias para comprender y empatizar con los usuarios o clientes objetivo. Proporciona una representación visual de los pensamientos, sentimientos, necesidades y deseos de las personas a las que se busca satisfacer.</p>
        <p>El mapa de empatía se completa mediante la recopilación de información a través de la investigación de mercado, entrevistas, observación de usuarios y análisis de datos. Esta herramienta ayuda a comprender las motivaciones y preocupaciones de los usuarios, lo que a su vez facilita el desarrollo de soluciones más relevantes y efectivas, alineadas con las necesidades y deseos de los usuarios objetivos.</p>

        <p><i class="fa-solid fa-square-check check_verde"></i> Permite comprender mejor las necesidades y deseos de los usuarios.</p>
        <p><i class="fa-solid fa-square-check check_verde"></i> Facilita el diseño de soluciones más relevantes y efectivas.</p>
        <p><i class="fa-solid fa-square-check check_verde"></i> Ayuda a desarrollar empatía y comprensión hacia los usuarios.</p>
        <p><i class="fa-solid fa-square-check check_verde"></i> Permite identificar oportunidades de mejora y diferenciación.</p>
        <p><i class="fa-solid fa-square-check check_verde"></i> Reduce el riesgo de desarrollar productos o servicios que no satisfacen las necesidades del mercado.</p>`;
        contenedor_spinner.style.display = 'none';
        contenedor_descripcion.style.display = 'flex';
        contenedor_imagen.style.display = 'flex';
        contenedor_imagenYdescripcion.style.height = 'fit-content';
        }, 1000);

       
            
    });
})



menu_responsive_enlaces.forEach((e)=>{
    e.addEventListener('click',()=>{
        menu_responsive.classList.add('menu_oculto');
    })
})


contenedor_barra_menu.addEventListener('click',()=>{
    if(menu_responsive.classList.contains('menu_oculto')){
        //el menu esta inactivo, activarlo
        menu_responsive.classList.remove('menu_oculto');
        return;
    }

    menu_responsive.classList.add('menu_oculto');
})

window.addEventListener('scroll',()=>{
    const valorScroll = window.scrollY;
    if(valorScroll>0){
        landing_page_header.classList.add('header_scroll');
        anti_movimiento.classList.remove('anti_movimiento_inactivo');
        return;
    }

    landing_page_header.classList.remove('header_scroll');
    anti_movimiento.classList.add('anti_movimiento_inactivo');

})