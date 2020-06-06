<?php
header("Access-Control-Allow-Origin: *"); //allows access to data
header("Access-Control-Allow-Headers: *");
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
    $Projects = json_decode($_POST["Projects"]);
    foreach ($Projects as $project){
        $query2 = $db->prepare(
            "INSERT INTO `chosen_projects` (`Email`, `project_id`) VALUES (:v1, :v2)"
        );
        $query2->execute([
            "v1" => $_POST["Email"],
            "v2" => $project
        ]);
    }
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
        $Projects = json_decode($_POST["Projects"]);
        foreach ($Projects as $project){
         $query2 = $db->prepare(
            "INSERT INTO `chosen_bach_projects` (`Email`, `bach_id`) VALUES (:v1, :v2)"
        );
        $query2->execute([
            "v1" => $_POST["Email"],
            "v2" => $project
        ]);
        }
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
        "INSERT INTO `company_ba_suggestion` (`company_id`,`contact_person`, `phone_no`, `email`, `project_title`,`project_description`,`project_duration`,`start_date`,`location`,`no_of_stud`) VALUES (:compID, :contactName, :tlf, :contactemail, :bachTitle, :bachDesc, :bachDuration, :bachStart, :bachLoc, :stdquantity)"
    );
    
    $query->execute([
        "compID" => $_POST["company_id"],
        "contactName" => $_POST["contact_person"],
        "tlf" => $_POST["phone_no"],
        "contactemail" => $_POST["email"],
        "bachTitle" => $_POST["project_title"],
        "bachDesc" => $_POST["project_description"],
        "bachDuration" => $_POST["project_duration"],
        "bachStart" => $_POST["start_date"],
        "bachLoc" => $_POST["location"],
        "studquantity" => $_POST["no_of_stud"]
    ]);
    }
?>
