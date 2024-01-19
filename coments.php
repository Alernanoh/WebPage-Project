<?php
include 'conection.php';

$name=$_POST['fname'];
$lastname=$_POST['lname'];
$email=$_POST['email'];
$comment=$_POST['comentario'];


$query="INSERT into comments (name, lastname, email, comment)
values ('$name', '$lastname', '$email', '$comment')";

$result=mysqli_query($conection, $query);

if($result){
    echo "Registro Exitoso";
} else{
    echo "No se pudo registrar";
}
?>