'use client';
import dynamic from "next/dynamic";

import { FaQuoteLeft } from 'react-icons/fa';
import "./Testimonial.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });
// Slick settings for the swiper
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// JSON data for testimonials
const testimonials = [
  {
    quote: "The hard work and support of Oviya MedSafe employees is appreciated and they have been flexible in taking on roles as per the demands of the project, while remaining amiable and enthusiastic throughout.",
    client: "AVP- Medical Affairs",
    company: "US-Headquartered Innovator Pharma",
  },
  {
    quote: "It has indeed been a pleasure working with Oviya MedSafe! Timely execution and great quality work! We are happy that our trust paid off well. We would really recommend Oviya MedSafe for a cost effective and quality work in the field of Pharmacovigilance!",
    client: "Global Safety Lead",
    company: "Indian multinational generic pharma",
  },
  {
    quote: "Oviya MedSafe has a deep understanding of global PV regulatory requirements throughout the lifecycle of a product. As a new UK MAH, we are a proud beneficiary of their end-to-end PV Support.",
    client: "Operations Head",
    company: "UK-based Speciality Pharma",
  },
];

function Testimonial() {
  return (
    <div className="container-fluid py-5 testimonialpart">
      <h1 className="mb-5 subhead2 text-light text-center">What Clients Say</h1>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-content px-5">
              <div className="quote-container">
                <FaQuoteLeft size={30} color="#0D868F" />
              </div>
              <p className="phylotext">{testimonial.quote}</p>
            </div>
            <div className="client-info">
              <h4 className="testimonialclient">{testimonial.client}</h4>
              <p className="text-dark">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
