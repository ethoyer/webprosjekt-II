<?php
header("Access-Control-Allow-Origin: *"); //allows access to data
require 'config.php';
 
if ($db->connect_error) {
 
 die("Connection failed: " . $db->connect_error);
}
 
$result = $db->query('SELECT * FROM stud_int_application
INNER JOIN chosen_projects ON stud_int_application.email=chosen_projects.Email
INNER JOIN internships ON chosen_projects.project_id=internships.id');
 
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