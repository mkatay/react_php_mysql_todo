<?php
require_once 'db.php';

try{
    $sql="delete from todos ";
    $stmt=$db->query($sql);
    echo json_encode(["success"=>true]);
}catch(PDOException $e){
    echo json_encode(["success"=>false,"error"=>$e->getMessage()]);
}



?>

