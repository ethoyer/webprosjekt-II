

export function PostData(userData) {
    let BaseURL = "http://localhost/way_in_db/index.php";
  /*
    return new Promise((resolve, reject) => {
      fetch(BaseURL + "?tp=" + type, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) =>
          response.json().then((res) => {
            resolve(res);
          })
        )
        .catch((error) => {
          reject(error);
        });
    });

  */
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
  