<?php
// This php file shall be added to htdocs folder
// This php file goes in the backend server / host, eg. in htdocs in xampp.
// If xampp is used: import the way_in.sql database in phpmyadmin.
//  Some configurations may be necessary:
//      open C:\xampp\php\php.ini and change the lines:
//          ;extension=php_pdomysql.dll to
//          extension=php_pdomysql.dll
//          ;extension=php_pgsql.dll to
//          extension=php_pgsql.dll

$host = "localhost";
$user = "root";
$password = "";
$dbname = "way_in";

// The dsn is used to define what server and database to access:
$dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";

/**
 * set options, such as which "fetch mode" to use.
 * PDO::FETCH_ASSOC is the most important thing here:
 */
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false
];

/**
 * Creates a new Php Database Object that is
 * used to query from the database.
 */
$db = new PDO($dsn, $user, $password, $options);

/** 
*if ($_POST["method"] == "login"){
* $password=$_POST["password"];
*   //sjekker om username ligger i db
*    $query=$db->prepare(
*       "SELECT `username` FROM `users` WHERE username=:userName"
*    );
*   $query->excecute([
*       "userName" => $userName
*   ]);
*   if ($query->fetch()) {
*       //sjekker passordet til user i db
*       $query2=$db->prepare(
*           "SELECT `password` FROM `users` WHERE username=:userName"
*       );

*        $query2->excecute([
*           "userName" => $userName
*       ]);
*       $psw2 = $query->fetch()[0];
*       //sjekker om passordet er riktig
*       if ($psw2 == $password){
*           echo 'yay';
*       }
*       else
*       {
*            echo 'nay';
*        }
*    }
*}
*/

if ($_POST["method"] == "add"){
    $query = $db->prepare(
        "INSERT INTO `stud_int_application` (`Email`, `Fname`, `Mname`, `Lname`, `programme_code`) VALUES (:email, :fname, :mname, :lname, :pcode)"
    );
    $query->execute([
        "email" => $_POST["Email"],
        "fname" => $_POST["Fname"],
        "mname" => $_POST["Mname"],
        "lname" => $_POST["Lname"],
        "pcode" => $_POST["programme_code"]
    ]);
}elseif ($_POST["method"] == "addStudBach"){
    $query = $db->prepare(
        "INSERT INTO `stud_ba_application` (`Email`, `Fname`, `Mname`, `Lname`, `programme_code`, `Mentor`) VALUES (:email1, :fname1, :mname1, :lname1, :pcode1, :mentor)"
    );
    $query->execute([
        "email1" => $_POST["Email"],
        "fname1" => $_POST["Fname"],
        "mname1" => $_POST["Mname"],
        "lname1" => $_POST["Lname"],
        "pcode1" => $_POST["programme_code"],
        "mentor" => $_POST["Mentor"]
    ]);
}elseif ($_POST["method"] == "addCompInt"){
    $query = $db->prepare(
        "INSERT INTO `company_int_suggestion` (`company_id`,`contact_person`, `phone_no`, `email`, `project_title`,`project_description`,`project_duration`,`start_date`,`location`,`no_of_stud`) VALUES (:compID, :fname, :tlf, :email, :intTitle, :intDescription, :intDuration, :intStart, :intLocation, :quantity)"
    );
    $query->execute([
        "compID" => $_POST["company_id"],
        "fname" => $_POST["contact_person"],
        "tlf" => $_POST["phone_no"],
        "email" => $_POST["email"],
        "intTitle" => $_POST["project_title"],
        "intDescription" => $_POST["project_description"],
        "intDuration" => $_POST["project_duration"],
        "intStart" => $_POST["start_date"],
        "intLocation" => $_POST["location"],
        "quantity" => $_POST["no_of_stud"]
    ]);
}elseif ($_POST["method"] == "addBusBach"){
    $query = $db->prepare(
        "INSERT INTO `company_ba_suggestion` (`company_id`,`contact_person`, `phone_no`, `email`, `project_title`,`project_description`,`project_duration`,`start_date`,`location`,`no_of_stud`) VALUES (:compID, :fname, :tlf, :email, :bachTitle, :bachDesc, :bachDuration, :bachStart, :bachLoc, :quantity)"
    );
    
    $query->execute([
        "compID" => $_POST["company_id"],
        "fname" => $_POST["contact_person"],
        "tlf" => $_POST["phone_no"],
        "email" => $_POST["email"],
        "bachTitle" => $_POST["project_title"],
        "bachDesc" => $_POST["project_description"],
        "bachDuration" => $_POST["project_duration"],
        "bachStart" => $_POST["start_date"],
        "bachLoc" => $_POST["location"],
        "quantity" => $_POST["no_of_stud"]
    ]);
    }
    

/**
 * Create the statement:
 */
//$stmt = $db->query("SELECT * FROM Projects");


/**
 * Create an object, fetch each row and add it to the
 * object:
 */
/*
$obj = array();
while ($row = $stmt->fetch()){
    $subObj = array();
    $subObj["id"] = $row["ProjectID"];
    $subObj["title"] = $row["ProjectName"];
    $subObj["company"] = $row["Company"];
    $subObj["faculty"] = $row["Faculty"];
    $subObj["location"] = $row["Location"];
    $subObj["description"] = $row["Description"];
    array_push($obj, $subObj);
}
*/

// Finally return the json by jsnon encode it and echo it.
//echo json_encode($obj);

// fetch from eg. http:/192.xxxxx/wayin/intProjectDB.php
// use ipconfig in the terminal to get the ip adress of the host.


?>
