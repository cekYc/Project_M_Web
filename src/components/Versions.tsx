import { useEffect, useRef } from 'react';

const Versions = () => {
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
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section versions-section" id="versions" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Changelog</div>
          <h2 className="section-title">
            Sürümler ve <span className="highlight">Güncellemeler</span>
          </h2>
          <p className="section-subtitle">
            Oyun motorunun gelişimini takip edin.
            Tüm eski ve yeni sürümleri indirip test edebilirsiniz.
          </p>
        </div>

        {/* ========= v0.1.6 ========= */}
        <div className="version-block reveal" id="download">
          <div className="version-header">
            <div className="version-info">
              <span className="version-number">v0.1.6</span>
              <span className="version-tag latest">En Yeni</span>
            </div>
            <a
              href="/alpha_v0.1.6/project_m_alpha_v0.1.6.exe"
              download
              className="btn btn-primary btn-sm"
            >
              <span>⬇ İndir (v0.1.6)</span>
            </a>
          </div>

          <div className="version-content">
            {/* Changelog */}
            <div className="version-changelog">
              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">✨</span> Yeni Özellikler
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>Yenilenmiş Dünya Üretimi:</strong> Tepeler,
                    mağaralar, çöller, ormanlar ve karlı biyomlar çok daha
                    doğal oluşuyor.
                  </li>
                  <li>
                    <strong>Seed (Tohum) Mekaniği:</strong> Benzersiz seed ile
                    yaratılan dünyalar <code>dünyam.meta</code> dosyasına
                    kaydedilir.
                  </li>
                  <li>
                    <strong>Akıllı Doğma Sistemi:</strong> Oyuncu gökyüzünden
                    güvenli bir şekilde yüzeye indirilir.
                  </li>
                  <li>
                    <strong>Yükleme Ekranı:</strong> Dünya yüklenirken 200
                    Mesh'lik yükleme eşiği bekletilir.
                  </li>
                </ul>
              </div>

              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">🐛</span> Hata Düzeltmeleri
                </h4>
                <ul className="changelog-list">
                  <li>
                    Karakterin taşların içine doğması (Hitbox Sıkışması)
                    düzeltildi.
                  </li>
                  <li>
                    Eski dünyanın titremesi ve noclip ayarının kalıcı olması
                    sorunu çözüldü.
                  </li>
                </ul>
              </div>

              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">⚡</span> İyileştirmeler
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>GPU Bellek Temizliği:</strong> Menüye dönüldüğünde
                    devasa VRAM başarıyla temizleniyor.
                  </li>
                </ul>
              </div>
            </div>

            {/* Before / After Comparison */}
            <div className="version-images">
              <div className="comparison-block">
                <div className="comparison-title old">
                  ✕ Eski Dünya Oluşumu (v0.1.5)
                </div>
                <div className="comparison-images">
                  <div className="comparison-img-wrapper old-border">
                    <img
                      src="/alpha_v0.1.6/eski_dunya_olusumu_1.png"
                      alt="Eski Dünya 1"
                      loading="lazy"
                    />
                  </div>
                  <div className="comparison-img-wrapper old-border">
                    <img
                      src="/alpha_v0.1.6/eski_dunya_olusumu_2.png"
                      alt="Eski Dünya 2"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="comparison-block">
                <div className="comparison-title new">
                  ✓ Yeni Dünya Oluşumu (v0.1.6)
                </div>
                <div className="comparison-images">
                  <div className="comparison-img-wrapper new-border">
                    <img
                      src="/alpha_v0.1.6/yeni_dunya_olusumu_1.png"
                      alt="Yeni Dünya 1"
                      loading="lazy"
                    />
                  </div>
                  <div className="comparison-img-wrapper new-border">
                    <img
                      src="/alpha_v0.1.6/yeni_dunya_olusumu_2.png"
                      alt="Yeni Dünya 2"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" style={{ margin: '4rem auto' }} />

        {/* ========= v0.1.5 ========= */}
        <div className="version-block reveal">
          <div className="version-header">
            <div className="version-info">
              <span className="version-number">v0.1.5</span>
              <span className="version-tag alpha">Alpha</span>
            </div>
            <a
              href="/alpha_v0.1.5/project_m_alpha_v0.1.5.exe"
              download
              className="btn btn-secondary btn-sm"
            >
              İndir (v0.1.5)
            </a>
          </div>

          <div className="version-content">
            {/* Changelog */}
            <div className="version-changelog">
              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">🚀</span> İlk Kayıtlı Sürüm
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>Voxel Tabanlı Dünya Üretimi:</strong> Temel blok
                    tipleri (Toprak, Taş, Çim vb.) eklendi.
                  </li>
                  <li>
                    <strong>Ana Menü ve Seçim Ekranı:</strong> Dünyaları
                    listeleme, silme ve yenisini oluşturma özelliği.
                  </li>
                  <li>
                    <strong>Temel Fizik:</strong> AABB tabanlı çarpışma,
                    yerçekimi ve zıplama mekanikleri.
                  </li>
                  <li>
                    <strong>Işıklandırma Motoru:</strong> Güneş ışığı tabanlı
                    voxel ışık yayılım sistemi.
                  </li>
                  <li>
                    <strong>Etkileşim ve Sistemler:</strong> Blok
                    kırma/yerleştirme, Isı Sistemi ve Yapısal Bütünlük
                    simülasyonu.
                  </li>
                </ul>
              </div>
            </div>

            {/* Gallery */}
            <div className="version-images">
              <div className="comparison-block">
                <div className="comparison-title" style={{ color: 'var(--text-secondary)' }}>
                  📸 Ekran Görüntüleri
                </div>
                <div className="gallery-grid">
                  <div className="gallery-item">
                    <img
                      src="/alpha_v0.1.5/gorsel_1.png"
                      alt="v0.1.5 - Menü"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/alpha_v0.1.5/gorsel_2.png"
                      alt="v0.1.5 - Dünya Seçimi"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/alpha_v0.1.5/gorsel_3.png"
                      alt="v0.1.5 - Gece"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/alpha_v0.1.5/gorsel_4.png"
                      alt="v0.1.5 - Keşif"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Versions;
