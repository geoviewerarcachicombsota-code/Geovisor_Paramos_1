const map = L.map('map').setView([4.5, -74.1], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

function addWms(layerName) {
  return L.tileLayer.wms(window.WMS_URL, {
    layers: layerName,
    format: 'image/png',
    transparent: true
  }).addTo(map);
}
addWms('paramos_geo:ecosistemas');

function buildDownloadUrl(typeName, format) {
  const base = window.WFS_URL;
  const params = new URLSearchParams({
    service: 'WFS',
    version: '1.0.0',
    request: 'GetFeature',
    typeName,
    outputFormat: format
  });
  return `${base}?${params.toString()}`;
}

document.getElementById('btnDescargarSHP')
  .addEventListener('click', () => window.open(buildDownloadUrl('paramos_geo:ecosistemas', 'shape-zip')));
document.getElementById('btnDescargarGeoJSON')
  .addEventListener('click', () => window.open(buildDownloadUrl('paramos_geo:ecosistemas', 'application/json')));
document.getElementById('btnDescargarCSV')
  .addEventListener('click', () => window.open(buildDownloadUrl('paramos_geo:ecosistemas', 'csv')));
