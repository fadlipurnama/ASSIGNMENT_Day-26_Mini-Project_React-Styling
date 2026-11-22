import HeroSection from "@/components/organisms/landing-page/HeroSection";
import BenefitSection from "../components/organisms/landing-page/BenefitSection";
import CoursesSection from "@/components/organisms/landing-page/CoursesSection";

function HomePage() {
  return (
    <>
      <h1 className="sr-only">EDUCODE - Home Page</h1>
      <HeroSection />
      <BenefitSection />
      <CoursesSection />
    </>
  );
}

export default HomePage;
