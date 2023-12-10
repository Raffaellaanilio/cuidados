const map = new maplibregl.Map({
    container: 'map',
    style:
        'https://api.maptiler.com/maps/streets-v2/style.json?key=LURvXrlYSjugh8dlAFR3',
    center: [-71.5430, -35.6751],
    zoom: 4
});

map.addControl(new maplibregl.NavigationControl());

function locateUser() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var userLocation = [position.coords.longitude, position.coords.latitude];
      
      // Mueve el mapa a la ubicación del usuario
      map.flyTo({
        center: userLocation,
        zoom: 15
      });
    }, function (error) {
      console.error('Error al obtener la ubicación del usuario:', error.message);
    });
  } else {
    alert('Tu navegador no admite la geolocalización.');
  }
}


 map.on('load', function () {
    map.addSource('regionesSource', {
        type: 'geojson',
        data: 'https://idembn.bienes.cl/geoserver/ChileLineal/ows?service=WFS&version=1.0.0&request=GetFeature&typename=ChileLineal&outputFormat=json&srs=EPSG%3A4326&srsName=EPSG%3A4326'
    });

    map.addLayer({
        id: 'regiones',
        type: 'line',
        source: 'regionesSource',
        paint: {
            'line-color': 'grey',  // Color de la línea
            'line-opacity': 0.8,   // Opacidad de la línea (0 a 1)
            'line-width': 2,       // Ancho de la línea en píxeles
            'line-dasharray': [2, 2],  // Establece un patrón de línea discontinua [longitud del segmento, espacio entre segmentos]
            'line-blur': 1        // Difuminado de la línea (0 a 1)
        }
    });
}); 


// Maneja el clic en el botón de alternar capa SENAME
$('#toggleSename').click(function () {
    // Obtiene la capa actual del mapa
    var layer = map.getLayer('sename');

    // Verifica si la capa está activa
    if (layer) {
        // Si está activa, la desactiva
        map.removeLayer('sename');
        map.removeSource('senameSource');
    } else {
        // Si está desactivada, la activa
        map.addSource('senameSource', {
            type: 'geojson',
            data: 'https://idembn.bienes.cl/geoserver/Sename/ows?service=WFS&version=1.0.0&request=GetFeature&typename=sename_comunas_cod&outputFormat=json&srs=EPSG%3A4326&srsName=EPSG%3A4326'
        });

        map.loadImage('/sename-icon.png', function (error, image) {
            if (error) throw error;

        map.addImage('sename-icon', image);

        map.addLayer({
            id: 'sename',
            type: 'symbol',
            source: 'senameSource',
            layout: {
                'icon-image': 'sename-icon',  // Nombre del ícono que cargaste
                'icon-size': 1,  // Tamaño del ícono
                'icon-allow-overlap': true
            }
        });
    })
    }
 });


// Maneja el clic en el botón de alternar capa ELEAM
$('#toggleEleam').click(function () {
    // Obtiene la capa actual del mapa
    var layer = map.getLayer('eleam');

    // Verifica si la capa está activa
    if (layer) {
        // Si está activa, la desactiva
        map.removeLayer('eleam');
        map.removeSource('eleamSource');
    } else {
        // Si está desactivada, la activa
        map.addSource('eleamSource', {
            type: 'geojson',
            data: 'https://idembn.bienes.cl/geoserver/eleam_/ows?service=WFS&version=1.0.0&request=GetFeature&typename=ELEAM&outputFormat=json&srs=EPSG%3A4326&srsName=EPSG%3A4326'
        });
        map.loadImage('/eleam-icon.png', function (error, image) {
            if (error) throw error;

        map.addImage('eleam-icon', image);

        map.addLayer({
            id: 'eleam',
            type: 'symbol',
            source: 'eleamSource',
            layout: {
                'icon-image': 'eleam-icon',  // Nombre del ícono que cargaste
                'icon-size': 1,  // Tamaño del ícono
                'icon-allow-overlap': true
            }
        });
    })
    }
 });

// Maneja el clic en el botón de alternar capa CAPACIDADES DIFERENTES
$('#toggleSenadis').click(function () {
    // Obtiene la capa actual del mapa
    var layer = map.getLayer('senadis');

    // Verifica si la capa está activa
    if (layer) {
        // Si está activa, la desactiva
        map.removeLayer('senadis');
        map.removeSource('senadisSource');
    } else {
        // Si está desactivada, la activa
        map.addSource('senadisSource', {
            type: 'geojson',
            data: 'https://idembn.bienes.cl/geoserver/SENADIS/ows?service=WFS&version=1.0.0&request=GetFeature&typename=SENADIS&outputFormat=json&srs=EPSG%3A4326&srsName=EPSG%3A4326'
        });
        map.loadImage('/senadis-icon.png', function (error, image) {
            if (error) throw error;

        map.addImage('senadis-icon', image);

        map.addLayer({
            id: 'senadis',
            type: 'symbol',
            source: 'senadisSource',
            layout: {
                'icon-image': 'senadis-icon',  // Nombre del ícono que cargaste
                'icon-size': 1,  // Tamaño del ícono
                'icon-allow-overlap': true
            }
        });
    })
    }
 });



// Añade un pop-up al mapa SENAME
map.on('click', 'sename', function (e) {
    // var imagen = e.features[0].properties.imagen; // Reemplaza 'nombre' con el nombre del campo en tus datos
    var nombre = e.features[0].properties.proyecto; // Reemplaza 'nombre' con el nombre del campo en tus datos
    var direccion = e.features[0].properties.direccion; // Reemplaza 'nombre' con el nombre del campo en tus datos
    var telefono = e.features[0].properties.telefono; // Reemplaza 'descripcion' con el nombre del campo en tus datos

 // Actualiza el contenido de la caja flotante

 document.getElementById('popup-content').innerHTML =
 `<h6><img style="width:10%" src="/sename-icon.png"></h6>
 <img src="#">
 <h3>${nombre}</h3>
 <p color="grey"><i>Residencia para niños y adolescentes</i></p> 
 <h6>${direccion}</h6>
 <h6><div class="icon-container"><i class="fas fa-phone phone-icon"></i></div>  ${telefono}</h6> 
 `
 // Muestra la caja flotante
 document.getElementById('floating-box').style.display = 'block';
});

function closeFloatingBox() {
  // Oculta la caja flotante
  document.getElementById('floating-box').style.display = 'none';
}


 

// Añade un pop-up al mapa ELEAM
map.on('click', 'eleam', function (e) {
    var nombre = e.features[0].properties.nom_eleam; // Reemplaza 'nombre' con el nombre del campo en tus datos
    var direccion = e.features[0].properties.direccion; // Reemplaza 'descripcion' con el nombre del campo en tus datos
    var telefono = e.features[0].properties.fono; // Reemplaza 'descripcion' con el nombre del campo en tus datos


  // Actualiza el contenido de la caja flotante

  document.getElementById('popup-content').innerHTML =
  `<h6><img style="width:10%" src="/eleam-icon.png"></h6>
  <img src="#">
  <h3>${nombre}</h3>
  <p color="grey"><i>Residencia para personas con capacidades diferentes</i></p> 
  <h6>${direccion}</h6>
  <h6><div class="icon-container"><i class="fas fa-phone phone-icon"></i></div>  ${telefono}</h6>
  <p>Residencia de ancianos</p>
  
  `

  // Muestra la caja flotante
 document.getElementById('floating-box').style.display = 'block';
});

function closeFloatingBox() {
  // Oculta la caja flotante
  document.getElementById('floating-box').style.display = 'none';
}
 

// Añade un pop-up al mapa CAPACIDADES DIFERENTES
map.on('click', 'senadis', function (e) {
    var nombre = e.features[0].properties.nombre; // Reemplaza 'nombre' con el nombre del campo en tus datos
    var direccion = e.features[0].properties.dirección; // Reemplaza 'descripcion' con el nombre del campo en tus datos
    var telefono = e.features[0].properties.teléfono; // Reemplaza 'descripcion' con el nombre del campo en tus datos


  // Actualiza el contenido de la caja flotante

  document.getElementById('popup-content').innerHTML =
  `<h6><img style="width:10%" src="/senadis-icon.png"></h6>
  <img src="#">
  <h3>${nombre}</h3>
  <p color="grey"><i>Residencia para adulto mayor</i></p> 
  <h6>${direccion}</h6>
  <h6><div class="icon-container"><i class="fas fa-phone phone-icon"></i></div>   ${telefono}</h6>
`
  

 // Muestra la caja flotante
 document.getElementById('floating-box').style.display = 'block';
});

function closeFloatingBox() {
  // Oculta la caja flotante
  document.getElementById('floating-box').style.display = 'none';
}


// Función para cambiar el cursor al pasar sobre un punto
function changeCursorOnMouseEnter(layerName) {
    map.on('mouseenter', layerName, function () {
        map.getCanvas().style.cursor = 'pointer';
    });
}

// Función para cambiar el cursor al salir de un punto
function changeCursorOnMouseLeave(layerName) {
    map.on('mouseleave', layerName, function () {
        map.getCanvas().style.cursor = '';
    });
}

// Llamas a las funciones para cada capa
changeCursorOnMouseEnter('sename');
changeCursorOnMouseLeave('sename');

changeCursorOnMouseEnter('eleam');
changeCursorOnMouseLeave('eleam');

changeCursorOnMouseEnter('senadis');
changeCursorOnMouseLeave('senadis');


// Array de objetos para las opciones de la lista desplegable de la región
var regionOptions = [
    { value: '01', label: 'Tarapacá', center: [-69.9533, -19.3419], zoom: 8 },
    { value: '02', label: 'Antofagasta', center: [-68.1193, -23.6509], zoom: 8 },
    { value: '03', label: 'Atacama', center: [-70.4024, -26.6415], zoom: 8 },
    { value: '04', label: 'Coquimbo', center: [-71.3375, -29.9711], zoom: 8 },
    { value: '05', label: 'Valparaíso', center: [-71.6275, -33.0472], zoom: 8 },
    { value: '06', label: 'OHiggins', center: [-70.9228, -34.5744], zoom: 9 },
    { value: '07', label: 'Maule', center: [-71.6924, -35.4259], zoom: 8 },
    { value: '08', label: 'Ñuble', center: [-72.4762, -36.6398], zoom: 9 },
    { value: '09', label: 'Biobío', center: [-71.6453, -37.1806], zoom: 8 },
    { value: '10', label: 'Araucanía', center: [-72.7107, -38.9489], zoom: 8 },
    { value: '11', label: 'Los Ríos', center: [-72.4638, -39.8132], zoom: 9 },
    { value: '12', label: 'Los Lagos', center: [-73.2412, -41.6372], zoom: 8 },
    { value: '13', label: 'Metropolitana', center: [-70.6483, -33.4691], zoom: 9 },
    { value: '14', label: 'Aysén', center: [-72.8258, -45.9864], zoom: 8 },
    { value: '15', label: 'Magallanes', center: [-70.9394, -53.0818], zoom: 7 }
    // Agrega más opciones según tus regiones
];

// Array de objetos para las opciones de la lista desplegable de la región
var comunaOptions = [
    {
      value: '15101',
      label: 'Arica',
      center: [-70.0667, -18.4667],
      zoom: 10
    },
    {
      value: '15102',
      label: 'Camarones',
      center: [-70.3167, -18.8167],
      zoom: 10
    },
    {
      value: '15201',
      label: 'Putre',
      center: [-69.5333, -18.0833],
      zoom: 10
    },
    {
      value: '15202',
      label: 'General Lagos',
      center: [-69.2500, -17.8667],
      zoom: 10
    },
  
    {
      value: '16101',
      label: 'Iquique',
      center: [-70.1667, -20.2500],
      zoom: 10
    },
    {
      value: '16102',
      label: 'Alto Hospicio',
      center: [-70.1333, -20.4167],
      zoom: 10
    },
    {
      value: '16201',
      label: 'Pozo Almonte',
      center: [-70.2833, -20.7333],
      zoom: 10
    },
    {
      value: '16202',
      label: 'Camiña',
      center: [-70.3500, -20.9333],
      zoom: 10
    },
    {
      value: '16203',
      label: 'Huara',
      center: [-70.5000, -21.1333],
      zoom: 10
    },
    {
      value: '16204',
      label: 'Iquique',
      center: [-70.1667, -20.2500],
      zoom: 10
    },
    {
      value: '16205',
      label: 'Tocopilla',
      center: [-70.0833, -22.3333],
      zoom: 10
    },
  
    // ...
  
  ];
  


// Llena las opciones de la lista desplegable de la región
regionOptions.forEach(function (option) {
    $('#regionDropdown').append($('<option>', {
        value: option.value,
        text: option.label
    }));
});

// Llena las opciones de la lista desplegable de la comuna
comunaOptions.forEach(function (option) {
    $('#comunaDropdown').append($('<option>', {
        value: option.value,
        text: option.label
    }));
});



// Actualiza el filtro del mapa y la extensión al cambiar la selección en la lista desplegable de la región
$('#regionDropdown').change(function () {
    var selectedRegion = $(this).val();
    var selectedOption = regionOptions.find(option => option.value === selectedRegion);


    // Centra el mapa en la región seleccionada
    map.flyTo({
        center: selectedOption.center,
        zoom: selectedOption.zoom
    });
});



 /* // Inicializa el mapa y solicita direcciones
 function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();

    var map = new google.maps.Map(document.getElementById('directionsPanel'), {
        zoom: 7,
        center: { lat: -34.397, lng: 150.644 }  // Centro de ejemplo
    });

    directionsRenderer.setMap(map);

    calculateAndDisplayRoute(directionsService, directionsRenderer);
}

// Calcula y muestra la ruta entre dos ubicaciones
function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService.route({
        origin: 'Origen, Ciudad',  // Reemplaza con tu dirección de origen
        destination: 'Destino, Ciudad',  // Reemplaza con tu dirección de destino
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsRenderer.setDirections(response);
        } else {
            window.alert('Error al obtener direcciones: ' + status);
        }
    });
}
 */


//Filtro comunas
function updateComunas() {
    var selectedRegion = document.getElementById('region').value;
    var comunasSelect = document.getElementById('comuna');

    // Oculta todas las comunas
    for (var i = 0; i < comunasSelect.options.length; i++) {
        comunasSelect.options[i].style.display = 'none';
    }

    // Muestra solo las comunas de la región seleccionada
    for (var i = 0; i < comunasSelect.options.length; i++) {
        var option = comunasSelect.options[i];
        if (option.getAttribute('data-region') === selectedRegion) {
            option.style.display = 'block';
        }
    }
}


map.on('error', function (e) {
    console.error('Error:', e.error);
});



