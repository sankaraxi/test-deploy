'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
function ForgotPassword() {
  
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is required. Please enter your email.");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Invalid email format. Please enter a valid email.");
      return;
    }
    if (!newPassword || !retypePassword) {
      toast.error("Both password fields are required.");
      return;
    }
    if (newPassword !== retypePassword) {
      toast.error("Passwords do not match. Please re-enter the correct password.");
      return;
    }

    try {
      const response = await axios.patch('https://medsafe-test-deploy.vercel.app/api/auth/update-password', {
        email,
        newPassword, // Correctly send the new password
      });

      if (response.status === 200) {
        toast.success("Password changed successfully!");
        setTimeout(() => window.location.href='/medsafelogin', 2000);
      } else {
        toast.error(response.data.message || "Failed to reset password. Please try again.");
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      toast.error(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center pt-5 pb-5">
      <div className="card p-5 formbg" style={{ width: '100%', maxWidth: '400px', backgroundColor: '#343a40', borderRadius: '10px' }}>
        <h3 className="text-center mb-4 text-light">Forgot Password</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="text-light">Enter your Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your registered email"/>
          </div>
          <div className="mb-3 position-relative">
            <label htmlFor="newPassword" className="text-light">New Password</label>
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              placeholder="Enter a new password"/>
            <span
              className="position-absolute end-0 top-50 translate-middle-y me-3 mt-2"
              style={{ cursor: "pointer" }}
              onClick={() => setShowNewPassword(!showNewPassword)}>
              {showNewPassword ? <RxEyeOpen size={20} color="black" /> : <GoEyeClosed size={20} color="black" />}
            </span>
          </div>
          <div className="mb-3 position-relative">
            <label htmlFor="retypePassword" className="text-light">Retype Password</label>
            <input
              type={showRetypePassword ? "text" : "password"}
              id="retypePassword"
              className="form-control"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              required
              placeholder="Re-enter your new password" />
            <span
              className="position-absolute end-0 top-50 translate-middle-y me-3 mt-2"
              style={{ cursor: "pointer" }}
              onClick={() => setShowRetypePassword(!showRetypePassword)}>
              {showRetypePassword ? <RxEyeOpen size={20} color="black" /> : <GoEyeClosed size={20} color="black" />}
            </span>
          </div>
          <div className="text-center">
            <button type="submit" className="logbtn btn mt-2 w-100">Reset</button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default ForgotPassword;
