const container = document.getElementById('detail-container');

const character = JSON.parse(localStorage.getItem('selectedCharacter'));

if (character) {
    container.innerHTML = `
        <div class="detail-card">
            <img src="${character.image}" alt="${character.name}">
            <h1>${character.name}</h1>
            <p><b>Casa:</b> ${character.house || 'Ninguna'}</p>
            <p><b>Actor:</b> ${character.actor}</p>
            <p><b>Especie:</b> ${character.species}</p>
            <p><b>Alias:</b> ${character.alternate_names.join(", ") || "Ninguno"}</p>
            <button onclick="goBack()">Volver</button>
        </div>
    `;
}

function goBack() {
    window.location.href = "index.html";
}