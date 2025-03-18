'use client';
import React, { useEffect } from 'react';
import "./Privacy.css";

function Privact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='container-fluid'>
      
        <h1 className='text-center py-3 subhead2'>Disclaimer</h1>
        <div className='row bgprivacy p-2 p-md-5'>
          <div className='col-12'>
            <p className='mx-0 mx-lg-5 px-1 px-md-5'>
              This website as a resource may contain information pertaining to software, products, and services which may include inaccuracies or typographical errors. Oviya MedSafe hereby disclaims all warranties and conditions with regard to these information, software, products, services and related graphics, including all implied warranties and conditions of merchantability, fitness for a particular purpose, workmanlike effort, title and non-infringement. Oviya MedSafe, its affiliates, associates, directors and employees assume no responsibility or liability for any damages or injury caused by, including but not limited to, any failure of performance, error, omission, interruption, defect, delay in operation of transmission, computer virus, line failure, or the inability to use the materials provided on this website.
            </p>
          </div>
          <div className='col-12'>
            <p className='mx-0 mx-lg-5 px-1 px-md-5'>
              This site is created and controlled by Oviya MedSafe Private Limited in Coimbatore (India); as such the laws of India shall apply; the courts in Coimbatore only shall have jurisdiction in respect of all the terms, conditions and disclaimers. Oviya MedSafe Private Limited reserves the right to make changes to the site and the terms, conditions and disclaimers.
            </p>
          </div>
        </div>
        <h1 className='text-center subhead2 py-3'>Privacy Policy</h1>
        <div className='row bgprivacy p-2 p-md-5'>
          <div className='col-12'>
            <p className='mx-0 mx-lg-5 px-1 px-md-5'>
              Oviya MedSafe puts in its best efforts to respect the privacy of the visitors of this website. Oviya MedSafe uses information provided voluntarily by you (if any) to measure the use of our site and to improve the content of the site. This information is used solely by Oviya MedSafe Private Limited, its subsidiaries, affiliates or other entities that are involved in the operation of this website for internal purposes and is not sold or transferred to third parties. Only users who request e-mail notification will receive the same.
            </p>
          </div>
          <div className='col-12'>
            <p className='mx-0 mx-lg-5 px-1 px-md-5'>
              Please note that Oviya MedSafe website may contain links to other sites. While we try to link only to sites that share our high standards and respect for privacy, we are not responsible for the content or the privacy practices employed by those sites.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Privact;
