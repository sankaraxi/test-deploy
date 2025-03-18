'use client';
import React, { useEffect } from 'react'
import './Sitemap.css';

const Sitemap = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

  return (
    <div>
        {/* <Helmet>
            <title>Sitemap | Oviya MedSafe</title>
        </Helmet> */}
        {/* Sitemap Heading */}
        <div className='sitemap-header'>
            <div className='container d-flex justify-content-between align-items-center pt-4'>
                <div>
                    <h1 className='sitemaptext'>Sitemap</h1>
                </div>
                <div>
                    <a href="/" className='site-home'>
                        <h4>Home</h4>
                    </a>    
                </div>
            </div>
        </div>
        <div className='container-fluid stcontainer'>
            <div className='ps-1 ps-md-5'>
            <ul className='site-list'>
                <li><a href="/">Home</a></li>
                <li><a href="/about-us">Who We Are</a></li>
                <ul className='site-list sub-menu'>
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/our-founder">Our Founder</a></li>
                    <li><a href="/our-board">Our Board</a></li>
                </ul>
                <li><a href="/drug-safety-services">Services</a></li>
                <ul className='site-list sub-menu'>
                    <li><a href="/drug-safety-services">Drug Safety Services</a></li>
                    <li><a href="/pharmacovigilance-consulting">Pharmacovigilance Consulting</a></li>
                    <li><a href="/strategic-partnerships">Strategic Partnerships</a></li>
                </ul>
                <li><a href="/news">News</a></li>
                <li><a href="/downloads">Downloads</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/disclaimer-and-privacy-policy">Disclaimer and Privacy Policy</a></li>
                <li><a href="/sitemap">Sitemap</a></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Sitemap