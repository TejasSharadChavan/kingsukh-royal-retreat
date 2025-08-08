import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya S.",
    text: "Beautiful property with classy interiors. The staff were so welcoming — felt like home.",
    rating: 5,
  },
  {
    name: "Rahul M.",
    text: "Rooms are elegant and spotless. Great location to explore Ajodhya Hills!",
    rating: 5,
  },
  {
    name: "Priya K.",
    text: "Loved the garden and the peaceful vibe. Excellent value for a boutique stay.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Testimonials</p>
        <h2 className="font-display text-3xl md:text-4xl">What Our Guests Say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-accent/30 shadow-elegant">
              <CardHeader>
                <div className="flex items-center gap-2">
                  {Array.from({ length: t.rating }).map((_, i2) => (
                    <Star key={i2} className="text-accent" fill="currentColor" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">“{t.text}”</p>
                <p className="mt-3 font-medium">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
