import g1 from "@/assets/kingsukh/gallery/amenities.jpg";
import g2 from "@/assets/kingsukh/gallery/garden.jpg";
import g3 from "@/assets/kingsukh/gallery/lounge.jpg";
import g4 from "@/assets/kingsukh/gallery/exterior-night.jpg";
import g5 from "@/assets/kingsukh/gallery/breakfast.jpg";

const images = [
  { src: g2, alt: "Serene garden path with greenery" },
  { src: g3, alt: "Elegant lounge with warm lighting" },
  { src: g1, alt: "Premium amenities close-up" },
  { src: g4, alt: "Guest house exterior at night" },
  { src: g5, alt: "Elegant breakfast spread" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20">
      <div className="container">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Gallery</p>
        <h2 className="font-display text-3xl md:text-4xl">A Glimpse Into Our World</h2>
        <div className="mt-8 columns-1 gap-4 sm:columns-2 md:columns-3">
          {images.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} className="mb-4 w-full break-inside-avoid rounded-lg shadow-elegant" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
