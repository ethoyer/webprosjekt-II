import React from 'react';
import '../../css/form.css';
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom';

class busOfferBachForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
        compID: '',
        fname:'',
        email:'',
        tlf:'',
        bachLoc: '',
        bachTitle: '',
        bachDesc: '',
        quantity:'',
        bachDuration: '',
        isSubmitted: false,
    };
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    this.setState({
      compID: inputValue,
      fname: inputValue,
      mname: inputValue,
      lname: inputValue,
      email: inputValue,
      tlf: inputValue,
      bachLoc: inputValue,
      bachTitle: inputValue,
      bachDesc: inputValue,
      bachDuration: inputValue,
      bachStart:inputValue
    });
  }



  
  handleSubmit(event) {
    console.log("Form sent");
    const formData = new FormData();
    formData.append(
      "method",
      "addBusBach"
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
      document.getElementById("bachTitle").value
    );
    formData.append(
      'project_description',
      document.getElementById("bachDesc").value
    );
    formData.append(
      'project_duration',
      document.getElementById("bachDuration").value
    );
    formData.append(
      'start_date',
      document.getElementById("bachStart").value
    );
    formData.append(
      'location',
      document.getElementById("bachLoc").value
    );
    formData.append(
      'no_of_stud',
      document.getElementById("quantity").value
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
        
    let busApplyBachForm;      

    if (this.state.isSubmitted) {            
        busApplyBachForm = (            
        <div className='contact-submit-message'>
        <h2>Thank you!</h2>
        <p>Your application form has been sent.</p>
        <p>A copy of your application has been sent to your e-mail.</p>
        <Link to="/">Back to front</Link>
        </div>
        );
      } else {
        busApplyBachForm = (
          
          <form onSubmit={this.handleSubmit} >
            <h2>Offer a bachelor thesis project</h2>
           <p>Please fill in the application form below.</p>
           
            <label htmlfor="compID">*Company ID:
            <input
              id="compID"
              type="text"
              placeholder="Your company ID"
              required
            />
            </label>

            <label htmlFor="fname">*Contact person: 
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
             
            />
            </label>

            <label htmlFor="email">*E-mail address: 
            <input
              id="email"
              type="email"
              placeholder="ex) olan@stud.ntnu.no"
            />
            </label>

            <label htmlFor="tlf">Tel. number:
            <input
                id="tlf"
                type="tel"
                placeholder="ex) xx xxx xxx"
            />
            </label>
            

          <label htmlfor="bachLoc">*Location: 
            <input
              id="bachLoc"
              name="location"
              type="text"
              placeholder="location.."
             
            />    
          </label>

            <label htmlfor="bachTitle">*Title for your project:
            <input
                id="bachTitle"
                type="text"
                placeholder="ex) App design and development"
            />  
            </label>

            

            <label htmlfor="bachDuration">Project duration
            <select id="bachDuration" name="bachDuration">
              <option value="lessThan6month" selected>Less than 6 month</option>
              <option value="moreThan6month">More than 6 month</option>
            </select>
            </label>

            <label htmlfor="bachStart">*Project Start Date: 
            <select id="bachStart" name="startDate">
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
              max="4"/>
            </label>

            <label htmlfor="bachDesc">Project Description:   
            <textarea  
                id="bachDesc"  
                name="bachDesc"                
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
          {busApplyBachForm}
        </div>
        </main>
        <Footer />
      </div>
    );
  }
}         

export default busOfferBachForm;