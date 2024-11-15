const baseURL = window.location.hostname === "localhost"
    ? "" 
    : "https://risekk37.github.io/GIS-for-deisng-practices_Kitea-Julia";

const map1 = new maplibregl.Map({
    container: 'map1',
    style: `${baseURL}/positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 3.8,
    scrollZoom: false,
    dragPan: false
});

const map2 = new maplibregl.Map({
    container: 'map2',
    style: `${baseURL}/positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 3.8,
    scrollZoom: false,
    dragPan: false
});

const map3 = new maplibregl.Map({
    container: 'map3',
    style: `${baseURL}/positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 3.8,
    scrollZoom: false,
    dragPan: false
});

const map4 = new maplibregl.Map({
    container: 'map4',
    style: `${baseURL}/positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 3.8,
    scrollZoom: false,
    dragPan: false
});

map2.on('load', () => {
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
            'circle-color': '#FF9900',
            'circle-opacity': 0.4
        }
    });

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
                'fill-opacity': 0.4         // 투명도 설정
            }
        });
    
        // 다각형 테두리를 설정하려면 'fill-outline-color' 사용
        map4.addLayer({
            id: 'DoorDash-Fill-Outline',
            type: 'line',   // 테두리 표시를 위해 line 타입 사용
            source: 'DoorDash',
            paint: {
                'line-color': '#EB1700',   // 테두리 색상
                'line-width': 2,
                'line-opacity':0            // 테두리 두께
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
                'fill-color': '#ff8000',    // 다각형 영역 색상
                'fill-opacity': 0.4         // 투명도 설정
            }
        });
    
        // 다각형 테두리를 설정하려면 'fill-outline-color' 사용
        map4.addLayer({
            id: 'GrubHub-Fill-Outline',
            type: 'line',   // 테두리 표시를 위해 line 타입 사용
            source: 'GrubHub',
            paint: {
                'line-color': '#FF9900',   // 테두리 색상
                'line-width': 2,
                'line-opacity':0             // 테두리 두께
            }
        });

        map4.addSource('UberEats', {
            type: 'geojson',
            data: `${baseURL}/Meal/Uber_Eats_C.geojson`,

        });
        map4.addLayer({
            id: 'UberEats-Fill',
            type: 'fill',  // MultiPolygon을 표시할 때 fill 타입 사용
            source: 'UberEats',
            paint: {
                'fill-color': '#06c167',    // 다각형 영역 색상
                'fill-opacity': 0.4         // 투명도 설정
            }
        });
    
        // 다각형 테두리를 설정하려면 'fill-outline-color' 사용
        map4.addLayer({
            id: 'UberEats-Fill-Outline',
            type: 'line',   // 테두리 표시를 위해 line 타입 사용
            source: 'UberEats',
            paint: {
                'line-color': '#FF9900',   // 테두리 색상
                'line-width': 2,
                'line-opacity':0             // 테두리 두께
            }
        });
    });
    


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
        if (scrollPosition >= SCROLL_THRESHOLD && currentMap < 8) {
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
