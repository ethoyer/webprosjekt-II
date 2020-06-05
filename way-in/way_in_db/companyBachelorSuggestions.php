<?php
header("Access-Control-Allow-Origin: *"); //allows access to data
require 'config.php';
 
if ($db->connect_error) {
 
 die("Connection failed: " . $db->connect_error);
}
 
$result = $db->query('SELECT * FROM company_ba_suggestion INNER JOIN companies ON company_ba_suggestion.company_id=companies.company_id');
 
if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $tem = $row;
 
 $json = json_encode($tem);
 
 
 }
 
} else {
 echo "No Results Found.";
}
 echo $json;
$db->close();
?>