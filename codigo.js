document.getElementById('mapa').addEventListener('click', function () {
    // Exibe o mapa ao clicar no botão
    const mapContainer = document.getElementById('map');
    mapContainer.style.display = 'block';

    // Inicializa o mapa em Gameleira
    const map = L.map('map').setView([-8.58333, -35.38333], 13); // Latitude, longitude e zoom

    // Adiciona a camada de mapa do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Adiciona um marcador em Gameleira
    L.marker([-8.58333, -35.38333]).addTo(map)
        .bindPopup('Gameleira, PE.<br>Bem-vindo!')
        .openPopup();
});
