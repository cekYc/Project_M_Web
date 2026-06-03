import { useEffect, useRef } from 'react';

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: 'Voxel Tabanlı Üretim',
      description:
        'Kademeli dünya üretimi ile tepeler, mağaralar, çöller, ormanlar ve karlı biyomların doğal bir şekilde oluşumunu keşfedin.',
      icon: '🌍',
    },
    {
      title: 'Dinamik Işıklandırma',
      description:
        'Güneş ışığı tabanlı voxel ışık yayılım sistemi ile atmosferik ve gerçekçi bir aydınlatma deneyimi.',
      icon: '☀️',
    },
    {
      title: 'Isı ve Fizik Motoru',
      description:
        'Bloklar arası ısı transferini hesaplayan ısı sistemi ve desteksiz yapıların çökmesini sağlayan yapısal bütünlük simülasyonu.',
      icon: '🔥',
    },
    {
      title: 'Gelişmiş Mekanikler',
      description:
        'Sonsuz seed desteği, akıllı doğma sistemi, AABB tabanlı kusursuz çarpışma tespiti ve envanter yönetimi.',
      icon: '⚙️',
    },
  ];

  return (
    <section className="section" id="features" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Temel Özellikler</div>
          <h2 className="section-title">
            Oyunu Eşsiz Kılan <span className="highlight">Özellikler</span>
          </h2>
          <p className="section-subtitle">
            Project M, yalnızca blok yerleştirip kırmaktan ibaret değil.
            Gelişmiş simülasyon mekanikleriyle yaşayan bir dünya sunar.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`feature-card reveal reveal-delay-${idx + 1}`}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
