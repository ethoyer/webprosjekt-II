import React from 'react';
import { Link } from 'react-router-dom';


class StudBachForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getProjectsInList = this.getProjectsInList.bind(this);
      this.prevPage = this.prevPage.bind(this);
      this.state = {
        email: '',
        fname:'',
        mname:'',
        lname:'',
        pcode:'',
        mentor:'',
        
        isSubmitted: false,
    };
  }

  getProjectsInList(event){
    let inList = document.getElementsByClassName("inList");
    let arr = [];
    for (let i=0; i<inList.length; i++){
      arr.push(inList[i].getAttribute("id"));
    }
    return arr;
  }
  
  handleEmailChange(event) {
    const inputValue = event.target.value;
    this.setState({
      email: inputValue,
      fname: inputValue,
      mname: inputValue,
      lname: inputValue,
      mentor: inputValue
      
    });
  }


  handleSubmit(event) {
    console.log("Form sent");
    let addedProjects = JSON.stringify(this.getProjectsInList())
    const formData = new FormData();
    formData.append(
      "method",
      "addStudBach"
    );
    formData.append(
      'Projects',
      addedProjects
    );
    formData.append(
      'Email',
      document.getElementById("email").value
    );
    formData.append(
      'Fname',
      document.getElementById("fname").value
    );
    formData.append(
      'Mname',
      document.getElementById("mname").value
    );
    formData.append(
      'Lname',
      document.getElementById("lname").value
    );
    formData.append(
      'programme_code',
      document.getElementById("pcode").value
    );
    formData.append(
      'Mentor',
      document.getElementById("mentor").value
    );
    console.log(formData);
    //'localhost' may have to be replaced bt your local ip address:
    fetch("http://localhost/way_in_db/internshipForm.php", {
      method: 'POST',
      body: formData
    });
   
    this.setState({isSubmitted: true});
    event.preventDefault();
  }

  prevPage(e) {
    e.preventDefault();
    document.getElementById("studAppMain").className = "visible";
    document.getElementById("studform").className = "hidden";
  }

  render() {
      
                                     
        
    let contactForm;      

    if (this.state.isSubmitted) {            
        contactForm = (            
        <div className='contact-submit-message'>
        <h2>Thank you!</h2>
        <p>Your application form has been sent.</p>
        <p>A copy of your application has been sent to your e-mail.</p>
        <Link to="/">Back to front</Link>
        </div>
        );
      } else {
        contactForm = (
         
          
          <form onSubmit={this.handleSubmit} >
            <h2>Bachelor Project Application</h2>
           <p>Please fill in the application form below.</p>
           <label htmlfor="quantity">No. of students: </label>
            <input 
              id="quantity"
              defaultValue="1"
              type="number" 
              name="quantity" 
              min="1" 
              max="4"/>

            <label htmlFor="name">*Student 1: </label>
            <input
              id="fname"
              type="text"
              placeholder="first name"
              required
            />
            
            <input
              id="mname"
              type="text"
              placeholder="(middle name)"
            />

            <input
              id="lname"
              type="text"
              placeholder="last name"
              required
            />

            <label htmlFor="email">*E-mail (Only accepts "@stud.ntnu.no"): </label>
            <input
              id="email"
              type="email"
              pattern="^[a-zA-Z0-9]+@stud\.ntnu\.no$"
              placeholder="ex) olan@stud.ntnu.no"
              required
       
            />

            <label htmlFor="programme">*Choose programme: </label>
            <select id="pcode" name="programme">
              <option value="BWU">BWU</option>
              <option value="BIXD">BIXD</option>
              <option value="BMED">BMED</option>
            </select>       

            <label htmlFor="mentor">*Your mentor: </label>
            <input
              id="mentor"
              type="text"
              placeholder="firstname lastname"
              required
            />

            
             <input            
                type='submit'            
                value='Submit'            
               />  
               <button className="navButton" onClick={(e) => this.prevPage(e)}>BACK</button> 
        </form>
       
       );
    }
    
    return (
      <main id="studform" className="hidden">

        <div className='studBachForm'>
          <div id="projectListContainer">
        <p>Chosen Internships:</p>
        <div id="projectList"></div>
        </div>

          {contactForm}
        </div>
        </main>
    );
  }
}         

export default StudBachForm;