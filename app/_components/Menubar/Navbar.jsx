'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { IoMdArrowDropdown } from "react-icons/io";
import './Menubar.css';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const pathname = usePathname();
    

    const toggleDropdown = (dropdown) => {
        setActiveDropdown((prevDropdown) => (prevDropdown === dropdown ? null : dropdown));
    };

    const isActive = (path) => pathname === path;

    return (
        <div className='d-flex align-items-center gap-4'>
            <Link
                href="/"
                className={`mx-2 custom-link text-white ${isActive('/') ? 'active' : ''}`} >
                HOME
            </Link>

            <div
                className="position-relative"
                onClick={() => toggleDropdown('dropdown1')}
            >
                <Link
                    href="#"
                    className="custom-link2 text-white d-flex align-items-center gap-1"
                >
                    <span className={`custom-link ${isActive('/about-us') ||isActive('/our-founder') || isActive('/our-board')  ? 'active' : ''}`} >WHO WE ARE</span> <span><IoMdArrowDropdown /></span>
                </Link>

                {/* Dropdown Menu */}
                {activeDropdown === 'dropdown1' && (
                    <div
                        className="dropdown-menu show"
                        style={{
                            position: "absolute",
                            left: "0",
                            paddingTop: "1rem",
                            top: "100%",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            borderRadius: "0.5rem",
                            zIndex: "1030",
                        }}
                    >
                        <Link
                            href="/about-us"
                            className='dropdown-item'
                        >
                            About Us
                        </Link>
                        <Link
                            href="/our-founder"
                            className='dropdown-item'
                        >
                            Our Founder
                        </Link>
                        <Link
                            href="/our-board"
                            className='dropdown-item'
                        >
                            Our Board
                        </Link>
                    </div>
                )}
            </div>

            <div
                className="position-relative"
                onClick={() => toggleDropdown('dropdown2')}
            >
                <Link
                    href="#"
                    className="mx-2 custom-link2 text-white d-flex align-items-center gap-1"
                >
                    <span className={`custom-link ${isActive('/drug-safety-services') ||isActive('/pharmacovigilance-consulting') || isActive('/strategic-partnerships')  ? 'active' : ''}`}>SERVICES</span> <span><IoMdArrowDropdown /></span>
                </Link>

                {/* Dropdown Menu */}
                {activeDropdown === 'dropdown2' && (
                    <div
                        className="dropdown-menu show mx-2"
                        style={{
                            position: "absolute",
                            left: "0",
                            paddingTop: "1rem",
                            top: "100%",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            borderRadius: "0.5rem",
                            zIndex: "1030",
                        }}
                    >
                        <Link
                            href="/drug-safety-services"
                            className='dropdown-item'
                        >
                            Drug Safety Services
                        </Link>
                        <Link
                            href="/pharmacovigilance-consulting"
                            className='dropdown-item'
                        >
                            Pharmacovigilance Consulting
                        </Link>
                        <Link
                            href="/strategic-partnerships"
                            className='dropdown-item'
                        >
                            Strategic Partnerships
                        </Link>
                    </div>
                )}
            </div>

            <Link
                href="/news"
                className={`mx-2 custom-link text-white ${isActive('/news') ? 'active' : ''}`}
            >
                NEWS
            </Link>
            <Link
                href="/downloads"
                className={`mx-2 custom-link text-white ${isActive('/downloads') ? 'active' : ''}`}
            >
                DOWNLOADS
            </Link>
            <Link
                href="/careers"
                className={`mx-2 custom-link text-white ${isActive('/careers') ? 'active' : ''}`}
            >
                CAREERS
            </Link>
            <Link
                href="/contact"
                className={`me-5 custom-link text-white ${isActive('/contact') ? 'active' : ''}`}
            >
                CONTACT
            </Link>
        </div>
    );
};

export default Navbar;
