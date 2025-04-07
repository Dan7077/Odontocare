// Script para cambiar entre tema claro y oscuro
document.addEventListener('DOMContentLoaded', function() {
    // Crear botón de cambio de tema
    const botonTema = document.createElement('button');
    botonTema.classList.add('tema-switch');
    botonTema.innerHTML = '<i class="fas fa-moon"></i>';
    botonTema.title = 'Cambiar tema';
    
    // Añadir botón al body
    document.body.appendChild(botonTema);
    
    // Escuchar evento de clic en el botón
    botonTema.addEventListener('click', function() {
        // Alternar clase dark-mode en el body
        document.body.classList.toggle('dark-mode');
        
        // Cambiar icono del botón según el tema
        if (document.body.classList.contains('dark-mode')) {
            botonTema.innerHTML = '<i class="fas fa-sun"></i>';
            botonTema.title = 'Cambiar a tema claro';
        } else {
            botonTema.innerHTML = '<i class="fas fa-moon"></i>';
            botonTema.title = 'Cambiar a tema oscuro';
        }
    });
});