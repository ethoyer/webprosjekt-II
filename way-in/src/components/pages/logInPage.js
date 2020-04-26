import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../header.js';
import Footer from '../footer.js';
import '../../css/form.css';
import {Link} from 'react-router-dom';

class logInPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      username: '',
      hasUsernameError: false,
      content: '',
      hasContentError: false,
  };
}

handleSubmit() {
  this.setState({isSubmitted: true});
}


render() {        
                                      
  let signInForm;      

  if (this.state.isSubmitted) {            
      signInForm = (            
      <div className='contact-submit-message'>
      <h2>Welcome!</h2>
      <p>You are now logged in!.</p>
      <Link to="/">Back to front</Link>
      </div>
      );
    } else {
      signInForm = (
       
        
        <form onSubmit={() => {this.handleSubmit()}} >
          <h2>Log in</h2>
          <input
            id="username"
            type="text"
            placeholder="Username"
            name="username"
            required
          />
       

          <input
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.email}
            onChange={(event) => {this.handleEmailChange(event)}}
            required
          />                   
      
           <input            
              type='submit'            
              value='Log in'          
             />   
      </form>
     
     );
  }
  
  return (
    <div>
      <Header />
      <main>
      <div className='studIntForm'>
        {signInForm}
      </div>
      </main>
      <Footer />
    </div>
    
  );
}
}   


export default logInPage;