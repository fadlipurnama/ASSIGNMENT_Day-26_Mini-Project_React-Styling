import HeroSection from "@/components/organisms/landing-page/HeroSection";
import BenefitSection from "../components/organisms/landing-page/BenefitSection";
import FeaturedSection from "@/components/organisms/landing-page/FeaturedSection";

function HomePage() {
  return (
    <>
      <h1 className="sr-only">EDUCODE - Home Page</h1>
      <HeroSection />
      <BenefitSection />
      <FeaturedSection />
    </>
  );
}

export default HomePage;
