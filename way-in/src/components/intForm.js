import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class IntForm extends React.Component {
    constructor(props) {
      super(props);
      this.prevPage = this.prevPage.bind(this);
      this.state = {
        isSubmitted: false,
        email: '',
        hasEmailError: false,
       
    };
  }
 //checking if the email box is empty (when you delete all the input data, a text appears)
  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      email: inputValue,
      hasEmailError: isEmpty,
    });
  }


  handleSubmit() {
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
    //'localhost' may have to be replaced bt your local ip address:
    fetch("http://localhost/way_in_db/intForm.php", {
      method: 'POST',
      body: formData
    });
    this.setState({isSubmitted: true});
  }

  prevPage(e) {
    e.preventDefault();
    document.getElementById("studAppMain").className = "visible";
    document.getElementById("studform").className = "hidden";
  }

  render() {
    let emailErrorText;

    if (this.state.hasEmailError) {
      emailErrorText = (
        <sub className='contact-message-error'>Please fill in your e-mail address</sub>
      )
    }

    let contentErrorText;
             
    if (this.state.hasContentError) {            
        contentErrorText = (            
        <p className='contact-message-error'>please fill in your inquiry</p>            
           )            
          }            
                                     
        
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
         
          
          <form onSubmit={() => {this.handleSubmit()}} >
            <h2>Internship Application</h2>
           <p>Please fill in the application form below.</p>
            <label htmlFor="name">*Your name: </label>
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
         

            <label htmlFor="email">*E-mail: </label>
            <input
              id="email"
              type="email"
              placeholder="ex) olan@stud.ntnu.no"
              value={this.state.email}
              onChange={(event) => {this.handleEmailChange(event)}}
              required
            />
            {emailErrorText}  

            <label htmlFor="programme">*Choose programme:</label>
            <select id="pcode" name="programme">
              <option value="IMT3541">IMT3541</option>
              <option value="IMT3006">IMT3006</option>
             
            </select>        
                   
       
            <label htmlFor="comments">Comments (if any):</label>   
            <textarea  
                id="comments"          
                value={this.state.content}           
             />            
        
        
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