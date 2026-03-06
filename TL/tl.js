const container = document.getElementById("container");
const filtro = document.getElementById("filtro");

let personajes = [];

fetch("tl.json")
  .then(res => res.json())
  .then(data => {
      personajes = data;
      mostrarPersonajes(personajes);
  });

function mostrarPersonajes(lista) {
    container.innerHTML = "";

    lista.forEach(personaje => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${personaje.imagen}" alt="${personaje.nombre}">
            <h2>${personaje.nombre}</h2>
            <p><strong>Casa:</strong> ${personaje.casa}</p>
        `;

        //  GUARDAMOS EL PERSONAJE Y REDIRIGIMOS
        card.addEventListener("click", () => {
            localStorage.setItem("personajeSeleccionado", JSON.stringify(personaje));
            window.location.href = "detalle.html";
        });

        container.appendChild(card);
    });
}

//  FILTRO
filtro.addEventListener("change", () => {
    const valor = filtro.value;

    if (valor === "todas") {
        mostrarPersonajes(personajes);
    } else {
        const filtrados = personajes.filter(p => p.casa === valor);
        mostrarPersonajes(filtrados);
    }
});