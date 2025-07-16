import AboutBanner from "@/components/about/AboutBanner";
import BottomDownSection from "@/components/about/BottomDownSection";
import BottomUpSection from "@/components/about/BottomUpSection";
import TeamSection from "@/components/about/TeamSection";
import UpperSection from "@/components/about/UpperSection";
import Footer from "@/components/home/Footer";

// Define types
interface ContentItem {
  type: "text" | "image";
  data: string;
}

interface SectionItem {
  name: string;
  contents: ContentItem[];
}

interface AboutPageProps {
  bannerSection: ContentItem[];
  upperSection: ContentItem[];
  team: ContentItem[];
  bottomUp: ContentItem[];
  bottomDown: ContentItem[];
}

// Fetch data with proper typing
async function getData(): Promise<AboutPageProps> {
  const domain = "aviralai.com";
  const page = "About";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch page data");
  }

  const data: { sections: SectionItem[] } = await res.json();
  const all = data?.sections ?? [];

  return {
    bannerSection: all.find((s) => s.name === "AboutBanner")?.contents || [],
    upperSection: all.find((s) => s.name === "UpperSection")?.contents || [],
    team: all.find((s) => s.name === "TeamSection")?.contents || [],
    bottomUp: all.find((s) => s.name === "BottomUpSection")?.contents || [],
    bottomDown: all.find((s) => s.name === "BottomDownSection")?.contents || [],
  };
}

// Render page
export default async function About() {
  const {
    bannerSection,
    upperSection,
    team,
    bottomUp,
    bottomDown,
  } = await getData();

  return (
    <>
      <AboutBanner bannerData={bannerSection} />
      <UpperSection upperSectionData={upperSection} />
      <TeamSection teamData={team} />
      <BottomUpSection bottomUpData={bottomUp} />
      <BottomDownSection bottomDownData={bottomDown} />
      <Footer />
    </>
  );
}
