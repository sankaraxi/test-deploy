'use client'
import React, { useEffect } from 'react';
import styles from "./page.module.css";
import { IoMdMail } from 'react-icons/io';

import { FaLocationDot } from "react-icons/fa6";
import { HiPhone } from "react-icons/hi2";
import Contactform from './Contactform';
import Maparea from '../Maparea/Maparea';

const Contact = () => {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <>
        <div className={`container-fluid m-0 ${styles.contactpart} ${styles.contactfoot}`}>
        
          <div className='container'>
        <h1 className={`text-center text-light ${styles.subhead2} pt-3`}>Contact Us</h1>
        <p className={`text-center text-light ${styles.contactpara}`}>Reach out and let's explore collaboration possibilities!</p>
        <div className="row  text-light">
          {/* Address Section */}
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
            <div className="row">
            <h4 className={`${styles.iconparas} d-flex align-items-center pt-3 pb-1`}> <FaLocationDot className={`bg-light p-2 rounded-circle me-3 ${styles.iconmail}`}/>Address</h4>
              <div className="col-sm-12 col-md-7">
               
                <p className='d-flex ps-3 ps-md-5'>
                  
                <img src="/india.png" alt="India Logo" className={`${styles.countrylogo} me-2`} />
                  2nd Floor, KTVR Gardens <br />
                  220a-3, Marudha Konar Road <br />
                  Velandipalayam<br />
                  Coimbatore – 641 025<br />
                  Tamil Nadu, India
                </p>
              </div>
              <div className="col-sm-12 col-md-5 ">
                <p className='d-flex ps-2'>
                <img src="/uk.png" alt="UK Logo" className={`${styles.countrylogo} me-2`} />
                  Suite LP25393,<br />
                  20-22, Wenlock Road <br />
                  London, N1 7GU<br />
                  United Kingdom
                </p>
              </div>
            </div>
    
            {/* Email Support */}
            <h4 className={`d-flex align-items-center pt-2 pb-1 ${styles.iconparas}`}>
              <IoMdMail className={`bg-light p-2 rounded-circle me-3 ${styles.iconmail}`} />
              Email
            </h4>
            <p className='ps-3 ps-md-4 ps-lg-5 ms-4 ms-md-4 ms-lg-4' >If you prefer the e-route, you can write to</p>
            <p className='ps-3 ps-md-4 ps-lg-5 ms-4 ms-md-4 ms-lg-4'>
              <a href="mailto:info@oviyamedsafe.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                info@oviyamedsafe.com
              </a>
            </p>
            
    
            {/* Phone Support */}
            <h4 className={`d-flex align-items-center pt-2 pb-1 ${styles.iconparas}`}>
              <HiPhone className={`bg-light p-2 rounded-circle me-3 ${styles.iconmail}`}/>
              Phone
            </h4>
            <p className="d-flex align-items-center ps-3 ps-md-5">
    <img src="/india.png" alt="India Logo" className={`${styles.countrylogo} me-2`}  />
    <a href="tel:+914223502276" className="text-decoration-none text-light">
      +91 422 3502276
    </a>
    </p>
    <p className="d-flex align-items-center ps-3 ps-md-5">
    <img src="/uk.png" alt="UK Logo" className={`${styles.countrylogo} me-2`} />
    <a href="tel:+442033936037" className="text-decoration-none text-light">
      +44 20 3393 6037
    </a>
    </p>
          </div>
    
          {/* Contact Form Section */}
          <div className="col-sm-12 col-md-6">
           <Contactform/>
          </div>
        </div>
      </div>
    
      </div>
        <Maparea/>
        </>
      )
}

export default Contact