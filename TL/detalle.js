const container = document.getElementById("detalle-container");

const personaje = JSON.parse(localStorage.getItem("personajeSeleccionado"));

if (personaje) {
    container.innerHTML = `
        <div class="card-detalle">
            <img src="${personaje.imagen}" alt="${personaje.nombre}">
            <h2>${personaje.nombre}</h2>
            <p><strong>Casa:</strong> ${personaje.casa}</p>
            <p><strong>Rol:</strong> ${personaje.rol}</p>
            <p><strong>Estado:</strong> ${personaje.estado}</p>
            <p><strong>Temporadas:</strong> ${personaje.temporadas}</p>
            <button onclick="volver()">Volver</button>
        </div>
    `;
}

function volver() {
    window.location.href = "tl.html";
}