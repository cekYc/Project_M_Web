import { useEffect, useRef, useState } from 'react';

const Showcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxSrc(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const screenshots = [
    { src: '/alpha_v0.1.7/gorsel1.png', label: 'Envanter Sistemi — v0.1.7' },
    { src: '/alpha_v0.1.7/gorsel2.png', label: 'Crafting & Sürükleme — v0.1.7' },
    { src: '/alpha_v0.1.7/gorsel3.png', label: 'Çakmak Taşı Kılıcı — v0.1.7' },
    { src: '/alpha_v0.1.7/gorsel4.png', label: 'Oyun İçi HUD — v0.1.7' },
    { src: '/alpha_v0.1.6/yeni_dunya_olusumu_1.png', label: 'Sahil & Okyanus — v0.1.6' },
    { src: '/alpha_v0.1.6/yeni_dunya_olusumu_2.png', label: 'Orman & Tepeler — v0.1.6' },
    { src: '/alpha_v0.1.5/gorsel_1.png', label: 'Ana Menü — v0.1.5' },
    { src: '/alpha_v0.1.5/gorsel_2.png', label: 'Dünya Seçimi — v0.1.5' },
    { src: '/alpha_v0.1.5/gorsel_3.png', label: 'Yapısal Bütünlük — v0.1.5' },
    { src: '/alpha_v0.1.5/gorsel_4.png', label: 'Bir Blok Kırıldığında — v0.1.5' },
  ];

  return (
    <>
      <section className="section showcase-section" id="showcase" ref={sectionRef}>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Galeri</div>
            <h2 className="section-title">
              Oyundan <span className="highlight">Kareler</span>
            </h2>
            <p className="section-subtitle">
              Project M'in voxel dünyasından yakalanmış anlara göz atın.
              Her bir görsel, motordaki gerçek zamanlı render çıktısıdır.
            </p>
          </div>

          <div className="showcase-grid">
            {screenshots.map((shot, idx) => (
              <div
                key={idx}
                className={`showcase-item reveal reveal-delay-${Math.min(idx + 1, 4)}`}
                onClick={() => setLightboxSrc(shot.src)}
              >
                <img src={shot.src} alt={shot.label} loading="lazy" />
                <span className="showcase-label">{shot.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <div className="lightbox-overlay" onClick={() => setLightboxSrc(null)}>
          <img src={lightboxSrc} alt="Enlarged screenshot" />
        </div>
      )}
    </>
  );
};

export default Showcase;
