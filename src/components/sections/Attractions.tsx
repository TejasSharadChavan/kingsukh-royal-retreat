import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import a1 from "@/assets/kingsukh/attractions/ajodhya-hills.jpg";
import a2 from "@/assets/kingsukh/attractions/bamni-falls.jpg";
import a3 from "@/assets/kingsukh/attractions/joychandi-pahar.jpg";
import a4 from "@/assets/kingsukh/attractions/charida-masks.jpg";

const spots = [
  { img: a1, title: "Ajodhya Hills", caption: "Scenic hills, ideal for day trips and sunsets." },
  { img: a2, title: "Bamni Falls", caption: "Refreshing cascades amid lush greenery." },
  { img: a3, title: "Joychandi Pahar", caption: "Iconic hill with panoramic views." },
  { img: a4, title: "Charida Masks", caption: "Home of colorful traditional Chhau masks." },
];

const Attractions = () => {
  return (
    <section id="attractions" className="py-20">
      <div className="container">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Nearby Attractions</p>
        <h2 className="font-display text-3xl md:text-4xl">Explore Purulia</h2>
        <div className="relative mt-8">
          <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
            <CarouselContent>
              {spots.map((s, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-xl border bg-card shadow-elegant">
                    <img src={s.img} alt={`${s.title} near Purulia`} className="h-52 w-full object-cover" />
                    <div className="p-4">
                      <p className="font-medium">{s.title}</p>
                      <p className="text-sm text-muted-foreground">{s.caption}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Attractions;
