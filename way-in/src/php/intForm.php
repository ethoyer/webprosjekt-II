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
    echo "1";
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

echo "2";
?>
