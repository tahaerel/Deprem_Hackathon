mapboxgl.accessToken = 'pk.eyJ1Ijoia29yYXlkdXJtYXoiLCJhIjoiY2wxaGQ4MTJkMGJ6YjNvbG5pMHhueW5tZCJ9.U8kwg2WrbZWmkM7LkHaJvQ';


// Mapbox harita örneği oluşturma
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [YOUR_LONGITUDE, YOUR_LATITUDE],
  zoom: YOUR_ZOOM_LEVEL,
  fullscreenControl: true // Tam ekran özelliği aktif
});

// 3D özelliklerini etkinleştirme
map.on('load', function() {
  map.addLayer({
    'id': '3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 15,
    'paint': {
      'fill-extrusion-color': '#aaa',
      'fill-extrusion-height': {
        'type': 'identity',
        'property': 'height'
      },
      'fill-extrusion-base': {
        'type': 'identity',
        'property': 'min_height'
      },
      'fill-extrusion-opacity': .6
    }
  });
});

// Bina verilerini haritaya ekleme
var buildings = [
  {
    coordinates: [BUILDING1_LONGITUDE, BUILDING1_LATITUDE],
    name: 'Building 1',
    height: BUILDING1_HEIGHT
  },
  {
    coordinates: [BUILDING2_LONGITUDE, BUILDING2_LATITUDE],
    name: 'Building 2',
    height: BUILDING2_HEIGHT
  },
  // Diğer binalar...
];

buildings.forEach(function(building) {
  var el = document.createElement('div');
  el.className = 'marker';
  el.style.backgroundColor = 'blue';
  el.style.width = '10px';
  el.style.height = '10px';
  
  new mapboxgl.Marker(el)
    .setLngLat(building.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 })
    .setHTML('<h3>' + building.name + '</h3><p>Height: ' + building.height + ' meters</p>'))
    .addTo(map);
});
