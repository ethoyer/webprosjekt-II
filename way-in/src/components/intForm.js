import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


class IntForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.prevPage = this.prevPage.bind(this);
      this.state = {
        email: '',
        fname:'',
        mname:'',
        lname:'',
        pcode:'',
        isSubmitted: false,
    };
  }
  
  handleEmailChange(event) {
    const inputValue = event.target.value;
    this.setState({
      email: inputValue,
      fname: inputValue,
      mname: inputValue,
      lname: inputValue,
    });
  }


  handleSubmit(event) {
    console.log("Form sent");
    const formData = new FormData();
    formData.append(
      "method",
      "add"
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
            <h2>Internship Application</h2>
           <p>Please fill in the application form below.</p>
            <label htmlFor="name">*Your name: 
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
            </label>

            <label htmlFor="email">*E-mail: 
            <input
              id="email"
              type="email"
              placeholder="ex) olan@stud.ntnu.no"
              pattern="^[a-zA-Z0-9]+@stud\.ntnu\.no$"
              required
            />
            </label>

            <label htmlFor="programme">*Choose programme:
            <select id="pcode" name="programme">
              <option value="IMT3541">IMT3541</option>
              <option value="IMT3006">IMT3006</option>
             
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

export default IntForm;