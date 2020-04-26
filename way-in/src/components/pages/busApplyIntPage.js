import React from 'react';
import '../../css/form.css';
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom'

class busIntForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        intTitle: '',
        intCompany: '',
        intFaculty: '',
        intLocation: '',
        intDescription: '',
        isSubmitted: false,
    };
  }

  handleSubmit( event ) {
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
         
          <form action="../index.php">
            <h2>Project Application</h2>
           <p>Please fill in the application form below.</p>
            <label for="intTitle">*Title for your project: </label>
            <input
              id="intTitle"
              name="intTitle"
              type="text"
              placeholder="title.."
              value={this.state.intTitle}
              onChange={e => this.setState({ intTitle: e.target.value })}
              required
            />
            <label for="intCompany">*The company you represent: </label>
            <input
              id="intCompany"
              name="intCompany"
              type="text"
              placeholder="company.."
              value={this.state.intCompany}
              onChange={e => this.setState({ intCompany: e.target.value })}
              required
            />
            
             <label for="intFaculty">*Choose faculty:</label>
            <select id="intFaculty" name="intFaculty">
              <option value="AD">Arkitektur og Design</option>
              <option value="HF">Det humanistiske fakultet</option>
            </select> 

            <label for="intLocation">*Location: </label>
            <input
              id="intLocation"
              name="intLocation"
              type="text"
              placeholder="location.."
              value={this.state.intLocation}
              onChange={e => this.setState({ intLocation: e.target.value })}
              required
            />    
                   
       
            <label for="intDescription">Description of the project:</label>   
            <textarea  
                id="intDescription" 
                name="intDescription"
                placeholder="description.."        
                value={this.state.intDescription}            
                onChange={e => this.setState({ intDescription: e.target.value })}         
             />  

            {/* <label for="intEmail">*Your email: </label>
            <input
              id="intEmail"
              name="intEmail"
              type="intEmail"
              placeholder="email.."
              value={this.state.email}
              onChange={(event) => {this.handleEmailChange(event)}}
              required
            />            */}

                       
            <input type="submit" onClick={e => this.handleSubmit(e)} value="Submit" />  
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