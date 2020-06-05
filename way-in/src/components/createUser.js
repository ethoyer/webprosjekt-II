import React from 'react';
import { Link } from 'react-router-dom';
import '../css/loginForm.css';



class CreateUser extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
        username: '',
        psw1:'',
        psw2: '',
        isSubmitted: false,
    };
  }
  handleEmailChange(event) {
    const inputValue = event.target.value;
    this.setState({
      username: inputValue,
      psw1: inputValue,
      psw2: inputValue,
    });
  }
  handleSubmit(event) {
    console.log("Form sent");
    const formData = new FormData();
  
    formData.append(
      'username',
      document.getElementById("username").value
    );
    formData.append(
      'psw1',
      document.getElementById("psw1").value
    );
    formData.append(
      'psw2',
      document.getElementById("psw2").value
    );

    console.log(formData);
    //'localhost' may have to be replaced bt your local ip address:
    fetch("http://localhost/way_in_db/create_user.php", {
      method: 'POST',
      body: formData
    });
   
    this.setState({isSubmitted: true});
    event.preventDefault();
  }

  render() {                                   
        
    let newUser;      

    if (this.state.isSubmitted) {            
        newUser = (            
        <div className='contact-submit-message'>
        <h2>Thank you!</h2>
        <Link to="/logInPage">Go to login page</Link>
        </div>
        );
      } else {
        newUser = (
          
          <form onSubmit={this.handleSubmit} >
            <h2>Create User</h2>
           
            <label htmlFor="username">*Username: </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              required
            />

            <label htmlFor="psw1">*Password: </label>
            <input
              id="psw1"
              type="password"
              placeholder="password"
              required
            />

            <label htmlFor="psw2">Repeat password: </label>
            <input
              id="psw2"
              type="password"
              placeholder="repeat your password"
              required
            />

             <input            
                type='submit'            
                value='Submit'            
               />  
        </form>
       
       );
    }
    
    return (
        <div>
        <main>
        <div>
          {newUser}
        </div>
        </main>
      </div>
    );
  }
}         

export default CreateUser;