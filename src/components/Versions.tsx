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

        {/* ========= v0.2.2 ========= */}
        <div className="version-block reveal" id="download">
          <div className="version-header">
            <div className="version-info">
              <span className="version-number">v0.2.2</span>
              <span className="version-tag latest">En Yeni</span>
              <span className="version-tag alpha">Ustalık Çağı</span>
            </div>
            <a
              href="/alpha_v0.2.2/project_m_alpha_v0.2.2.exe"
              download
              className="btn btn-primary btn-sm"
            >
              <span>⬇ İndir (v0.2.2)</span>
            </a>
          </div>

          <div className="version-content">
            {/* Changelog */}
            <div className="version-changelog">
              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">🔥</span> Isı Tabanlı Fırın Sistemi
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>Süreç odaklı işleme:</strong> Yakıt önce tutuşmalı (soğuk fırında çok
                    yavaş; <strong>Çakmak</strong> ile anında), yanan yakıt iç sıcaklığı kendi
                    karakteristik sıcaklığına çeker, işlenen eşya <strong>ideal sıcaklık bandında</strong> kalmalı.
                    Bandın üstüne çıkarsan metalin yanar, kalitesi düşer.
                  </li>
                  <li>
                    <strong>Kalite → Dayanıklılık:</strong> İşlenmiş metalin fırın kalitesi (0-100),
                    ondan üretilen aletin başlangıç dayanıklılığına aktarılır. Özenli fırıncılık = uzun
                    ömürlü alet.
                  </li>
                  <li>
                    <strong>Yeni işlemeler:</strong> Ham Bakır → İşlenmiş Bakır, Ham Demir → İşlenmiş
                    Demir, <strong>Kum → Cam</strong>, Çamur → Kerpiç Tuğla,{' '}
                    <strong>Kırık Taş → Taş</strong>.
                  </li>
                </ul>
              </div>

              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">🚪</span> İki Bloklu Kapılar
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>Akıllı yerleştirme:</strong> Kapı alt+üst iki hücre olarak yerleşir;
                    menteşe tıklanan noktaya göre sağ/sol seçilir. Yan yana koyunca{' '}
                    <strong>çift kanat</strong> otomatik oluşur.
                  </li>
                  <li>
                    <strong>Menteşe animasyonu:</strong> Sağ tıkla panel menteşe etrafında dönerek
                    açılır/kapanır; açık kapının boşluğundan sorunsuz geçilir.
                  </li>
                </ul>
              </div>

              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">🛡️</span> Zırh, Dayanıklılık &amp; Onarım
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>Zırh sistemi:</strong> 4 zırh slotu (kask/zırh/tozluk/kolluk). Tam bakır
                    takım hasarın <strong>%30</strong>'unu, tam demir takım <strong>%50</strong>'sini
                    emer. Her darbe zırhı aşındırır.
                  </li>
                  <li>
                    <strong>Dayanıklılık:</strong> Aletler ve zırh kullanıldıkça aşınır; dayanıklılık
                    bitince eşya kırılıp yok olur.
                  </li>
                  <li>
                    <strong>Örs ile onarım:</strong> 6 İşlenmiş Demir + 2 Taş ile üretilen Örs'e
                    hasarlı eşya ile sağ tıkla → uygun malzeme karşılığında <strong>%40</strong> onarım.
                  </li>
                </ul>
              </div>

              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">✨</span> 36 Yeni Eşya &amp; Denge
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>Yeni eşyalar:</strong> Kömür, Ham Bakır/Demir Cevheri, Obsidyen Parçası,
                    Bakır/Demir/Obsidyen kılıç, balta, kazma (9 alet), 8 zırh parçası, Çakmak, Makas,
                    Bakır &amp; Demir Kova, Örs ve daha fazlası.
                  </li>
                  <li>
                    <strong>Kılıç artık sadece silah:</strong> Yaprak kırpma Makas'a devredildi. Savaş
                    hiyerarşisi: çakmak taşı 3 → bakır 5 → demir 7 → obsidyen 10 hasar.
                  </li>
                </ul>
              </div>

              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">🐛</span> Önemli Düzeltmeler
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>Işık/Isı bellek patlaması:</strong> Yayılım algoritmaları yüklü olmayan
                    chunk'lara ilerliyordu; artık yalnızca yüklü chunk'larda yayılıyor.
                  </li>
                  <li>
                    <strong>Eşyalar duvarda kaybolmuyor:</strong> Q ile atılan eşyalar artık katı
                    bloklara çarpınca önüne düşüyor.
                  </li>
                  <li>
                    <strong>Varlık birikmesi:</strong> Echo, Taint ve Snare'lere doğal ömür eklendi —
                    nüfus artık döngüde kalıyor.
                  </li>
                </ul>
              </div>
            </div>

            {/* Screenshots */}
            <div className="version-images">
              <div className="comparison-block">
                <div className="comparison-title" style={{ color: 'var(--text-secondary)' }}>
                  📸 Ekran Görüntüleri
                </div>
                <div className="gallery-grid">
                  <div className="gallery-item">
                    <img
                      src="/alpha_v0.2.2/firin_paneli_cam_pisirme.png"
                      alt="v0.2.2 - Fırın Paneli — Cam Pişirme"
                      loading="lazy"
                    />
                    <div className="gallery-cap">Fırın paneli — cam pişirme, sıcaklık göstergesi</div>
                  </div>
                  <div className="gallery-item">
                    <img
                      src="/alpha_v0.2.2/firin_paneli_demir_islemesi.png"
                      alt="v0.2.2 - Fırın Paneli — Demir İşlemesi"
                      loading="lazy"
                    />
                    <div className="gallery-cap">Fırın paneli — demir işlemesi, kalite bandı</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" style={{ margin: '4rem auto' }} />

        {/* ========= v0.2.1 ========= */}
        <div className="version-block reveal">
          <div className="version-header">
            <div className="version-info">
              <span className="version-number">v0.2.1</span>
              <span className="version-tag alpha">Co-op &amp; Bakım</span>
            </div>
            <a
              href="/alpha_v0.2.1/project_m_alpha_v0.2.1.exe"
              download
              className="btn btn-secondary btn-sm"
            >
              İndir (v0.2.1)
            </a>
          </div>

          <div className="version-content">
            {/* Changelog */}
            <div className="version-changelog">
              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">🌐</span> Co-op — Aynı Ağda Çok Oyunculu (LAN)
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>Sunucusuz doğrudan bağlantı:</strong> Dünyayı açan oyuncu host olur
                    (<strong>"Dünyayı Paylaş"</strong>), arkadaşınız ana menüden LAN adresiyle katılır —
                    ek sunucu programı yok.
                  </li>
                  <li>
                    <strong>Tam senkron oynanış:</strong> Oyuncular, bloklar, varlıklar ve PvP ağ
                    üzerinden eşitleniyor; oyun içi sohbet (<code>T</code>), isim etiketleri ve kalıcı
                    co-op envanteri dahil.
                  </li>
                </ul>
              </div>

              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">✨</span> Oynanış Yenilikleri
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>Blok Yönü Sistemi:</strong> Bloklar artık koyduğunuz yöne göre yerleşiyor —
                    kütükler, sandık/fırın, yarım basamak ve dikey kalas doğru yönde duruyor.
                  </li>
                  <li>
                    <strong>Daha Doğal Dünya:</strong> Ağaçlar ve bitkiler tek sıra yerine öbekler
                    halinde, çok daha doğal dağılıyor.
                  </li>
                  <li>
                    <strong>Gece/Gündüz Kaydı:</strong> Gün saati artık her dünyaya ayrı kaydediliyor;
                    her dünya kendi saatinden açılıyor.
                  </li>
                </ul>
              </div>

              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">🐛</span> Önemli Düzeltmeler
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>İnce gölge şeritleri:</strong> Chunk sınırlarındaki hatalı gölge şeritleri
                    giderildi (eski dünyalar yüklenince kendiliğinden düzeliyor).
                  </li>
                  <li>
                    <strong>Gerçekten eşsiz seed:</strong> Yeni dünyalar artık birbirine benzemiyor;
                    seed'in ufak bir değişimi bile bambaşka bir dünya üretiyor.
                  </li>
                  <li>
                    <strong>AMD/Intel açılış çökmesi:</strong> Bazı AMD/Intel kartlarında açılışta
                    yaşanan çökme düzeltildi.
                  </li>
                </ul>
              </div>
            </div>

            {/* Video Gallery */}
            <div className="version-images">
              <div className="comparison-block">
                <div className="comparison-title" style={{ color: 'var(--text-secondary)' }}>
                  🎬 Video Klipler
                </div>
                <div className="gallery-grid">
                  <div className="gallery-item">
                    <video
                      src="/alpha_v0.2.1/lan_uzerinde_coop_oynama.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="gallery-cap">Co-op — aynı ağda çok oyunculu (LAN)</div>
                  </div>
                  <div className="gallery-item">
                    <video
                      src="/alpha_v0.2.1/artik_bloklar_yone_duyarli.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="gallery-cap">Bloklar artık koyduğunuz yöne göre yerleşiyor</div>
                  </div>
                  <div className="gallery-item">
                    <video
                      src="/alpha_v0.2.1/daha_gercekci_agac_dagilimi.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="gallery-cap">Daha doğal ağaç &amp; bitki dağılımı</div>
                  </div>
                  <div className="gallery-item">
                    <video
                      src="/alpha_v0.2.1/yeni_dunya_yeni_saat_dilimi.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="gallery-cap">Her dünya kendi gün saatini (gece/gündüz) tutuyor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" style={{ margin: '4rem auto' }} />

        {/* ========= v0.2.0 ========= */}
        <div className="version-block reveal">
          <div className="version-header">
            <div className="version-info">
              <span className="version-number">v0.2.0</span>
              <span className="version-tag alpha">Varlıklar &amp; 3D</span>
            </div>
            <a
              href="/alpha_v0.2/project_m_alpha_v0.2.exe"
              download
              className="btn btn-secondary btn-sm"
            >
              İndir (v0.2.0)
            </a>
          </div>

          <div className="version-content">
            {/* Changelog */}
            <div className="version-changelog">
              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">👾</span> Varlık Sistemi (Entities)
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>Canlı Varlıklar:</strong> Dünya artık yaşıyor. Tüm canlılar tek bir
                    merkezî <code>Entity</code> yapısı ve durum makinesi üzerinden yönetiliyor;
                    oyuncuyla aynı AABB çarpışma + yerçekimi fiziğini kullanıyorlar.
                  </li>
                  <li>
                    <strong>The Echo (Yankı):</strong> Karada doğan çevik bir avcı. Oyuncuyu fark
                    edince yana doğru zig-zag sıçramalarla (dash) üstüne atılıyor, tek bloklu
                    engelleri aşıyor ve temas edince hasar verip geriye itiyor (knockback).
                  </li>
                  <li>
                    <strong>Abyssal Snare (Derinlik Pusu):</strong> Derin suların tabanında bekleyen
                    bir tuzak. Yaklaşınca oyuncuyu aşağı çekiyor; hasar vermiyor ama yüzeye çıkmanı
                    engelleyerek oksijenini tüketiyor.
                  </li>
                  <li>
                    <strong>The Cursed Taint (Lanet):</strong> Havada süzülen lanetli varlık.
                    Çevresindeki doğal blokları periyodik olarak "Lanetli Toprak"a dönüştürerek
                    dünyayı kirletiyor; öldürünce değerli ganimet düşürüyor.
                  </li>
                  <li>
                    <strong>Varlıkla Savaş &amp; Işıkla Arınma:</strong> Sol tık ile varlıklara
                    vurabiliyorsunuz (alete göre hasar). Yerleştirilen Işık Taşı çevresindeki Lanetli
                    Toprağı yavaşça temizleyip doğal hâline döndürüyor.
                  </li>
                </ul>
              </div>

              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">🧊</span> 3D Kutu-Modeller
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>Billboard'lardan 3D'ye:</strong> Yaratıklar ve eşyalar artık 2D düzlemler
                    değil; kafa/gövde/kol/bacak kutularından oluşan gerçek 3 boyutlu modeller olarak
                    çiziliyor.
                  </li>
                  <li>
                    <strong>Oyuncu Bedeni:</strong> Artık bir vücudunuz var — insansı bir model
                    yürürken kollarını ve bacaklarını sallıyor.
                  </li>
                  <li>
                    <strong>Kamera Modları:</strong> Varsayılan 1. şahıs + gövde (aşağı bakınca
                    bedeninizi görüyorsunuz, <code>F1</code> ile gizlenir) ve <code>F5</code> ile
                    duvarlara girmeden yaklaşan 3. şahıs kamerası.
                  </li>
                  <li>
                    <strong>Prosedürel Animasyon:</strong> Hıza bağlı yürüyüş salınımı, blok
                    kırma/saldırı sırasında kol vuruş (chop) animasyonu ve gerçekçi gövde-kafa yönelimi.
                  </li>
                </ul>
              </div>

              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">⚡</span> Sistem İyileştirmeleri
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>Model Render Hattı:</strong> Vulkan'a ayrı bir model pipeline'ı, skin
                    sampler descriptor binding'i ve yeni shader'lar (<code>model.vert/frag</code>)
                    eklendi; tüm modeller tek bir atlasta (<code>models.png</code>) toplanıyor.
                  </li>
                  <li>
                    <strong>Merkezî Model Tanımı:</strong> Tüm modeller (<code>models.rs</code>) kutu
                    listeleri olarak tanımlanıyor — yeni bir yaratık veya parça eklemek tek bir tablo işi.
                  </li>
                </ul>
              </div>
            </div>

            {/* Video Gallery */}
            <div className="version-images">
              <div className="comparison-block">
                <div className="comparison-title" style={{ color: 'var(--text-secondary)' }}>
                  🎬 Video Klipler
                </div>
                <div className="gallery-grid">
                  <div className="gallery-item">
                    <video
                      src="/alpha_v0.2/echo-lar.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="gallery-cap">The Echo — zig-zag avcı</div>
                  </div>
                  <div className="gallery-item">
                    <video
                      src="/alpha_v0.2/taint-ler.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="gallery-cap">The Cursed Taint — dünya bozucu</div>
                  </div>
                  <div className="gallery-item">
                    <video
                      src="/alpha_v0.2/first-person-beden.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="gallery-cap">1. Şahıs + Gövde (kendi bedenin)</div>
                  </div>
                  <div className="gallery-item">
                    <video
                      src="/alpha_v0.2/third-person-beden.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="gallery-cap">3. Şahıs Kamera (F5)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" style={{ margin: '4rem auto' }} />

        {/* ========= bugfix v0.1.10 ========= */}
        <div className="version-block reveal">
          <div className="version-header">
            <div className="version-info">
              <span className="version-number">v0.1.10</span>
              <span className="version-tag alpha">Bugfix</span>
            </div>
            <a
              href="/alpha_bugfix_v0.1.10/project_m_alpha_bugfix_v0.1.10.exe"
              download
              className="btn btn-secondary btn-sm"
            >
              İndir (v0.1.10)
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
                    <strong>Eşya Atma (Q Tuşu):</strong> Q tuşu ile seçili eşyadan bir adet,
                    baktığınız yöne fırlatabiliyorsunuz.
                  </li>
                  <li>
                    <strong>Ölümde Eşya Düşürme:</strong> Öldüğünüzde eşyalarınız öldüğünüz yere
                    düşüyor ve geri dönüp toplayabiliyorsunuz. Yere düşen eşyalar artık kayda dahil —
                    oyundan çıkıp girince yerinde duruyor.
                  </li>
                  <li>
                    <strong>Işık Taşı Tarifi:</strong> Çubuk + Halat + Kömür ile Işık Taşı
                    üretilebiliyor.
                  </li>
                  <li>
                    <strong>Yaratıcılık Modu İyileştirmeleri:</strong> Bloklar yerleştirildiğinde
                    envanterden tükenmiyor (sınırsız) ve dünyaya girince envanter geniş bir blok
                    paletiyle otomatik doluyor.
                  </li>
                </ul>
              </div>

              <div className="changelog-category">
                <h4 className="changelog-category-title">
                  <span className="cat-icon">🐛</span> Hata Düzeltmeleri
                </h4>
                <ul className="changelog-list">
                  <li>
                    <strong>Su Artık Kırılamıyor:</strong> Durgun ve akan su blokları kırılıp
                    envantere alınamıyor; suyun stack'lenip yerleştirilince kaybolması giderildi.
                  </li>
                  <li>
                    <strong>Su Nefes ve Çıkış Fiziği:</strong> Oksijen yalnızca kafa su altındayken
                    azalıyor; sudan çıkarken yukarı fırlama (4 blok zıplama) engellendi.
                  </li>
                  <li>
                    <strong>Sneak (Ctrl) Düzeltmesi:</strong> Yarım basamak ve kalas türevleri
                    üzerinde sneak yaparken artık yürünebiliyor; kenarda düşme engellemesi düzgün çalışıyor.
                  </li>
                  <li>
                    <strong>Desteksiz Bitkiler Kırılıyor:</strong> Altındaki blok kırıldığında çimen,
                    eğrelti, çalı, mantar, sazlık ve Çakıl Taşı artık havada kalmıyor; kırılıp düşüyor.
                  </li>
                  <li>
                    <strong>Bitki Yerleştirme Kuralları:</strong> Bitkiler artık havada veya üst üste
                    konulamıyor (altında katı blok zorunlu). Halat ve su yere konulamıyor.
                  </li>
                  <li>
                    <strong>Mağara Sistemi Yeniden Yazıldı:</strong> Mağaralar sabit yükseklikte
                    kesilmiyor; her derinlikte oluşuyor, deniz tabanı kalın kalıyor ve karada yüzeye
                    açılan girişler eklendi.
                  </li>
                  <li>
                    <strong>Envanter ve Sandık Kaydı:</strong> Ana envanter (30 slot) ve sandık
                    içerikleri artık doğru kaydediliyor; dünyalar arası geçişte envanterin karışması giderildi.
                  </li>
                  <li>
                    <strong>Su Altındaki Blokları Kırma:</strong> Hedefleme ışını sudan geçip arkadaki
                    katı bloğu seçtiği için deniz/akan su altındaki bloklar artık kırılabiliyor.
                  </li>
                  <li>
                    <strong>Üretim Matı Depolama Değil:</strong> Mata bırakılan eşyalar envanter
                    kapatılınca otomatik geri dönüyor (eşya kaybı önlendi).
                  </li>
                  <li>
                    <strong>Sneak ile Kenara Blok Koyma:</strong> Bloğun ucunda sneak yaparken
                    altınıza/yanınıza blok yerleştirebiliyorsunuz.
                  </li>
                  <li>
                    <strong>Ana Menü Başlık Taşması:</strong> Ana menüdeki sürüm başlığının ekrandan
                    taşması düzeltildi.
                  </li>
                </ul>
              </div>
            </div>

            {/* Video Gallery */}
            <div className="version-images">
              <div className="comparison-block">
                <div className="comparison-title" style={{ color: 'var(--text-secondary)' }}>
                  🎬 Video Klipler
                </div>
                <div className="gallery-grid">
                  <div className="gallery-item">
                    <video
                      src="/alpha_bugfix_v0.1.10/yeryuzune_ulasan_madenler_ve_yeni_isik_kaynagi.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="gallery-cap">Yüzeye ulaşan mağaralar &amp; Işık Taşı</div>
                  </div>
                  <div className="gallery-item">
                    <video
                      src="/alpha_bugfix_v0.1.10/bitkileri_destekleyen_bloklar_kirildiginda_kirilmasi.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="gallery-cap">Desteksiz bitkiler artık kırılıyor</div>
                  </div>
                  <div className="gallery-item">
                    <video
                      src="/alpha_bugfix_v0.1.10/sneak_modu_artik_sorunsuz.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="gallery-cap">Sneak modu artık sorunsuz</div>
                  </div>
                  <div className="gallery-item">
                    <video
                      src="/alpha_bugfix_v0.1.10/envanterden_item_atabilme.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="gallery-cap">Q ile envanterden eşya atma</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" style={{ margin: '4rem auto' }} />

        {/* ========= v0.1.9 ========= */}
        <div className="version-block reveal">
          <div className="version-header">
            <div className="version-info">
              <span className="version-number">v0.1.9</span>
              <span className="version-tag alpha">Alpha</span>
            </div>
            <a
              href="/alpha_v0.1.9/project_m_alpha_v0.1.9.exe"
              download
              className="btn btn-secondary btn-sm"
            >
              İndir (v0.1.9)
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
