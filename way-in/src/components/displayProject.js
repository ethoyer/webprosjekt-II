import internData from '../dummydb.json';

function displayProject(e) {
  console.log(e.target.parentElement.id);
  let targetid = e.target.parentElement.id;

  {internData.map((postDetail, index) => {
      if (e.target.parentElement.id == postDetail.id) {
        console.log(postDetail.title)
        let title = postDetail.title;
      let company = postDetail.company;
      let faculty = postDetail.faculty;
      let location = postDetail.location;
      let desc = postDetail.description;
      document.getElementById("projecttitle").innerHTML = title;
      document.getElementById("full").className = postDetail.id;
      document.getElementById("company").innerHTML = company;
      document.getElementById("faculty").innerHTML = faculty;
      document.getElementById("location").innerHTML = location;
      document.getElementById("desc").innerHTML = desc;
      }
    })
  }

}

export default displayProject;