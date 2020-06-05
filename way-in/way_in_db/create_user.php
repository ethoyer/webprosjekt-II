<?php
header("Access-Control-Allow-Origin: *"); //allows access to data
header("Access-Control-Allow-Headers: *");

require 'config.php';
session_start();
error_log("Parameters:");
error_log($_POST["username"]);
$query = $db->prepare("SELECT username FROM users WHERE username = ?");
$query->bind_param("s", $_POST["username"]);
$query->execute();
$res = $query->get_result();
if ($res->num_rows !== 0){
    echo "Username already exists, choose another.";
}
else{
    if ($_POST["psw1"] == $_POST["psw2"]){
        error_log("hashing:");
        error_log($_POST["psw1"]);
        $psw = password_hash($_POST["psw1"], PASSWORD_DEFAULT);
        $_SESSION["logged_in"] = true;
        $_SESSION["username"] = $_POST["username"];
        $query = $db->prepare("INSERT INTO users (username, password) VALUES (?, ?)");

        $query->bind_param(
            "ss",
             $_POST["username"],
             $psw  // Which is the hashed and salted password
        );
        $query->execute();
    }else{
        error_log("passwords did not match");
    }
}
?>