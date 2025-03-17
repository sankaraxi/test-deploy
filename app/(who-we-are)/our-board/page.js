'use client';
import React, { useEffect } from 'react';

import "./AboutFounder.css";
// import { Helmet } from 'react-helmet-async';
function page() {
  useEffect(()=>{
    window.scroll(0,0)
  })
  const boardMembers = [{
    name: 'Dr J Vijay Venkatraman',
    position: "Founder",
    bio: `MBBS, F. Diab., MBA, FPIPA (UK)<br/> Managing Director & CEO,<br/>Oviya MedSafe`,
    img: "/founder1.png"
   }, {
    name: 'Dr V Janarthanan',
    position: "Chairman, Oviya MedSafe",
    bio: `MS, FICS, FAIS<br/>Chief Surgeon & Managing Director,<br/> KTVR Group Hospital <br/> Coimbatore, India`,
    img: "/founder2.png"
   },
   {
    name: 'Dr C J Arun Raja',
    position:"Director, Oviya MedSafe",
    bio: `MS, D. Ortho., DNB (Ortho)<br/> Consultant Orthopaedic Surgeon,<br/> KTVR Group Hospital<br/> Coimbatore, India`,
    img: "/founder3.png"
   }];

  return (
    <div className='container-fluid p-0 m-0 founderpart'>
      {/* <Helmet>
                    <title>Oviya MedSafe Board of Directors | Leaders in Drug Safety & Healthcare Innovation</title>
                    <meta name="description" content="Get to know the Board of Directors at Oviya MedSafe, a team of seasoned experts in pharmacovigilance, healthcare, and technology. With decades of experience in drug safety, data security, and regulatory compliance, they provide strategic direction to advance global healthcare innovation" />
                    <meta name="keywords" content="Oviya MedSafe Board, Board of Directors, drug safety experts, pharmacovigilance leadership, healthcare innovation, regulatory compliance, medicinal product safety, strategic healthcare leadership, global pharmacovigilance, physician entrepreneurs" />
                    <link rel="canonical" href="https://oviyamedsafe.com/our-board " /> 
                    <meta property="og:title" content="Oviya Medsafe Board of Directors | Experts in Healthcare and Data Security" />
                    <meta property="og:image" content="https://www.oviyamedsafe.com/mainlogo.png" />
                    <meta property="og:url" content="https://www.oviyamedsafe.com/" />
                    <meta property="og:type" content="website" />
                  </Helmet> */}
      <h1 className='text-center subhead2 pb-3 pt-4'>Our Board</h1>
      <div className='boardpart'>
        <div className='container'>
          <div className='row text-center mx-2  py-5'>
            {boardMembers.map((member, index) => (
              <div className='col-sm-12 col-md-4 my-1' key={index}>
                <div className="card boardcard mx-1 mx-lg-2 border-0 h-100">
                  <img src={member.img} title="Oviya MedSafe Leadership – Driving Excellence in Drug Safety & Compliance" alt="Board members of Oviya MedSafe, representing leadership in global drug safety and pharmacovigilance
" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title boardcardtitle">{member.name}</h5>
                    <p className="card-text boardcardposition">{member.position}</p>
                    <p
                      className="card-text memberbio"
                      dangerouslySetInnerHTML={{ __html: member.bio.replace(/(?:\r\n|\r|\n)/g, '<br />') }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
