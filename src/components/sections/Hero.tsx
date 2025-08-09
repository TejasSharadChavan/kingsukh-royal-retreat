import heroImg from "@/assets/kingsukh/hero.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] w-full overflow-hidden">
      <img
        src="/ayodhya.webp"
        alt="Kingsukh Guest House exterior at golden hour with lush garden"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background" />

      <div className="relative container flex flex-col items-start justify-center gap-6 py-28 md:py-40 animate-enter">
        <p className="text-sm tracking-widest text-muted-foreground uppercase">Purulia, West Bengal</p>
        <h1 className="font-display text-4xl leading-tight md:text-6xl max-w-3xl">
          Experience Luxury & Comfort at Kingsukh Guest House
        </h1>
        <p className="max-w-2xl text-lg font-display">
          A boutique stay blending royal elegance with warm hospitality. Wake up to serene gardens, premium rooms, and the charm of Purulia’s attractions.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild variant="hero" size="xl">
            <a href="#contact" aria-label="Book your stay now">Book Now</a>
          </Button>
          <Button asChild variant="gold" size="lg">
            <a href="#rooms" aria-label="Explore rooms and rates">Explore Rooms</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
