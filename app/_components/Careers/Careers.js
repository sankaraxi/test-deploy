'use client';
import React, { useEffect } from 'react'
import styles from "./page.module.css";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
  return (
    <>
    <div className={`container-fluid ${styles.contactpart} text-center text-light`}>
  
     <div className='py-5'>
      <h1 className={`text-light ${styles.careershead} pb-3`}>Careers</h1>
      <h2 className={styles.emptxt}>Empowering Your Future:</h2>
      <h2 className={styles.emptxt}>Explore Exciting Career Opportunities With Us!</h2>
      
      </div>
     
  </div>
   <div className={`container py-5 ${styles.careersdata}`}>
   <h1 className={`${styles.careerssubhead} py-2`}>Diverse Work Force</h1>
   <p className='pb-3'>We at Oviya MedSafe value diversity as an integral part of our workplace culture. We expect our staff to understand and respect individual differences, which virtue we believe is imperative for every prospective team member of ours.</p>
   <h1 className={`${styles.careerssubhead} py-2`}>Join our Team</h1>
   <p >We welcome candidates with a strong internal drive for progress and innovation. To achieve our goals, we place individuals who thrive to learn and work in an intellectually challenging and competitive business environment.</p>
   <p>If you think, we can use your creativity, ideas and skills to deliver innovative solutions to clients, do mail in your resume to</p>
   <a href="mailto:careers@oviyamedsafe.com" style={{ textDecoration: 'none', color: '#0D868F',fontSize:"18px" }}>
   <FontAwesomeIcon icon={faEnvelope} className='pe-2'/>
    careers@oviyamedsafe.com
 </a>



</div>
</>
  )
}

export default Careers