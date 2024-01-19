<?php
include 'conection.php';

$name=$_POST['fname'];
$lastname=$_POST['lname'];
$email=$_POST['email'];
$password=$_POST['passwd'];


$query="INSERT into users (name, lastname, email, password)
values ('$name', '$lastname', '$email', '$password')";

$result=mysqli_query($conection, $query);

if($result){
    echo "Registro Exitoso";
} else{
    echo "No se pudo registrar";
}


?>