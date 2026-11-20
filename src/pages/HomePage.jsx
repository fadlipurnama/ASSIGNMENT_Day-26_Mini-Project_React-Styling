import HeroSection from "@/components/organisms/HeroSection";
import BenefitSection from "../components/organisms/BenefitSection";

function HomePage() {
  return (
    <>
      <h1 className="sr-only">eduCode - Home Page</h1>
      <HeroSection />
      <BenefitSection />
    </>
  );
}

export default HomePage;
