import Contact from "@/app/_components/Contact/Contact";

export const metadata = {
  title: "Contact Oviya MedSafe | Partner with Experts in Drug Safety",
  description:
    "Get in touch with Oviya MedSafe for expert pharmacovigilance consulting and drug safety solutions. Our team is ready to assist with regulatory compliance, risk management, and more.",
  keywords: [
    "contact Oviya MedSafe",
    "pharmacovigilance consulting",
    "drug safety solutions",
    "regulatory compliance support",
    "risk management services",
    "global drug safety",
  ],
  alternates: {
    canonical: "https://www.oviyamedsafe.com/contact",
  },
  openGraph: {
    title: "Contact Oviya MedSafe | Get in Touch for Pharmacovigilance Services",
    description:
      "Reach out to Oviya MedSafe for expert drug safety consulting, regulatory compliance, and risk management solutions.",
    url: "https://www.oviyamedsafe.com/contact",
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

function page() {
    return (
      <div>
        <Contact />
      </div>
    )
}

export default page