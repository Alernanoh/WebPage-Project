<?php
include 'conection.php'
//Connection from the subscription.
$buyname=$_POST['buyname'];
$buylname=$_POST['buylname'];
$buyemail=$_POST['buyemail'];
$creditCard=$_POST['creditCard'];
$creditCode=$_POST['creditCode'];

$query="INSERT into subscriptions (name, lastname, email, creditCard,
creditCode)
values ('$buyname', '$buylname', 'buyemail', 'creditCard', 'creditCode')";
$resultado=mysqli_query($conection, $query);

if ($resultado) {
    echo "Subscripción Existosa";
} else{
    echo "No se pudo realizar la subscripción";
}


?>