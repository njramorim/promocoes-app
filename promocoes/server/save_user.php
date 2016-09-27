<?php
header("Content-type: application/json; charset=utf-8");


$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "promocoes";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$postdata = file_get_contents("php://input");

//mudar onde esta POST para post

$data = json_decode($postdata);

$user =  $data->username;
$password = md5($data->password);
$email = $data->email;
$sql = "insert into tb_usuarios  (username, password,email) values('".$user."','".$password."','".$email."')";

if ($conn->query($sql) === TRUE) {
    echo '{"success":"true"}';
} else {
    echo '{"success":"false"}';
    //print_r(json_encode($data));
}



$conn->close();
?>
