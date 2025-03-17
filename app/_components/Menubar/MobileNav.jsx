'use client';
import { useState } from 'react';
import Link from 'next/link'
import { IoMdArrowDropdown } from "react-icons/io";
import './Menubar.css'

const MobileNav = ({setHamToggle}) => {

    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);

    const handleDropdown1 = () => setShowDropdown1(!showDropdown1); // Toggle for WHO ARE WE
    const handleDropdown2 = () => setShowDropdown2(!showDropdown2); // Toggle for SERVICES

    return (
        <div className='d-flex-col gap-3 bold px-5 py-2'>
            <div className='mb-2'>
                <Link href="/" className="custom-link text-black" onClick={() => setHamToggle(false)}>HOME</Link>
            </div>
            

            <div className='mb-2'>
                <div
                    className="custom-link text-black"
                    onClick={handleDropdown1} // Toggle dropdown on click
                >
                    WHO WE ARE<span><IoMdArrowDropdown /></span>
                </div>

                {/* Dropdown Menu */}
                {showDropdown1 && (
                    <div
                        className=""
                        >
                        <Link href="/about-us" className="dropdown-item pt-1" onClick={() => setHamToggle(false)}> 
                            About Us
                        </Link>
                        <Link href="/our-founder" className="dropdown-item pt-1" onClick={() => setHamToggle(false)}>
                            Our Founder
                        </Link>
                        <Link href="/our-board" className="dropdown-item pt-1" onClick={() => setHamToggle(false)}>
                            Our Board
                        </Link>
                    </div>
                )}
            </div>

            <div className='mb-2'>
                <div
                    className="custom-link text-black"
                    onClick={handleDropdown2} // Toggle dropdown on click
                >
                    SERVICES <span><IoMdArrowDropdown /></span>
                </div>

                {/* Dropdown Menu */}
                {showDropdown2 && (
                    <div
                        className=""
                        style={{transition: 'max-height 0.5s ease-in-out'}}
                    >
                        <Link href="/drug-safety-services" className="dropdown-item pt-1" onClick={() => setHamToggle(false)}>
                            Drug Safety Services
                        </Link>
                        <Link href="/pharmacovigilance-consulting" className="dropdown-item pt-1" onClick={() => setHamToggle(false)}>
                            Pharmacovigilance Consulting
                        </Link>
                        <Link href="/strategic-partnerships" className="dropdown-item pt-1" onClick={() => setHamToggle(false)}>
                            Strategic Partnerships
                        </Link>
                    </div>
                )}
            </div>

            <div className='mb-2'>
                <Link href="/news" className="custom-link text-black" onClick={() => setHamToggle(false)}>NEWS</Link>
            </div>
            <div className='mb-2'>
                <Link href="/downloads" className="custom-link text-black" onClick={() => setHamToggle(false)}>DOWNLOADS</Link>
            </div>
            <div className='mb-2'>
                <Link href="/careers" className="custom-link text-black" onClick={() => setHamToggle(false)}>CAREERS</Link>
            </div>
            <div className='mb-2'>
                <Link href="/contact" className="custom-link text-black" onClick={() => setHamToggle(false)}>CONTACT</Link>
            </div>
        </div>
    );
};

export default MobileNav;