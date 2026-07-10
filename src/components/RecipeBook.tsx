import { useEffect, useRef, useState } from 'react';

type TabId = 'sources' | 'crafting' | 'furnace' | 'combat' | 'repair' | 'doors';

interface Tab {
  id: TabId;
  label: string;
  icon: string;
}

const tabs: Tab[] = [
  { id: 'sources', label: 'Ham Maddeler', icon: '⛏️' },
  { id: 'crafting', label: 'Üretim Tarifleri', icon: '🔨' },
  { id: 'furnace', label: 'Kil Fırın', icon: '🔥' },
  { id: 'combat', label: 'Savaş & Aletler', icon: '⚔️' },
  { id: 'repair', label: 'Örs & Onarım', icon: '🛠️' },
  { id: 'doors', label: 'Kapı Kullanımı', icon: '🚪' },
];

const RecipeBook = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<TabId>('sources');

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
    <section className="section recipe-section" id="recipes" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Alpha v0.2.2</div>
          <h2 className="section-title">
            Tarif <span className="highlight">Kitabı</span>
          </h2>
          <p className="section-subtitle">
            Tüm üretim matı tarifleri, fırın işleme süreçleri, savaş hiyerarşisi
            ve onarım bilgileri tek bir yerde.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="recipe-tabs reveal">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`recipe-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              id={`recipe-tab-${tab.id}`}
            >
              <span className="recipe-tab-icon">{tab.icon}</span>
              <span className="recipe-tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="recipe-content reveal">
          {activeTab === 'sources' && <SourcesTab />}
          {activeTab === 'crafting' && <CraftingTab />}
          {activeTab === 'furnace' && <FurnaceTab />}
          {activeTab === 'combat' && <CombatTab />}
          {activeTab === 'repair' && <RepairTab />}
          {activeTab === 'doors' && <DoorsTab />}
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   TAB CONTENT COMPONENTS
   ========================================== */

const SourcesTab = () => (
  <div className="recipe-panel">
    <div className="recipe-panel-header">
      <h3 className="recipe-panel-title">
        <span className="rp-icon">⛏️</span> Ham Madde Kaynakları
      </h3>
      <p className="recipe-panel-desc">
        Dünyadan toplayabileceğiniz temel kaynaklar ve nasıl elde edildikleri.
      </p>
    </div>

    <div className="recipe-table-wrapper">
      <table className="recipe-table">
        <thead>
          <tr>
            <th>Kaynak</th>
            <th>Ne Düşürür</th>
            <th>Not</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span className="item-name">Çakıl</span> kır</td>
            <td>Çakıl + <span className="item-chance">%20</span> Çakmak Taşı</td>
            <td>El ile kırılır</td>
          </tr>
          <tr>
            <td><span className="item-name">Yaprak</span> kır</td>
            <td><span className="item-chance">%10</span> Elma, <span className="item-chance">%20</span> Çubuk</td>
            <td>Makas ile çok hızlı kırılır</td>
          </tr>
          <tr>
            <td><span className="item-name">Uzun Çimen</span> kır</td>
            <td><span className="item-chance">%50</span> Bitki Halatı</td>
            <td>—</td>
          </tr>
          <tr>
            <td><span className="item-name">Kömür Cevheri</span></td>
            <td><strong>Kömür</strong></td>
            <td>Herhangi bir kazma ister</td>
          </tr>
          <tr>
            <td><span className="item-name">Bakır Cevheri</span></td>
            <td><strong>Ham Bakır Cevheri</strong></td>
            <td>Herhangi bir kazma ister</td>
          </tr>
          <tr>
            <td><span className="item-name">Demir Cevheri</span></td>
            <td><strong>Ham Demir Cevheri</strong></td>
            <td>En az <span className="item-highlight">Bakır Kazma</span> ister</td>
          </tr>
          <tr>
            <td><span className="item-name">Obsidyen</span></td>
            <td><strong>Obsidyen Parçası</strong></td>
            <td>En az <span className="item-highlight">Demir Kazma</span> ister</td>
          </tr>
          <tr>
            <td><span className="item-name">Taş</span> kır</td>
            <td>Kırık Taş</td>
            <td>Kazma ister — fırında <strong>Taş</strong> olur</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="recipe-callout">
      <span className="callout-icon">💡</span>
      <div>
        <strong>İlerleme zinciri:</strong> Çakmak Taşı Kazma → bakır kazabilirsin →
        Bakır Kazma → demir kazabilirsin → Demir Kazma → obsidyen kazabilirsin.
      </div>
    </div>
  </div>
);

const CraftingTab = () => (
  <div className="recipe-panel">
    <div className="recipe-panel-header">
      <h3 className="recipe-panel-title">
        <span className="rp-icon">🔨</span> Üretim Matı Tarifleri
      </h3>
      <p className="recipe-panel-desc">
        Üretim matında tam eşleşme gerekir: matta tarifte olmayan fazladan bir eşya
        türü varsa tarif görünmez.
      </p>
    </div>

    {/* Temel / Ahşap */}
    <div className="recipe-group">
      <h4 className="recipe-group-title">
        <span className="rg-dot" style={{ background: 'var(--accent-warm)' }} />
        Temel / Ahşap
      </h4>
      <div className="recipe-table-wrapper">
        <table className="recipe-table">
          <thead>
            <tr><th>Ürün</th><th>Malzemeler</th></tr>
          </thead>
          <tbody>
            <tr><td>Kalas ×2</td><td>1 Kütük (meşe/çam/huş → kendi kalası)</td></tr>
            <tr><td>Yarım Basamak ×2</td><td>1 Kalas (kendi türü)</td></tr>
            <tr><td>Dikey Kalas ×2</td><td>1 Kalas (kendi türü)</td></tr>
            <tr><td><strong>Kapı</strong> (meşe/çam/huş)</td><td>6 Kalas (kendi türü)</td></tr>
            <tr><td>Sandık</td><td>10 Kalas (türler karışabilir) + 2 Çubuk</td></tr>
            <tr><td>Kil Fırın</td><td>12 Kil</td></tr>
            <tr><td>Işık Taşı</td><td>1 Çubuk + 1 Bitki Halatı + 1 Kömür</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Çakmak Taşı Seti */}
    <div className="recipe-group">
      <h4 className="recipe-group-title">
        <span className="rg-dot" style={{ background: 'var(--text-secondary)' }} />
        Çakmak Taşı Seti (başlangıç)
      </h4>
      <div className="recipe-table-wrapper">
        <table className="recipe-table">
          <thead>
            <tr><th>Ürün</th><th>Malzemeler</th></tr>
          </thead>
          <tbody>
            <tr><td>Keskin Çakmak Taşı</td><td>1 Çakmak Taşı + 1 Çakıl Taşı</td></tr>
            <tr><td>Çakmak Taşı Kılıcı</td><td>2 Keskin Çakmak Taşı + 1 Çubuk + 1 Halat</td></tr>
            <tr><td>Çakmak Taşı Balta</td><td>3 Keskin Çakmak Taşı + 1 Çubuk + 1 Halat</td></tr>
            <tr><td>Çakmak Taşı Kazma</td><td>3 Keskin Çakmak Taşı + 1 Çubuk + 1 Halat</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Metal Aletler */}
    <div className="recipe-group">
      <h4 className="recipe-group-title">
        <span className="rg-dot" style={{ background: 'var(--accent-tertiary)' }} />
        Metal Aletler
      </h4>
      <p className="recipe-group-note">
        Metal aletler <strong>fırında işlenmiş</strong> metal ister. İşlenmiş metalin
        <strong> kalitesi</strong> aletin başlangıç dayanıklılığını belirler!
      </p>
      <div className="recipe-table-wrapper">
        <table className="recipe-table">
          <thead>
            <tr><th>Ürün</th><th>Malzemeler</th></tr>
          </thead>
          <tbody>
            <tr><td>Bakır Kılıç</td><td>2 İşlenmiş Bakır + 1 Çubuk + 1 Halat</td></tr>
            <tr><td>Bakır Balta / Kazma</td><td>3 İşlenmiş Bakır + 1 Çubuk + 1 Halat</td></tr>
            <tr><td>Demir Kılıç</td><td>2 İşlenmiş Demir + 1 Çubuk + 1 Halat</td></tr>
            <tr><td>Demir Balta / Kazma</td><td>3 İşlenmiş Demir + 1 Çubuk + 1 Halat</td></tr>
            <tr><td>Keskinleştirilmiş Obsidyen</td><td>1 Obsidyen Parçası + 1 Çakmak Taşı</td></tr>
            <tr><td>Obsidyen Kılıç</td><td>2 Keskinleştirilmiş Obsidyen + 1 Çubuk + 1 Halat</td></tr>
            <tr><td>Obsidyen Balta / Kazma</td><td>3 Keskinleştirilmiş Obsidyen + 1 Çubuk + 1 Halat</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Zırh */}
    <div className="recipe-group">
      <h4 className="recipe-group-title">
        <span className="rg-dot" style={{ background: 'var(--accent-primary)' }} />
        Zırh
      </h4>
      <div className="recipe-table-wrapper">
        <table className="recipe-table">
          <thead>
            <tr><th>Parça</th><th>Bakır</th><th>Demir</th></tr>
          </thead>
          <tbody>
            <tr><td>Kask</td><td>5 İşlenmiş Bakır</td><td>5 İşlenmiş Demir</td></tr>
            <tr><td>Zırh (göğüs)</td><td>8 İşlenmiş Bakır</td><td>8 İşlenmiş Demir</td></tr>
            <tr><td>Tozluk</td><td>7 İşlenmiş Bakır</td><td>7 İşlenmiş Demir</td></tr>
            <tr><td>Kolluk</td><td>4 İşlenmiş Bakır</td><td>4 İşlenmiş Demir</td></tr>
          </tbody>
        </table>
      </div>
      <div className="recipe-callout">
        <span className="callout-icon">🛡️</span>
        <div>
          Tam bakır takım hasarın <strong>%30</strong>'unu, tam demir takım <strong>%50</strong>'sini
          emer (varlık saldırıları, PvP ve yüksekten düşme dahil). Her darbe zırhı aşındırır.
        </div>
      </div>
    </div>

    {/* Kullanım Eşyaları */}
    <div className="recipe-group">
      <h4 className="recipe-group-title">
        <span className="rg-dot" style={{ background: 'var(--accent-secondary)' }} />
        Kullanım Eşyaları
      </h4>
      <div className="recipe-table-wrapper">
        <table className="recipe-table">
          <thead>
            <tr><th>Ürün</th><th>Malzemeler</th><th>İşe Yarar</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Çakmak</strong></td>
              <td>1 Çakmak Taşı + 1 İşlenmiş Demir</td>
              <td>Fırını anında tutuşturur</td>
            </tr>
            <tr>
              <td>Makas</td>
              <td>2 İşlenmiş Demir</td>
              <td>Yaprak/bitkileri hızlı kırpar</td>
            </tr>
            <tr>
              <td>Bakır Kova</td>
              <td>5 İşlenmiş Bakır</td>
              <td>(gelecek sürümde sıvı taşıma)</td>
            </tr>
            <tr>
              <td>Demir Kova</td>
              <td>5 İşlenmiş Demir</td>
              <td>(gelecek sürümde sıvı taşıma)</td>
            </tr>
            <tr>
              <td><strong>Örs</strong></td>
              <td>6 İşlenmiş Demir + 2 Taş</td>
              <td>Alet/zırh onarımı</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const FurnaceTab = () => (
  <div className="recipe-panel">
    <div className="recipe-panel-header">
      <h3 className="recipe-panel-title">
        <span className="rp-icon">🔥</span> Kil Fırın — Isıyla İşleme
      </h3>
      <p className="recipe-panel-desc">
        Fırın "koy ve bekle" değildir; <strong>süreci sen yönetirsin.</strong>
      </p>
    </div>

    {/* Adımlar */}
    <div className="furnace-steps">
      <div className="furnace-step">
        <div className="step-number">1</div>
        <div className="step-content">
          <strong>Fırına sağ tıkla</strong> → panel açılır. Sol üst slot <em>girdi</em>,
          sol alt slot <em>yakıt</em>.
        </div>
      </div>
      <div className="furnace-step">
        <div className="step-number">2</div>
        <div className="step-content">
          Yakıt kendiliğinden yanmaz — <strong>tutuşması gerekir.</strong> Soğuk fırında çok
          yavaş; <strong>Çakmak</strong> ile fırına sağ tıklarsan anında tutuşur. Sıcak fırında
          sonraki yakıtlar kendiliğinden kolayca tutuşur.
        </div>
      </div>
      <div className="furnace-step">
        <div className="step-number">3</div>
        <div className="step-content">
          Yanan yakıt fırının iç sıcaklığını kendi karakteristik sıcaklığına çeker.
          Göstergedeki <strong>yeşil bant</strong>, girdinin ideal sıcaklık aralığıdır:
          bandın içinde pişer, bandın <strong>üstünde kalitesi yanar!</strong>
        </div>
      </div>
      <div className="furnace-step">
        <div className="step-number">4</div>
        <div className="step-content">
          Süre dolunca ürün sağdaki çıktı slotuna düşer. İşlenmiş metalin
          <strong> kalitesi (0-100)</strong>, ondan yapılan aletin dayanıklılığına aktarılır.
        </div>
      </div>
    </div>

    {/* Yakıtlar */}
    <div className="recipe-group">
      <h4 className="recipe-group-title">
        <span className="rg-dot" style={{ background: 'var(--accent-warm)' }} />
        Yakıtlar
      </h4>
      <div className="recipe-table-wrapper">
        <table className="recipe-table">
          <thead>
            <tr><th>Yakıt</th><th>Sıcaklık</th><th>Yanma Süresi</th></tr>
          </thead>
          <tbody>
            <tr><td>Çubuk</td><td className="temp-low">~400°</td><td>8 sn</td></tr>
            <tr><td>Kalas</td><td className="temp-mid">~700°</td><td>20 sn</td></tr>
            <tr><td><strong>Kütük</strong></td><td className="temp-high">~800°</td><td>35 sn</td></tr>
            <tr><td><strong>Kömür</strong></td><td className="temp-max">~1100°</td><td>60 sn</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* İşleme Tarifleri */}
    <div className="recipe-group">
      <h4 className="recipe-group-title">
        <span className="rg-dot" style={{ background: 'var(--accent-secondary)' }} />
        İşleme Tarifleri
      </h4>
      <div className="recipe-table-wrapper">
        <table className="recipe-table">
          <thead>
            <tr><th>Girdi</th><th>Çıktı</th><th>İdeal Bant</th><th>Süre</th><th>Önerilen Yakıt</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Kum</td><td><strong>Cam</strong></td>
              <td className="temp-band">600–900°</td><td>12 sn</td><td>Kalas / Kütük</td>
            </tr>
            <tr>
              <td>Çamur</td><td>Kerpiç Tuğla</td>
              <td className="temp-band">500–800°</td><td>10 sn</td><td>Kalas</td>
            </tr>
            <tr>
              <td>Kırık Taş</td><td><strong>Taş</strong></td>
              <td className="temp-band">650–1000°</td><td>15 sn</td><td>Kütük</td>
            </tr>
            <tr>
              <td>Ham Bakır Cevheri</td><td>İşlenmiş Bakır</td>
              <td className="temp-band">750–950°</td><td>20 sn</td><td><strong>Kütük</strong></td>
            </tr>
            <tr>
              <td>Ham Demir Cevheri</td><td>İşlenmiş Demir</td>
              <td className="temp-band">1000–1200°</td><td>25 sn</td><td><strong>Kömür</strong> (şart)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="recipe-callout warning">
      <span className="callout-icon">⚠️</span>
      <div>
        <strong>Bakırı kömürle pişirme!</strong> Kömür 1100°'ye çıkar, bakırın bandını (950°)
        aşar — metalin yanar, kalitesi 5'e düşer. Bakır için kütük ateşi idealdir.
        Demir ise ancak kömürle pişecek kadar sıcaklık ister. <em>Doğru yakıt, ustalığın yarısıdır.</em>
      </div>
    </div>
  </div>
);

const CombatTab = () => (
  <div className="recipe-panel">
    <div className="recipe-panel-header">
      <h3 className="recipe-panel-title">
        <span className="rp-icon">⚔️</span> Savaş &amp; Alet Hiyerarşisi
      </h3>
      <p className="recipe-panel-desc">
        Her kademe daha güçlü alet ve silahlar sunar. Üst kademe kazmalar hem
        daha hızlı kazar hem daha fazla cevher türü açar.
      </p>
    </div>

    <div className="recipe-table-wrapper">
      <table className="recipe-table combat-table">
        <thead>
          <tr>
            <th>Kademe</th>
            <th>Kılıç Hasarı</th>
            <th>Balta/Kazma</th>
            <th>Dayanıklılık</th>
            <th>Kazabildiği</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span className="tier tier-0">Çıplak El</span></td>
            <td>0.75</td>
            <td>—</td>
            <td>—</td>
            <td>taş kazamaz</td>
          </tr>
          <tr>
            <td><span className="tier tier-1">Çakmak Taşı</span></td>
            <td>3</td>
            <td>2</td>
            <td>80</td>
            <td>taş, kömür, bakır</td>
          </tr>
          <tr>
            <td><span className="tier tier-2">Bakır</span></td>
            <td>5</td>
            <td>3</td>
            <td>180</td>
            <td>+ demir cevheri</td>
          </tr>
          <tr>
            <td><span className="tier tier-3">Demir</span></td>
            <td>7</td>
            <td>4.5</td>
            <td>360</td>
            <td>+ obsidyen</td>
          </tr>
          <tr>
            <td><span className="tier tier-4">Obsidyen</span></td>
            <td>10</td>
            <td>6</td>
            <td>720</td>
            <td>her şey</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="recipe-info-cards">
      <div className="recipe-info-card">
        <span className="info-card-icon">🗡️</span>
        <div>
          <strong>Kılıç Artık Sadece Silah</strong>
          <p>Yaprak ve bitki kırpmanın aracı <strong>Makas</strong>'tır. Kılıç yalnızca saldırı hasarı verir.</p>
        </div>
      </div>
      <div className="recipe-info-card">
        <span className="info-card-icon">💔</span>
        <div>
          <strong>Dayanıklılık Sistemi</strong>
          <p>Aletler kullandıkça aşınır (slotun altındaki kırmızı-yeşil çubuk).
            Biten alet <strong>kırılır ve yok olur</strong> — örse uğramayı unutma.</p>
        </div>
      </div>
    </div>
  </div>
);

const RepairTab = () => (
  <div className="recipe-panel">
    <div className="recipe-panel-header">
      <h3 className="recipe-panel-title">
        <span className="rp-icon">🛠️</span> Örs ile Onarım
      </h3>
      <p className="recipe-panel-desc">
        Hasarlı alet/zırh <strong>elindeyken (hotbar'da seçili)</strong> örse sağ tıkla.
        Envanterinden 1 malzeme tüketilir, eşya <strong>%40</strong> onarılır.
      </p>
    </div>

    <div className="recipe-table-wrapper">
      <table className="recipe-table">
        <thead>
          <tr><th>Eşya</th><th>Onarım Malzemesi</th></tr>
        </thead>
        <tbody>
          <tr><td>Çakmak taşı aletleri</td><td>Keskin Çakmak Taşı</td></tr>
          <tr><td>Bakır alet &amp; zırh</td><td>İşlenmiş Bakır</td></tr>
          <tr><td>Demir alet &amp; zırh, Çakmak, Makas</td><td>İşlenmiş Demir</td></tr>
          <tr><td>Obsidyen aletler</td><td>Keskinleştirilmiş Obsidyen</td></tr>
        </tbody>
      </table>
    </div>

    <div className="recipe-callout">
      <span className="callout-icon">🔧</span>
      <div>
        <strong>Örs tarifi:</strong> 6 İşlenmiş Demir + 2 Taş. Taş blok olarak yerleştirilemez,
        Kırık Taş'ı fırında pişirerek elde edersin.
      </div>
    </div>
  </div>
);

const DoorsTab = () => (
  <div className="recipe-panel">
    <div className="recipe-panel-header">
      <h3 className="recipe-panel-title">
        <span className="rp-icon">🚪</span> Kapı Kullanımı
      </h3>
      <p className="recipe-panel-desc">
        Meşe, çam ve huş ağacından üretilebilen iki bloklu kapılar.
      </p>
    </div>

    <div className="recipe-info-cards">
      <div className="recipe-info-card">
        <span className="info-card-icon">📐</span>
        <div>
          <strong>Yerleştirme</strong>
          <p>Kapı <strong>zemine</strong> yerleştirilir; üst üste iki boş hücre ister.
            Alt+üst birlikte oluşur, hangisini kırarsan kır ikisi birden yok olur ve tek kapı düşer.</p>
        </div>
      </div>
      <div className="recipe-info-card">
        <span className="info-card-icon">📌</span>
        <div>
          <strong>Menteşe Konumu</strong>
          <p>Kapalı panel, koyarken <strong>sana yakın kenara</strong> yaslanır; menteşe tıkladığın
            noktanın sağ/sol yarısına göre seçilir.</p>
        </div>
      </div>
      <div className="recipe-info-card">
        <span className="info-card-icon">🚪</span>
        <div>
          <strong>Çift Kanat</strong>
          <p>Yan yana iki kapı koyarsan menteşeler otomatik karşıt olur → <strong>çift kanat</strong>.</p>
        </div>
      </div>
      <div className="recipe-info-card">
        <span className="info-card-icon">🖱️</span>
        <div>
          <strong>Aç / Kapa</strong>
          <p>Sağ tık: menteşe animasyonuyla aç/kapa. Açık kapının boş kısmından rahatça
            geçersin; kapalı kapı ince panel gibi yer kaplar.</p>
        </div>
      </div>
    </div>
  </div>
);

export default RecipeBook;
