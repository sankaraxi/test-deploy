import Adminview from '@/app/_components/FullNewsPage/Adminview';

async function getData(id) {
    const res = await fetch(`https://medsafe-test-deploy.vercel.app/api/news/${id}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

// ✅ Define dynamic metadata
export async function generateMetadata({ params }) {
    const { id } = params;
    const data = await getData(id);

    return {
        title: data.news_title || "Latest News & Events | Oviya MedSafe",
        description: data.news_description || "Stay updated with the latest in drug safety and compliance.",
        alternates: {
            canonical: `https://www.oviyamedsafe.com/news/${id}`,
        },
        openGraph: {
            title: data.news_title || "Latest News & Events | Oviya MedSafe",
            description: data.news_description || "Stay updated with the latest in drug safety and compliance.",
            url: `https://www.oviyamedsafe.com/news/${id}`,
            type: "article",
            images: [
                {
                    url: data.image_url || "https://www.oviyamedsafe.com/mainlogo.png",
                    width: 1200,
                    height: 630,
                    alt: "Oviya MedSafe Logo",
                },
            ],
        },
    };
}

const Page = async ({ params }) => {
    const { id } = params;
    return (
        <div>
            <Adminview id={id} />
        </div>
    );
};

export default Page;
