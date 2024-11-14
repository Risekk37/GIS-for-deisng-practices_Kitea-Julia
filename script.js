mapboxgl.accessToken = 'pk.eyJ1Ijoia2l0Mzc3NSIsImEiOiJjbTNmMW5mbngwaW5yMmpvbHZnenV6MHZuIn0.VKKVzgDLd7lmW7ZdgGrPdw';

// Mapbox map을 초기화합니다
const map = new mapboxgl.Map({
    container: 'map', // HTML에서 지정한 map의 ID
    style: 'positron.json', // Maputnik에서 만든 스타일 JSON 파일 경로
    center: [longitude, latitude], // 초기 중심 좌표를 설정하세요
    zoom: 12 // 초기 줌 레벨을 설정하세요
});
