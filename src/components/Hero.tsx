import Particles from './Particles';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Background Image with Ken Burns */}
      <div className="hero-bg">
        <img
          src="/alpha_v0.1.6/yeni_dunya_olusumu_2.png"
          alt="Project M World"
          loading="eager"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="hero-overlay" />

      {/* Particles */}
      <Particles />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Alpha v0.1.7-hotfix1 — Şimdi Yayında
        </div>

        <h1 className="hero-title">
          <span className="title-line-1">PROJECT</span>
          <span className="title-line-2">M</span>
        </h1>

        <p className="hero-description">
          Yeni nesil voxel tabanlı dünya üretimi. Gelişmiş envanter sistemi,
          dinamik crafting, çakmak taşı kılıcı ve sınırsız rastgele dünyalarla
          kendi maceranızı yaratın.
        </p>

        <div className="hero-actions">
          <a href="#download" className="btn btn-primary">
            <span>⬇ Hemen İndir</span>
          </a>
          <a href="#features" className="btn btn-secondary">
            Özellikleri Keşfet
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">∞</div>
            <div className="hero-stat-label">Benzersiz Dünya</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">6+</div>
            <div className="hero-stat-label">Biyom Tipi</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">v0.1.7-hf1</div>
            <div className="hero-stat-label">Güncel Sürüm</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Keşfet</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
