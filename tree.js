var tree = [
        {
            "id": "folder1", // ID de la categoría de la botonera inferior
            "nombre": "Personas mayores", //Nombre de la botonera inferior
            "titulo": "Programas para personas mayores (SENAMA)",
            "subtitulo": "Seleccione uno o más programas", //Texto de seleccionar
            "icono": "",
            "descripcion": "", // Descripción que puede salir en el panel de la izquierda respecto a cada folder
            "imagen": "", // Imagen que puede salir en el panel de la izquierda respecto a cada folder
            "capas": [
                {
                    "nombreCapa": "Condominios de viviendas tuteladas",
                    "trigger": "toggleCondominios", // ID del botón que activa la capa
                    "layerId": "Condominios", // ID del layer (en la función AddLayer)
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3Aa__02_Condominio&outputFormat=application%2Fjson", // source de la capa (link al servicio)
                    "iconUrl": "images/ProgramasSENAMA1.png", // Ruta del ícono de la capa
                    "type": "symbol", // tipo de geometría de la capa
                },
                {
                    "nombreCapa": "Centros Diurnos Comunitarios (CEDIAM)",
                    "trigger": "toggleCEDIAM",
                    "layerId": "CEDIAM",
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3Aa__01_Cediam&outputFormat=json&srs=EPSG%3A4326&srsName=EPSG%3A4326",
                    "iconUrl": "images/ProgramasSENAMA1.png",
                    "type": "symbol",

                },
                {
                    "nombreCapa": "Establecimiento de larga estadía (ELEAM)",
                    "trigger": "toggleELEAM",
                    "layerId": "ELEAM",
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3Aa__03_Eleam&outputFormat=application%2Fjson",
                    "iconUrl": "images/ProgramasSENAMA1.png",
                    "type": "symbol",

                },
                {
                    "nombreCapa": "Centros Diurnos Referenciales",
                    "trigger": "toggleReferenciales",
                    "layerId": "Referenciales",
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3Aa__04_Referenciales&outputFormat=application%2Fjson",
                    "iconUrl": "images/ProgramasSENAMA1.png",
                    "type": "symbol",

                },
                {
                    "nombreCapa": "Centros Domiciliarios",
                    "trigger": "toggleCentrosDomiciliarios",
                    "layerId": "CentrosDomiciliarios",
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3Aa__05_Centros&outputFormat=application%2Fjson",
                    "iconUrl": "images/ProgramasSENAMA1.png",
                    "type": "symbol",

                }
            ]
        },
        {
            "id": "folder2",
            "nombre": "Personas con discapacidad",
            "subtitulo": "Seleccione uno o más programas",
            "icono": "images/ProgramasSENADIS.png",
            "descripcion": "", // Descripción que puede salir en el panel de la izquierda respecto a cada folder
            "imagen": "", // Imagen que puede salir en el panel de la izquierda respecto a cada folder
            "capas": [
                {
                    "nombreCapa": "Adultos en residencias",
                    "trigger": "toggleAdultosResidencias",
                    "layerId": "AdultosResidencias",
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3AAdultosResidencias&outputFormat=application%2Fjson",
                    "iconUrl": "images/ProgramasSENADIS.png",
                    "type": "symbol",
                },
                {
                    "nombreCapa": "Desarrollo de organizaciones inclusivas (DOI)",
                    "trigger": "toggleDOI",
                    "layerId": "DOI",
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3ADOI&outputFormat=application%2Fjson",
                    "iconUrl": "images/ProgramasSENADIS.png",
                    "type": "symbol",

                },
            ]
        },
        {
            "id": "folder3",
            "nombre": "Cuidados y alivio a personas cuidadoras",
            "subtitulo": "Seleccione uno o más programas",
            "icono": "images/programasCuidados.png",
            "descripcion": "", // Descripción que puede salir en el panel de la izquierda respecto a cada folder
            "imagen": "", // Imagen que puede salir en el panel de la izquierda respecto a cada folder
            "capas": [
                {
                    "nombreCapa": "Programas del 4 al 7",
                    "trigger": "togglePrograma4a7",
                    "layerId": "Programa4a7",
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3Ap4a7cod&outputFormat=application%2Fjson",
                    "iconUrl": "images/programasCuidados.png",
                    "type": "symbol",

                },
                {
                    "nombreCapa": "Red local de apoyos y cuidados (municipios)",
                    "trigger": "toggleRedLocalMunicipios",
                    "layerId": "RedLocalMunicipios",
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3AredLocalSimplificado&maxFeatures=50&outputFormat=application%2Fjson",
                    "iconUrl": "images/RedLocalApoyosyCuidados.png",
                    "type": "fill",

                },
                {
                    "nombreCapa": "140 comunas de arribo territorial",
                    "trigger": "toggle140Comunas",
                    "layerId": "140Comunas",
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3Aa__140_comunas0&maxFeatures=50&outputFormat=application%2Fjson",
                    "iconUrl": "images/RedLocalApoyosyCuidados.png",
                    "type": "fill",

                }
            ]
        },
        {
            "id": "folder4",
            "nombre": "Niñas, Niños y Adolescentes",
            "subtitulo": "Seleccione uno o más programas",
            "icono": "images/ProgramasNNA.png",
            "descripcion": "", // Descripción que puede salir en el panel de la izquierda respecto a cada folder
            "imagen": "", // Imagen que puede salir en el panel de la izquierda respecto a cada folder
            "capas": [
                {
                    "nombreCapa": "Fondo de intervención y apoyo al desarrollo infantil (FIADI)",
                    "trigger": "toggleFIADI",
                    "layerId": "FIADI",
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3AFIADI&outputFormat=application%2Fjson",
                    "iconUrl": "images/ProgramasNNA.png",
                    "type": "symbol",

                },
                {
                    "nombreCapa": "Crecer en comunidad (HEPI)",
                    "trigger": "toggleHEPI",
                    "layerId": "HEPI",
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3AHepi&outputFormat=application%2Fjson",
                    "iconUrl": "images/ProgramasNNA.png",
                    "type": "symbol",

                },
                {
                    "nombreCapa": "Programa de Apoyo: Taller Nadie es Perfecto (NEP)",
                    "trigger": "toggleNEP",
                    "layerId": "NEP",
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3ANEP_cod&outputFormat=application%2Fjson",
                    "iconUrl": "images/ProgramasNNA.png",
                    "type": "symbol",

                },
            ]
        },
        {
            "id": "folder5",
            "nombre": "Instituciones con atención preferente",
            "subtitulo": "Seleccione",
            "icono": "images/edificio.png",
            "descripcion": "", // Descripción que puede salir en el panel de la izquierda respecto a cada folder
            "imagen": "", // Imagen que puede salir en el panel de la izquierda respecto a cada folder
            "capas": [
                {
                    "nombreCapa": "Correos de Chile",
                    "trigger": "toggleCorreosDeChile",
                    "layerId": "CorreosDeChile",
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3Alayer_05_correos_20240108104609&outputFormat=application%2Fjson",
                    "iconUrl": "images/correosChile.png",
                    "type": "symbol"

                },
                {
                    "nombreCapa": "Registro Civil",
                    "trigger": "toggleRegistroCivil",
                    "layerId": "RegistroCivil",
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3ARegistroCivil&outputFormat=application%2Fjson",
                    "iconUrl": "images/registroCivil.png",
                    "type": "symbol"

                },
                {
                    "nombreCapa": "Centros Comuninitarios de Cuidados",
                    "trigger": "toggleCCCP",
                    "layerId": "CCCP",
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3AAvances_CCCP&outputFormat=application%2Fjson",
                    "iconUrl": "images/CCCP.png",
                    "type": "symbol"

                },
    
            ]
        },
        {
            "id": "folder6",
            "nombre": "Comunas Chile Cuida",
            "subtitulo": "Seleccione",
            "icono": "images/Red.png",
            "descripcion": "", // Descripción que puede salir en el panel de la izquierda respecto a cada folder
            "imagen": "", // Imagen que puede salir en el panel de la izquierda respecto a cada folder
            "capas": [
                {
                    "nombreCapa": "140 comunas de arribo territorial",
                    "trigger": "toggle140Comunas",
                    "layerId": "140Comunas",
                    "sourceUrl": "https://geoportal.cepal.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode%3Aa__140_comunas&maxFeatures=50&outputFormat=application%2Fjson",
                    "iconUrl": "images/RedLocalApoyosyCuidados.png",
                    "type": "fill",

                }    
    
            ]
        },
    ]
