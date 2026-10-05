// js/admin.js

// Mock de base de datos para el prototipo
const sociosMock = [
    { id: "FB-001", nombre: "Lautaro J. Oliva", plan: "Fuerza Bruta Total", estado: "Activo" },
    { id: "FB-002", nombre: "Ignacio Martínez", plan: "Pase Base", estado: "Activo" },
    { id: "FB-003", nombre: "Sofía Arriaga", plan: "Pase Elite", estado: "Inactivo" },
    { id: "FB-004", nombre: "Marcos Del Sol", plan: "Fuerza Bruta Total", estado: "Activo" }
];

// Función para inyectar los socios en el DOM
const renderizarTablaSocios = () => {
    const tbody = document.getElementById('tabla-socios');
    
    // Validación de seguridad
    if (!tbody) {
        console.error("Error: Contenedor de tabla no encontrado.");
        return;
    }

    // Purgamos la tabla
    tbody.innerHTML = '';

    // Iteramos e inyectamos
    sociosMock.forEach(socio => {
        const tr = document.createElement('tr');
        
        // Lógica de colores según estado
        const claseEstado = socio.estado === 'Activo' ? 'activo' : 'inactivo';

        tr.innerHTML = `
            <td>${socio.id}</td>
            <td><strong>${socio.nombre}</strong></td>
            <td>${socio.plan}</td>
            <td><span class="status ${claseEstado}">${socio.estado}</span></td>
            <td>
                <button class="btn-action" title="Editar">✎</button>
                <button class="btn-action" title="Eliminar">🗑</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
};

// Eventos de inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderizarTablaSocios();
    
    // Botón de nuevo socio (Simulación)
    const btnNuevo = document.getElementById('btn-nuevo-socio');
    if(btnNuevo) {
        btnNuevo.addEventListener('click', () => {
            alert('Fuerza Bruta Admin: El módulo de creación requiere integración backend (Supabase) activa. Funcionalidad pausada en el prototipo.');
        });
    }
});