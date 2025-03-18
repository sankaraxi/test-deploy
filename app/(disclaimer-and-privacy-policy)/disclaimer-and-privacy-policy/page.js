import Privact from '@/app/_components/Privacy/Privacy';
import React from 'react'
export const metadata = {
    title: "Disclaimer & Privacy Policy | Oviya MedSafe’s Data Protection Commitment",
    description:
      "Learn how Oviya MedSafe protects your privacy, handles data securely, and ensures compliance with regulatory standards. Read our Disclaimer and Privacy Policy for transparency on terms of use, online security, and data protection.",
    keywords: [
      "Oviya MedSafe",
      "Disclaimer",
      "Privacy Policy",
      "Terms of Use",
      "Data Protection",
      "User Privacy",
      "Online Security",
      "Regulatory Compliance",
      "Medical Data Protection",
      "Legal Notice",
    ],
    alternates: {
      canonical: "https://www.oviyamedsafe.com/disclaimer-and-privacy-policy",
    },
    openGraph: {
      title: "Disclaimer & Privacy Policy | Oviya MedSafe",
      url: "https://www.oviyamedsafe.com/",
      type: "website",
      images: [
        {
          url: "https://www.oviyamedsafe.com/mainlogo.png",
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
        <Privact />
    </div>
  )
}

export default page