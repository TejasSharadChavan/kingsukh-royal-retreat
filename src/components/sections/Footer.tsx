const Footer = () => {
  return (
    <footer className="border-t py-12 bg-gray-900 text-white">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - About */}
        <div>
          <h3 className="text-xl font-bold mb-4">Kingsukh Guest House</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Browse Destinations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Special Offers & Packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Room Types & Amenities
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Customer Reviews & Ratings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Travel Tips & Guides
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Concierge Assistance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Flexible Booking Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Airport Transfers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Wellness & Recreation
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-300">
            Address:{" "}
            <a
              href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
            </a>
          </p>
          <p className="text-sm text-gray-300 mt-2">
            Email:{" "}
            <a
              href="mailto:kkghosh0099@gmail.com"
              className="hover:text-yellow-400"
            >
              kkghosh0099@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-300">
            Phone:{" "}
            <a href="tel:+919007062180" className="hover:text-yellow-400">
              +91 9007062180
            </a>
          </p>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <img
                src="/facebook.png"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src="/instagram.png"
                alt="Instagram"
                className="h-6 w-6"
              />
            </a>
            <a href="#" aria-label="YouTube">
              <img src="/youtube.png" alt="YouTube" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="/twitter.png" alt="Twitter" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mt-10 border-t border-gray-700 pt-6 flex flex-col items-center justify-between gap-3 md:flex-row">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Kingsukh Guest House. All rights
          reserved.
        </p>
        <a
          href="https://www.kingsukhguesthouse.com/"
          className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
        >
          Official Website
        </a>
      </div>
    </footer>
  );
};

export default Footer;
