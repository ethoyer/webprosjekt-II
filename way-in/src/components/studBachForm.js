import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


class StudBachForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.prevPage = this.prevPage.bind(this);
      this.state = {
        email1: '',
        fname1:'',
        mname1:'',
        lname1:'',
        pcode1:'',
        
        isSubmitted: false,
    };
  }
  
  handleEmailChange(event) {
    const inputValue = event.target.value;
    this.setState({
      email1: inputValue,
      fname1: inputValue,
      mname1: inputValue,
      lname1: inputValue,
      
    });
  }


  handleSubmit(event) {
    console.log("Form sent");
    const formData = new FormData();
    formData.append(
      "method",
      "addStudBach"
    );
    formData.append(
      'Email',
      document.getElementById("email1").value
    );
    formData.append(
      'Fname',
      document.getElementById("fname1").value
    );
    formData.append(
      'Mname',
      document.getElementById("mname1").value
    );
    formData.append(
      'Lname',
      document.getElementById("lname1").value
    );
    formData.append(
      'programme_code',
      document.getElementById("pcode1").value
    );
    console.log(formData);
    //'localhost' may have to be replaced bt your local ip address:
    fetch("http://192.168.64.2/way_in_db/intForm-1.php", {
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
           <label htmlfor="quantity">No. of students: 
            <input 
              id="quantity"
              defaultValue="1"
              type="number" 
              name="quantity" 
              min="1" 
              max="4"/>
            </label>

            <label htmlFor="name">*Student 1: 
            <input
              id="fname1"
              type="text"
              placeholder="first name"
       
            />
            
            <input
              id="mname1"
              type="text"
              placeholder="(middle name)"
            />

            <input
              id="lname1"
              type="text"
              placeholder="last name"
             
            />
            </label>

            <label htmlFor="email1">*E-mail: 
            <input
              id="email1"
              type="email"
              pattern="^[a-zA-Z0-9]+@stud\.ntnu\.no$"
              placeholder="ex) olan@stud.ntnu.no"
       
            />
            </label>

            <label htmlFor="programme">*Choose programme:
            <select id="pcode1" name="programme">
              <option value="BWU">BWU</option>
              <option value="BIXD">BIXD</option>
              <option value="BMED">BMED</option>
            </select>        
            </label>

            
             <input            
                type='submit'            
                value='Submit'            
               />  
               <a className="navButton" href="" onClick={(e) => this.prevPage(e)}>BACK</a> 
        </form>
       
       );
    }
    
    return (
      <main id="studform" className="hidden">

        <div className='studIntForm'>
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