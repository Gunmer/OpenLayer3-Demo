
function changePointToCoordinate(point){
	return ol.proj.transform([point[0], point[1]], 'EPSG:3857', 'EPSG:4326');
}

function changeCoordinateToPoint(coordinates){
	return ol.proj.transform([coordinates[0], coordinates[1]], 'EPSG:4326', 'EPSG:3857');
}
