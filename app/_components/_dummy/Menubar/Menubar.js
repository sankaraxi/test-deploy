'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import styles from './Menubar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Menubar = () => {
  const [hamToggle, setHamToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 300) { // Apply only for desktops (xl screens)
        setIsSticky(window.scrollY > 100);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Handle screen resize

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className={styles.menubar-container}>
     
      {/* Desktop View */}
      <div
        className={`d-none d-xl-flex ${isSticky ? styles.sticky : ''}`}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: "linear-gradient(to right, var(--navgradientfrom), var(--navgradientto))"
        }}
      >
        <Link href="/">
          <Image src='./LOGO.png' title='Oviya MedSafe company logo.' className='p-0 m-0 me-5' alt="Oviya MedSafe - Global Pharmacovigilance Consulting & Drug Safety Services" style={{height: "65px"}} />
        </Link>
        
        <Navbar />
        
        {/* <div className="d-flex align-items-center" style={{paddingRight: '28px'}}>
          <Search />
        </div> */}
      </div>

      {/* Mobile View */}
      <div
        className={`d-flex d-xl-none ${isSticky ? styles.sticky : ''}`}
        style={{
          justifyContent: 'space-between',
          padding: '',
          background: "linear-gradient(to right, var(--navgradientfrom), var(--navgradientto))",
          height: '60px',
        }}
      >
        <Link to={"/"}>
          <Image src="./LOGO.png" alt="Logo" className='p-0 m-0' style={{ height: '60px'}}  />
        </Link>

        <div
          className="d-flex align-items-center"
          onClick={() => setHamToggle(!hamToggle)}
        >
          <i
            className="bi bi-list"
            style={{
              fontSize: '45px',
              color: 'white',
              paddingRight: '1rem',
            }}
          ></i>
        </div>
      </div>

      <div
        style={{
          maxHeight: hamToggle ? '370px' : '0',
          overflow: 'hidden',
          background: '#fff',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          transition: 'max-height 0.5s ease-in-out',
          alignItems: 'right',
        }}
      >
        <MobileNav setHamToggle={setHamToggle} />

        {/* <div className="d-flex align-items-center" style={{paddingLeft: '3rem', paddingBottom: '20px'}}>
          <Search />
        </div> */}
      </div>
    </div>
  );
};

export default Menubar;