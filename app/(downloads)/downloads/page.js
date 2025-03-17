'use client'
import React, { useState, useRef, useEffect } from 'react';
import "./downloads.css";
import DownloadForm from '@/app/_components/Downloads/DownloadForm';

// import { Helmet } from 'react-helmet-async';
function page() {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]); // Use an array to reference each accordion content
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index); // Toggle the current accordion
    };
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className='container-fluid text-justify text-light'>
    {/* <Helmet>
      <title>Pharmacovigilance Resources | Expert Drug Safety Insights from Oviya MedSafe</title>
      <meta name="description" content="Explore Oviya MedSafe’s exclusive pharmacovigilance resources, including whitepapers, publications, and compliance guides, designed to support global drug safety and regulatory excellence." />
      <meta name="keywords" content="pharmacovigilance downloads, Oviya MedSafe resources, drug safety publications, regulatory compliance guides, pharmacovigilance whitepapers, global drug safety insights" />
      <link rel="canonical" href="https://oviyamedsafe.com/downloads" />
      <meta property="og:title" content="Pharmacovigilance Resources | Download Oviya MedSafe’s Expert Insights" />
      <meta property="og:image" content="https://www.oviyamedsafe.com/mainlogo.png" />
      <meta property="og:url" content="https://www.oviyamedsafe.com/" />
      <meta property="og:type" content="website" />
    </Helmet> */}
    <div className='col mx-1 mx-md-5'>
      <h1 className='subhead2 py-4'>Downloads</h1>
      <div className='d-flex flex-column card-margin'>
        {/* Card 1 */}
        <div className="card custom-card mb-3">
          <div className="card-body d-flex flex-column">
            <div className='w-100 d-flex align-items-center justify-content-between'>
              {/* Title */}
              <div className='width-heading'>
                <h5 className="card-title card-title-size">
                  Oviya MedSafe – eBrochure - 23 OCT 2024
                </h5>
              </div>
              {/* Button */}
              <div>
                <button
                  className='custom-btn btn btn-primary'
                  onClick={() => toggleAccordion(0)} // Pass the index 0 for the first accordion
                >
                  Download PDF
                </button>
              </div>
            </div>

            <div className='d-flex align-items-center mt-0'>
              <div style={{ paddingRight: '10px' }}>
                <img
                  src="/Calendar.png"
                  alt='date'
                  className='imgwidth'
                />
              </div>
              <div>January, 2025</div>
            </div>
          </div>

          {/* Accordion Content */}
          <div
            className="accordion-content"
            style={{
              maxHeight: activeIndex === 0 ? `${contentRefs.current[0].scrollHeight}px` : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease',
            }}
            ref={(el) => (contentRefs.current[0] = el)}
          >
            
            {/* Form content */}
            {/* <DownloadForm /> */}
            <DownloadForm fileId="file1"/>
            
           
          </div>
        </div>

        {/* Card 2 */}
        <div className="card custom-card mb-3">
          <div className="card-body d-flex flex-column">
            <div className='d-flex align-items-center justify-content-between'>
              <div className='width-heading'>
                <h5 className="card-title text-left">
                  Oviya MedSafe - Capabilities & Track Record - 09 OCT 2024
                </h5>
              </div>
              <div>
                <button
                  className='custom-btn btn btn-primary'
                  onClick={() => toggleAccordion(1)} // Pass the index 1 for the second accordion
                >
                  Download PDF
                </button>
              </div>
            </div>

            <div className='d-flex align-items-center mt-0'>
              <div style={{ paddingRight: '10px' }}>
                <img
                  src="./Calendar.png"
                  alt='date'
                  className='imgwidth'
                />
              </div>
              <div>January, 2025</div>
            </div>
          </div>

          {/* Accordion Content */}
          <div
            className="accordion-content"
            style={{
              maxHeight: activeIndex === 1 ? `${contentRefs.current[1].scrollHeight}px` : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease',
            }}
            ref={(el) => (contentRefs.current[1] = el)}
          >
           
               <DownloadForm fileId="file2"/>
            {/* Form content */}
            {/* <DownloadForm /> */}
          </div>
        </div>


      

      </div>
    </div>
  </div>
  )
}

export default page