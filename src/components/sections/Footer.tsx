const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col items-center justify-between gap-3 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Kingsukh Guest House. All rights reserved.</p>
        <a href="https://www.kingsukhguesthouse.com/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Official Website</a>
      </div>
    </footer>
  );
};

export default Footer;
