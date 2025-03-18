import DynamicServices from '@/app/_components/Services/DynamicServices'
import StrategySection from '@/app/_components/Services/StrategySection'

export const metadata = {
  title: "Strategic Partnerships | Oviya MedSafe’s Industry Collaborations for Innovation",
  description:
    "Oviya MedSafe leverages strategic partnerships to deliver complementary healthcare and regulatory solutions, integrating technologies across industries to meet evolving client needs and drive innovation.",
  keywords: [
    "strategic partnerships",
    "Oviya MedSafe",
    "industry collaborations",
    "regulatory solutions",
    "healthcare innovation",
    "technology integration",
    "client-focused partnerships",
  ],
  alternates: {
    canonical: "https://medsafe-test-deploy.vercel.app/strategic-partnerships",
  },
  openGraph: {
    title: "Strategic Partnerships | Oviya MedSafe's Collaborative Approach",
    description:
      "Discover how Oviya MedSafe forms strategic partnerships to enhance regulatory solutions and healthcare innovation.",
    url: "https://www.oviyamedsafe.com/strategic-partnerships",
    type: "website",
    images: [
      {
        url: "https://www.oviyamedsafe.com/Service03.png",
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
        <DynamicServices index={2} />
        <StrategySection />
    </div>
  )
}

export default page