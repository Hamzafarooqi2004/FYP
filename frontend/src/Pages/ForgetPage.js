// PasswordResetForm.js
import React, { useState } from 'react';
import './forgetPage.css';
import { useNavigate } from 'react-router-dom';

const PasswordResetForm =  () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('Password does not match');
    } else {
      try {
        const response = await fetch("/api/users/forgetPassword", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            newPassword,
            confirmPassword
          })
        });
        
        console.log(response)
        
        // Check if the request was successful (status code 200)
        if (response.ok) {
          console.log('Password reset successful');
          navigate('/login');
        } else {
          // Handle errors if the request was not successful
          console.error('Password reset failed');
        }
      } catch (error) {
        console.error('Error during password reset:', error);
      }
    }
  };
  

  return (
    <div className="password-reset-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-password">New Password : </label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password : </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
       <div className='btn-container'>

       <button className="myBtn" type="submit" onClick={handleSubmit}>
          Reset Password
        </button>
       </div>
      </form>
    </div>
  );
};

export default PasswordResetForm;
