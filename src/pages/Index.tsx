import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Rooms from "@/components/sections/Rooms";
import Gallery from "@/components/sections/Gallery";
import Attractions from "@/components/sections/Attractions";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-background">
        <Hero />
        <About />
        <Rooms />
        <Gallery />
        <Attractions />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
