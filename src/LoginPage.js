import React, { useState } from 'react';
 import './Login.css';
 import "./SignUpPage";
import {Link} from 'react-router-dom';
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
  
    const handleSubmit = e => {
      e.preventDefault();
      setEmail('');
      setPassword('');
    };
    
  
    return (
      <div>
        <div className="scrolling-text-container">
      <div className="scrolling-text">
      Putting your health first with reliable insurance
      </div>
    </div>
    <div class="logo">
      <p>"Guardian Of Your Well-being"</p>
    </div>
    <div class="img">
    {/* <img src="https://img.freepik.com/premium-photo/hands-holding-paper-family-cutout-with-stethoscope-blue_63176-1208.jpg?w=900" width="600" height="300" alt="img" /> */}
    </div>
    <h2 class="log"><center>Welcome back</center></h2>
    <div class="logininfo">
        <form onSubmit={handleSubmit}>
        
          <div class="email">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div class="pass">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div class="submit">
          <button type="submit">Login</button>
          </div>
          <div class="reg1">
            <p>Don't have an account?<Link to="/SignUpPage"><a class="register-link">Sign Up</a></Link></p>
          </div> 

        </form>
        </div>
     </div>
        
    );
  }
  
  export default LoginPage;