const container = document.getElementById('list-container');
const filter = document.getElementById('house-filter');

let allCharacters = [];

async function getCharacters() {
    try {
        const response = await fetch('https://hp-api.onrender.com/api/characters');
        const data = await response.json();

        allCharacters = data.filter(c => c.image !== "").slice(0, 40);
        renderCharacters(allCharacters);

    } catch (error) {
        console.error("Error cargando la API:", error);
    }
}

function renderCharacters(characters) {
    container.innerHTML = "";
    characters.forEach(char => createCard(char));
}

function createCard(char) {
    const card = document.createElement('div');
    card.className = 'row-card';

    card.innerHTML = `
        <img src="${char.image}" alt="${char.name}">
        <h2>${char.name}</h2>
        <p><b>Casa:</b> ${char.house || 'Ninguna'}</p>
        <p><b>Actor:</b> ${char.actor}</p>
    `;

    //  Evento click para ir al detalle
    card.addEventListener('click', () => {
        localStorage.setItem('selectedCharacter', JSON.stringify(char));
        window.location.href = "detail.html";
    });

    container.appendChild(card);
}

//  Evento del filtro
filter.addEventListener('change', (e) => {
    const selectedHouse = e.target.value;

    if (selectedHouse === "all") {
        renderCharacters(allCharacters);
    } else {
        const filtered = allCharacters.filter(c => c.house === selectedHouse);
        renderCharacters(filtered);
    }
});

getCharacters();