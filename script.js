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
                'circle-color': '#FFD800',       // 원의 내부 색상
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
                'circle-stroke-width': 1,       // 테두리 두께 설정
                'circle-stroke-color': '#FFffff',  // 테두리 색상 설정
                'circle-opacity': 0.4           // 원의 투명도 설정
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
                'circle-radius': 2,
                'circle-color': '#FFD800',
                'circle-opacity': 0.4
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
                'circle-radius': 2,
                'circle-color': '#FFD800',
                'circle-opacity': 0.4
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
                'circle-radius': 2,
                'circle-color': '#FFD800',
                'circle-opacity': 0.4
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
    });

    const toggleWalmartButton = document.getElementById('toggleWalmart');
    toggleWalmartButton.addEventListener('click', () => {
        const currentVisibility = map3.getLayer('Walmart-Circle') ? map3.getLayer('Walmart-Circle').visibility : 'visible';
        map3.setLayoutProperty('Walmart-Circle', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
    });

    const toggleWholeButton = document.getElementById('toggleWhole');
    toggleWholeButton.addEventListener('click', () => {
        const currentVisibility = map3.getLayer('Whole-Circle') ? map3.getLayer('Whole-Circle').visibility : 'visible';
        map3.setLayoutProperty('Whole-Circle', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
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
