export function PostData(userData) {
    let BaseURL = "http://localhost/way_in_db/index.php";
    let formData = new FormData();
    formData.append("tp", "login");
    formData.append("username", userData.username);
    formData.append("password", userData.password);
    let res = fetch(BaseURL, {
      method: "POST",
      body: formData
    });
    return res;
  }
  