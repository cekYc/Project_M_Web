import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          PROJECT <span className="logo-accent">M</span>
        </a>

        <ul className="navbar-links">
          <li><a href="#features">Özellikler</a></li>
          <li><a href="#showcase">Galeri</a></li>
          <li><a href="#recipes">Tarif Kitabı</a></li>
          <li><a href="#versions">Sürümler</a></li>
          <li>
            <a href="#download" className="navbar-cta">
              İndir
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
