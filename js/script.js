// DOM
document.addEventListener('DOMContentLoaded', function() {
    //  referencias del DOM
    const formulario = document.getElementById('formulario-contacto');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');
    
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (validarFormulario()) {
                mostrarConfirmacion();
            }
        });
    }
    
    function validarFormulario() {
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const servicio = document.getElementById('servicio').value;
        const mensaje = document.getElementById('mensaje').value.trim();
        
        
        if (nombre === '') {
            mostrarError('Por favor, ingresa tu nombre completo.');
            return false;
        }
        
        if (email === '') {
            mostrarError('Por favor, ingresa tu correo electrónico.');
            return false;
        }
        
        
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
        
        
        return true;
    }
    
    
    function mostrarError(mensaje) {
        alert(mensaje);
    }
    

    function mostrarConfirmacion() {
    
        formulario.style.display = 'none';
        
        
        mensajeConfirmacion.style.display ='block';
    }
});
    // menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    //  elementos 
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        // Evento de clic 
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

});

// Botón para mostrar/ocultar footer
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    
    // Crear botón
    const btnFooter = document.createElement('button');
    btnFooter.textContent = '👁️ Ocultar Footer';
    btnFooter.style.cssText = 'position: fixed; bottom: 20px; right: 20px; padding: 12px 24px; background: #3fbbc0; color: white; border: none; border-radius: 25px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.3); z-index: 9999;';
    
    document.body.appendChild(btnFooter);
    
    // Evento click
    let footerVisible = true;
    btnFooter.addEventListener('click', function() {
        if (footerVisible) {
            footer.style.display = 'none';
            btnFooter.textContent = '👁️ Mostrar Footer';
        } else {
            footer.style.display = 'block';
            btnFooter.textContent = '👁️ Ocultar Footer';
        }
        footerVisible = !footerVisible;
    });
});
