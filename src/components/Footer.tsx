const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          PROJECT <span className="footer-accent">M</span>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Project M. Tüm hakları saklıdır.
        </p>
        <ul className="footer-links">
          <li><a href="#hero">Ana Sayfa</a></li>
          <li><a href="#features">Özellikler</a></li>
          <li><a href="#versions">Sürümler</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
