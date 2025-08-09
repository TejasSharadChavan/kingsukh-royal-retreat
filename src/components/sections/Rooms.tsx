import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import room2 from "/small.jpg";
import room4 from "/room1.jpg";

const rooms = [
  { id: 1, title: "Cozy Standard", img: room4, price: "₹1,000 / night", desc: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation." },
  { id: 2, title: "Deluxe Twin", img: room2, price: "₹1,500 / night", desc: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance. " },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-20">
      <div className="container">
        {/* Heading */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Rooms & Rates</p>
            <h2 className="font-display text-3xl md:text-4xl">Elegant Rooms, Transparent Prices</h2>
          </div>
          <Button asChild variant="gold" className="hidden md:inline-flex">
            <a href="https://api.whatsapp.com/send?phone=919007062180">Request Availability</a>
          </Button>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center max-w-6xl mx-auto">
          {rooms.map((r) => (
            <Card
              key={r.id}
              className="group overflow-hidden border-accent/30 hover:shadow-elegant transition-shadow scale-105"
            >
              <div className="relative">
                <img
                  src={r.img}
                  alt={`${r.title} room at Kingsukh Guest House`}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold text-accent-foreground shadow-elegant">
                  {r.price}
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{r.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">{r.desc}</p>
                <div className="mt-6">
                  <Button variant="hero" size="lg" asChild>
                    <a href="https://api.whatsapp.com/send?phone=919007062180">Book this room</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
