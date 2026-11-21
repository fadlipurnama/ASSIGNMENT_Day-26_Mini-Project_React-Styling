import HeroSection from "@/components/organisms/HeroSection";
import BenefitSection from "../components/organisms/BenefitSection";
import CoursesSection from "@/components/organisms/CoursesSection";

function HomePage() {
  return (
    <>
      <h1 className="sr-only">eduCode - Home Page</h1>
      <HeroSection />
      <BenefitSection />
      <CoursesSection />
    </>
  );
}

export default HomePage;
