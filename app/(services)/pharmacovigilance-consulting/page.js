import AccordianSection from '@/app/_components/Services/AccordianSection'
import DynamicServices from '@/app/_components/Services/DynamicServices'
import React from 'react'

export const metadata = {
  title: "Pharmacovigilance Consulting | Expert Drug Safety & Regulatory Solutions",
  description:
    "Oviya MedSafe’s pharmacovigilance consulting services support pharmaceutical companies in achieving global regulatory compliance, optimizing drug safety processes, and mitigating risks to ensure patient safety.",
  keywords: [
    "pharmacovigilance consulting",
    "drug safety consulting",
    "regulatory compliance",
    "risk management",
    "pharmaceutical consulting",
    "global pharmacovigilance",
    "safety signal detection",
    "Oviya MedSafe",
  ],
  alternates: {
    canonical: "https://medsafe-test-deploy.vercel.app/pharmacovigilance-consulting",
  },
  openGraph: {
    title: "Pharmacovigilance Consulting | Proactive Drug Safety & Compliance Strategies",
    description:
      "Expert pharmacovigilance consulting services from Oviya MedSafe help pharmaceutical companies ensure global drug safety compliance.",
    url: "https://www.oviyamedsafe.com/pharmacovigilance-consulting",
    type: "website",
    images: [
      {
        url: "https://www.oviyamedsafe.com/Service02.png",
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
        <DynamicServices index={1} />
        <AccordianSection index={1} />
        
    </div>
  )
}

export default page