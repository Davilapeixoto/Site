document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('mapa').addEventListener('click', function () {
        const mapContainer = document.getElementById('map');
        mapContainer.style.display = 'block';
        const map = L.map('map').setView([-8.58333, -35.38333], 13); 

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        L.marker([-8.58333, -35.38333]).addTo(map)
            .bindPopup('Gameleira, PE.<br>')
            .openPopup();
    });
});
