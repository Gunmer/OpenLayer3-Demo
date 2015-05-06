//Global variables
var features = []

function addMarker(order, coordinate, img, scale){
	var feature = new ol.Feature(new ol.geom.Point(coordinate));
	feature.setStyle(new ol.style.Style({
	  image: new ol.style.Icon(({
	    opacity: 1,
	    src: img,
	    scale: scale
	  }))
	}));

	features[order] = feature;
}

function getMarkerSource(){
	return new ol.source.Vector({
	  features: features
	});
}