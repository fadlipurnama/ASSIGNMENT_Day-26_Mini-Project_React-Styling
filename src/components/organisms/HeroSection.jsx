import heroImage from "@/assets/images/hero.png";
import { Button } from "@/components/atoms/button";

function HeroSection() {
  return (
    <section className="container p-4">
      <div className="relative grid min-h-[82vh] bg-white rounded-md max-w-max lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center gap-5 p-4 text-white z-20 lg:text-text-main">
          <h2 className="font-black text-5xl tracking-[-2px] leading-15 text-center">
            Unlock Your Potential with eduCode
          </h2>
          <p className="text-[16px] leading-6 font-normal tracking-normal text-center">
            Embark on a journey of knowledge and skill development with our
            comprehensive online courses. Learn at your own pace, anytime,
            anywhere.
          </p>
          <Button type="button" size="lg" className="btn-primary">
            Start Learing
          </Button>
        </div>
        <div
          className="absolute size-full z-10 lg:relative lg:after:content-none
        
        after:content-[''] after:absolute after:top-0 after:left-0 after:size-full after:pointer-events-none after:bg-linear-to-r after:from-black/28 after:to-black/50"
        >
          <img
            src={heroImage}
            alt="Hero Image"
            className="absolute size-full object-cover rounded-r-md"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
