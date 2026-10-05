// js/main.js

// Arreglo de datos estáticos para el prototipo (Emulación de Base de Datos)
const planesEntrenamiento = [
    {
        id: 1,
        nombre: "Pase Base",
        descripcion: "Acceso libre al área de musculación y cardio.",
        precio: "$15.000 / mes",
        caracteristicas: ["Acceso de 07:00 a 14:00", "Rutina estándar", "Uso de vestuarios"],
        destacado: false
    },
    {
        id: 2,
        nombre: "Fuerza Bruta Total",
        descripcion: "Pase libre sin restricciones horarias y clases grupales.",
        precio: "$22.000 / mes",
        caracteristicas: ["Acceso 24/7", "Funcional y Halterofilia", "Planificación personalizada", "App de seguimiento"],
        destacado: true
    },
    {
        id: 3,
        nombre: "Pase Elite",
        descripcion: "Entrenamiento guiado 1 a 1 y seguimiento nutricional.",
        precio: "$45.000 / mes",
        caracteristicas: ["3 sesiones semanales con PT", "Control mensual", "Acceso total", "Estacionamiento exclusivo"],
        destacado: false
    }
];

// Función modular para renderizar las tarjetas en el DOM
const renderizarPlanes = () => {
    const contenedorPlanes = document.getElementById('planes-container');

    // Validación de seguridad para evitar errores si el elemento no existe
    if (!contenedorPlanes) return;

    // Purgamos el contenedor antes de inyectar
    contenedorPlanes.innerHTML = '';

    // Iteramos sobre el arreglo de planes y construimos la estructura HTML
    planesEntrenamiento.forEach(plan => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-plan');
        
        // Aplicamos clase especial si el plan es el destacado
        if (plan.destacado) {
            tarjeta.classList.add('plan-destacado');
        }

        // Generamos la lista de características dinámicamente
        const listaCaracteristicas = plan.caracteristicas
            .map(caracteristica => `<li>${caracteristica}</li>`)
            .join('');

        // Inyectamos el template string
        tarjeta.innerHTML = `
            <div class="tarjeta-header">
                <h3>${plan.nombre}</h3>
                <p class="precio">${plan.precio}</p>
            </div>
            <div class="tarjeta-body">
                <p class="descripcion">${plan.descripcion}</p>
                <ul class="caracteristicas">
                    ${listaCaracteristicas}
                </ul>
            </div>
            <div class="tarjeta-footer">
                <button class="btn-primary">Asociarme</button>
            </div>
        `;

        contenedorPlanes.appendChild(tarjeta);
    });
};

// Inicializamos la ejecución únicamente cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    renderizarPlanes();
});
// ==========================================================================
// LÓGICA DE ANIMACIONES AL HACER SCROLL (Intersection Observer)
// ==========================================================================

const configurarAnimacionesScroll = () => {
    // Seleccionamos todos los elementos con la clase .fade-in
    const elementosAnimables = document.querySelectorAll('.fade-in');

    // Configuramos el observador
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                // El elemento entra en la pantalla (scroll hacia abajo o arriba)
                entrada.target.classList.add('visible');
            } else {
                // El elemento sale de la pantalla (se reinicia la animación)
                entrada.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    });

    // Asignamos el observador a cada elemento
    elementosAnimables.forEach(elemento => {
        observador.observe(elemento);
    });
};

// Aseguramos que se inicie junto con el resto del DOM
document.addEventListener('DOMContentLoaded', () => {
    renderizarPlanes(); // Tu función existente
    configurarAnimacionesScroll(); // Nueva función de scroll
});