<?php
header("Access-Control-Allow-Origin: *"); //allows access to data
include 'connect.php';
 
if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
} 
 
$sql = "SELECT * FROM bachelor_projects";
 
$result = $conn->query($sql);
 
if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $tem = $row;
 
 $json = json_encode($tem);
 
 
 }
 
} else {
 echo "No Results Found.";
}
 echo $json;
$conn->close();
?>