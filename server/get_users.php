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

$sql = "SELECT username, id, password,email FROM  tb_usuarios";
$result = $conn->query($sql);

$lista = array();

if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {

      array_push($lista,$row);

    }
}

echo json_encode($lista);

$conn->close();
?>
