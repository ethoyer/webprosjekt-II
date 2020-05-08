<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "way_in";

$dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";

$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false
];

$db = new PDO($dsn, $user, $password, $options);

$stmt = $db->query("SELECT * FROM internships");
while ($row = $stmt->fetch()){
    echo $row["title"];
}
?>