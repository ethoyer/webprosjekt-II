<?php
header("Access-Control-Allow-Origin: *"); //allows access to data
header("Access-Control-Allow-Headers: *");

error_log("index.php executing");
$type = $_POST['tp'];
if ($type == 'login') login();
function login()
{
    error_log("login() executing.");
    session_start();
    require 'config.php';
    // $json = json_decode(file_get_contents('php://input'), true);  // $json = $_POST
    $username = $_POST['username'];
    $password = $_POST['password'];
    error_log("user name is:");
    error_log($username);
    $query = $db->prepare("SELECT * from `users` where username=?");
    $query->bind_param("s", $username);
    $query->execute();
    $res = $query->get_result();
    if ($res->num_rows >0){
        error_log("found user $username");
        $data = $res->fetch_assoc();
        error_log(serialize($data));
        error_log($password);
        error_log($data["password"]);
        $verf = password_verify($password, $data["password"]);
        error_log("Verification $verf");
        if (password_verify($password ,$data["password"])){
            error_log("And by the way, passwords mathch");
            $_SESSION["username"] = $username;
            $_SESSION["password"] = password_hash($password, PASSWORD_DEFAULT);
            $userData = json_encode($data);
            echo $userData;
            error_log("Final result:");
            error_log(serialize($userData));
        }else{
            error_log("Passwords did not match");
        }
    }
    else{
        error_log("Did not find user $username");
    }
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
