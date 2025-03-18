import OurFounder from '@/app/_components/OurFounder/OurFounder';
import React from 'react'

export const metadata = {
  title: "Dr J Vijay Venkatraman | Founder & CEO of Oviya MedSafe | Global Pharmacovigilance Leader",
  description:
    "Dr J Vijay Venkatraman, Founder & CEO of Oviya MedSafe, is a Diabetologist, Drug Safety Physician, and Pharmacovigilance expert with 25 years of experience. A Fellow of PIPA, UK, he has been instrumental in helping global pharma and biotech companies meet compliance requirements. A sought-after speaker, author, and thought leader, Dr Vijay actively contributes to the advancement of drug safety worldwide.",
  keywords: [
    "Dr J Vijay Venkatraman",
    "Oviya MedSafe Founder",
    "pharmacovigilance expert",
    "drug safety leader",
    "global pharmacovigilance",
    "PIPA Fellow",
    "regulatory compliance",
    "pharmaceutical consulting",
    "pharmacovigilance thought leader",
    "medical entrepreneur",
    "keynote speaker in drug safety",
  ],
  alternates: {
    canonical: "https://www.oviyamedsafe.com/our-founder",
  },
  openGraph: {
    title: "Founder of Oviya MedSafe | Visionary Leadership in Healthcare Safety",
    description:
      "Dr J Vijay Venkatraman, a globally recognized pharmacovigilance leader, is committed to advancing drug safety and regulatory compliance worldwide.",
    url: "https://www.oviyamedsafe.com/our-founder",
    type: "website",
    images: [
      {
        url: "https://medsafe-test-deploy.vercel.app/OVIYA_FOUNDER_SEO.png",
        width: 1200,
        height: 630,
        alt: "Oviya MedSafe Logo",
      },
    ],
  },
};


const page = () => {
  return (
    <div>
      <OurFounder />
    </div>
  )
}

export default page
