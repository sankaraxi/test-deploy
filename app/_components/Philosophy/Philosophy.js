import React from 'react'
import './Philosophy.css'; 

const Philosophy = () => {
  return (
    <div className='philosophybg'>
      <div className='container-pad'>
        <h1 className='heading text-center text-white' style={{fontSize: '50px'}}>Philosophy</h1>
      </div>
    
      <div className='d-flex flex-column flex-lg-row gap-4 gap-lg-10 justify-content-center card-container-pad align-items-center'>
        {/* Card 1 */}
        
        <div className="card-container">
            {/* Circle Animation */}
            <span className="circle-animation"></span>

            {/* Content */}
            <div className="image-container">
              <img src='/bulb.png' alt="Our Vision is leading Pharmacovigilance Consulting via Global Partnerships." title="Oviya MedSafe's vision to lead in Pharmacovigilance consulting through strategic global partnerships."/>
            </div>
            <div className="title-container">
              <h1>Vision</h1>
            </div>
            <div className="description-container">
              <p>
                To become a leader in Pharmacovigilance consulting services by strategically partnering with global pharmaceutical companies.
              </p>
            </div>
        </div>

         {/* Card 2 */}
         <div className="card-container">
            {/* Circle Animation */}
            <span className="circle-animation"></span>

            {/* Content */}
            <div className="image-container">
              <img src='/Target.png' title='Our Mission is promoting a Pharmacovigilant Culture Worldwide.
' alt="Oviya MedSafe's mission to promote a pharmacovigilant culture and advance global drug safety practices." style={{width:'100px'}}/>
            </div>
            <div className="title-container">
              <h1>Mission</h1>
            </div>
            <div className="description-container">
              <p>
              To inculcate a Pharmacovigilant culture and proactively support
              the growth of drug safety practices across the globe. We will
              achieve this by integrating our expertise in Pharmacovigilance
              with our medical experience, ensuring compliance to the dynamic
              regulatory frameworks and deploying the most appropriate
              technology.
              </p>
            </div>
        </div>

         {/* Card 3 */}
         <div className="card-container">
            {/* Circle Animation */}
            <span className="circle-animation"></span>

            {/* Content */}
            <div className="image-container">
              <img src='/Diamond.png' alt="Oviya MedSafe's core values: passion for Pharmacovigilance, continuous learning, capability building, and business integrity.
" title='Our Values: Passion, Learning, Capability, Integrity.'/>
            </div>
            <div className="title-container">
              <h1>Values</h1>
            </div>
            <div className="description-container">
              <ul className="flex flex-col list-disc">
                <li>Passion for Pharmacovigilance</li>
                <li>Continuous learning to empower clients</li>
                <li>Perpetual capability building</li>
                <li>Deep-rooted business integrity</li>
              </ul>
          </div>
        </div>

      </div>  
    </div>
  )
}

export default Philosophy


