<?php
header("Access-Control-Allow-Origin: *"); //allows access to data
header("Access-Control-Allow-Headers: *");

$type = $_GET['tp'];
if ($type == 'login') login();
elseif ($type == 'companies') showCompanies();
function login()
{
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $username = $json['username'];
    $password = $json['password'];
    $userData = '';
    $query = "select * from users where username='$username' and password='$password'";
    $result = $db->query($query);
    $rowCount = $result->num_rows;

    if ($rowCount > 0) {
        $userData = $result->fetch_object();
        $userData = json_encode($userData);
        echo '{"userData":' . $userData . '}';
    } else {
        echo '{"error":"Wrong username and password"}';
    }
}

function showCompanies()
{
    require 'config.php';
    $query = "SELECT * FROM feed ";
    $result = $db->query($query);

    $companyData = mysqli_fetch_all($result, MYSQLI_ASSOC);
    $companyData = json_encode($companyData);

    echo '{"companyData":' . $companyData . '}';
}
