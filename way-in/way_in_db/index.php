<?php
header("Access-Control-Allow-Origin: *"); //allows access to data

$type = $_GET['tp'];
if ($type == 'login') login();
elseif ($type == 'companies') showCompanies();
function login()
{
    session_start();
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);  // $json = $_POST
    $username = $json['username'];
    $password = $json['password'];
    //$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    // $userData = '';
    $query = "SELECT * from `users` where username='$username'";
    $result = $db->query($query)->fetch();
    if ($result && password_verify($password ,$result["password"])){
        $_SESSION["username"] = $username;
        $_SESSION["password"] = $hashedPassword;
        $userData = json_encode($result);
        echo $userData;
    }
    /*
    if ($rowCount > 0) {
        $userData = $result->fetch_object();
        $userData = json_encode($userData);
        echo '{"userData":' . $userData . '}';
    } else {
        echo '{"error":"Wrong username and password"}';
    }
    */
}

function showCompanies()
{
    require 'config.php';
    $query = "SELECT * FROM company_ba_suggestion INNER JOIN companies ON company_ba_suggestion.company_id=companies.company_id ";
    $result = $db->query($query);

    $companyData = mysqli_fetch_all($result, MYSQLI_ASSOC);
    $companyData = json_encode($companyData);

    echo '{"companyData":' . $companyData . '}';
}