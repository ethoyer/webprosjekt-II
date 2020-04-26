import React from 'react';
import '../../css/form.css';
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom'

class intForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isSubmitted: false,
        email: '',
        hasEmailError: false,
        content: '',
        hasContentError: false,
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
  //checking if the textarea is empty (when you delete all the input data, a text appears)
  handleContentChange(event) {            
    const inputValue = event.target.value;            
    const isEmpty = inputValue === '';            
    this.setState({            
              content: inputValue,            
              hasContentError: isEmpty,            
    })            
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
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
            <label for="name">*Your name: </label>
            <input
              id="name"
              type="text"
              placeholder="first name"
              required
            />
            
            <input
              id="name"
              type="text"
              placeholder="(middle name)"
            />

            <input
              id="name"
              type="text"
              placeholder="last name"
              required
            />
         

            <label for="e-mail">*E-mail: </label>
            <input
              id="e-mail"
              type="email"
              placeholder="ex) olan@stud.ntnu.no"
              value={this.state.email}
              onChange={(event) => {this.handleEmailChange(event)}}
              required
            />
            {emailErrorText}  

            <label for="programme">*Choose programme:</label>
            <select id="programme" name="programme">
              <option value="internship1">Internship 1</option>
              <option value="internship2">Internship2</option>
             
            </select>        
                   
       
            <label for="comments">Comments (if any):</label>   
            <textarea  
                id="comments"          
                alue={this.state.content}            
                onChange={(event) => {this.handleContentChange(event)}}            
             />            

                   
              {contentErrorText}            
        
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
        <div className='studIntForm'>
          {contactForm}
        </div>
        </main>
        <Footer />
      </div>
      
    );
  }
}         

export default intForm;