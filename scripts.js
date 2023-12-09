const map = new maplibregl.Map({
    container: 'map',
    style:
        'https://api.maptiler.com/maps/streets-v2/style.json?key=LURvXrlYSjugh8dlAFR3',
    center: [-71.5430, -35.6751],
    zoom: 4
});


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

/* map.on('click', function () {
    map.addSource('eleamSource', {
        type: 'geojson',
        data: 'https://idembn.bienes.cl/geoserver/Sename/ows?service=WFS&version=1.0.0&request=GetFeature&typename=sename_comunas_cod&outputFormat=json&srs=EPSG%3A4326&srsName=EPSG%3A4326'
    });

    map.addLayer({
        id: 'eleam',
        type: 'circle',
        source: 'eleamSource',
        paint: {
            'circle-color': 'blue',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': 'rgba(0, 0, 0, 1)'
        }
    });
});


map.on('click', function () {
    map.addSource('senadisSource', {
        type: 'geojson',
        data: 'https://idembn.bienes.cl/geoserver/Sename/ows?service=WFS&version=1.0.0&request=GetFeature&typename=sename_comunas_cod&outputFormat=json&srs=EPSG%3A4326&srsName=EPSG%3A4326'
    });

    map.addLayer({
        id: 'senadis',
        type: 'circle',
        source: 'senadisSource',
        paint: {
            'circle-color': 'red',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': 'rgba(0, 0, 0, 1)'
        }
    });
}); */


/*      // Define el filtro por región
     var filter = ['==', 'CUT_REG', '13']; // Reemplaza con tus propios valores */


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
    var imagen = e.features[0].properties.imagen; // Reemplaza 'nombre' con el nombre del campo en tus datos
    var title = e.features[0].properties.proyecto; // Reemplaza 'nombre' con el nombre del campo en tus datos
    var content = e.features[0].properties.direccion; // Reemplaza 'descripcion' con el nombre del campo en tus datos

  // Actualiza el contenido de la caja flotante
  document.getElementById('popup-imagen').innerHTML = imagen;
  document.getElementById('popup-title').innerHTML = title;
  document.getElementById('popup-content').innerHTML = content;

  // Muestra la caja flotante
  document.getElementById('floating-box').style.display = 'block';
});

function closeFloatingBox() {
  // Oculta la caja flotante
  document.getElementById('floating-box').style.display = 'none';
}

    
// Añade un pop-up al mapa ELEAM
map.on('click', 'eleam', function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var properties = e.features[0].properties;

    // Crea el contenido del pop-up con información del punto
    var popupContent = `
        <div class="map-popup">
            <img src="https://lh5.googleusercontent.com/p/AF1QipMdH223nZmMwHatnTCkeL_B2d63ceZnLtkAObzG=w533-h240-k-no">
            <h4>${properties.nom_eleam}</h4>
            <p style="color:grey"><i>Residencia de ancianos</i></p>
            <h6>${properties.calle}</h6><h6>${properties.numero}</h6>
            <h6>Contacto ${properties.mail}</h6>
            <h6><div class="icon-container"><i class="fas fa-phone"></i></div> ${properties.fono}</h6>
            <div id="directionsPanel"></div>
        </div>
    `;

    // Añade el pop-up al mapa
    new maplibregl.Popup()
        .setLngLat(coordinates)
        .setHTML(popupContent)
        .addTo(map);
});

// Añade un pop-up al mapa CAPACIDADES DIFERENTES
map.on('click', 'senadis', function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var properties = e.features[0].properties;

    // Crea el contenido del pop-up con información del punto
    var popupContent = `
        <div class="map-popup">
            <img src="https://lh5.googleusercontent.com/p/AF1QipMdH223nZmMwHatnTCkeL_B2d63ceZnLtkAObzG=w533-h240-k-no">
            <h4>${properties.nombreraz}</h4>
            <p style="color:grey"><i>Centro para personas con capacidades diferentes</i></p>
            <h6>${properties.direccion}</h6>
            <h6>Contacto ${properties.correo}</h6>
            <h6><div class="icon-container"><i class="fas fa-phone"></i></div> ${properties.telefono}</h6>
            <div id="directionsPanel"></div>
        </div>
    `;

    // Añade el pop-up al mapa
    new maplibregl.Popup()
        .setLngLat(coordinates)
        .setHTML(popupContent)
        .addTo(map);
});


// Cambia el cursor al pasar sobre un punto
map.on('mouseenter', 'sename', function () {
    map.getCanvas().style.cursor = 'pointer';
});

// Cambia el cursor al salir de un punto
map.on('mouseleave', 'sename', function () {
    map.getCanvas().style.cursor = '';
});

// Array de objetos para las opciones de la lista desplegable de la región
var regionOptions = [
    { value: '01', label: 'Tarapacá', center: [-69.9533, -19.3419], zoom: 9 },
    { value: '02', label: 'Antofagasta', center: [-68.1193, -23.6509], zoom: 8 },
    { value: '03', label: 'Atacama', center: [-70.4024, -26.6415], zoom: 8 },
    { value: '04', label: 'Coquimbo', center: [-71.3375, -29.9711], zoom: 8 },
    { value: '05', label: 'Valparaíso', center: [-71.6275, -33.0472], zoom: 8 },
    { value: '06', label: 'O\'Higgins', center: [-70.9228, -34.5744], zoom: 9 },
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

map.on('error', function (e) {
    console.error('Error:', e.error);
});



