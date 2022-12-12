<?php
/*header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers:*");*/
//header("Content-type: application/json; charset=utf-8");
require_once 'db.php';

//echo "ellenőrzés:".$host;
try{
    $sql="SELECT * FROM todos ORDER BY timestamp desc";
    $stmt=$db->query($sql);
    echo json_encode($stmt->fetchAll());
}catch(PDOException $e){
    echo json_encode(["error"=>$e->getMessage()]);
}



?>

