'use client';
import React, { useState } from 'react'
import Link from 'next/link';
import { CiFacebook,CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Footer.css"
function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter an email address.");
      return;
    }

    try {
      const response = await fetch("https://medsafe-test-deploy.vercel.app/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message); // Display success message
        setEmail(""); // Clear the email input
        window.location.reload(); // Refresh the page
      } else {
        toast.error(data.message || "Subscription failed."); // Display error message
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later."); // Handle fetch errors
    }
  };

  const now=new Date();
const years=now.getFullYear()
  return (
    <div className='container-fluid footerbg'>
      <div className='container'>
        <div className='row px-3 py-5'>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <h4 className='footerhead py-3'>Location</h4>
              <h5 className='oviyafooter'>Oviya MedSafe Pvt Ltd</h5>
              <p className='pe-4'>2nd Floor, KTVR Gardens
              <br/> 220a-3, Marudha Konar Road<br/> Velandipalayam<br/>
                Coimbatore – 641 025<br/>Tamil Nadu, India</p>
                <h5 className='oviyafooter'>Oviya MedSafe UK Ltd</h5>
                <p>Suite LP25393 <br/>
                20-22, Wenlock Road <br/>
                London N1 7GU <br/>
                United Kingdom</p>
              </div>
            <div className='col-sm-12 col-md-6 col-lg-2'>
              <h5 className='footerhead py-3'>Explore</h5>
              <Link href={"/"} className='text-decoration-none text-light'><p>Home</p></Link>
             
              {/* Who We Are Dropdown */}
            <div className="dropdown">
              <p
                className="m-0 p-0 btn dropdown-toggle text-light pb-3"
                onClick={() => setIsDropdownOpen1(!isDropdownOpen1)}
              >
                Who we are
              </p>
              {isDropdownOpen1 && (
                <div className="dropdown-menu show">
                  <Link href="/about-us" className="dropdown-item">About Us</Link>
                  <Link href="/our-founder" className="dropdown-item">Our Founder</Link>
                  <Link href="/our-board" className="dropdown-item">Board Members</Link>
                </div>
              )}
            </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="dropdown">
              <p
                className="m-0 p-0 btn dropdown-toggle text-light pb-3"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Services
              </p>
              {isDropdownOpen && (
                <div className="dropdown-menu show">
                  <Link href="/drug-safety-services" className="dropdown-item">Drug Safety Services</Link>
                  <Link href="/pharmacovigilance-consulting" className="dropdown-item">Pharmacovigilance Consulting</Link>
                  <Link href="/strategic-partnerships" className="dropdown-item">Strategic Partnerships</Link>
                </div>
              )}
            </div>
          </div>
              <Link href={"/news"} className='text-decoration-none text-light'><p>News</p></Link>
              <Link href={"/downloads"}className='text-decoration-none text-light'><p>Downloads</p></Link>
              <Link  href={"/careers"} className='text-decoration-none text-light'><p>Careers</p></Link>
              <Link href={"/contact"} className='text-decoration-none text-light'><p>Contact</p></Link>
              <Link href={"/disclaimer-and-privacy-policy"} className='text-decoration-none text-light'><p>Disclaimer & <br/> Privacy Policy</p></Link>
              <Link href={"/sitemap"} className='text-decoration-none text-light'><p>Sitemap</p></Link>
              </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <h4 className='footerhead py-3'>Services</h4>
              <p><Link href="/drug-safety-services" className='text-decoration-none text-light'>Drug Safety Services</Link></p>
              <p><Link href="/pharmacovigilance-consulting" className='text-decoration-none text-light'>Pharmacovigilance Consulting</Link></p>
              <p><Link href="/strategic-partnerships" className='text-decoration-none text-light'>Strategic Partnerships</Link></p>
              </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
            {/* Update the email to database */}
            <div className="d-flex flex-column">
              <h4 className="footerhead py-3">Subscribe Here</h4>
              <input
                type="email"
                className="email-input py-3 border-0"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state with email input
              />
              <button className="border-0 subscribebtn py-3 mt-2"
                   onClick={handleSubscribe} // Trigger subscription logic
              >SUBSCRIBE</button>
            </div>
 
              <div className='col-sm-12 d-block d-md-none'>
              <h4 className='footerhead py-3'>Contact</h4>
             <p className='text-decoration-none'><a href="mailto:info@oviyamedsafe.com" className='text-light text-decoration-none'><img src="/Mailwhite.png" height={"18px"} className='pe-2 mb-1'/>info@oviyamedsafe.com</a></p> 
              <p className='text-decoration-none'><a href="tel:+91-422-3502276" className='text-light text-decoration-none'><img src='/phonewhite.png' height={"20px"} className='pe-2'/>IND +91 422 3502276</a></p> 
              <p className='text-decoration-none'><a href="tel:+44-20-3393-6037" className='text-light text-decoration-none'><img src='/phonewhite.png' height={"20px"} className='pe-2'/>UK +44 20 3393 6037</a></p>
              </div>
               <div className='d-flex social-links py-5'>
             <a href='https://www.facebook.com/OviyaMedSafe' target='blank'> <CiFacebook className='icon'/></a>
                     <a href='https://x.com/OviyaMedSafe' target='blank' > <FaXTwitter className='icon'/></a>
                     <a href='https://www.youtube.com/channel/UCJMIsvtEWEP0NwUalnRgODQ/videos' target='blank'><AiOutlineYoutube/></a>
             <a href='https://www.linkedin.com/company/oviya-medsafe/' target='blank'><CiLinkedin/></a>
              </div>
              </div>  
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <p className='text-center'>Copyright © {years} Oviya MedSafe. All Rights Reserved.</p>
        <a href='https://www.kggeniuslabs.com/' className='text-decoration-none'><p className='text-light '>Designed and Developed by KG Genius Labs</p></a>
        </div>
    </div>
    <ToastContainer />
    </div>

  )
}

export default Footer