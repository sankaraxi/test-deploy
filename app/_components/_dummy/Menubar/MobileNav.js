import { useState } from 'react';
import Link from 'next/link';
import { IoMdArrowDropdown } from "react-icons/io";
import styles from './Menubar.module.css';

const MobileNav = ({setHamToggle}) => {

    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);

    const handleDropdown1 = () => setShowDropdown1(!showDropdown1); // Toggle for WHO ARE WE
    const handleDropdown2 = () => setShowDropdown2(!showDropdown2); // Toggle for SERVICES

    return (
        <div className='d-flex-col gap-3 bold px-5 py-2'>
            <div className='mb-2'>
                <Link to="/" className={`${styles['custom-link']} text-black`} onClick={() => setHamToggle(false)}>HOME</Link>
            </div>
            

            <div className='mb-2'>
                <div
                    className={`${styles['custom-link']} text-black`}
                    onClick={handleDropdown1} // Toggle dropdown on click
                >
                    WHO WE ARE<span><IoMdArrowDropdown /></span>
                </div>

                {/* Dropdown Menu */}
                {showDropdown1 && (
                    <div
                        className=""
                        >
                        <Link to="/about-us" className={`${styles['dropdown-item']} pt-1`} onClick={() => setHamToggle(false)}> 
                            About Us
                        </Link>
                        <Link to="/our-founder" className={`${styles['dropdown-item']} pt-1`} onClick={() => setHamToggle(false)}>
                            Our Founder
                        </Link>
                        <Link to="/our-board" className={`${styles['dropdown-item']} pt-1`} onClick={() => setHamToggle(false)}>
                            Our Board
                        </Link>
                    </div>
                )}
            </div>

            <div className='mb-2'>
                <div
                    className={`${styles['custom-link']} text-black`}
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
                        <Link to="/drug-safety-services" className="dropdown-item pt-1" onClick={() => setHamToggle(false)}>
                            Drug Safety Services
                        </Link>
                        <Link to="/pharmacovigilance-consulting" className="dropdown-item pt-1" onClick={() => setHamToggle(false)}>
                            Pharmacovigilance Consulting
                        </Link>
                        <Link to="/strategic-partnerships" className="dropdown-item pt-1" onClick={() => setHamToggle(false)}>
                            Strategic Partnerships
                        </Link>
                    </div>
                )}
            </div>

            <div className='mb-2'>
                <Link to="/news" className={`${styles['custom-link']} text-black`} onClick={() => setHamToggle(false)}>NEWS</Link>
            </div>
            <div className='mb-2'>
                <Link to="/downloads" className={`${styles['custom-link']} text-black`} onClick={() => setHamToggle(false)}>DOWNLOADS</Link>
            </div>
            <div className='mb-2'>
                <Link to="/careers" className={`${styles['custom-link']} text-black`} onClick={() => setHamToggle(false)}>CAREERS</Link>
            </div>
            <div className='mb-2'>
                <Link to="/contact" className={`${styles['custom-link']} text-black`} onClick={() => setHamToggle(false)}>CONTACT</Link>
            </div>
        </div>
    );
};

export default MobileNav;