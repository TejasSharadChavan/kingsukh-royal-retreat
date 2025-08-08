import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import room1 from "@/assets/kingsukh/rooms/room1.jpg";
import room2 from "@/assets/kingsukh/rooms/room2.jpg";
import room3 from "@/assets/kingsukh/rooms/room3.jpg";
import room4 from "@/assets/kingsukh/rooms/room4.jpg";

const rooms = [
  { id: 1, title: "Cozy Standard", img: room4, price: "₹1,499 / night", desc: "Comfortable essentials with boutique charm." },
  { id: 2, title: "Deluxe Twin", img: room2, price: "₹1,899 / night", desc: "Spacious twin with elegant touches." },
  { id: 3, title: "Premium Queen", img: room1, price: "₹2,299 / night", desc: "Refined comfort with premium amenities." },
  { id: 4, title: "Suite", img: room3, price: "₹2,999 / night", desc: "Separate seating and elevated luxury." },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Rooms & Rates</p>
            <h2 className="font-display text-3xl md:text-4xl">Elegant Rooms, Transparent Prices</h2>
          </div>
          <Button asChild variant="gold" className="hidden md:inline-flex">
            <a href="#contact">Request Availability</a>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((r) => (
            <Card key={r.id} className="group overflow-hidden border-accent/30 hover:shadow-elegant transition-shadow">
              <div className="relative">
                <img src={r.img} alt={`${r.title} room at Kingsukh Guest House`} className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                <span className="absolute left-3 top-3 rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold text-accent-foreground shadow-elegant">{r.price}</span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{r.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
                <div className="mt-4">
                  <Button variant="hero" size="sm" asChild>
                    <a href="#contact">Book this room</a>
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
