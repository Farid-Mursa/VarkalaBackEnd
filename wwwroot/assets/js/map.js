
var image = document.getElementsByClassName('paralax');
new simpleParallax(image, {
	orientation: 'down',
});

    var map = L.map('map').setView([53.1435, 8.2146], 13);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '<div class="leaflet-control-attribution leaflet-control">' +
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors ' +
        '© <a href="https://carto.com/attributions">CARTO</a>' +
        '</div>'
    }).addTo(map);

    var marker = L.marker([53.1435, 8.2146]).addTo(map);
    marker.bindPopup("<b>Oldenburg</b><br>City in Germany.");

    var customIcon = L.divIcon({
      className: 'leaflet-div-icon',
      html: '<svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M20 0C14.6957 0 9.60859 2.10714 5.85786 5.85786C2.10714 9.60859 0 14.6957 0 20C0 38 20 60 20 60C20 60 40 38 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0V0ZM20 28C18.4177 28 16.871 27.5308 15.5554 26.6518C14.2398 25.7727 13.2145 24.5233 12.609 23.0615C12.0035 21.5997 11.845 19.9911 12.1537 18.4393C12.4624 16.8874 13.2243 15.462 14.3431 14.3431C15.462 13.2243 16.8874 12.4624 18.4393 12.1537C19.9911 11.845 21.5997 12.0035 23.0615 12.609C24.5233 13.2145 25.7727 14.2398 26.6518 15.5554C27.5308 16.871 28 18.4177 28 20C28 22.1217 27.1571 24.1566 25.6569 25.6569C24.1566 27.1571 22.1217 28 20 28Z" fill="#c4b583" stroke="none"/>' +
        '</svg>',
      iconSize: [40, 60],
      iconAnchor: [20, 60],
      popupAnchor: [0, -60]
    });

    marker.setIcon(customIcon);