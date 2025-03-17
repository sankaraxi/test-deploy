'use client';
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showpassword,setShowpassword]=useState(false);
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let isValid = true;
    setEmailError("");
    setPasswordError("");
    setLoginError("");

    if (email === "") {
      setEmailError("Email is required!");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address!");
      isValid = false;
    }

    if (password === "") {
      setPasswordError("Password is required!");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must contain at least 8 characters");
      isValid = false;
    }    
    if (!isValid) {
      toast.error("Please fix the errors before submitting!");
      return;
    }                                                                                                                                                                                                                           

    axios.post('https://oviyamedsafe.com/api/auth/login', {
      email,
      password,
    }).then(response => {

      localStorage.setItem("userRole", response.data.user.id); // Store role in localStorage
      
      if(response.data.message==="Login successful"){
        if(response.data.user.id===1){

          window.location.href='/adminview'
        }
        else if(response.data.user.id===2){
          window.location.href='/admin'
        }
        toast.success("Login successful");
      }
    }).catch(error => {
      if (error.response) {
       toast.error("Login Failed")
        // console.error('Login failed:', error.response.data);
      } else {
        toast.error("Login Failed")
        // console.error('Error:', error.message);
      }
    });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#f8f9fa" }}>
      <div
        className="card p-5 formbg rounded-5 border-0 m-3"
        style={{ borderRadius: "10px" }}
      >
        <h3 className="text-center logintext text-light">Login</h3>
        <h1
          className="text-center mb-4 text-white py-2"
          style={{ fontSize: "1.5rem" }}
        >
          Welcome to Oviya MedSafe
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label text-light">Email Id</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Id"
              required
            />
            {emailError && <p className="text-danger mt-1">{emailError}</p>}
          </div>
          
          {/* <div className="mb-3 position-relative">
            <label className="form-label text-light">Password</label>
            <input
              type={setShowpassword? "text" : "password"}
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
             <span
                          className="position-absolute end-0 top-50 translate-middle-y me-3 mt-2"
                          style={{ cursor: "pointer" }}
                          onClick={() => setShowpassword(!showpassword)}>
                          {showpassword ? <RxEyeOpen size={20} color="black" /> : <GoEyeClosed size={20} color="black" />}
                        </span>
            {passwordError && <p className="text-danger mt-1">{passwordError}</p>}
          </div>
          {loginError && <p className="text-danger mt-1">{loginError}</p>} */}


<div className="mb-3 position-relative">
            <label className="form-label text-light">Password</label>
            <input
              type={showpassword ? "text" : "password"}
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
            <span
              className="position-absolute end-0 top-50 translate-middle-y me-3 mt-3"
              style={{ cursor: "pointer" }}
              onClick={() => setShowpassword(!showpassword)}
            >
              {showpassword ? (
                <RxEyeOpen size={20} color="black" />
              ) : (
                <GoEyeClosed size={20} color="black" />
              )}
            </span>
            {passwordError && <p className="text-danger mt-1">{passwordError}</p>}
          </div>
          {loginError && <p className="text-danger mt-1">{loginError}</p>}
          <button type="submit" className="logbtn btn mt-2 w-100">
            Login
          </button>
        </form>
        <p className="text-center pt-4 text-decoration-none"><Link href="/forgot-password" className="text-light fw-bold text-decoration-none">Forgot Password ?</Link></p>
      </div>
      <ToastContainer />
    </div>
    
  );
}

export default Login;
