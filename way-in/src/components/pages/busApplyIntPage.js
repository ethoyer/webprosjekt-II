import React from 'react';
import '../../css/form.css';
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom';

class busIntForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
   
    this.state = {
      compID: '',
      intCompany:'',
      fname:'',
      mname:'',
      lname:'',
      email:'',
      tlf:'',
      intLocation:'',
      intTitle:'',
      intStart:'',
      quantity:'',
      intDescription:'',
    
      isSubmitted: false,
  };
}

handleEmailChange(event) {
  const inputValue = event.target.value;
  this.setState({
    compID: inputValue,
    intCompany: inputValue,
    fname: inputValue,
    mname: inputValue,
    lname: inputValue,
    email: inputValue,
    tlf: inputValue,
    intLocation: inputValue,
    intTitle: inputValue,
    intDescription: inputValue,
  });
}


handleSubmit(event) {
  console.log("Form sent");
  const formData = new FormData();
  formData.append(
    "method",
    "addCompInt"
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
    document.getElementById("intTitle").value
  );
  formData.append(
    'project_description',
    document.getElementById("intDescription").value
  );
  formData.append(
    'project_duration',
    document.getElementById("intDuration").value
  );
  formData.append(
    'start_date',
    document.getElementById("intStart").value
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

  render() {                                   
        
    let applyIntForm;      

    if (this.state.isSubmitted) {            
      applyIntForm = (            
        <div className='contact-submit-message'>
        <h2>Thank you!</h2>
        <p>Your application form has been sent.</p>
        <p>A copy of your application has been sent to your e-mail.</p>
        <Link to="/">Back to front</Link>
        </div>
        );
      } else {
        applyIntForm = (
         
          <form onSubmit={this.handleSubmit}>
            <h2>Project Application</h2>
           <p>Please fill in the application form below.</p>
           <label htmlFor="compID">*Company ID: </label>
            <input
              id="compID"
              type="text"
              placeholder="ex)12345."
              required
            />
        
            <label htmlfor="intCompany">*The company you represent: 
            <input
              id="intCompany"
              name="intCompany"
              type="text"
              placeholder="company.."
            
            />
            </label>
        
            <label htmlFor="contactName">*Contact person:
            <input
              id="fname"
              type="text"
              placeholder="first name"
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

            <label htmlFor="email">*E-mail address for contact: 
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

            <label htmlfor="intLocation">*Location: 
            <input
              id="intLocation"
              name="intLocation"
              type="text"
              placeholder="location.."
              required
            />    
            </label>

            <label htmlfor="intTitle">*Title for your project: 
            <input
              id="intTitle"
              name="intTitle"
              type="text"
              placeholder="title.."
              required
            />
            </label>

            <label htmlFor="duration">Internship duration
            <select id="intDuration" name="intDuration">
              <option value="lessThan6month">Less than 6 month</option>
              <option value="moreThan6month">More than 6 month</option>
            </select>
            </label>


            <label htmlFor="intStart">*Project Start Date: 
            <select id="intStart" name="intStart">
              <option value="spring2020">Spring 2020</option>
              <option value="fall2020">Fall 2020</option>
              <option value="spring2021">Spring 2021</option>
              <option value="fall2021">Fall 2021</option>
            </select>  
            </label>

            <label for="quantity">No. of students needed: 
            <input 
              id="quantity"
              type="number" 
              defaultValue="1"
              name="quantity" 
              min="1" 
              max="5"/>
            </label>
       
            <label htmlfor="intDescription">Description of the project:
            <textarea  
                id="intDescription" 
                name="intDescription"
                placeholder="description.."        
                       
             />  
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
      <div>
        <Header />
        <main>
        <div className='studIntForm'>
          {applyIntForm}
        </div>
        </main>
        <Footer />
      </div>
      
    );
  }
}         

export default busIntForm;