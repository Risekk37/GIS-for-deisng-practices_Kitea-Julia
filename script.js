const baseURL = window.location.hostname === "localhost"
    ? "" 
    : "https://risekk37.github.io/GIS-for-design-practices_Kitae-Julia";


const styleURL = `${baseURL}/positron.json`;
const map1 = new maplibregl.Map({
    container: 'map1',
    style: `${baseURL}/positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 4,
    scrollZoom: false,
    dragPan: false
});


const map2 = new maplibregl.Map({
    container: 'map2',
    style: `${baseURL}/positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 4,
    scrollZoom: false,
    dragPan: false
});

const map3 = new maplibregl.Map({
    container: 'map3',
    style: `${baseURL}/positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 4,
    scrollZoom: false,
    dragPan: false
});

const map4 = new maplibregl.Map({
    container: 'map4',
    style: `${baseURL}/positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 4,
    scrollZoom: false,
    dragPan: false
});

const map5 = new maplibregl.Map({
    container: 'map5',
    style: `${baseURL}/positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 4,
    scrollZoom: false,
    dragPan: false
});

const map6 = new maplibregl.Map({
    container: 'map6',
    style: `${baseURL}/positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 4,
    scrollZoom: false,
    dragPan: false
});

/*const map7 = new maplibregl.Map({
    container: 'map7',
    style: `${baseURL}/positron.json`,
    center: [-79.32787967776974, 35.59208970407508],
    zoom:10,
    scrollZoom: false,
    dragPan: false
});*/

const map7 = new maplibregl.Map({
    container: 'map7',
    style: `${baseURL}/positron.json`,
    center: [-95.49896976107271, 29.600411958015386],
    zoom: 9,
    scrollZoom: false,
    dragPan: false
});

const map8Left = new maplibregl.Map({
    container: 'map8Left',
    style: `${baseURL}/positron_Small.json`,
    center: [-95.80155173605988, 29.403778064902202],
    zoom: 14.5,
    scrollZoom: false,
    dragPan: false,
    interactive: false, // 사용자 인터랙션 비활성화
});

const map8Right = new maplibregl.Map({
    container: 'map8Right',
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=BGvxuSGUKxhnbxMOYbXV',
    center: [-95.80155173605988, 29.403778064902202],
    zoom: 14.5,
    scrollZoom: false,
    dragPan: false,
    interactive: false, // 사용자 인터랙션 비활성화
});


// 모든 맵을 배열로 관리
const maps = [map1, map2,map3, map4, map5, map6];
const zoomLevel = 5;
// 공통 bounds 설정
const bounds = [
    [-120.6069919549103, 25.7269043062651 ], // 남서쪽 경도, 위도, 
    [-65.88793919356102, 51.33690746226263]   // 북동쪽 경도, 위도, 
];

// 모든 맵에 fitBounds 적용
maps.forEach((map) => {
    map.fitBounds(bounds, {
        padding: 20,
        animate: false
    });
});

// 화면 크기 변경 시 모든 맵에 대해 fitBounds 재적용
window.addEventListener('resize', () => {
    maps.forEach((map) => {
        map.fitBounds(bounds, {
            padding: 20,
            animate: false
        });
    });
});

const overlaySourceId = 'overlayImage';
const overlayImageUrl = `${baseURL}/geo7.png`;
const imageBounds = [
    [-125.09472580225837,49.37458957975434], // 남서쪽 (좌하단)
    [-65.72622388033614, 49.37458957975434],   // 남동쪽 (우하단) 
    [-65.72622388033614, 24.930728914474506],  // 북동쪽 (우상단)
    [-125.09472580225837, 24.930728914474506],  // 북서쪽 (좌상단)
];
// 공통 소스를 추가하는 함수
function addOverlaySource(map) {
    if (!map.getSource(overlaySourceId)) {
        map.addSource(overlaySourceId, {
            type: 'image',
            url: overlayImageUrl,
            coordinates: imageBounds
        });
    }
    // 레이어가 이미 추가되어 있는지 확인
    if (!map.getLayer('overlayImageLayer')) {
        map.addLayer({
            id: 'overlayImageLayer',
            type: 'raster',
            source: overlaySourceId,
            paint: {
                'raster-opacity': 0.1, // 투명도 조절
                'raster-brightness-min': 0,
                'raster-brightness-max': 1,
                'raster-contrast': 0.7,
                'raster-saturation': 0.5
            }
        });
    }
}

map1.on('load', () => {
    addOverlaySource(map1);
});
map2.on('load', () => {
    addOverlaySource(map2);
});
map3.on('load', () => {
    addOverlaySource(map3);
});
map4.on('load', () => {
    addOverlaySource(map4);
});
map5.on('load', () => {
    addOverlaySource(map5);
});
map6.on('load', () => {
    addOverlaySource(map6);
});

map1.on('load', () => {
    map1.addSource('Target', {
        type: 'geojson',
        data: `${baseURL}/Grocery/Target_Location.geojson`
    });
    
    map1.addLayer({
        id: 'Target-Circle-Fill',
        type: 'circle',
        source: 'Target',
        paint: {
            'circle-radius': 1,              // 원의 크기
            'circle-color': '#fffff0',       // 원의 내부 색상
            'circle-opacity': 1            // 원의 투명도
        }
    });
    
    // 테두리 선만 추가
    map1.addLayer({
        id: 'Target-Circle-Stroke',
        type: 'circle',
        source: 'Target',
        paint: {
            'circle-radius': 2.5,            // 원의 크기
            'circle-color': 'rgba(0, 0, 0, 0)',  // 원의 내부 색상을 투명하게 설정
            'circle-stroke-width': 0.5,       // 테두리 두께 설정
            'circle-stroke-color': '#fffff0',  // 테두리 색상 설정
            'circle-opacity': 0.0,
            'circle-stroke-opacity': 0.5            // 원의 투명도 설정
        }
    });
    map1.addSource('Trader', {
        type: 'geojson',
        data: `${baseURL}/Grocery/Trader_Joe_Location.geojson`
    });

    map1.addLayer({
        id: 'Trader-Circle',
        type: 'circle',
        source: 'Trader',
        paint: {
            'circle-radius': 1,
            'circle-color': '#fffff0',
            'circle-opacity': 1
        }
    });
    map1.addLayer({
        id: 'Trader-Circle-Stroke',
        type: 'circle',
        source: 'Trader',
        paint: {
            'circle-radius': 2.5,            // 원의 크기
            'circle-color': 'rgba(0, 0, 0, 0)',  // 원의 내부 색상을 투명하게 설정
            'circle-stroke-width': 0.5,       // 테두리 두께 설정
            'circle-stroke-color': '#fffff0',  // 테두리 색상 설정
            'circle-opacity': 0.0,
            'circle-stroke-opacity': 0.5            // 원의 투명도 설정
        }
    });
    map1.addSource('Walmart', {
        type: 'geojson',
        data: `${baseURL}/Grocery/Walmart_Location.geojson`
    });

    map1.addLayer({
        id: 'Walmart-Circle',
        type: 'circle',
        source: 'Walmart',
        paint: {
            'circle-radius': 1,
            'circle-color': '#fffff0',
            'circle-opacity': 1
        }
    });
    map1.addLayer({
        id: 'Walmart-Circle-Stroke',
        type: 'circle',
        source: 'Walmart',
        paint: {
            'circle-radius': 2.5,            // 원의 크기
            'circle-color': 'rgba(0, 0, 0, 0)',  // 원의 내부 색상을 투명하게 설정
            'circle-stroke-width': 0.5,       // 테두리 두께 설정
            'circle-stroke-color': '#fffff0',  // 테두리 색상 설정
            'circle-opacity': 0.0,
            'circle-stroke-opacity': 0.5           // 원의 투명도 설정
        }
    });

    map1.addSource('Whole', {
        type: 'geojson',
        data: `${baseURL}/Grocery/Whole_Food_Location.geojson`
    });

    map1.addLayer({
        id: 'Whole-Circle',
        type: 'circle',
        source: 'Whole',
        paint: {
            'circle-radius': 1,
            'circle-color': '#fffff0',
            'circle-opacity': 1
        }
    });
    map1.addLayer({
        id: 'Whole-Circle-Stroke',
        type: 'circle',
        source: 'Whole',
        paint: {
            'circle-radius': 2.5,                // 원의 크기
            'circle-color': 'rgba(0, 0, 0, 0)',   // 원의 내부 색상을 투명하게 설정
            'circle-stroke-width': 0.5,             // 테두리 두께 설정
            'circle-stroke-color': '#fffff0',     // 테두리 색상 설정
            'circle-opacity': 0.0,                // 원의 투명도 설정
            'circle-stroke-opacity': 0.5          // 원의 투명도 설정
        }
    });
    map1.addSource('UberEats', {
        type: 'geojson',
        data: `${baseURL}/Meal/Uber_Eats_C.json`,

    });
    map1.addLayer({
        id: 'UberEats-Fill',
        type: 'fill',  // MultiPolygon을 표시할 때 fill 타입 사용
        source: 'UberEats',
        paint: {
            'fill-color': '#06c167',    // 다각형 영역 색상
            'fill-opacity': 0.7         // 투명도 설정
        }
    });


    map1.addSource('GrubHub', {
        type: 'geojson',
        data: `${baseURL}/Meal/Grub_Hub_C.geojson`,

    });
    map1.addLayer({
        id: 'GrubHub-Fill',
        type: 'fill',  // MultiPolygon을 표시할 때 fill 타입 사용
        source: 'GrubHub',
        paint: {
            'fill-color': '#ff8000',    // 다각형 영역 색상
            'fill-opacity': 0.7         // 투명도 설정
        }
    });

    map1.addSource('DoorDash', {
        type: 'geojson',
        data: `${baseURL}/Meal/Door_Dash_C.geojson`,
    });
    map1.addLayer({
        id: 'DoorDash-Fill',
        type: 'fill',  // MultiPolygon을 표시할 때 fill 타입 사용
        source: 'DoorDash',
        paint: {
            'fill-color': '#EB1700',    // 다각형 영역 색상
            'fill-opacity': 0.7         // 투명도 설정
        }
    });
});

map2.on('load', () => {
    
    map2.addSource('UPS', {
        type: 'geojson',
        data: `${baseURL}/Package/UPS_Facilities.geojson`
    });

    map2.addLayer({
        id: 'UPS-Circle',
        type: 'circle',
        source: 'UPS',
        paint: {
            'circle-radius': 2,
            'circle-color': '#FFD800',
            'circle-opacity': 0.4
        }
    });

    map2.addSource('Amazon', {
        type: 'geojson',
        data: `${baseURL}/Package/Amazon.geojson`
    });

    map2.addLayer({
        id: 'Amazon-Circle',
        type: 'circle',
        source: 'Amazon',
        paint: {
            'circle-radius': 2,
            'circle-color': '#cc0000',
            'circle-opacity': 0.4
        }
    });
});

    map3.on('load', () => {
        map3.addSource('Target', {
            type: 'geojson',
            data: `${baseURL}/Grocery/Target_Location.geojson`
        });
        
        map3.addLayer({
            id: 'Target-Circle-Fill',
            type: 'circle',
            source: 'Target',
            paint: {
                'circle-radius': 1,              // 원의 크기
                'circle-color': '#cc0000',       // 원의 내부 색상
                'circle-opacity': 1            // 원의 투명도
            }
        });
        
        // 테두리 선만 추가
        map3.addLayer({
            id: 'Target-Circle-Stroke',
            type: 'circle',
            source: 'Target',
            paint: {
                'circle-radius': 2.5,            // 원의 크기
                'circle-color': 'rgba(0, 0, 0, 0)',  // 원의 내부 색상을 투명하게 설정
                'circle-stroke-width': 0.5,       // 테두리 두께 설정
                'circle-stroke-color': '#cc0000',  // 테두리 색상 설정
                'circle-opacity': 0.0,
                'circle-stroke-opacity': 0.5            // 원의 투명도 설정
            }
        });
        map3.addSource('Trader', {
            type: 'geojson',
            data: `${baseURL}/Grocery/Trader_Joe_Location.geojson`
        });
    
        map3.addLayer({
            id: 'Trader-Circle',
            type: 'circle',
            source: 'Trader',
            paint: {
                'circle-radius': 1,
                'circle-color': '#ff69b4',
                'circle-opacity': 1
            }
        });
        map3.addLayer({
            id: 'Trader-Circle-Stroke',
            type: 'circle',
            source: 'Trader',
            paint: {
                'circle-radius': 2.5,            // 원의 크기
                'circle-color': 'rgba(0, 0, 0, 0)',  // 원의 내부 색상을 투명하게 설정
                'circle-stroke-width': 0.5,       // 테두리 두께 설정
                'circle-stroke-color': '#ff69b4',  // 테두리 색상 설정
                'circle-opacity': 0.0,
                'circle-stroke-opacity': 0.5            // 원의 투명도 설정
            }
        });
        map3.addSource('Walmart', {
            type: 'geojson',
            data: `${baseURL}/Grocery/Walmart_Location.geojson`
        });
    
        map3.addLayer({
            id: 'Walmart-Circle',
            type: 'circle',
            source: 'Walmart',
            paint: {
                'circle-radius': 1,
                'circle-color': '#ffc220',
                'circle-opacity': 1
            }
        });
        map3.addLayer({
            id: 'Walmart-Circle-Stroke',
            type: 'circle',
            source: 'Walmart',
            paint: {
                'circle-radius': 2.5,            // 원의 크기
                'circle-color': 'rgba(0, 0, 0, 0)',  // 원의 내부 색상을 투명하게 설정
                'circle-stroke-width': 0.5,       // 테두리 두께 설정
                'circle-stroke-color': '#ffc220',  // 테두리 색상 설정
                'circle-opacity': 0.0,
                'circle-stroke-opacity': 0.5           // 원의 투명도 설정
            }
        });
    
        map3.addSource('Whole', {
            type: 'geojson',
            data: `${baseURL}/Grocery/Whole_Food_Location.geojson`
        });
    
        map3.addLayer({
            id: 'Whole-Circle',
            type: 'circle',
            source: 'Whole',
            paint: {
                'circle-radius': 1,
                'circle-color': '#00674b',
                'circle-opacity': 1
            }
        });
        map3.addLayer({
            id: 'Whole-Circle-Stroke',
            type: 'circle',
            source: 'Whole',
            paint: {
                'circle-radius': 2.5,                // 원의 크기
                'circle-color': 'rgba(0, 0, 0, 0)',   // 원의 내부 색상을 투명하게 설정
                'circle-stroke-width': 0.5,             // 테두리 두께 설정
                'circle-stroke-color': '#00674b',     // 테두리 색상 설정
                'circle-opacity': 0.0,                // 원의 투명도 설정
                'circle-stroke-opacity': 0.5          // 원의 투명도 설정
            }
        });
    });
   
    map4.on('load', () => {
        map4.addSource('UberEats', {
            type: 'geojson',
            data: `${baseURL}/Meal/Uber_Eats_C.json`,

        });
        map4.addLayer({
            id: 'UberEats-Fill',
            type: 'fill',  // MultiPolygon을 표시할 때 fill 타입 사용
            source: 'UberEats',
            paint: {
                'fill-color': '#4CFFB4',    // 다각형 영역 색상
                'fill-opacity': 0.7         // 투명도 설정
            }
        });

        map4.addSource('GrubHub', {
            type: 'geojson',
            data: `${baseURL}/Meal/Grub_Hub_C.geojson`,

        });
        map4.addLayer({
            id: 'GrubHub-Fill',
            type: 'fill',  // MultiPolygon을 표시할 때 fill 타입 사용
            source: 'GrubHub',
            paint: {
                'fill-color': '#FFA943',    // 다각형 영역 색상
                'fill-opacity': 0.7         // 투명도 설정
            }
        });

        map4.addSource('DoorDash', {
            type: 'geojson',
            data: `${baseURL}/Meal/Door_Dash_C.geojson`,
        });
        map4.addLayer({
            id: 'DoorDash-Fill',
            type: 'fill',  // MultiPolygon을 표시할 때 fill 타입 사용
            source: 'DoorDash',
            paint: {
                'fill-color': '#EB1700',    // 다각형 영역 색상
                'fill-opacity': 0.7         // 투명도 설정
            }
        });
    });
    
    map5.on('load', () => {
        map5.addSource('GM', {
            type: 'geojson',
            data: `${baseURL}/Delivery_Desert/GM_P_1.json`,

        });
        map5.addLayer({
            id: 'GM-Fill',
            type: 'fill',  // MultiPolygon을 표시할 때 fill 타입 사용
            source: 'GM',
            layout: {
                'visibility': 'none' // 초기 상태를 none으로 설정
            },
            paint: {
                'fill-color': '#fffff0',    // 다각형 영역 색상
                'fill-opacity': 0.6        // 투명도 설정
            }
        });
    
        map5.addSource('GM2', {
            type: 'geojson',
            data: `${baseURL}/Delivery_Desert/GM_P_2.json`,

        });
        map5.addLayer({
            id: 'GM2-Fill',
            type: 'fill',  // MultiPolygon을 표시할 때 fill 타입 사용
            source: 'GM2',
            layout: {
                'visibility': 'none' // 초기 상태를 none으로 설정
            },
            paint: {
                'fill-color': '#f7cd9b',    // 다각형 영역 색상
                'fill-opacity': 0.6        // 투명도 설정
            }
        });
    
       
        map5.addSource('GM3', {
            type: 'geojson',
            data: `${baseURL}/Delivery_Desert/GM_P_3.json`,

        });
        map5.addLayer({
            id: 'GM3-Fill',
            type: 'fill',  // MultiPolygon을 표시할 때 fill 타입 사용
            source: 'GM3',
            paint: {
                'fill-color': '#f7941d',    // 다각형 영역 색상
                'fill-opacity': 0.6         // 투명도 설정
            }
        });
    });
   
   
    map6.on('load', () => {
        map6.addSource('D_GM', {
            type: 'geojson',
            data: `${baseURL}/Delivery_Desert/GM_P_3.json`,

        });

        
        map6.addLayer({
            id: 'D_GM-Fill',
            type: 'fill',  // MultiPolygon을 표시할 때 fill 타입 사용
            source: 'D_GM',
            paint: {
                'fill-color': '#EB1700',    // 다각형 영역 색상
                'fill-opacity': 0.4         // 투명도 설정
            }, 
            layout: {
                'visibility': 'none'   // 선 끝부분을 둥글게 처리
            }
        });
    
        // 다각형 테두리를 설정하려면 'fill-outline-color' 사용
        map6.addLayer({
            id: 'D_GM-Fill-Outline',
            type: 'line',   // 테두리 표시를 위해 line 타입 사용
            source: 'D_GM',
            paint: {
                'line-color': '#EB1700',   // 테두리 색상
                'line-width': 2,
                'line-opacity':0             // 테두리 두께
            },
            layout: {
                'visibility': 'none'   // 선 끝부분을 둥글게 처리
            }
        });
        map6.addSource('F_D_GM', {
            type: 'geojson',
            data: `${baseURL}/Delivery_Desert/Food_Desert_Grocery,Meal_Sub_Pop_5000Up.geojson`,

        });
        
    
        // 다각형 테두리를 설정하려면 'fill-outline-color' 사용
        map6.addLayer({
            id: 'F_D_GM-Fill-Outline',
            type: 'line',   // 테두리 표시를 위해 line 타입 사용
            source: 'F_D_GM',
            paint: {
                'line-color': '#f7941d',   // 테두리 색상
                'line-width': 1,
                'line-opacity':1             // 테두리 두께
            }
        });

        map6.addLayer({
            id: 'F_D_GM-Fill',
            type: 'fill',  // MultiPolygon을 표시할 때 fill 타입 사용
            source: 'F_D_GM',
            paint: {
                'fill-color': '#f7941d',    // 다각형 영역 색상
                'fill-opacity': 0.33         // 투명도 설정
            }
        });

        map6.addSource('F_D_GM_P', {
            type: 'geojson',
            data: `${baseURL}/Delivery_Desert/Pick_Food_Desert_Grocery,Meal_Sub_Pop_5000Up.geojson`,

        });
        
        
        // 다각형 테두리 추가
        map6.addLayer({
            id: 'F_D_GM_P-Fill-Outline',
            type: 'line',
            source: 'F_D_GM_P',
            paint: {
                'line-color': '#fffff0', // 테두리 색상
                'line-width': 8,        // 테두리 두께
                'line-opacity': 0.6,    // 테두리 불투명도
            },
            layout: {
                'line-join': 'round',  // 선 연결부를 둥글게 처리
                'line-cap': 'round',
                'visibility': 'none'   // 선 끝부분을 둥글게 처리
            }
        });

        map6.addLayer({
            id: 'F_D_GM_P-Fill-Outline2',
            type: 'line',
            source: 'F_D_GM_P',
            paint: {
                'line-color': '#fffff0', // 테두리 색상
                'line-width': 100,        // 테두리 두께
                'line-opacity': 0.3,    // 테두리 불투명도
                'line-blur': 100 // 경계 확장
            },
            layout: {
                'line-join': 'round',  // 선 연결부를 둥글게 처리
                'line-cap': 'round',
                'visibility': 'none'   // 선 끝부분을 둥글게 처리
            }
        });

        map6.addLayer({
            id: 'F_D_GM_P-Fill',
            type: 'fill',
            source: 'F_D_GM_P',
            paint: {
                'fill-color': '#EB1700', // 다각형 영역 색상
                'fill-opacity': 0.7,    // 투명도 설정
            },
            layout: {
                'visibility': 'none'   // 선 끝부분을 둥글게 처리
            }
        });

        map6.addSource('F_D_GM_P_C', {
            type: 'geojson',
            data: `${baseURL}/Delivery_Desert/Pick_Center.geojson`,

        });
       
    });
    
    /*map7.on('load', () => {
        map7.addSource('P_R_P', {
            type: 'geojson',
            data: `${baseURL}/Delivery_Desert/Package_Radius_Pick.geojson`,

        });
        map7.addSource('G_P', {
            type: 'geojson',
            data: `${baseURL}/Delivery_Desert/Grocery_Pick.geojson`,

        });
           
        // 다각형 테두리를 설정하려면 'fill-outline-color' 사용
        map7.addLayer({
            id: 'P_R_P-Fill-Outline',
            type: 'line',   // 테두리 표시를 위해 line 타입 사용
            source: 'P_R_P',
            paint: {
                'line-color': '#EB1700',   // 테두리 색상
                'line-width': 2,
                'line-opacity':0             // 테두리 두께
            },layout: {
                'visibility': 'visible'  // Explicitly set visibility to visible
            }
        });
        map7.addLayer({
            id: 'G_P-Circle',
            type: 'circle',
            source: 'G_P',
            paint: {
                'circle-radius': 1,
                'circle-color': '#fffff0',
                'circle-opacity': 1
            },layout: {
                'visibility': 'visible'  // Explicitly set visibility to visible
            }
        });
    });*/

    
    map7.on('load', () => {
        // Source 추가
        map7.addSource('Rosemeadow', {
            type: 'geojson',
            data: `${baseURL}/Delivery_Desert/Rosemeadow.geojson`,
        });
        map7.addSource('UPS_D', {
            type: 'geojson',
            data: `${baseURL}/Zoom_in/UPS_Dost.geojson`,
        });
        map7.addSource('UPS_R', {
            type: 'geojson',
            data: `${baseURL}/Zoom_in/UPS_Round.geojson`,
        });
        map7.addSource('UPS_L', {
            type: 'geojson',
            data: `${baseURL}/Zoom_in/UPS_Line.geojson`,
        });
        map7.addSource('UPS_PD', {
            type: 'geojson',
            data: `${baseURL}/Zoom_in/UPS_Pick_Dot.geojson`,
        });
       
    
        map7.addLayer({
            id: 'Rose',
            type: 'fill',  // MultiPolygon을 표시할 때 fill 타입 사용
            source: 'Rosemeadow',
            paint: {
                'fill-color': '#f7941d',    // 다각형 영역 색상
                'fill-opacity': 0.33         // 투명도 설정
            }
        });
        
        map7.addLayer({
            id: 'Rose_Border',
            type: 'line',  // MultiPolygon을 표시할 때 fill 타입 사용
            source: 'Rosemeadow',
            paint: {
                'line-color': '#f7941d',      // 테두리 색상
                'line-width': 5,             // 테두리 두께
                'line-opacity': 0.9,           // 테두리 불투명도 (0 = 투명, 1 = 불투명)
            }
        });
        map7.addLayer({
            id: 'Rose_Round',
            type: 'line',  // MultiPolygon을 표시할 때 fill 타입 사용
            source: 'UPS_R',
            paint: {
                'line-color': '#f7941d',      // 테두리 색상
                'line-width': 2.5,             // 테두리 두께
                'line-opacity': 0.9,
                'line-dasharray': [4, 2]           // 테두리 불투명도 (0 = 투명, 1 = 불투명)
            }
        });
        map7.addLayer({
            id: 'UPS_L_Line',
            type: 'line',  // MultiPolygon을 표시할 때 fill 타입 사용
            source: 'UPS_L',
            paint: {
                'line-color': '#fffff0',      // 테두리 색상
                'line-width': 2,             // 테두리 두께
                'line-opacity': 0.9,           // 테두리 불투명도 (0 = 투명, 1 = 불투명)
            }
        });

        map7.on('load', function () {
            // 미리 계산된 중간점 좌표
            const midpoint = [-95.7075526584383, 29.458221026692497];
        
            // 텍스트 소스 추가
            map7.addSource('textLabel', {
                type: 'geojson',
                data: {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": midpoint // 미리 계산된 좌표
                            },
                            "properties": {
                                "label": "40mi" // 텍스트
                            }
                        }
                    ]
                }
            });
        
            // 텍스트 레이어 추가
            map7.addLayer({
                id: 'lineText',
                type: 'symbol',
                source: 'textLabel',
                layout: {
                    'text-field': ['get', 'label'], // 텍스트 필드
                    'text-font': ['Arial Unicode MS Bold'], // 폰트 설정
                    'text-size': 18, // 글자 크기
                    'text-anchor': 'center', // 중앙 정렬
                    'text-offset': [0, 1.5], // 텍스트 위치 조정
                },
                paint: {
                    'text-color': '#fffff0', // 텍스트 색상 (흰색)
                    'text-halo-color': '#000000', // 텍스트 테두리 색상 (검정색)
                    'text-halo-width': 2 // 텍스트 테두리 두께
                }
            }); });

        map7.addLayer({
            id: 'UPS',
            type: 'circle',
            source: 'UPS_D',
            paint: {
                'circle-radius': 3,
                'circle-color': '#fffff0',
                'circle-opacity': 1
            }
        });
        map7.addLayer({
            id: 'UPS_pd',
            type: 'circle',
            source: 'UPS_D',
            paint: {
                'circle-radius': 6,               // 원 크기
                'circle-color': 'rgba(0, 0, 0, 0)', // 내부를 완전히 투명하게 설정
                'circle-stroke-color': '#fffff0',  // 외곽선 색상
                'circle-stroke-width': 1,          // 외곽선 두께
                'circle-stroke-opacity': 1  
            }
        });
        // P_R_P Layer - 테두리 선
        /*map7.addLayer({
            id: 'Cir1-Border',
            type: 'line',
            source: 'Cir1',
            paint: {
                'line-color': '#FFD800',      // 테두리 색상
                'line-width': 1.5,             // 테두리 두께
                'line-opacity': 1,           // 테두리 불투명도 (0 = 투명, 1 = 불투명)
            },
            layout: {
                'visibility': 'visible',    // 초기 상태에서 보이도록 설정
            },
        });
        map7.addLayer({
            id: 'Cir2-Border',
            type: 'line',
            source: 'Cir2',
            paint: {
                'line-color': '#FFD800',      // 테두리 색상
                'line-width': 1.5,             // 테두리 두께
                'line-opacity': 1,           // 테두리 불투명도 (0 = 투명, 1 = 불투명)
            },
            layout: {
                'visibility': 'visible',    // 초기 상태에서 보이도록 설정
            },
        });*/
        
        /*map7.addLayer({
            id: 'UPS_M',
            type: 'line',
            source: 'UPS_L1',
            paint: {
                'line-color': '#FFD800',      // 테두리 색상
                'line-width': 2.5,             // 테두리 두께
                'line-opacity': 1,           // 테두리 불투명도 (0 = 투명, 1 = 불투명)
            },
            layout: {
                'visibility': 'visible',    // 초기 상태에서 보이도록 설정
            },
        });map7.addLayer({
            id: 'UPS_T',
            type: 'line',
            source: 'UPS_L2',
            paint: {
                'line-color': '#FFD800',      // 테두리 색상
                'line-width': 1,             // 테두리 두께
                'line-opacity': 1,           // 테두리 불투명도 (0 = 투명, 1 = 불투명)
            },
            layout: {
                'visibility': 'visible',    // 초기 상태에서 보이도록 설정
            },
        });*/

        map7.addSource('HIgh_way', {
            type: 'geojson',
            data: `${baseURL}/Zoom_in/map_00.geojson`,
        });
        map7.addSource('HIgh_way2', {
            type: 'geojson',
            data: `${baseURL}/Zoom_in/map_11.geojson`,
        });
        map7.addSource('HIgh_way3', {
            type: 'geojson',
            data: `${baseURL}/Zoom_in/map_22.geojson`,
        });
    
        // P_R_P Layer - 테두리 선
        map7.addLayer({
            id: 'H_W',
            type: 'line',
            source: 'HIgh_way',
            paint: {
                'line-color': '#f7941d',      // 테두리 색상
                'line-width': 3,             // 테두리 두께
                'line-opacity': 0.7,           // 테두리 불투명도 (0 = 투명, 1 = 불투명)
            },
            layout: {
                'visibility': 'visible',    // 초기 상태에서 보이도록 설정
            },
        });
        map7.addLayer({
            id: 'H_W2',
            type: 'line',
            source: 'HIgh_way2',
            paint: {
                'line-color': '#f7941d',      // 테두리 색상
                'line-width': 3,             // 테두리 두께
                'line-opacity': 0.7,           // 테두리 불투명도 (0 = 투명, 1 = 불투명)
            },
            layout: {
                'visibility': 'visible',    // 초기 상태에서 보이도록 설정
            },
        });
        map7.addLayer({
            id: 'H_W3',
            type: 'line',
            source: 'HIgh_way3',
            paint: {
                'line-color': '#f7941d',      // 테두리 색상
                'line-width': 3,             // 테두리 두께
                'line-opacity': 0.7,           // 테두리 불투명도 (0 = 투명, 1 = 불투명)
            },
            layout: {
                'visibility': 'visible',    // 초기 상태에서 보이도록 설정
            },
        });
    
    
});
    /*map9.on('load', () => {
        map9.addSource('P_R_P', {
            type: 'geojson',
            data: `${baseURL}/Delivery_Desert/Package_Radius_Pick.geojson`,

        });
        map9.addSource('G_P', {
            type: 'geojson',
            data: `${baseURL}/Delivery_Desert/Grocery_Pick.geojson`,

        });
           
        // 다각형 테두리를 설정하려면 'fill-outline-color' 사용
        map9.addLayer({
            id: 'P_R_P-Fill-Outline',
            type: 'line',   // 테두리 표시를 위해 line 타입 사용
            source: 'P_R_P',
            paint: {
                'line-color': '#EB1700',   // 테두리 색상
                'line-width': 2,
                'line-opacity':0             // 테두리 두께
            },layout: {
                'visibility': 'visible'  // Explicitly set visibility to visible
            }
        });
        map9.addLayer({
            id: 'G_P-Circle',
            type: 'circle',
            source: 'G_P',
            paint: {
                'circle-radius': 1,
                'circle-color': '#fffff0',
                'circle-opacity': 1
            },layout: {
                'visibility': 'visible'  // Explicitly set visibility to visible
            }
        });
    });*/

    const toggleAmazonButton = document.getElementById('toggleAmazon');
    toggleAmazonButton.addEventListener('click', () => {
        const currentVisibility = map2.getLayer('Amazon-Circle') ? map2.getLayer('Amazon-Circle').visibility : 'visible';
        map2.setLayoutProperty('Amazon-Circle', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
    });
    
    const toggleUPSButton = document.getElementById('toggleUPS');
    toggleUPSButton.addEventListener('click', () => {
        const currentVisibility = map2.getLayer('UPS-Circle') ? map2.getLayer('UPS-Circle').visibility : 'visible';
        map2.setLayoutProperty('UPS-Circle', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
    });

    const toggleTargetButton = document.getElementById('toggleTarget');
    toggleTargetButton.addEventListener('click', () => {
        const currentVisibility = map3.getLayer('Target-Circle-Fill') ? map3.getLayer('Target-Circle-Fill').visibility : 'visible';
        map3.setLayoutProperty('Target-Circle-Fill', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
        map3.setLayoutProperty('Target-Circle-Stroke', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
    });

    const toggleTraderButton = document.getElementById('toggleTrader');
    toggleTraderButton.addEventListener('click', () => {
        const currentVisibility = map3.getLayer('Trader-Circle') ? map3.getLayer('Trader-Circle').visibility : 'visible';
        map3.setLayoutProperty('Trader-Circle', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
        map3.setLayoutProperty('Trader-Circle-Stroke', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
    });

    const toggleWalmartButton = document.getElementById('toggleWalmart');
    toggleWalmartButton.addEventListener('click', () => {
        const currentVisibility = map3.getLayer('Walmart-Circle') ? map3.getLayer('Walmart-Circle').visibility : 'visible';
        map3.setLayoutProperty('Walmart-Circle', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
        map3.setLayoutProperty('Walmart-Circle-Stroke', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
    });

    const toggleWholeButton = document.getElementById('toggleWhole');
    toggleWholeButton.addEventListener('click', () => {
        const currentVisibility = map3.getLayer('Whole-Circle') ? map3.getLayer('Whole-Circle').visibility : 'visible';
        map3.setLayoutProperty('Whole-Circle', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
        map3.setLayoutProperty('Whole-Circle-Stroke', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
    });

    const toggleDoorDashButton = document.getElementById('toggleDoorDash');
    toggleDoorDashButton.addEventListener('click', () => {
        const currentVisibility = map4.getLayoutProperty('DoorDash-Fill', 'visibility') === 'visible' ? 'visible' : 'none';
        const newVisibility = currentVisibility === 'visible' ? 'none' : 'visible';
        map4.setLayoutProperty('DoorDash-Fill', 'visibility', newVisibility);
        map4.setLayoutProperty('DoorDash-Fill-Outline', 'visibility', newVisibility);
    });

    // GrubHub 레이어 토글
    const toggleGrubHubButton = document.getElementById('toggleGrubHub');
    toggleGrubHubButton.addEventListener('click', () => {
        const currentVisibility = map4.getLayoutProperty('GrubHub-Fill', 'visibility') === 'visible' ? 'visible' : 'none';
        const newVisibility = currentVisibility === 'visible' ? 'none' : 'visible';
        map4.setLayoutProperty('GrubHub-Fill', 'visibility', newVisibility);
        map4.setLayoutProperty('GrubHub-Fill-Outline', 'visibility', newVisibility);
    });

    // UberEats 레이어 토글
    const toggleUberEatsButton = document.getElementById('toggleUberEats');
    toggleUberEatsButton.addEventListener('click', () => {
        const currentVisibility = map4.getLayoutProperty('UberEats-Fill', 'visibility') === 'visible' ? 'visible' : 'none';
        const newVisibility = currentVisibility === 'visible' ? 'none' : 'visible';
        map4.setLayoutProperty('UberEats-Fill', 'visibility', newVisibility);
        map4.setLayoutProperty('UberEats-Fill-Outline', 'visibility', newVisibility);
    });

    const toggleD_GMButton = document.getElementById('toggleD_GM');
    toggleD_GMButton.addEventListener('click', () => {
        const currentVisibility = map6.getLayoutProperty('D_GM-Fill', 'visibility') === 'visible' ? 'visible' : 'none';
        const newVisibility = currentVisibility === 'visible' ? 'none' : 'visible';
        map6.setLayoutProperty('D_GM-Fill', 'visibility', newVisibility);
        map6.setLayoutProperty('D_GM-Fill-Outline', 'visibility', newVisibility);
    });

    const toggleF_D_GMButton = document.getElementById('toggleF_D_GM');
    toggleF_D_GMButton.addEventListener('click', () => {
        const currentVisibility = map6.getLayoutProperty('F_D_GM-Fill', 'visibility') === 'visible' ? 'visible' : 'none';
        const newVisibility = currentVisibility === 'visible' ? 'none' : 'visible';
        map6.setLayoutProperty('F_D_GM-Fill', 'visibility', newVisibility);
        map6.setLayoutProperty('F_D_GM-Fill-Outline', 'visibility', newVisibility);
    });

    const toggleF_D_GM_PButton = document.getElementById('toggleF_D_GM_P');

toggleF_D_GM_PButton.addEventListener('click', () => {
    const currentVisibility = map6.getLayoutProperty('F_D_GM_P-Fill', 'visibility') === 'visible' ? 'visible' : 'none';

    if (currentVisibility === 'none') {
        // 켜짐/꺼짐 반복 후 최종적으로 켜지는 동작
        let toggleCount = 0;
        const interval = setInterval(() => {
            const visibility = toggleCount % 2 === 0 ? 'visible' : 'none';
            map6.setLayoutProperty('F_D_GM_P-Fill', 'visibility', visibility);
            map6.setLayoutProperty('F_D_GM_P-Fill-Outline', 'visibility', visibility);
            map6.setLayoutProperty('F_D_GM_P-Fill-Outline2', 'visibility', visibility);
            toggleCount++;

            if (toggleCount === 5) { // 반복을 3번(켜짐, 꺼짐, 켜짐, 꺼짐, 최종 켜짐) 하고 종료
                clearInterval(interval);
                map6.setLayoutProperty('F_D_GM_P-Fill', 'visibility', 'visible');
                map6.setLayoutProperty('F_D_GM_P-Fill-Outline', 'visibility', 'visible');
                map6.setLayoutProperty('F_D_GM_P-Fill-Outline2', 'visibility', 'visible');
            }
        }, 150); // 각 상태 변화 간격 (300ms)
    } else {
        // 그냥 꺼지는 동작
        map6.setLayoutProperty('F_D_GM_P-Fill', 'visibility', 'none');
        map6.setLayoutProperty('F_D_GM_P-Fill-Outline', 'visibility', 'none');
        map6.setLayoutProperty('F_D_GM_P-Fill-Outline2', 'visibility', 'none');
    }
});


    const gmSlider = document.getElementById('gm-slider');
    // 슬라이더 초기값을 3으로 설정
gmSlider.value = 3;

gmSlider.addEventListener('input', () => {
    const sliderValue = parseInt(gmSlider.value, 10);

    // 슬라이더 값에 따라 visibility 설정
    if (sliderValue === 1) {
        map5.setLayoutProperty('GM-Fill', 'visibility', 'visible');
        map5.setLayoutProperty('GM2-Fill', 'visibility', 'visible');
        map5.setLayoutProperty('GM3-Fill', 'visible');
    } else if (sliderValue === 2) {
        map5.setLayoutProperty('GM-Fill', 'visibility', 'none');
        map5.setLayoutProperty('GM2-Fill', 'visibility', 'visible');
        map5.setLayoutProperty('GM3-Fill', 'visible');
    } else if (sliderValue === 3) {
        map5.setLayoutProperty('GM-Fill', 'visibility', 'none');
        map5.setLayoutProperty('GM2-Fill', 'visibility', 'none');
        map5.setLayoutProperty('GM3-Fill', 'visible');
    }
});


// 동기화 기능 추가
const slider = document.getElementById('map8-slider');
slider.addEventListener('input', () => {
    const sliderValue = slider.value; // 슬라이더의 값 (0~100)

    // 왼쪽 맵의 width를 슬라이더 값에 맞게 조정 (기존 코드에서 변경 없음)
    document.getElementById('map8Left').style.clipPath = `polygon(0% 0%, ${sliderValue}% 0%, ${sliderValue}% 100%, 0% 100%)`;

    // 오른쪽 맵의 width를 슬라이더 값에 맞게 조정 (기존 코드에서 변경 없음)
    document.getElementById('map8Right').style.clipPath = `polygon(${sliderValue}% 0%, 100% 0%, 100% 100%, ${sliderValue}% 100%)`;
});

let scrollPosition = 0;
let currentMap = 1;
const SCROLL_THRESHOLD = 100;

const isScrollEnabled = () => document.body.classList.contains('scroll-enabled');

window.addEventListener('wheel', function(event) {
    if (!isScrollEnabled()) {
        event.preventDefault();
    }

    scrollPosition += event.deltaY;

    if (currentMap >= 1 && currentMap <= 8) {
        if (scrollPosition >= SCROLL_THRESHOLD && currentMap < 10) {
            currentMap++;
            scrollPosition = 0;
        } else if (scrollPosition <= -SCROLL_THRESHOLD && currentMap > 1) {
            currentMap--;
            scrollPosition = 0;
        }
    
    }

    // 각 맵에 대해 활성화/비활성화 처리
    for (let i = 1; i <= 8; i++) {
        const mapDiv = document.getElementById(`map${i}`);
        if (mapDiv) {
            mapDiv.style.opacity = (currentMap === i) ? '1' : '0';
        }

        const textDiv = document.getElementById(`text${i}`);
        if (textDiv) {
            textDiv.style.display = (currentMap === i) ? 'block' : 'none';
        }

        // 각 맵에 해당하는 버튼들 처리
        const mapControls = document.getElementById(`map${i}-controls`);
        if (mapControls) {
            if (currentMap === i) {
                mapControls.style.display = 'block'; // 현재 활성화된 맵의 버튼만 보이도록
            } else {
                mapControls.style.display = 'none'; // 비활성화된 맵의 버튼은 숨김
            }
        }
    }

    // map1-controls는 항상 숨기기
    const map1Controls = document.getElementById('map1-controls');
    if (map1Controls) {
        map1Controls.style.display = 'none';
    }
});
