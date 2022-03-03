var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiYW5hY2FsbGVqYWMiLCJhIjoiY2wwYTQyN3ljMDc5dTNmbWp4aDYwanVkdCJ9.FvMUHUzOKlgFw5LfVEnkhw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Ruinas arqueológicas',
    subtitle: '10 principales sitios en América Latina',
    byline: 'ACC',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: 'ruina1',
            alignment: 'left',
            hidden: false,
            title: 'Teotihuacán (México)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Teotihuac%C3%A1n-5946r.JPG',
            description: 'Teotihuacán o Teotihuacan (en náhuatl: Teotiwahkan <lugar donde los hombres se convierten en dioses>; <ciudad de los dioses>),​ también Teohuacan, es el nombre que se da a la que fue una de las mayores ciudades multiétnicas de Mesoamérica. Los restos de la ciudad se encuentran al noreste del valle de México, aproximadamente a 78 kilómetros de distancia del centro de la Ciudad de México.',
            location: {
                center: [-98.84560, 19.69362],
                zoom: 16.40,
                pitch: 60.00,
                bearing: -40.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'ruina2',
                alignment: 'left',
                hidden: false,
                title: 'Monte Albán (México)',
                image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Borrala.JPG',
                description: 'Monte Albán es un sitio arqueológico localizado a 8 km de la ciudad de Oaxaca de Juárez. Fue la antigua capital de los zapotecos y una de las primeras ciudades de Mesoamérica, y de las más populares durante su auge. Se fundó aproximadamente 500 años a. C., floreciendo hasta 750 d. C., desde el declive de San José Mogote en el Preclásico Medio (1500-700 a. C.) hasta el ocaso de la ciudad, ocurrido alrededor del siglo IX.',
                location: {
                    center: [-96.77008, 17.04291],
                    zoom: 16.00,
                    pitch: 45.00,
                    bearing: 0.00
                },
                mapAnimation: 'flyTo',
                rotateAnimation: true,
                callback: '',
                onChapterEnter: [
                    // {
                    //     layer: 'layer-name',
                    //     opacity: 1,
                    //     duration: 5000
                    // }
                ],
                onChapterExit: [
                    // {
                    //     layer: 'layer-name',
                    //     opacity: 0
                    // }
                ]
            },

            {
                id: 'ruina3',
                    alignment: 'left',
                    hidden: false,
                    title: 'Uxmal (México)',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Uxmal_Yucatan_Mexico.JPG',
                    description: 'Uxmal u Óoxmáal (pronunciado [óːʃmáːl]) es una antigua ciudad maya del periodo clásico. Está localizado en el municipio de Santa Elena en el estado de Yucatán, México. En la actualidad es uno de los más importantes yacimientos arqueológicos de la cultura maya, junto con los de Chichén Itzá y Tikal. Se ubica en la llamada zona Puuc y es la ciudad más representativa de este estilo arquitectónico.',
                    location: {
                        center: [-89.77359, 20.35921],
                        zoom: 16.54,
                        pitch: 47.00,
                        bearing: -5.60
                    },
                    mapAnimation: 'flyTo',
                    rotateAnimation: true,
                    callback: '',
                    onChapterEnter: [
                        // {
                        //     layer: 'layer-name',
                        //     opacity: 1,
                        //     duration: 5000
                        // }
                    ],
                    onChapterExit: [
                        // {
                        //     layer: 'layer-name',
                        //     opacity: 0
                        // }
                    ]
                },

        {
        id: 'ruina4',
            alignment: 'left',
            hidden: false,
            title: 'Chichen Itzá (México)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Kukulcan-Temple-Chichen-Itza-west-side-2016-Luka-Peternel.jpg',
            description: 'Chichén Itzá (en maya: Chi ch e en (boca del pozo) its ja ([de los] brujos del agua))1​ es uno de los principales sitios arqueológicos de la península de Yucatán, en México. Está ubicado en el municipio de Tinum, en el estado de Yucatán. Consistió en una ciudad2​ o un centro ceremonial, que pasó por diversas épocas constructivas e influencias de los distintos pueblos que la ocuparon y que la impulsaron desde su fundación. Vestigio importante y renombrado de la civilización maya, las construcciones principales que ahí perduran corresponden al periodo denominado clásico tardío o posclásico temprano (800-1100 d. C.).',
            location: {
                center: [-88.57072, 20.68284],
                zoom: 16.40,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'ruina5',
                alignment: 'left',
                hidden: false,
                title: 'Tikal (Guatemala)',
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Tikal_Temple_II.jpg',
                description: 'Tikal (o Tik-al, de acuerdo con la ortografía maya moderna) es uno de los mayores yacimientos arqueológicos y centros urbanos de la civilización maya precolombina, junto con Calakmul, Chichén Itzá y Palenque. Está situado en el municipio de Flores, en el departamento de Petén, en el territorio actual de la República de Guatemala y forma parte del parque nacional Tikal.',
                location: {
                    center: [-89.62508, 17.22146],
                    zoom: 17.03,
                    pitch: 42.50,
                    bearing: 0.00
                },
                mapAnimation: 'flyTo',
                rotateAnimation: true,
                callback: '',
                onChapterEnter: [
                    // {
                    //     layer: 'layer-name',
                    //     opacity: 1,
                    //     duration: 5000
                    // }
                ],
                onChapterExit: [
                    // {
                    //     layer: 'layer-name',
                    //     opacity: 0
                    // }
                ]
            },

            {
                id: 'ruina6',
                    alignment: 'left',
                    hidden: false,
                    title: 'Copán (Honduras)',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Tikal_Temple_II.jpg',
                    description: 'Copán es un sitio arqueológico de la antigua civilización maya ubicado en el departamento de Copán al occidente de Honduras. Del siglo V al siglo IX fue la capital de un importante reino del periodo Clásico. La ciudad estaba situada en el extremo sureste de la región cultural Mesoaméricana, en la frontera con la región cultural istmo-colombiana, en una zona habitada por pueblos que no pertenecían a la etnia maya.',
                    location: {
                        center: [-89.14291, 14.83707],
                        zoom: 16.95,
                        pitch: 45.00,
                        bearing: -40.00
                    },
                    mapAnimation: 'flyTo',
                    rotateAnimation: true,
                    callback: '',
                    onChapterEnter: [
                        // {
                        //     layer: 'layer-name',
                        //     opacity: 1,
                        //     duration: 5000
                        // }
                    ],
                    onChapterExit: [
                        // {
                        //     layer: 'layer-name',
                        //     opacity: 0
                        // }
                    ]
                },
    

            {
                id: 'ruina7',
                    alignment: 'right',
                    hidden: false,
                    title: 'Machu Picchu (Perú)',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg',
                    description: 'Machu Picchu (pronunciado /ˈmɐt͡ʃʊ ˈpɪkt͡ʃʊ/ en quechua, «Monte viejo») es el nombre contemporáneo que se da a una llacta —antiguo poblado incaico andino— construida antes del siglo xv, ubicada en la Cordillera Oriental del sur del Perú, en la cadena montañosa de Los Andes a 2430 metros sobre el nivel del mar. Está ubicada en la región Cusco, provincia de Urubamba.',
                    location: {
                        center: [-72.54506, -13.16343],
                        zoom: 16.40,
                        pitch: 45.00,
                        bearing: -40.00
                    },
                    mapAnimation: 'flyTo',
                    rotateAnimation: true,
                    callback: '',
                    onChapterEnter: [
                        // {
                        //     layer: 'layer-name',
                        //     opacity: 1,
                        //     duration: 5000
                        // }
                    ],
                    onChapterExit: [
                        // {
                        //     layer: 'layer-name',
                        //     opacity: 0
                        // }
                    ]
                },

                {
                    id: 'ruina8',
                        alignment: 'left',
                        hidden: false,
                        title: 'Tiwanaku (Bolivia)',
                        image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Templo_de_Kalasasaya_a_socha_Monolito_Ponce_-_Tiwanaku_-_panoramio_%281%29.jpg',
                        description: 'Tiahuanaco1​ o Tiwanaku es una antigua ciudad arqueológica, capital del Estado tiahuanacota, ubicada 15 kilómetros al sureste del lago Titicaca en el departamento de La Paz al oeste de Bolivia.Tiahuanaco fue el centro de la civilización tiahuanacota, una cultura preincaica que basaba su economía en la agricultura, la ganadería y la arquitectura, y que abarcó los territorios de la meseta del Collao, entre el oeste de Bolivia, suroeste de Perú, el norte de Argentina y el norte de Chile.',
                        location: {
                            center: [-68.67448, -16.55579],
                            zoom: 17.21,
                            pitch: 54.50,
                            bearing: -18.40
                        },
                        mapAnimation: 'flyTo',
                        rotateAnimation: true,
                        callback: '',
                        onChapterEnter: [
                            // {
                            //     layer: 'layer-name',
                            //     opacity: 1,
                            //     duration: 5000
                            // }
                        ],
                        onChapterExit: [
                            // {
                            //     layer: 'layer-name',
                            //     opacity: 0
                            // }
                        ]
                    }

    ]
};
