import { useState, useEffect } from 'react';
import axios from 'axios';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DownloadForm = ({fileId}) => {
  const [generatedCode, setGeneratedCode] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    organization: '',
    phone_number: '',
    email: '',
    form_id: 2,
  });

  const [errors, setErrors] = useState({});

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
        if (!/^[A-Za-z\s]{2,}$/.test(value)) {
          error = 'Enter your valid name';
        }
        break;
      case 'email':
        if (!/^[a-z0-9][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          error = 'Enter a valid email address.';
        }
        break;
      case 'phone_number':
        if (!/^\+?[0-9]{6,15}$/.test(value)) {
          error = 'Enter valid Phone number.';
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
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
    setFormData({
      ...formData,
      [name]: value,
    });

    // Trigger real-time validation on each input change
    validateField(name, value);
  };






  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    let hasErrors = false;
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (errors[field]) {
        hasErrors = true;
      }
    });

    if (!isVerified) {
      toast.error('CAPTCHA verification failed. Please try again.');
      return;
    }
    if (!hasErrors) {
      try {
        // Ensure phone_number is sent as a string
        const formDataToSend = {
          ...formData,
          phone_number: formData.phone_number.toString(), // Ensure it's a string
        };

        const response = await axios.post('https://medsafe-test-deploy.vercel.app/api/submit-form', formDataToSend);
        if (response.status === 200) {
          toast.success('Form submitted successfully!');
          if (fileId === "file1") {
            const fileUrl = "/file1.pdf"; // Replace with the relative path of your file
            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = "Oviya MedSafe – eBrochure – 23 OCT 2024.pdf"; // The name of the file to download
            link.click();

          }else if(fileId === "file2"){
            const fileUrl = "/file2.pdf"; // Replace with the relative path of your file
            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = "Oviya MedSafe - Capabilities & Track Record - 09 OCT 2024"; // The name of the file to download
            link.click();
          }
          setFormData({
            name: '',
            designation: '',
            organization: '',
            phone_number: '',
            email: '',
            form_id: 2,
          });
          setUserInput('');
          setGeneratedCode(''); // Reset CAPTCHA
          setIsVerified(null);
        }
      } catch (error) {
        if (error.response) {
          // If the server responded with an error
          console.error('Error response:', error.response.data);
          toast.error(`Failed to send message: ${error.response.data.message || 'Please try again later.'}`);
        } else {
          // If the error is due to no response or other issues
          console.error('Error submitting form:', error);
          toast.error('Failed to send message. Please try again later.');
        }
      }
    }
  };

  return (
    
    <form className="d-flex flex-column p-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="designation" className="form-label">Designation</label>
        <input
          type="text"
          className="form-control"
          id="designation"
          placeholder="Enter your designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="organization" className="form-label">Organization</label>
        <input
          type="text"
          className="form-control"
          id="organization"
          placeholder="Enter your organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone_number" className="form-label">Contact Number</label>
        <input
          type="text"
          className="form-control"
          id="phone_number"
          placeholder="Enter your contact number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />
        {errors.phone_number && <div className="text-danger">{errors.phone_number}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <div className="text-danger">{errors.email}</div>}
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
          <button type="submit" className="custom-btn btn btn-primary btn-width" disabled={isVerified !== true}>
          Download PDF
          </button>
        </div>
        <ToastContainer /> 
    </form>
  );
};

export default DownloadForm;

