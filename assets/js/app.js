const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
let mapid = L.map('mapid').setView(
	//Ubicacion que tu eliges
	[10.415952753504827, -75.52635537878834],
	13
);

L.tileLayer(tilesProvider, {
	maxZoom: 18,
}).addTo(mapid);
//Marcador de cartagena
let marker = L.marker([10.415952753504827, -75.52635537878834]).addTo(mapid);

let iconMarker = L.icon({
	iconUrl: 'assets/img/markerTruck.png',
	iconSize: [60, 60],
	iconAnchor: [30, 60],
});

let marker2 = L.marker([10.415952753504827, -75.52635537878834], {
	icon: iconMarker,
}).addTo(mapid);

mapid.doubleClickZoom.disable();

mapid.on('dblclick', (e) => {
	let latLng = mapid.mouseEventToLatLng(e.originalEvent);
	L.marker([latLng.lat, latLng.lng], { icon: iconMarker }).addTo(mapid);

	// console.log(latLng);
});

//Conocer tu ubicacion
navigator.geolocation.getCurrentPosition(
	(pos) => {
		//Posicion de tu casa
		const { coords } = pos;
		// console.log(pos);
		L.marker([coords.latitude, coords.longitude], { icon: iconMarker }).addTo(
			mapid
		);
	},
	(err) => {
		console.log('error ' + err);
	},
	{
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	}
);
//Api
// const getCoords = async () => {
// 	try {
// 		urlIss = 'http://api.open-notify.org/iss-now.json';
// 		const resp = await fetch(urlIss);
// 		return await resp.json();
// 	} catch (er) {
// 		console.log('error ' + er);
// 	}
// };
// getCoords().then((resp) => {
// 	console.log(resp);
// });
