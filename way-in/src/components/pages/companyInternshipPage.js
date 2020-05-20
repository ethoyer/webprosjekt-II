import React from 'react';
import '../../css/form.css';
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom';

class CompanyInternshipForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
   
    this.state = {
      compID: '',
      fname:'',
      email:'',
      tlf:'',
      internshipLocation:'',
      internshipTitle:'',
      internshipDescription:'',
      internshipStart:{value:'Fall 2020'},
      quantity:'',
      internshipDuration: {value:'lessThan6month'},
      isSubmitted: false,
  };
}

handleEmailChange(event) {
  const inputValue = event.target.value;
  this.setState({
    compID: inputValue,
    fname: inputValue,
    email: inputValue,
    tlf: inputValue,
    internshipLocation: inputValue,
    internshipTitle: inputValue,
    internshipDescription: inputValue,
    internshipDuration: inputValue,
    internshipStart: inputValue
  });
}


handleSubmit(event) {
  console.log("Form sent");
  const formData = new FormData();
  formData.append(
    "method",
    "addCompInternship"
  );
  formData.append(
    'company_id',
    document.getElementById("compID").value
  );
  
  formData.append(
    'contact_person',
    document.getElementById("fname").value
  );
  formData.append(
    'phone_no',
    document.getElementById("tlf").value
  );
  formData.append(
    'email',
    document.getElementById("email").value
  );
  formData.append(
    'project_title',
    document.getElementById("internshipTitle").value
  );
  formData.append(
    'project_description',
    document.getElementById("internshipDescription").value
  );
  formData.append(
    'project_duration',
    document.getElementById("internshipDuration").value
  );
  formData.append(
    'start_date',
    document.getElementById("internshipStart").value
  );
  formData.append(
    'location',
    document.getElementById("internshipLocation").value
  );
  formData.append(
    'no_of_stud',
    document.getElementById("quantity").value
  );
  
  console.log(formData);
  //'localhost' may have to be replaced bt your local ip address:
  fetch("http://locslhost/way_in_db/internshipForm.php", {
    method: 'POST',
    body: formData
  });
 
  this.setState({isSubmitted: true});
  event.preventDefault();
}

  render() {                                   
        
    let applyInternshipForm;      

    if (this.state.isSubmitted) {            
      applyInternshipForm = (            
        <div className='contact-submit-message'>
        <h2>Thank you!</h2>
        <p>Your application form has been sent.</p>
        <p>A copy of your application has been sent to your e-mail.</p>
        <Link to="/">Back to front</Link>
        </div>
        );
        //companies need to give their ID provided by NTNU when offering an internship/ projects 
        //because they need to already exist in the database
      } else {
        applyInternshipForm = (
         
          <form onSubmit={this.handleSubmit}>
            <h2>Project Application</h2>
           <p>Please fill in the application form below.</p>
          
           <label htmlfor="compID">*Your company ID: 
            <input
              id="compID"
              name="compID"
              type="text"
              placeholder="company ID provided by NTNU"
            
            />
            </label>
        
      
        
            <label htmlFor="contactName">*Contact person:
            <input
              id="fname"
              type="text"
              placeholder="first name (middle name) last name"
            />

      
            
          </label>

            <label htmlFor="email">*E-mail address: 
            <input
              id="email"
              type="email"
              placeholder="ex) olan@norcoop.com"
              required
            />
          </label>

            <label htmlFor="tlf">Tel. number: 
            <input
                id="tlf"
                type="tel"
                placeholder="ex) xx xxx xxx"
            />
            </label>

            <label htmlfor="internshipLocation">*Location: 
            <input
              id="internshipLocation"
              name="internshipLocation"
              type="text"
              placeholder="location.."
              required
            />    
            </label>

            <label htmlfor="internshipTitle">*Title for your project: 
            <input
              id="internshipTitle"
              name="internshipTitle"
              type="text"
              placeholder="title.."
              required
            />
            </label>

            <label htmlFor="duration">Internship duration
            <select value={this.state.value} id="internshipDuration" name="internshipDuration">
              <option value="lessThan6month" selected>Less than 6 month</option>
              <option value="moreThan6month">More than 6 month</option>
            </select>
            </label>


            <label htmlFor="internshipStart">*Project Start Date: 
            <select id="internshipStart" name="internshipStart">
              <option value="spring2020" selected>Spring 2020</option>
              <option value="fall2020">Fall 2020</option>
              <option value="spring2021">Spring 2021</option>
              <option value="fall2021">Fall 2021</option>
            </select>  
            </label>

            <label htmlfor="quantity">No. of students needed: 
            <input 
              id="quantity"
              type="number" 
              defaultValue="1"
              name="quantity" 
              min="1" 
              max="5"/>
            </label>
       
            <label htmlfor="internshipDescription">Description of the project:
            <textarea  
                id="internshipDescription" 
                name="internshipDescription"
                placeholder="description.."        
                required
             />  
            </label>

                       
             <input            
                type='submit'            
                value='Submit'            
               />  
        </form>
       
       );
    }
    
    return (
      <div>
        <Header />
        <main>
        <div className='studInternshipForm'>
          {applyInternshipForm}
        </div>
        </main>
        <Footer />
      </div>
      
    );
  }
}         

export default CompanyInternshipForm;