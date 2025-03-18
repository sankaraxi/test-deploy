import React from 'react'

import Banner from '../_components/Banner/Banner'
import Aboutpage from '../_components/AboutUsHome/Aboutpage'
import Philosophy from '../_components/Philosophy/Philosophy'
import OurServices from '../_components/OurServices/OurServices'
import Testimonial from '../_components/Testimonial/Testimonial'
import Blogbanner from '../_components/Blogbanner/Blogbanner'
import SwiperCard3D from '../_components/VideoPart/SwiperCard3D'

export const metadata = {
  title: "Oviya MedSafe | Global Pharmacovigilance Services & Expert Drug Safety Consulting",
  description:
    "Oviya MedSafe is a trusted provider of end-to-end pharmacovigilance solutions, ensuring regulatory compliance and patient safety. We specialize in ICSR processing, aggregate report preparation, QPPV services, risk management, signal detection, and clinical trial safety. Additionally, through our strategic industry alliances, we offer complementary services such as PV database provision, medical writing, and regulatory affairs support. Trust our expert team for reliable, high-quality pharmacovigilance solutions tailored to your needs.",
  keywords: [
    "pharmacovigilance consulting",
    "drug safety services",
    "regulatory compliance",
    "aggregate reporting",
    "signal detection",
    "clinical trial safety",
    "QPPV services",
    "risk management",
    "strategic partnerships",
    "PV database provision",
    "medical writing",
    "pharmaceutical consulting",
    "global pharmacovigilance",
    "drug safety physician",
    "pharmacovigilance scientist",
    "pharmacovigilance services in India",
    "pharmacovigilance company in Coimbatore",
  ],
  alternates: {
    canonical: "https://www.oviyamedsafe.com/",
  },
  openGraph: {
    title: "Global Pharmacovigilance Consulting & Drug Safety Services | Oviya MedSafe",
    description:
      "Oviya MedSafe offers expert pharmacovigilance and drug safety services to ensure regulatory compliance and patient safety worldwide.",
    url: "https://www.oviyamedsafe.com/",
    type: "website",
    images: [
      {
        url: "https://www.oviyamedsafe.com/mainlogo.png",
        width: 1200,
        height: 630,
        alt: "Oviya MedSafe Founder",
      },
    ],
  },
};

const page = () => {
  return (
    <div>
      <Banner />
      <Aboutpage />
      <Philosophy />
      <OurServices />
      <Testimonial />
      <Blogbanner />
      <SwiperCard3D />
    </div>
  )
}

export default page