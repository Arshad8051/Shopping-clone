import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "./Sign.css"
import img from "../../productimg/Signup.jpg.webp";
import Login from '../Login/Login';
import { toast } from 'react-toastify';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
 

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = {};

    if (formData.username.trim() === '') {
      validationErrors.username = 'Username is required.';
    }

    if (formData.email.trim() === '') {
      validationErrors.email = 'Email is required.';
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = 'Invalid email address.';
    }

    if (formData.password.trim() === '') {
      validationErrors.password = 'Password is required.';
    } else if (!isValidPassword(formData.password)) {
      validationErrors.password = 'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
      localStorage.setItem("formData", JSON.stringify(formData));
      alert('Register Successfully!')
      navigate("/login")
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    // Password must be at least 8 characters and contain certain criteria
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className='new2'> 
    <div className='inner'>
         <img className='image' src={img}/> 
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <span className="error">{errors.username}</span>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span className="error">{errors.email}</span>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span className="error">{errors.password}</span>
        </div>
       <button  className="signup-button " type='submit'>Signup</button>
        <p className='term'>By continuing, you agree to Meesho’s 
          Terms & Conditions and Privacy Policy
        </p>
      </form>
    </div>
    </div>
  );
}

export default SignUp;
