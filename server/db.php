<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, PATCH, DELETE');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Authorization, Content-Type, x-xsrf-token, x_csrftoken, Cache-Control, X-Requested-With');

include 'environment.php';
//print_r($_ENV);
$host = isset($_ENV['MYSQL_HOST']) ? $_ENV['MYSQL_HOST'] : 'localhost';
$db_name =isset($_ENV['MYSQL_DATABASE']) ? $_ENV['MYSQL_DATABASE'] : 'todo';
$db_username = isset($_ENV['MYSQL_USERNAME']) ? $_ENV['MYSQL_USERNAME'] : 'root'; 
$db_password = isset($_ENV['MYSQL_PASSWORD']) ? $_ENV['MYSQL_PASSWORD'] : ''; 
$options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC];



try{
    $db = new PDO("mysql:host=$host;dbname=$db_name; charset=utf8",$db_username,$db_password,$options);
}catch(PDOException $e)	{
      echo "!!! az adatbazis kapcsolodas sikertelen !!!";
    exit;
}		

?>