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

        {/* ========= v0.1.9 ========= */}
        <div className="version-block reveal" id="download">
          <div className="version-header">
            <div className="version-info">
              <span className="version-number">v0.1.9</span>
              <span className="version-tag latest">En Yeni</span>
            </div>
            <a
              href="/alpha_v0.1.9/project_m_alpha_v0.1.9.exe"
              download
              className="btn btn-primary btn-sm"
            >
              <span>⬇ İndir (v0.1.9)</span>
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
                    <strong>Düşen Blok Animasyonu:</strong> Desteğini kaybeden bloklar (kum, çakıl,
                    havada kalan yapılar) artık aniden ışınlanmak yerine yerçekimiyle akıcı bir şekilde
                    düşüyor. Birden fazla blok çökerse hepsi grup halinde birlikte iniyor.
                  </li>
                  <li>
                    <strong>Yere Düşen Eşyalar (Item Entity):</strong> Hayatta Kalma modunda kırılan
                    bloklar artık doğrudan envantere gitmiyor; kameraya dönük küçük eşyalar olarak yere
                    düşüyor, hafifçe zıplıyor ve oyuncu yaklaşınca otomatik toplanıyor. Toplanmayan
                    eşyalar 5 dakika sonra kayboluyor.
                  </li>
                  <li>
                    <strong>Sandık Açma Animasyonu:</strong> Sandığa tıklandığında kapağı ses efektiyle
                    arkadan menteşeli olarak açılıyor. Açık sandık artık içi oyuk bir kutu olarak çiziliyor —
                    içine bakılabiliyor.
                  </li>
                  <li>
                    <strong>Yenilenmiş Dünya Oluşumu:</strong> Arazi sistemi baştan yazıldı. Geniş düz
                    ovalar, yer yer yükselen gerçek dağlar ve okyanuslar bir arada bulunuyor; çok-oktavlı
                    (FBM) gürültü ile çok daha doğal bir yüzey elde edildi.
                  </li>
                  <li>
                    <strong>Okyanus ve Denizler:</strong> Kıtasallık sistemiyle alçak bölgeler deniz
                    seviyesinin altına inerek büyük su kütleleri oluşturuyor; kıyılarda kumlu sahiller
                    bulunuyor. Dağlar yalnızca karada yükseliyor.
                  </li>
                  <li>
                    <strong>Yumuşak Biyom Geçişleri:</strong> Çöl, orman, bataklık ve karlı bölgeler
                    arasındaki sert sınırlar yumuşatıldı; biyomlar kademeli olarak birbirine karışıyor.
                  </li>
                  <li>
                    <strong>Yenilenmiş Bitki Görünümü:</strong> Çalı, mantar ve sazlık artık düzgün
                    çapraz (X şeklinde) billboard olarak ve her biri kendi boyutunda çiziliyor.
                  </li>
                  <li>
                    <strong>Lonsdaleit (Katman Kayası):</strong> Dünyanın en alt katmanına kırılması
                    imkansız blok eklendi — yaratıcılık modunda bile kırılamıyor ve dibe düşmeyi engelliyor.
                  </li>
                </ul>
              </div>

              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">⚡</span> İyileştirmeler
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>Merkezi Blok Tanım Tablosu:</strong> Tüm blok özellikleri (isim, doku,
                    sertlik, şeffaflık, render tipi) artık tek bir merkezi tabloda
                    (<code>blocks.rs</code>) toplanıyor — yeni blok eklemek çok daha hızlı ve hatasız.
                  </li>
                  <li>
                    <strong>Akıllı Doğma Sistemi (Safe Spawn):</strong> Oyuncu artık dar bir vadiye
                    veya dağ tepesine değil; su üstü ve mümkün olduğunca düz bir noktaya yerleştiriliyor.
                  </li>
                  <li>
                    <strong>Doku Düzeltmesi:</strong> Keskin Çakmak Taşı'na ayrı/özel bir doku verildi
                    (önceden başka bir item ile paylaşıyordu).
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
                      src="/alpha_v0.1.9/yeniden_dunya_olusumu_degisti.png"
                      alt="v0.1.9 - Yenilenmiş Dünya Oluşumu, Dağlar ve Okyanus"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/alpha_v0.1.9/sandik_acilma_animasyonu.png"
                      alt="v0.1.9 - Sandık Açma Animasyonu"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/alpha_v0.1.9/yapisal_butunluk_artik_animasyonlu.png"
                      alt="v0.1.9 - Animasyonlu Yapısal Bütünlük (Düşen Bloklar)"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/alpha_v0.1.9/yeni_mantar_ve_cali_gorunumu_ve_itemlerin_yere_dusmesi.png"
                      alt="v0.1.9 - Yeni Mantar/Çalı Görünümü ve Yere Düşen Eşyalar"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" style={{ margin: '4rem auto' }} />

        {/* ========= v0.1.8 ========= */}
        <div className="version-block reveal">
          <div className="version-header">
            <div className="version-info">
              <span className="version-number">v0.1.8</span>
              <span className="version-tag alpha">Alpha</span>
            </div>
            <a
              href="/alpha_v0.1.8/project_m_alpha_v0.1.8.exe"
              download
              className="btn btn-secondary btn-sm"
            >
              İndir (v0.1.8)
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
                    <strong>Sandık Sistemi (Chest Storage):</strong> 10 Kalas + 2 Çubuk ile
                    üretilebilen sandık bloğu eklendi. 3×8 (24 slotluk) depolama arayüzü ile
                    eşyalar kalıcı olarak saklanıyor. Sandık kırıldığında içindekiler envantere aktarılıyor.
                  </li>
                  <li>
                    <strong>Alet Mekanikleri (Tool System):</strong> Balta ile ahşap, kazma ile taş/maden,
                    kılıç ile yapraklar hızlı kırılıyor. Yanlış aletle sert bloklar 10× yavaş kırılıyor
                    ve eşya düşmüyor.
                  </li>
                  <li>
                    <strong>Taş → Kırık Taş Dönüşümü:</strong> Kazma ile taş kırıldığında artık
                    Kırık Taş olarak düşüyor — madencilik ilerleme sisteminin temeli.
                  </li>
                  <li>
                    <strong>Fırın Craft Tarifi:</strong> 12 Kil ile Fırın bloğu üretilebiliyor
                    (pişirme mekanikleri yakında).
                  </li>
                  <li>
                    <strong>Yarım Basamak (Half Slab):</strong> Yarım yükseklikte çarpışma kutusu,
                    zıplamadan üstüne çıkılabiliyor.
                  </li>
                  <li>
                    <strong>Dikey Kalas:</strong> Düzgün hizalama, yan yana doğru birleşme
                    ve saydamlık sorunu yok.
                  </li>
                </ul>
              </div>

              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">⚡</span> İyileştirmeler
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>Shader Güncellemesi:</strong> <code>ui.frag</code> shader'ına sandık UI
                    render sistemi ve <code>chest_inventory[24]</code> dizisi eklendi.
                  </li>
                  <li>
                    <strong>Kütükten Kalas Üretimi:</strong> Bir kütükten artık 2 kalas üretiliyor
                    (önceden 1'di).
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
                      src="/alpha_v0.1.8/sandik_arayuzu.png"
                      alt="v0.1.8 - Sandık Arayüzü"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/alpha_v0.1.8/sandik_ve_firin.png"
                      alt="v0.1.8 - Sandık ve Fırın"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/alpha_v0.1.8/kalas_tanitimlari.png"
                      alt="v0.1.8 - Kalas ve Yarım Basamaklar"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/alpha_v0.1.8/yeni_kazmanin_kazabildikleri.png"
                      alt="v0.1.8 - Kazma ile Madencilik"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" style={{ margin: '4rem auto' }} />

        {/* ========= v0.1.7-hotfix1 ========= */}
        <div className="version-block reveal">
          <div className="version-header">
            <div className="version-info">
              <span className="version-number">v0.1.7-hotfix1</span>
              <span className="version-tag alpha">Alpha</span>
            </div>
            <a
              href="/alpha_v0.1.7/project_m_alpha_v0.1.7.exe"
              download
              className="btn btn-secondary btn-sm"
            >
              İndir (v0.1.7)
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
                    <strong>Gelişmiş Envanter Sistemi:</strong> 3 satır × 5 sütun (sağ ve sol)
                    toplam 30 slotluk Minecraft benzeri envanter, <code>ui.frag</code> üzerinden
                    sıfırdan tasarlandı.
                  </li>
                  <li>
                    <strong>Eşya Sayıları (Text Rendering):</strong> Envanterdeki tüm eşyaların
                    miktarları sağ alt köşede sayı olarak görünüyor. Sürüklenen eşyalarda sarı renk.
                  </li>
                  <li>
                    <strong>Dinamik Üretim (Crafting):</strong> Üretim matına konan
                    eşyalar anlık analiz ediliyor ve eşleşen tarif ikonu dinamik olarak beliriyor.
                  </li>
                  <li>
                    <strong>Stack Birleştirme & Bölme:</strong> Sol tıkla yığın birleştirme (Maks 128),
                    sağ tıkla tek eşya bırakma.
                  </li>
                  <li>
                    <strong>Yeni Materyaller:</strong> Çubuk, Bitki Halatı, Çakmak Taşı ve
                    Keskin Çakmak Taşı gibi yeni doğal malzemeler eklendi.
                  </li>
                  <li>
                    <strong>Çakmak Taşı Kılıcı:</strong> Yeni ara eşyalar ve craft zinciriyle
                    üretilebilen ilk silah tasarlandı.
                  </li>
                  <li>
                    <strong>Düz Eşya Render:</strong> Çubuk, Halat, Kılıç gibi eşyalar artık 2D
                    ikon olarak Texture Atlas ile görünüyor.
                  </li>
                </ul>
              </div>

              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">🐛</span> Hata Düzeltmeleri
                  <span className="version-tag alpha" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}>hotfix1</span>
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>Intel/AMD GPU'larda Oyun Açılmıyordu:</strong> Vulkan Descriptor Pool
                    oluşturulurken <code>COMBINED_IMAGE_SAMPLER</code> tipi için yeterli alan
                    ayrılmıyordu. NVIDIA sürücüleri tolerans gösterirken, Intel Arc ve bazı AMD
                    Radeon sürücüleri <code>ERROR_OUT_OF_POOL_MEMORY</code> hatası fırlatıyordu.
                    Havuz boyutu düzeltildi.
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
                      src="/alpha_v0.1.7/gorsel1.png"
                      alt="v0.1.7 - Envanter Sistemi"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/alpha_v0.1.7/gorsel2.png"
                      alt="v0.1.7 - Crafting & Sürükleme"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/alpha_v0.1.7/gorsel3.png"
                      alt="v0.1.7 - Çakmak Taşı Kılıcı"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/alpha_v0.1.7/gorsel4.png"
                      alt="v0.1.7 - Oyun İçi HUD"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" style={{ margin: '4rem auto' }} />

        {/* ========= v0.1.6 ========= */}
        <div className="version-block reveal">
          <div className="version-header">
            <div className="version-info">
              <span className="version-number">v0.1.6</span>
              <span className="version-tag alpha">Alpha</span>
            </div>
            <a
              href="/alpha_v0.1.6/project_m_alpha_v0.1.6.exe"
              download
              className="btn btn-secondary btn-sm"
            >
              İndir (v0.1.6)
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
