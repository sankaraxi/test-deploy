'use client';
import React from 'react'
import "./Founder.css";
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const OurFounder = () => {
        useEffect(()=>{
            window.scroll(0,0);
          })
  return (
   <div className="container-fluid abtparts">
       
         
         <h1 className='py-2 subhead2'>Our Founder</h1>
         <div className="row align-items-center mx-1 mx-lg-5">
           {/* Image Column */}
           <div className="col-sm-12 col-md-6 d-flex justify-content-center mb-3 mb-md-0">
             <img 
               src='./OVIYA_FOUNDER.png'
               alt="Founder" 
               className="founderimg img-fluid ps-0 ps-md-5 ms-0 ms-md-5" 
               style={{ zIndex: 1000 }} 
             />
           </div>
   
           {/* Text Column */}
           <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center text-center text-md-start">
             <div className='fparts'>
             <h1 className="foundername ">Dr J Vijay Venkatraman</h1>
             <p className="pt-2 founderqualification ">
               MBBS, F. Diab., MBA, FPIPA (UK)<br />
               Managing Director & CEO,<br />
               Oviya MedSafe<br />
               <a 
                 href="https://www.linkedin.com/in/drjvvr/" 
                 className="text-start text-decoration-none text-dark" 
                 style={{ fontSize: "18px" }}
               >
                 <FontAwesomeIcon icon={faLinkedin} className="linkedicon pe-2"  style={{ fontSize: "16px" }} />
                 Get in touch
               </a>
             </p>
             </div>
             </div>
             <div className='row text-justify founderparas py-3 textjust'>
             <p>
             Dr J Vijay Venkatraman is a Diabetologist, Drug Safety Physician, and 
   Entrepreneur with 25 years of broad-based experience in Clinical Medicine 
   and Drug Safety. He holds an MBA in Services Management and is the first 
   Indian to be conferred the Fellowship of the Pharmaceutical Information & 
   Pharmacovigilance Association (PIPA), UK.
             </p>
             <p>
             As the Founder & CEO of Oviya MedSafe, a global Pharmacovigilance 
   consulting and Drug Safety services organization incorporated in 
   Coimbatore, India, and London, UK, Dr Vijay has been helping 
   pharmaceutical and biotechnology companies fulfill compliance 
   requirements since 2012.
             </p>
             <p>
             He has served as the Regional Editor (India) for Global Forum, one of 
   the official publications of the Drug Information Association (DIA), since 
   April 2017. Previously, he held key leadership roles, including Chairman of 
   the Indian Medical Association (IMA) Headquarters’ Standing Committee for 
   Pharmacovigilance (2021), Executive Committee Member of the Indian 
   Society for Clinical Research (ISCR), and Chair of ISCR’s Pharmacovigilance 
   Council from 2015 to 2019.
             </p>
             <p>
             A sought-after speaker, Dr Vijay has been invited to deliver lectures at 
   international conferences and has contributed a chapter to a medical 
   textbook. In addition to his academic contributions, he has authored 
   numerous articles and whitepapers on pharmacovigilance, frequently 
   shared his perspectives through media features and interviews, and actively 
   promotes drug safety awareness among key stakeholders.
             </p>
             <p>
             Dr Vijay has received multiple accolades, including the Leadership 
   Excellence Award and the State Appreciation Award for Coordinating 
   Academic Activities from the Indian Medical Association.
             </p>
           </div>
         </div>
         </div>
  )
}

export default OurFounder