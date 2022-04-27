ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32644").setExtent([8893708.726900, 1512189.973800, 8917880.146900, 1529315.473800]);
var wms_layers = [];

var lyr_SricityBoundryOSM_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sricity Boundry OSM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SricityBoundryOSM_0.png",
    attributions: ' ',
                                projection: 'EPSG:32644',
                                alwaysInRange: true,
                                imageExtent: [8898609.436900, 1512597.723800, 8912979.436900, 1528907.723800]
                            })
                        });
var format_3g_4g_vectorised_1 = new ol.format.GeoJSON();
var features_3g_4g_vectorised_1 = format_3g_4g_vectorised_1.readFeatures(json_3g_4g_vectorised_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32644'});
var jsonSource_3g_4g_vectorised_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3g_4g_vectorised_1.addFeatures(features_3g_4g_vectorised_1);
var lyr_3g_4g_vectorised_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3g_4g_vectorised_1, 
                style: style_3g_4g_vectorised_1,
                interactive: true,
    title: '3g_4g_vectorised<br />\
    <img src="styles/legend/3g_4g_vectorised_1_0.png" /> Excellent<br />\
    <img src="styles/legend/3g_4g_vectorised_1_1.png" /> Good<br />\
    <img src="styles/legend/3g_4g_vectorised_1_2.png" /> Moderate<br />\
    <img src="styles/legend/3g_4g_vectorised_1_3.png" /> <br />'
        });
var format_2g_vectorised_2 = new ol.format.GeoJSON();
var features_2g_vectorised_2 = format_2g_vectorised_2.readFeatures(json_2g_vectorised_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32644'});
var jsonSource_2g_vectorised_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2g_vectorised_2.addFeatures(features_2g_vectorised_2);
var lyr_2g_vectorised_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2g_vectorised_2, 
                style: style_2g_vectorised_2,
                interactive: true,
    title: '2g_vectorised<br />\
    <img src="styles/legend/2g_vectorised_2_0.png" /> <br />\
    <img src="styles/legend/2g_vectorised_2_1.png" /> Excellent<br />\
    <img src="styles/legend/2g_vectorised_2_2.png" /> Good<br />\
    <img src="styles/legend/2g_vectorised_2_3.png" /> Moderate<br />'
        });

lyr_SricityBoundryOSM_0.setVisible(true);lyr_3g_4g_vectorised_1.setVisible(true);lyr_2g_vectorised_2.setVisible(true);
var layersList = [lyr_SricityBoundryOSM_0,lyr_3g_4g_vectorised_1,lyr_2g_vectorised_2];
lyr_3g_4g_vectorised_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'str': 'str', 'Area': 'Area', 'signal_strength': 'Data Signal Strength', });
lyr_2g_vectorised_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'str': 'str', 'Area': 'Area', 'signal_strength': 'Voice Signal Strength', });
lyr_3g_4g_vectorised_1.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'str': 'Hidden', 'Area': 'Hidden', 'signal_strength': 'TextEdit', });
lyr_2g_vectorised_2.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'str': 'Hidden', 'Area': 'Hidden', 'signal_strength': 'TextEdit', });
lyr_3g_4g_vectorised_1.set('fieldLabels', {'signal_strength': 'inline label', });
lyr_2g_vectorised_2.set('fieldLabels', {'signal_strength': 'inline label', });
lyr_2g_vectorised_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});