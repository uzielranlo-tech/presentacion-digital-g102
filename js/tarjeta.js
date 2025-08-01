document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar los elementos del DOM

    const tarjetaContenedor = document.getElementById('vista-tarjeta')
    const contenedorPrincipal = document.getElementById('contenido-principal')
    const btnExplorarCV = document.getElementById('btn-cv');
    const btnContacto = document.getElementById('btn-contacto');

    contenedorPrincipal.classList.add('desenfocado');

    function ocultarTarjeta() {
        // Oculta la tarjeta
        tarjetaContenedor.classList.add('oculto'); 
        
        // Quita el desenfoque
        contenedorPrincipal.classList.remove('desenfocado'); 
        
        // Muestra el botón de contacto
        btnContacto.style.display = 'block'; 
    }

    function mostrarTarjeta() {
        // Muestra la tarjeta
        tarjetaContenedor.classList.remove('oculto'); 

        // Aplica el desenfoque
        contenedorPrincipal.classList.add('desenfocado'); 

        // Oculta el botón de contacto
        btnContacto.style.display = 'none'; 
    }

    btnExplorarCV.addEventListener('click', ocultarTarjeta);

    btnContacto.addEventListener('click', mostrarTarjeta);

})