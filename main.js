// Verificar si el dispositivo es una computadora
if (window.innerWidth > 768) {
    // Obtener el elemento que deseas aplicar el efecto hover
    const element = document.getElementById('containerAround');
    const imagen = document.getElementById('imagenTop');    
    const texto = document.getElementById('textoCardh1');
    const textoParrafo = document.getElementById('textoCardParrafo');
    const textoEnlace = document.getElementById('textoCardEnlace');
    const boton = document.getElementsByClassName('botonSubpaginas');

    // Agregar el evento hover al elemento
    element.addEventListener('mouseover', () => {
        // Cambiar el background
        //element.style.backgroundColor = '#fae228';
        element.classList.add('hovered');
        // Cambiar el src de la imagen
        imagen.src = 'http://aroundthelab.com/wp-content/uploads/2024/02/PatataHome-Background-1.png';

        imagen.classList.add('imgCardAround');

        // Cambiar el color del texto
        texto.style.color = '#000';
        textoParrafo.style.color = '#000';
        textoEnlace.style.color = '#000';
        if (boton.length > 0) {
            boton[0].style.border='solid #000 2px';
        }

    });



    // Restaurar los estilos originales al quitar el hover
    element.addEventListener('mouseout', () => {
        // Restaurar el background
        imagen.src = 'http://aroundthelab.com/wp-content/uploads/2024/02/PatataHome-Background.png';
        
        //Restaurar el color del background
        element.classList.remove('hovered');
        //element.style.backgroundColor = '#000'

        // Restaurar el color del texto
        texto.style.color = '#fff';
        textoParrafo.style.color = '#fff';
        textoEnlace.style.color = '#fff';
        if (boton.length > 0) {
            boton[0].style.border='solid #fff 1px';
        }

    });
}

// Verificar si el dispositivo es un celular
if (window.innerWidth <= 768) {
    // Obtener el elemento que deseas aplicar el cambio de estilo al hacer scroll
    const element = document.getElementById('tu-elemento');

    // Agregar el evento scroll al documento
    document.addEventListener('scroll', () => {
        // Obtener la posición del elemento en relación al viewport
        const rect = element.getBoundingClientRect();

        // Verificar si el elemento está visible en el viewport
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            // Cambiar el background
            // Cambiar el background
        //element.style.backgroundColor = '#fae228';
        element.classList.add('hovered');
        // Cambiar el src de la imagen
        imagen.src = 'http://aroundthelab.com/wp-content/uploads/2024/02/PatataHome-Background-1.png';

        imagen.classList.add('imgCardAround');

        // Cambiar el color del texto
        texto.style.color = '#000';
        textoParrafo.style.color = '#000';
        textoEnlace.style.color = '#000';
        if (boton.length > 0) {
            boton[0].style.border='solid #000 2px';
        }
        } else {
            // Restaurar los estilos originales
            element.style.backgroundColor = '';
            element.style.backgroundImage = '';
            element.style.color = '';
        }
    });
}
