const container = document.getElementById("perfil-container");

fetch("perfil.json")
  .then(res => res.json())
  .then(data => {
      container.innerHTML = `
        <div class="card">
            <img src="${data.imagen}" alt="${data.nombre}">
            <h2>${data.nombre}</h2>
            <p><strong>Edad:</strong> ${data.edad}</p>
            <p><strong>Carrera:</strong> ${data.carrera}</p>
            <p><strong>Universidad:</strong> ${data.universidad}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Teléfono:</strong> ${data.telefono}</p>
            <p><strong>Ciudad:</strong> ${data.ciudad}</p>
            <p><strong>Descripción:</strong> ${data.descripcion}</p>
            <h3>Habilidades</h3>
            <ul>
                ${data.habilidades.map(h => `<li>${h}</li>`).join("")}
            </ul>
        </div>
      `;
  });