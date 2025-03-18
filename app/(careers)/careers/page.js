import Careers from "@/app/_components/Careers/Careers";


export const metadata = {
  title: "Careers at Oviya MedSafe | Build Your Future in Pharmacovigilance",
  description:
    "Discover rewarding career opportunities at Oviya MedSafe. Join our expert team in pharmacovigilance and drug safety to make a meaningful impact in global healthcare.",
  keywords: [
    "Oviya MedSafe careers",
    "pharmacovigilance jobs",
    "drug safety employment",
    "regulatory affairs careers",
    "join Oviya MedSafe",
    "global healthcare careers",
  ],
  alternates: {
    canonical: "https://www.oviyamedsafe.com/careers",
  },
  openGraph: {
    title: "Careers at Oviya MedSafe | Join Our Pharmacovigilance Team",
    description:
      "Join Oviya MedSafe’s expert team in pharmacovigilance and drug safety. Make a global impact in healthcare.",
    url: "https://www.oviyamedsafe.com/careers",
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
        <Careers />
      </div>
    )
}

export default page