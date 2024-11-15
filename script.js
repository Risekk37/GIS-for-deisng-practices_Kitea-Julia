const baseURL = window.location.hostname === "localhost"
    ? "" // 로컬 환경에서는 빈 문자열을 사용하여 상대 경로를 사용
    : "https://risekk37.github.io/GIS-for-deisng-practices_Kitea-Julia"; // GitHub Pages 절대 경로

// 첫 번째 맵 초기화
const map1 = new maplibregl.Map({
    container: 'map1', // 첫 번째 맵에 해당하는 div
    style: `${baseURL}/positron.json`,
    center: [ -90.3070003, 40.2892984],
    zoom: 3.8,
    scrollZoom: false,
    dragPan: false
});

// 두 번째 맵 초기화
const map2 = new maplibregl.Map({
    container: 'map2', // 두 번째 맵에 해당하는 div
    style: `${baseURL}/positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 3.8,
    scrollZoom: false,
    dragPan: false
});

// 세 번째 맵 초기화
const map3 = new maplibregl.Map({
    container: 'map3', // 세 번째 맵에 해당하는 div
    style: `${baseURL}/positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 3.8,
    scrollZoom: false,
    dragPan: false
});

const mapA = new maplibregl.Map({
    container: 'map1', // 첫 번째 맵에 해당하는 div
    style: `${baseURL}/positron.json`,
    center: [ -90.3070003, 40.2892984],
    zoom: 3.8,
    scrollZoom: false,
    dragPan: false
});

const mapB = new maplibregl.Map({
    container: 'map1', // 첫 번째 맵에 해당하는 div
    style: `${baseURL}/positron.json`,
    center: [ -90.3070003, 40.2892984],
    zoom: 3.8,
    scrollZoom: false,
    dragPan: false
});

// 두 번째 맵 초기화
const mapC = new maplibregl.Map({
    container: 'map2', // 두 번째 맵에 해당하는 div
    style: `${baseURL}/positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 3.8,
    scrollZoom: false,
    dragPan: false
});

// 세 번째 맵 초기화
const mapD = new maplibregl.Map({
    container: 'map3', // 세 번째 맵에 해당하는 div
    style: `${baseURL}/positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 3.8,
    scrollZoom: false,
    dragPan: false
});


map2.on('load', () => {
    // 첫 번째 맵에서 Amazon 레이어 추가
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

    // 두 번째 맵에서 UPS 레이어 추가
    map3.addSource('UPS', {
        type: 'geojson',
        data: `${baseURL}/Package/UPS_Facilities.geojson`
    });

    map3.addLayer({
        id: 'UPS-Circle',
        type: 'circle',
        source: 'UPS',
        paint: {
            'circle-radius': 2,
            'circle-color': '#FFD800',
            'circle-opacity': 0.4
        }
    });


     mapA.addSource('Target', {
        type: 'geojson',
        data: `${baseURL}/Grocery/Target_Location.geojson`
    });

    mapA.addLayer({
        id: 'Target-Circle',
        type: 'circle',
        source: 'Target',
        paint: {
            'circle-radius': 2,
            'circle-color': '#FFD800',
            'circle-opacity': 0.4
        }
    });

    mapB.addSource('Trader', {
        type: 'geojson',
        data: `${baseURL}/Grocery/Trader_Joe_Location.geojson`
    });

    mapB.addLayer({
        id: 'Trader-Circle',
        type: 'circle',
        source: 'Trader',
        paint: {
            'circle-radius': 2,
            'circle-color': '#FFD800',
            'circle-opacity': 0.4
        }
    });

    mapC.addSource('Walmart', {
        type: 'geojson',
        data: `${baseURL}/Grocery/Walmart_Location.geojson`
    });

    mapC.addLayer({
        id: 'Walmart-Circle',
        type: 'circle',
        source: 'Walmart',
        paint: {
            'circle-radius': 2,
            'circle-color': '#FFD800',
            'circle-opacity': 0.4
        }
    });

    mapD.addSource('Whole', {
        type: 'geojson',
        data: `${baseURL}/Grocery/Whole_Food_Location.geojson`
    });

    mapD.addLayer({
        id: 'Whole-Circle',
        type: 'circle',
        source: 'Whole',
        paint: {
            'circle-radius': 2,
            'circle-color': '#FFD800',
            'circle-opacity': 0.4
        }
    });

    let scrollPosition = 0;
let currentMap = 1; // 현재 활성화된 지도 인덱스 (1~7: 총 7개의 맵)
const SCROLL_THRESHOLD = 100;

const isScrollEnabled = () => document.body.classList.contains('scroll-enabled');

window.addEventListener('wheel', function(event) {
    if (!isScrollEnabled()) {
        event.preventDefault(); // 스크롤 비활성화 상태에서 스크롤을 막음
    }

    scrollPosition += event.deltaY;

    // 맵 전환: scrollPosition에 따라 맵을 순차적으로 전환
    if (currentMap >= 1 && currentMap <= 7) {
        if (scrollPosition >= SCROLL_THRESHOLD && currentMap < 7) {
            currentMap++;
            scrollPosition = 0;
        } else if (scrollPosition <= -SCROLL_THRESHOLD && currentMap > 1) {
            currentMap--;
            scrollPosition = 0;
        }
    }

    // 지도 전환 애니메이션
    document.getElementById('map1').style.opacity = (currentMap === 1) ? 1 : 0;
    document.getElementById('map2').style.opacity = (currentMap === 2) ? 1 : 0;
    document.getElementById('map3').style.opacity = (currentMap === 3) ? 1 : 0;
    document.getElementById('mapA').style.opacity = (currentMap === 4) ? 1 : 0;
    document.getElementById('mapB').style.opacity = (currentMap === 5) ? 1 : 0;
    document.getElementById('mapC').style.opacity = (currentMap === 6) ? 1 : 0;
    document.getElementById('mapD').style.opacity = (currentMap === 7) ? 1 : 0;
});
    
    
    
});

