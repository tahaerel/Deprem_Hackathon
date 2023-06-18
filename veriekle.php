<?php
$kimlik = $_POST['kimlik'];
$risk = $_POST['risk'];
$BinaYili = $_POST['BinaYili'];
$DayaniklilikTesti = $_POST['DayaniklilikTesti'];
$geojson = file_get_contents('veriler.geojson');

$data = json_decode($geojson, true);

$newFeature = array(
    'type' => 'Feature',
    'properties' => array(
        'id' => count($data['features']),
        'color' => '#ff0000',
        'risk' => $risk,
        'DayaniklilikTesti2' => $DayaniklilikTesti,
        'kimlik' => $kimlik,
        'BinaYili2' => $BinaYili
    ),
    'geometry' => array(
        'coordinates' => array(
            // Koordinatlar 
        ),
        'type' => 'Polygon'
    ),
    'id' => count($data['features'])
);


$data['features'][] = $newFeature;


$newGeoJSON = json_encode($data, JSON_PRETTY_PRINT);


file_put_contents('veriler.geojson', $newGeoJSON);

echo 'Veri başarıyla kaydedildi.';
?>
