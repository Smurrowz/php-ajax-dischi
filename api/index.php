<?php 

include __DIR__ . '/albums.php';

$al = 
[
  'success' => true,
  'response' => $albums
];
header('Content-Type: application/json');
echo json_encode($al);



