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

const map4 = new maplibregl.Map({
    container: 'map4', // 첫 번째 맵에 해당하는 div
    style: `${baseURL}/positron.json`,
    center: [ -90.3070003, 40.2892984],
    zoom: 3.8,
    scrollZoom: false,
    dragPan: false
});

const map5 = new maplibregl.Map({
    container: 'map5', // 첫 번째 맵에 해당하는 div
    style: `${baseURL}/positron.json`,
    center: [ -90.3070003, 40.2892984],
    zoom: 3.8,
    scrollZoom: false,
    dragPan: false
});

// 두 번째 맵 초기화
const map6 = new maplibregl.Map({
    container: 'map6', // 두 번째 맵에 해당하는 div
    style: `${baseURL}/positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 3.8,
    scrollZoom: false,
    dragPan: false
});

// 세 번째 맵 초기화
const map7 = new maplibregl.Map({
    container: 'map7', // 세 번째 맵에 해당하는 div
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
      // 기본적으로 두 레이어를 모두 보이도록 설정
      map2.setLayoutProperty('Amazon-Circle', 'visibility', 'visible');
      map2.setLayoutProperty('UPS-Circle', 'visibility', 'visible');
  
      // 토글 버튼 클릭 이벤트 설정
      document.getElementById('toggleAmazon').addEventListener('click', () => {
          let amazonVisibility = map2.getLayoutProperty('Amazon-Circle', 'visibility');
          if (amazonVisibility === 'visible') {
              map2.setLayoutProperty('Amazon-Circle', 'visibility', 'none');
          } else {
              map2.setLayoutProperty('Amazon-Circle', 'visibility', 'visible');
          }
      });
  
      document.getElementById('toggleUPS').addEventListener('click', () => {
          let upsVisibility = map2.getLayoutProperty('UPS-Circle', 'visibility');
          if (upsVisibility === 'visible') {
              map2.setLayoutProperty('UPS-Circle', 'visibility', 'none');
          } else {
              map2.setLayoutProperty('UPS-Circle', 'visibility', 'visible');
          }
      });


    map4.addSource('Target', {
        type: 'geojson',
        data: `${baseURL}/Grocery/Target_Location.geojson`
    });
    
    map4.addLayer({
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
    map4.addLayer({
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
    map5.addSource('Trader', {
        type: 'geojson',
        data: `${baseURL}/Grocery/Trader_Joe_Location.geojson`
    });

    map5.addLayer({
        id: 'Trader-Circle',
        type: 'circle',
        source: 'Trader',
        paint: {
            'circle-radius': 2,
            'circle-color': '#FFD800',
            'circle-opacity': 0.4
        }
    });

    map6.addSource('Walmart', {
        type: 'geojson',
        data: `${baseURL}/Grocery/Walmart_Location.geojson`
    });

    map6.addLayer({
        id: 'Walmart-Circle',
        type: 'circle',
        source: 'Walmart',
        paint: {
            'circle-radius': 2,
            'circle-color': '#FFD800',
            'circle-opacity': 0.4
        }
    });

    map7.addSource('Whole', {
        type: 'geojson',
        data: `${baseURL}/Grocery/Whole_Food_Location.geojson`
    });

    map7.addLayer({
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
    let currentMap = 1; // 현재 활성화된 지도 인덱스 (1~8: 총 8개의 맵)
    const SCROLL_THRESHOLD = 100;
    
    const isScrollEnabled = () => document.body.classList.contains('scroll-enabled');
    
    window.addEventListener('wheel', function(event) {
        if (!isScrollEnabled()) {
            event.preventDefault(); // 스크롤 비활성화 상태에서 스크롤을 막음
        }
    
        scrollPosition += event.deltaY;
    
        // 맵 전환: scrollPosition에 따라 맵을 순차적으로 전환
        if (currentMap >= 1 && currentMap <= 8) {
            if (scrollPosition >= SCROLL_THRESHOLD && currentMap < 8) {
                currentMap++;
                scrollPosition = 0;
            } else if (scrollPosition <= -SCROLL_THRESHOLD && currentMap > 1) {
                currentMap--;
                scrollPosition = 0;
            }
        }
    
        // 지도 전환 애니메이션 (1부터 8까지의 맵을 처리)
        for (let i = 1; i <= 8; i++) {
            const mapDiv = document.getElementById(`map${i}`);
            if (mapDiv) {
                mapDiv.style.opacity = (currentMap === i) ? 1 : 0;
            }
        }
    
        // 각 맵에 해당하는 텍스트만 표시 (1부터 8까지의 텍스트를 처리)
        for (let i = 1; i <= 8; i++) {
            const textDiv = document.getElementById(`text${i}`); // 텍스트 div 찾기
            if (textDiv) {
                textDiv.style.display = (currentMap === i) ? 'block' : 'none';
            }
        }
    });
    
});

