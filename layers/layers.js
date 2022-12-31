var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMap_2 = new ol.layer.Tile({
            'title': 'Google Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var lyr_Parcelle_Bussy_St_Georges_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://inspire.cadastre.gouv.fr/scpc/77058.wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "CP.CadastralParcel",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Parcelle_Bussy_St_Georges",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Parcelle_Bussy_St_Georges_3, 0]);
var lyr_Parcelle_SERRIS_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://inspire.cadastre.gouv.fr/scpc/77449.wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "CP.CadastralParcel",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Parcelle_SERRIS",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Parcelle_SERRIS_4, 0]);
var lyr_Parcelle_Magny_Le_Hongre_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://inspire.cadastre.gouv.fr/scpc/77268.wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "CP.CadastralParcel",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Parcelle_Magny_Le_Hongre",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Parcelle_Magny_Le_Hongre_5, 0]);
var format_LOTs_6 = new ol.format.GeoJSON();
var features_LOTs_6 = format_LOTs_6.readFeatures(json_LOTs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTs_6.addFeatures(features_LOTs_6);
var lyr_LOTs_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOTs_6, 
                style: style_LOTs_6,
                interactive: true,
                title: '<img src="styles/legend/LOTs_6.png" /> LOTs'
            });
var format_TravauxEP_7 = new ol.format.GeoJSON();
var features_TravauxEP_7 = format_TravauxEP_7.readFeatures(json_TravauxEP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TravauxEP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TravauxEP_7.addFeatures(features_TravauxEP_7);
var lyr_TravauxEP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TravauxEP_7, 
                style: style_TravauxEP_7,
                interactive: true,
                title: '<img src="styles/legend/TravauxEP_7.png" /> Travaux EP'
            });
var format_Info_8 = new ol.format.GeoJSON();
var features_Info_8 = format_Info_8.readFeatures(json_Info_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Info_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Info_8.addFeatures(features_Info_8);
var lyr_Info_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Info_8, 
                style: style_Info_8,
                interactive: true,
                title: '<img src="styles/legend/Info_8.png" /> Info'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GoogleMap_2.setVisible(true);lyr_Parcelle_Bussy_St_Georges_3.setVisible(true);lyr_Parcelle_SERRIS_4.setVisible(true);lyr_Parcelle_Magny_Le_Hongre_5.setVisible(true);lyr_LOTs_6.setVisible(true);lyr_TravauxEP_7.setVisible(true);lyr_Info_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_GoogleMap_2,lyr_Parcelle_Bussy_St_Georges_3,lyr_Parcelle_SERRIS_4,lyr_Parcelle_Magny_Le_Hongre_5,lyr_LOTs_6,lyr_TravauxEP_7,lyr_Info_8];
lyr_LOTs_6.set('fieldAliases', {'LOT': 'LOT', 'Start': 'Start', 'End': 'End', 'Nature': 'Nature', 'Programme': 'Programme', 'Preneur': 'Preneur', 'Remarques': 'Remarques', 'ZAC': 'ZAC', });
lyr_TravauxEP_7.set('fieldAliases', {'Statut': 'Statut', 'Nature': 'Nature', 'Start': 'Start', 'End': 'End', 'Entreprise': 'Entreprise', 'MOA': 'MOA', 'Remarques': 'Remarques', });
lyr_Info_8.set('fieldAliases', {'Info': 'Info', });
lyr_LOTs_6.set('fieldImages', {'LOT': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', 'Nature': 'TextEdit', 'Programme': 'TextEdit', 'Preneur': 'TextEdit', 'Remarques': 'TextEdit', 'ZAC': 'TextEdit', });
lyr_TravauxEP_7.set('fieldImages', {'Statut': 'TextEdit', 'Nature': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', 'Entreprise': 'TextEdit', 'MOA': 'TextEdit', 'Remarques': 'TextEdit', });
lyr_Info_8.set('fieldImages', {'Info': 'TextEdit', });
lyr_LOTs_6.set('fieldLabels', {'LOT': 'inline label', 'Start': 'inline label', 'End': 'inline label', 'Nature': 'inline label', 'Programme': 'inline label', 'Preneur': 'inline label', 'Remarques': 'inline label', 'ZAC': 'inline label', });
lyr_TravauxEP_7.set('fieldLabels', {'Statut': 'inline label', 'Nature': 'inline label', 'Start': 'inline label', 'End': 'inline label', 'Entreprise': 'inline label', 'MOA': 'inline label', 'Remarques': 'inline label', });
lyr_Info_8.set('fieldLabels', {'Info': 'no label', });
lyr_Info_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});