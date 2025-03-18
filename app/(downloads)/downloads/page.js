
import Downloads from '@/app/_components/Downloads/Downloads';

export const metadata = {
  title: "Pharmacovigilance Resources | Expert Drug Safety Insights from Oviya MedSafe",
  description:
    "Explore Oviya MedSafe’s exclusive pharmacovigilance resources, including whitepapers, publications, and compliance guides, designed to support global drug safety and regulatory excellence.",
  keywords: [
    "pharmacovigilance downloads",
    "Oviya MedSafe resources",
    "drug safety publications",
    "regulatory compliance guides",
    "pharmacovigilance whitepapers",
    "global drug safety insights",
  ],
  alternates: {
    canonical: "https://www.oviyamedsafe.com/downloads",
  },
  openGraph: {
    title: "Pharmacovigilance Resources | Download Oviya MedSafe’s Expert Insights",
    description:
      "Access expert insights from Oviya MedSafe through our collection of pharmacovigilance whitepapers, publications, and regulatory guides.",
    url: "https://www.oviyamedsafe.com/downloads",
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
        <Downloads />
      </div>
    )
}

export default page