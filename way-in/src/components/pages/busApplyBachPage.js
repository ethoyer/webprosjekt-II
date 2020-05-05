import React from 'react';
import '../../css/form.css';
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom'

class busOfferBachForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bachTitle: '',
        bachCompany: '',
        bachFaculty: '',
        bachLocation: '',
        bachDescription: '',
        isSubmitted: false,
    };
  }

  handleSubmit( event ) {
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
         
          
          <form onSubmit={() => {this.handleSubmit()}} >
            <h2>Offer a bachelor thesis project</h2>
           <p>Please fill in the application form below.</p>
            <label htmlFor="compName">*Company you represent: </label>
            <input
              id="compName"
              type="text"
              placeholder="Ola co."
              required
            />

            <label htmlFor="contPerson">Contact Person: </label>
            
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
         

            <label htmlFor="email">*E-mail address for contact: </label>
            <input
              id="email"
              type="email"
              placeholder="ex) olan@stud.ntnu.no"
              value={this.state.email}
              onChange={(event) => {this.handleEmailChange(event)}}
              required
            />
            <label htmlFor="tlf">Tel. number: </label>
            <input
                id="tlf"
                type="tel"
                placeholder="ex) xx xxx xxx"
            />

            <label htmlFor="bachTitle">*Title for your project:</label>
            <input
                id="bachTitle"
                type="text"
                placeholder="ex) App design and development"
            />  

            <label htmlFor="bachStart">*Project Start Date: </label>
            <select id="bachProStart" name="bachStart">
              <option value="spring2020">Spring 2020</option>
              <option value="fall2020">Fall 2020</option>
              <option value="spring2021">Spring 2021</option>
            </select>   
       
            <label htmlFor="bachDesc">Project Description: </label>   
            <textarea  
                id="bachDesc"                  
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