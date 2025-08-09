import gardenImg from "@/assets/kingsukh/gallery/garden.jpg";
import loungeImg from "@/assets/kingsukh/gallery/lounge.jpg";
import { BedDouble, MapPin, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">About Us</p>
          <h2 className="font-display text-3xl md:text-4xl">Royal, Comfortable & Welcoming</h2>
          <p className="text-muted-foreground">
            At Kingsukh Guest House, we bring together premium comforts with heartfelt hospitality. Located in the heart of Purulia, our boutique stay offers elegant rooms, a serene garden, and easy access to local attractions.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border bg-card p-5 shadow-elegant">
              <Sparkles className="text-accent" />
              <p className="mt-2 font-medium">Boutique Comfort</p>
              <p className="text-sm text-muted-foreground">Curated interiors with warm gold accents.</p>
            </div>
            <div className="rounded-lg border bg-card p-5 shadow-elegant">
              <MapPin className="text-accent" />
              <p className="mt-2 font-medium">Prime Location</p>
              <p className="text-sm text-muted-foreground">Easy access to Purulia’s highlights.</p>
            </div>
            <div className="rounded-lg border bg-card p-5 shadow-elegant">
              <BedDouble className="text-accent" />
              <p className="mt-2 font-medium">Premium Rooms</p>
              <p className="text-sm text-muted-foreground">Thoughtful amenities for restful stays.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/service.jpg" alt="Lush green garden at Kingsukh Guest House" className="h-64 w-full rounded-xl object-cover shadow-elegant" />
          <img src="/recep.jpg" alt="Elegant lounge area with warm lighting" className="h-64 w-full rounded-xl object-cover shadow-elegant mt-8" />
        </div>
      </div>
    </section>
  );
};

export default About;
