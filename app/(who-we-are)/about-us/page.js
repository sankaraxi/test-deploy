'use client';

import React, { useEffect } from 'react'

import './AboutFounder.css';

function page() {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
  <>
                  {/* <Helmet>
                    <title>About Oviya MedSafe | Pioneers in Global Pharmacovigilance Consulting</title>
                    <meta name="description" content="Discover Oviya MedSafe’s mission to lead global pharmacovigilance consulting. With expertise in drug safety, regulatory compliance, and strategic client partnerships, we are committed to ensuring high-quality safety solutions." />
                    <meta name="keywords" content="Oviya MedSafe, about Oviya MedSafe, pharmacovigilance consulting, drug safety services, regulatory compliance, global drug safety, patient safety, pharmacovigilance experts, pharmaceutical consulting" />
                    <link rel="canonical" href="https://oviyamedsafe.com/about-us" />
                    <meta property="og:title" content="About Oviya MedSafe | Leaders in Pharmacovigilance Consulting" />
                    <meta property="og:image" content="https://www.oviyamedsafe.com/mainlogo.png" />
                    <meta property="og:url" content="https://www.oviyamedsafe.com/" />
                    <meta property="og:type" content="website" />
                  </Helmet> */}
    <div className='container-fluid abtparts'>
        <div className='row mx-1 mx-md-3 mx-lg-5 py-4'>
        <h1 className='subhead2 text-center py-2'>About Us</h1>
            <div className='col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center px-3'>
            <p className='textjust textst medsafepara'><span className='subhead2'>Oviya MedSafe </span>provides comprehensive, end-to-end global Drug Safety support, including regulatory-compliant Drug Safety database access when required, to pharma/biotech manufacturers with established Pharmacovigilance systems. Additionally, Oviya MedSafe specializes in providing tailored consulting to emerging innovator companies and generic regulatory approval holders worldwide, helping them continuously enhance their Pharmacovigilance departments and ensure compliance with market-specific regulatory requirements.</p>
            </div>
            <div className='col-sm-12 col-md-6'>
               <img src='./ab2.png' className='about1img'/> 
            </div>
            </div>
            
            <div className='row mx-1 mx-md-5 my-0 py-3'>  
            <div className='col-sm-12 col-md-6 '>
            <h1 className='whytx'><span className='whytxt'>WHY <br/></span><span className='subhead5'>Oviya  MedSafe ?</span></h1>
            <img src='./research.png' className='researchimg'/>
                </div>
                <div className='col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center pt-2'>
                <p className='medsafepara textjust textst'>Oviya MedSafe has established itself as a trusted global partner in Pharmacovigilance, leveraging over a decade of expertise in an ever-evolving regulatory landscape. With our modular and end-to-end Drug Safety solutions, supported by regulatory-compliant database access when needed, we empower our clients to meet compliance requirements and prioritize Patient Safety effectively. </p>
                    <p className='medsafepara textjust'>Our passion for Pharmacovigilance drives us to bridge industry gaps and deliver high-quality, customized services that address the unique challenges of both emerging innovator companies and established pharma/biotech manufacturers. </p>
                    <div className='medsafepara textjust'><p>At Oviya MedSafe, we ensure:</p>
                      <ul>
                        <li><b>Timely delivery</b> with uncompromised quality.</li>
                        <li><b>Business continuity and disaster recovery plans</b> to minimize disruptions.</li>
                        <li><b>Data confidentiality and security</b> through robust systems and processes.</li>
                      </ul>
                    </div>
                    <p className='medsafepara textjust'>With a global delivery center equipped with cutting-edge technology and a highly qualified team, we are prepared to handle complex data and deliver exceptional results. Over the years, we have built a reputation for dynamism, innovation, and a deep understanding of regulatory frameworks across diverse markets. </p>
                    <p className='medsafepara textjust'>Let us be your trusted Pharmacovigilance partner. Reach out to us today to experience unparalleled service and support that ensures compliance, efficiency, and above all, Patient Safety.</p>
                </div>
        </div>
    </div>
    </>
  )
}

export default page