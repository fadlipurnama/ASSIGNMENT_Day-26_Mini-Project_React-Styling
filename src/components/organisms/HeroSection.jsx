import heroImage from "@/assets/images/hero.png";
import { Button } from "@/components/atoms/button";

function HeroSection() {
  return (
    <section className="w-full bg-background">
      <div className="w-full relative grid min-h-screen rounded-md lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center gap-5 text-white z-20 p-4 lg:p-10 lg:text-foreground">
          <h2 className="font-black text-5xl tracking-[-2px] leading-15 text-center">
            Unlock Your Potential with eduCode
          </h2>
          <p className="text-[16px] leading-6 font-normal tracking-normal text-center text-muted-foreground">
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
