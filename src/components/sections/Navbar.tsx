import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#hero" className={cn("font-display text-xl tracking-wide story-link")}>Kingsukh Guest House</a>
        <div className="hidden gap-6 md:flex">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#rooms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Rooms</a>
          <a href="#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gallery</a>
          <a href="#attractions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Attractions</a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild variant="hero" size="sm">
            <a href="#contact" aria-label="Book your stay">Book Now</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
