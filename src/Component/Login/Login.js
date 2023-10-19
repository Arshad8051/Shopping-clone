import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'; // Import useHistory from 'react-router-dom' to handle redirection
import './Login.css';
import img from '../../productimg/Signup.jpg.webp';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Create a history object for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your authentication logic (e.g., check credentials on the server)
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (
      storedData &&
      storedData.email === formData.email &&
      storedData.password === formData.password
    ) {
      alert('login successfully')
      // If email and password are correct, redirect to the home page
      navigate('/');

    } else {
      // If email and password are incorrect, display an error message
      setError('Invalid email or password');
    }
  };

  return (
    <div className='new'>
      <div className='inner'>
        <img className='image' src={img} alt='Signup' />
        <h2>Login</h2>
        {error && <div className='error'>{error}</div>} {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type='submit'>Login</button>
          <p className='term'>
            By continuing, you agree to Meesho’s Terms & Conditions and Privacy
            Policy
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
