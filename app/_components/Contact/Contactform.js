'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../../(contact)/contact/page.module.css";
function Contactform() {
    const [generatedCode, setGeneratedCode] = useState('');
    const [userInput, setUserInput] = useState('');
    const [isVerified, setIsVerified] = useState(null);
    const [formData, setFormData] = useState({
      name: '',
      designation: '',
      organization: '',
      email: '',
      phone_number: '',
      message: '',
      form_id: 1,
    });
  
    const [errors, setErrors] = useState({});
  
    // Generate random CAPTCHA code
    useEffect(() => {
      const generateRandomCode = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        return Array.from({ length: 5 }, () =>
          characters.charAt(Math.floor(Math.random() * characters.length))
        ).join('');
      };
      setGeneratedCode(generateRandomCode());
    }, []);
  
    const validateField = (fieldName, value) => {
      let error = '';
      switch (fieldName) {
        case 'name':
          if (!/^[A-Za-z\s]{2,}$/.test(value)) error = 'Enter a valid name.';
          break;
        case 'email':
          if (!/^[a-z0-9][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
            error = 'Enter a valid email address.';
          break;
        case 'phone_number':
          if (!/^\+?[0-9]{6,15}$/.test(value)) error = 'Enter a valid phone number.';
          break;
        default:
          break;
      }
      setErrors((prev) => ({ ...prev, [fieldName]: error }));
    };
  
    const handleInputChange = (e) => {
      const input = e.target.value;
      setUserInput(input);
  
      // Verify CAPTCHA input
      if (input === generatedCode) setIsVerified(true);
      else if (input.length === generatedCode.length) setIsVerified(false);
      else setIsVerified(null);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      validateField(name, value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Validate all fields
      let hasErrors = false;
      Object.keys(formData).forEach((field) => {
        validateField(field, formData[field]);
        if (errors[field]) hasErrors = true;
      });
  
      // Check CAPTCHA verification
      if (!isVerified) {
        toast.error('CAPTCHA verification failed. Please try again.');
        return;
      }
  
      if (!hasErrors) {
        try {
          const response = await axios.post('https://medsafe-test-deploy.vercel.app/api/submit-form', formData);
          if (response.status === 200) {
            toast.success('Message sent successfully!');
            setFormData({
              name: '',
              designation: '',
              organization: '',
              email: '',
              phone_number: '',
              message: '',
              form_id: 1,
            });
            setUserInput('');
            setGeneratedCode(''); // Reset CAPTCHA
            setIsVerified(null);
          }
        } catch (error) {
          const errorMessage =
            error.response?.data?.message || 'Failed to send message. Please try again later.';
          toast.error(errorMessage);
        }
      }
    };
  return (
    <div className={`bg-light ${styles.contactformbgpart} p-4 rounded-3 my-3`}>
      <ToastContainer />
      <h2 className={`py-2 text-dark ${styles.sendmsg}`}>Send Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your Name"
            required
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="designation">Designation:</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your Designation"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="organization">Organization:</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your Organization"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your Email"
            required
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Phone Number"
            required
          />
          {errors.phone_number && <small className="text-danger">{errors.phone_number}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your Message"
            rows="4"
          ></textarea>
        </div>

        <div className="form-group mt-3">
          <label htmlFor="captcha">Captcha: </label>
         <div className='d-flex justify-content-between'>
          <div className='text-black text-center p-3'>
            <strong>{generatedCode}</strong>
          </div>
          <input
            type="text"
            id="captcha"
            value={userInput}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter CAPTCHA"
            required
          />
           </div>
          {isVerified === false && <small className="text-danger ms-5 ps-4">CAPTCHA does not match.</small>}
        </div>
       

        <div className="form-group mt-4">
          <button type="submit" className={`btn btn-primary px-4 ${styles.sendbtn}`} disabled={isVerified !== true}>
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contactform