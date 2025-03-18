import AccordianSection from '@/app/_components/Services/AccordianSection'
import DynamicServices from '@/app/_components/Services/DynamicServices'
import React from 'react'
export const metadata = {
  title: "Drug Safety Services | End-to-End Pharmacovigilance & Regulatory Compliance",
  description:
    "Oviya MedSafe provides comprehensive drug safety services, including case processing, risk management, aggregate reporting, and post-marketing surveillance, ensuring regulatory compliance and patient safety.",
  keywords: [
    "drug safety services",
    "pharmacovigilance solutions",
    "case processing",
    "aggregate reporting",
    "post-marketing surveillance",
    "clinical safety",
    "pharmaceutical risk management",
    "regulatory compliance",
    "Oviya MedSafe",
  ],
  alternates: {
    canonical: "https://medsafe-test-deploy.vercel.app/drug-safety-services",
  },
  openGraph: {
    title: "Drug Safety Services | Comprehensive Solutions for Regulatory Compliance",
    description:
      "Oviya MedSafe offers expert drug safety solutions, including case processing, risk management, and regulatory compliance.",
    url: "https://www.oviyamedsafe.com/drug-safety-services",
    type: "website",
    images: [
      {
        url: "https://www.oviyamedsafe.com/Service01.png",
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
        <DynamicServices index={0} />
        <AccordianSection index={0} />
    </div>
  )
}

export default page