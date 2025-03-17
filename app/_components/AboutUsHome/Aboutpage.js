"use client";
import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";
import './Aboutpage.css';
import { useRouter } from "next/navigation";

function Aboutpage() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/about-us"); // Navigate to another page
  };
  return (
    <div className='container-fluid bgaboutpage'>
    <div className='container py-5'>
      <div className='row'>
        <div className='col-sm-12 col-md-5 col-lg-5'>
          <h3 className='abttxt'>About Us</h3>
          <h1 className='subhead2 text-start pb-2'>Oviya MedSafe <BsArrowUpRightCircle className="arrowic cursor-pointer" onClick={handleNavigate}/></h1>
          <p className='para'>is a global leader in Pharmacovigilance Consulting & Drug Safety Services. Established in India in 2012 and the United Kingdom in 2014, we offer comprehensive advisory and outsourced support to the pharma/biotech industry. With over 100 years of collective intelligence from our founding groups, we proudly collaborate with renowned pharma/biotech manufacturers and regulatory approval holders worldwide.</p>
        </div>
  <div className='col-sm-12 col-md-5 col-lg-7 imparts'>
    <img src='/Capsule.gif' alt='Pharmacovigilance Solutions for Safety' title='Comprehensive Pharmacovigilance Solutions' className='capsuleimg'/>
</div>
        </div>
        </div>
        </div>
  )
}

export default Aboutpage