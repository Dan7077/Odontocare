// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a elementos del DOM
    const formulario = document.getElementById('formulario-contacto');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');
    
    // Si el formulario existe en la página actual
    if (formulario) {
        // Agregar evento de envío al formulario
        formulario.addEventListener('submit', function(event) {
            // Prevenir el comportamiento predeterminado del formulario
            event.preventDefault();
            
            // Validar el formulario
            if (validarFormulario()) {
                // Simular envío (en un caso real, aquí iría la lógica para enviar datos al servidor)
                mostrarConfirmacion();
            }
        });
    }
    
    // Función para validar el formulario
    function validarFormulario() {
        // Obtener valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const servicio = document.getElementById('servicio').value;
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Validar que los campos requeridos no estén vacíos
        if (nombre === '') {
            mostrarError('Por favor, ingresa tu nombre completo.');
            return false;
        }
        
        if (email === '') {
            mostrarError('Por favor, ingresa tu correo electrónico.');
            return false;
        }
        
        // Validar formato de email con expresión regular
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarError('Por favor, ingresa un correo electrónico válido.');
            return false;
        }
        
        if (servicio === '') {
            mostrarError('Por favor, selecciona un servicio de interés.');
            return false;
        }
        
        if (mensaje === '') {
            mostrarError('Por favor, escribe tu mensaje.');
            return false;
        }
        
        // Si pasa todas las validaciones
        return true;
    }
    
    // Función para mostrar mensaje de error
    function mostrarError(mensaje) {
        alert(mensaje);
    }
    
    // Función para mostrar el mensaje de confirmación
    function mostrarConfirmacion() {
        // Ocultar el formulario
        formulario.style.display = 'none';
        
        // Mostrar el mensaje de confirmación
        mensajeConfirmacion.classList.add('mensaje-visible');
    }
});
    // Código para menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a elementos del menú hamburguesa
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // Verificar que los elementos existan antes de añadir eventos
    if (menuToggle && navMenu) {
        // Evento de clic para abrir/cerrar menú
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});