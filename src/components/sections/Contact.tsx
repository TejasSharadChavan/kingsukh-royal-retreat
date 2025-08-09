import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";


const Contact = () => {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    toast({ title: "Request sent!", description: "We’ll get back to you shortly." });
    (e.currentTarget as HTMLFormElement).reset();
  };


  return (
    <section id="contact" className="py-20">
      <div className="container grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Contact & Location</p>
          <h2 className="font-display text-3xl md:text-4xl">We’re Here to Help</h2>
          <p className="text-muted-foreground">
            Send us a message for bookings and inquiries. Find us easily on the map.
          </p>
          <div className="relative w-full overflow-hidden rounded-xl border shadow-elegant">
            <iframe
              title="Kingsukh Guest House on Google Maps"
              src="https://www.google.com/maps?q=Kingsukh%20Guest%20House%2C%20Purulia&output=embed"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-elegant">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm">Name</label>
              <Input name="name" placeholder="Your name" required />
            </div>
            <div>
              <label className="mb-1 block text-sm">Email</label>
              <Input type="email" name="email" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="mb-1 block text-sm">Message</label>
              <Textarea name="message" placeholder="Tell us your dates and preferences" required />
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button type="submit" variant="hero">Send Message</Button>
              <Button asChild variant="gold">
                <a href="https://api.whatsapp.com/send?phone=919007062180" rel="noopener noreferrer" target="_blank">WhatsApp Booking</a>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
