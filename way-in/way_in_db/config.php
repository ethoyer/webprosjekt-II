
<?php
header("Access-Control-Allow-Origin: *"); //allows access to data
header("Access-Control-Allow-Headers: *");
$db = new mysqli("localhost","root","","way_in");
if(!$db) die("database connection error");
?>