<?php
require_once 'db.php';
extract($_POST);

try{
    $sql="insert into todos (name) values ('{$newTodo}')";
    $stmt=$db->query($sql);
    echo json_encode(["success"=>true]);
}catch(PDOException $e){
    echo json_encode(["success"=>false,"error"=>$e->getMessage()]);
}



?>

