<?php

require_once 'db.php';
extract($_GET);
try{
    $sql="delete from todos where id={$id}";
    $stmt=$db->query($sql);
    echo json_encode(["success"=>true]);
}catch(PDOException $e){
    echo json_encode(["success"=>false,"error"=>$e->getMessage()]);
}



?>

