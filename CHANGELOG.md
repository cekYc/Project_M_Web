# Project M - Sürüm Notları (Changelog)

Bu dosya, oyun motoruna eklenen yeni özellikleri, düzeltilen hataları ve yapılan sistem iyileştirmelerini kayıt altında tutar.

---

## [v0.2.3] - 2026-07-12 — "Tarım, Hayvancılık & Keşif Çağı"

Oyunun iki büyük çağı tek sürümde: artık kendi yiyeceğini **üretiyor** (tarım + hayvancılık) ve hayatta kalma evresini geçince dünyayı **keşfe çıkıyorsun** (yeni biyomlar, prosedürel yapılar, ganimet). Tüm tarifler ve rehberler `TARIF_KITABI.md` içinde.

### Yeni Eklenen Özellikler (New Features)

#### Mevsimler & Tarım
* **Mevsim Döngüsü:** Dünyaya global mevsim durumu eklendi — her mevsim 7 gün sürer ve dünya kaydında saklanır. Büyüme hızını doğrudan etkiler: İlkbahar %130, Yaz %100, Sonbahar %60, **Kış %0 (büyüme tamamen durur)**.
* **Kürek & Çapa (4'er kademe):** Çakmak taşı → bakır → demir → obsidyen. Kürek toprak sınıfını hızlı kazar; **çapa** çimen/toprağı **Sürülmüş Toprak**'a çevirir.
* **Su Fiziği & Kovalar:** Bakır/Demir kova su kaynağını gerçekten taşır (al → dök); bakır kova 32, demir 128 dökümde eskir. Sürülmüş toprak, 4 blok içinde su varsa **ıslak** olur (üst dokusu koyulaşır) — ıslakta ekin tam hız, kuruda %35 büyür.
* **Mahsuller:** Buğday, Patates ve Domates — 4 büyüme evresi, oyun-içi zamana bağlı rastgele büyüme tick'i (mevsim × ıslaklık). Uzun çimen buğday tohumu düşürür; 3 buğday = **Ekmek**.
* **Meyve Ağacı:** Meşe yapraklarına sağ tık → kırmadan elma toplanır; toplanan yaprak kış dışında zamanla yeniden meyve verir.
* **Genişletilmiş Açlık:** Elma-özel yeme sistemi tüm yiyeceklere açıldı — her yiyecek farklı tokluk verir (ekmek +40, pişmiş biftek +50...). Çiğ etler fırında ideal sıcaklıkta pişer; **pişirme kalitesi besleyiciliği belirler** (kömürde et yakarsan az doyurur).

#### Hayvancılık
* **4 Yeni Hayvan:** Tavuk, Domuz, İnek, Koyun — prosedürel 3D kutu modeller (dört ayaklılar çapraz yürüyüş animasyonlu), pasif gezinme/otlama, vurulunca panik kaçışı.
* **Üreme (Breeding):** Türün istediği yemle (tohum/patates/buğday) sağ tık → üreme modu; yakın iki aşık hayvandan **yavru** doğar (yarı boy, ~3 dakikada büyür, yemle hızlanır).
* **Kaynaklar:** Ölünce çiğ et düşürürler (+inek deri, +koyun yün). **Makasla koyun kırkma**: yün düşer, koyun yaşar, yünü geri uzar. Yün blok olarak yerleştirilebilir.
* **Kalıcı Çiftlikler:** Çiftlik hayvanları uzaklıkla/zamanla silinmez, dünya kaydına yazılır; uzaktayken donar (boşluğa düşmez).

#### Keşif: Yeni Biyomlar
* **Volkan Biyomu:** Dik konik yükseltiler, bazalt kabuk ve yüzeyde **lav havuzları** — lav kırılamaz, kendi ışığını saçar ve üstünde durmak yakar.
* **Kızıl Orman:** Kızıl kütüklü/kızıl yapraklı uzun ağaçlarla tuhaf atmosferli orman (kızıl kalas üretilebilir).
* **Dev Mantar Ormanı:** Ağaç yerine sap + şapka bloklarından oluşan prosedürel dev mantarlar (kırmızı/kahverengi şapka).

#### Keşif: Prosedürel Yapılar & Ganimet
* **Yüzey Yapıları:** Terk edilmiş evler (yıkık duvarlı), mazgallı kuleler (tepesi ışık taşıyla parlar) ve obsidyen köşeli tapınaklar — araziye uyumlu yerleşir (dik yamaca kurulmaz), chunk sınırlarında dikişsiz üretilir.
* **Yeraltı Yapıları:** Ahşap destekli terk edilmiş maden tünelleri ve ışık taşlı odalardan oluşan **mağara şehirleri**.
* **Ganimet Sandıkları:** Yapıların içindeki sandıklar ilk açan oyuncuda bölgeye göre dolar: madenlerde cevher/kömür/obsidyen, tapınak ve evlerde erzak/tohum — nadiren **Dürbün** ve **Harita** çıkar.
* **Dürbün:** Sağ tık basılı tutunca görüş açısı daralır, uzak yumuşakça yakınlaşır (2 Cam + 1 İşlenmiş Bakır).
* **Harita:** Gezdiğin bölgeleri biyom renkleriyle kaydeder; elde tutunca 2D kuşbakışı keşif haritası açılır (kuzey yukarı, kırmızı nokta sensin). Keşif verisi dünya kaydında saklanır (4 Kalas + 1 Deri).

### Düzeltilen Hatalar (Bug Fixes)
* **Işık/Isı yayılımı** yüklü olmayan chunk'larda sonsuz büyüyüp belleği tüketebiliyordu (v0.2.2 döneminden kalan gizli hata) — yayılım yüklü chunk'larla sınırlandı.
* Ekinler ve tüm çapraz-çizim bitkiler oyuncu/varlık çarpışmasında doğru şekilde geçilebilir sayılıyor.

### Sistem İyileştirmeleri
* **Durum bitleri altyapısı:** Sürülmüş toprağın ıslaklığı, ekin evreleri, yaprak meyvesi ve ganimet sandığı bayrağı blok verisinin yön bitlerinde saklanıyor — ek bellek yok, co-op senkronuyla uyumlu.

---

## [v0.2.2] - 2026-07-10 — "Ustalık Çağı: Fırın, Zırh & Kapılar"

Şimdiye kadarki en büyük **içerik** güncellemesi: 36 yeni eşya, ısıyla gerçek metalürji yapan kullanılabilir fırın, savaş döngüsünü kapatan zırh + dayanıklılık + onarım sistemi ve menteşeli iki bloklu kapılar. Tüm tarifler için yeni **Tarif Kitabı**na (`TARIF_KITABI.md`) bakın.

### Yeni Eklenen Özellikler (New Features)

#### Isı Tabanlı Fırın Sistemi (Kil Fırın artık çalışıyor!)
* **Süreç Odaklı İşleme:** Basit "yakıt koy → piş" yerine ustalık isteyen bir süreç: yakıt önce **tutuşmalı** (soğuk fırında çok yavaş; **Çakmak** ile anında), yanan yakıt iç sıcaklığı kendi karakteristik sıcaklığına çeker, işlenen eşya **ideal sıcaklık bandında ideal süre** kalmalı. Bandın üstüne çıkarsan metalin **yanar, kalitesi düşer**.
* **Yakıt Karakterleri:** Çubuk (~400°, 8sn), Kalas (~700°, 20sn), Kütük (~800°, 35sn), Kömür (~1100°, 60sn). Bakır kütük ateşinde ideal pişer; demir ancak kömürle işlenir; bakırı kömürle pişirirsen kalite yanar — doğru yakıt seçimi öğrenilen bir mekanik.
* **Kalite → Dayanıklılık:** İşlenmiş metalin fırın kalitesi (0-100), ondan üretilen aletin/zırhın başlangıç dayanıklılığına aktarılır. Özenli fırıncılık = uzun ömürlü alet.
* **Yeni İşlemeler:** Ham Bakır → İşlenmiş Bakır, Ham Demir → İşlenmiş Demir, **Kum → Cam** (cam artık üretilebilir!), Çamur → Kerpiç Tuğla, **Kırık Taş → Taş** (kazılan taş fırında yeniden kaynaştırılır — örs tarifi için gereklidir).
* **Fırın Paneli:** Girdi/yakıt/çıktı slotları, tutuşma alevi göstergesi, ideal bandı yeşille işaretleyen dikey sıcaklık göstergesi ve pişme çubuğu. Fırın yanarken çevresine gerçek ısı yayar (ısı sistemi), içeriği dünya kaydında saklanır, kırılınca içindekiler dökülür. Sistem, ileride eklenecek Tuğla ve Demir Fırın'a hazır.

#### İki Bloklu Kapılar (Meşe / Çam / Huş)
* **Akıllı Yerleştirme:** Kapı alt+üst iki hücre olarak yerleşir; kapalı panel koyan oyuncuya yakın kenara yaslanır, **menteşe** tıklanan noktaya göre sağ/sol seçilir. Yan yana koyunca menteşeler otomatik karşıt olur (**çift kanat**).
* **Bütünlük:** Alt veya üst hangisi kırılırsa kırılsın **iki parça eş zamanlı yok olur**, tek kapı eşyası düşer.
* **Menteşe Animasyonu:** Sağ tıkla panel menteşe etrafında dönerek açılır/kapanır; açık kapının boşluğundan sorunsuz geçilir, kapalı kapı ince panel çarpışmasına sahiptir (kapı eşiğinde durulabilir). Co-op'ta yerleştirme ve aç/kapa senkronizedir.

#### Zırh, Dayanıklılık & Onarım
* **Zırh Sistemi:** Envantere 4 zırh slotu eklendi (kask/zırh/tozluk/kolluk — yalnızca doğru tür takılır). Varlık saldırıları, PvP ve **yüksekten düşme** hasarı giyilen zırha göre azalır: tam bakır takım %30, tam demir takım %50 (üst sınır %80). Echo, Snare ve Lanet'e karşı hazırlanmak için artık bir sebep var.
* **Dayanıklılık:** Aletler blok kırdıkça ve vurdukça, zırh darbe aldıkça aşınır; slotların altında kırmızı→yeşil dayanıklılık çubuğu görünür. Dayanıklılığı biten eşya kırılıp yok olur. Aşınan eşyalar yığılmaz; dayanıklılık atılan/düşen eşyada ve kayıtta korunur.
* **Örs ile Onarım:** 6 İşlenmiş Demir + 2 Taş ile üretilen Örs'e, hasarlı alet/zırh elindeyken sağ tıkla → uygun malzeme (işlenmiş bakır/demir, keskin çakmak taşı, keskinleştirilmiş obsidyen) karşılığında %40 onarım.

#### Yeni Eşyalar (36 yeni doku)
* **Ham maddeler:** Kömür, Ham Bakır Cevheri, Ham Demir Cevheri, Obsidyen Parçası — cevher blokları artık blok değil bunları düşürür.
* **Alet hiyerarşisi:** Bakır / Demir / Obsidyen kılıç, balta ve kazmalar (9 yeni alet) + Keskinleştirilmiş Obsidyen ara malzemesi.
* **Zırhlar:** Bakır ve Demir setler (kask, zırh, tozluk, kolluk — 8 parça).
* **Kullanım eşyaları:** Çakmak (fırın tutuşturucu), Makas (yaprak/bitki kırpma), Bakır & Demir Kova (sıvı taşıma altyapısı hazır).

### Denge Değişiklikleri (Balancing)
* **Kılıç Artık Sadece Silah:** Yaprakları hızlı kırma özelliği kılıçtan alındı (o iş Makas'ın) — kılıç yalnızca saldırı hasarı verir.
* **Hiyerarşik Savaş:** Çıplak el 0.75 hasara düşürüldü (yaratık öldürmek elle çok zor). Kılıç hasarı kademeli: çakmak taşı 3 → bakır 5 → demir 7 → obsidyen 10; dayanıklılık 80 → 180 → 360 → 720.
* **Kazma Kademeleri:** Demir cevheri en az Bakır Kazma, obsidyen en az Demir Kazma ister; üst kademe kazmalar daha hızlı kazar (3x → 7.5x).

### Düzeltilen Hatalar (Bug Fixes)
* **Işık/Isı Yayılımı Bellek Patlaması:** Işık ve ısı yayılım algoritmaları (BFS) yüklü olmayan chunk'lara doğru sınırsız yayılabiliyor, render mesafesi kenarında ışık kaynağı yakılınca oyun kilitlenip belleği tüketebiliyordu. Yayılım artık yalnızca yüklü chunk'larda ilerliyor (fırın testleri bu gizli hatayı yakaladı).
* **Atılan Eşyalar Duvar/Kapı İçinde Kaybolmuyor:** Q ile atılan eşyaların yatay çarpışması yoktu — duvarın ya da kapalı kapının içine uçup görünmez şekilde kayboluyordu. Eşyalar artık katı bloklara çarpınca önüne düşüyor (açık kapıdan geçmeye devam eder).
* **Varlık Birikmesi:** Öldürülmeyen Echo ve Taint'ler dünyada vakit geçtikçe birikip kalabalıklaşıyordu. Varlıklara doğal ömür eklendi (Taint 2.5 dk, Echo 4 dk, Snare 10 dk): ömrü dolan varlık, bir oyuncunun dibinde değilse sessizce doğaya karışıyor — nüfus artık birikmek yerine döngüde kalıyor.

### Sistem İyileştirmeleri
* **Eşya Verisi (data) Altyapısı:** Her eşya yığını artık ek veri taşıyor — aletlerde/zırhta kalan dayanıklılık, işlenmiş metallerde fırın kalitesi. Kayıt formatı (envanter/sandık/düşen eşya/co-op) geriye uyumlu genişletildi: eski dünyalar sorunsuz açılır.
* **Merkezî Eşya Tabloları:** Dayanıklılık, saldırı hasarı, zırh koruması, kazma kademesi, onarım malzemesi ve yerleştirilemezlik tek dosyada (`blocks.rs`) — yeni eşya eklemek tablo satırı işi.
* **Tarif Kitabı:** Tüm üretim/fırın/onarım tarifleri `TARIF_KITABI.md` dosyasında belgelendi.
* **Birim Testleri:** Fırın kalite simülasyonu (bakır-kömür yanması, demir-kömür tam kalite), zırh hasar emilimi, craft kalite aktarımı, aşınma/kırılma, kapı menteşe geometrisi ve silah hiyerarşisi için 11 yeni test (toplam 21).

---

## [v0.2.1] - 2026-07-08 — "Co-op (LAN) & Büyük Bakım"

İlk **çok oyunculu** sürüm: aynı ağdaki arkadaşınızla sunucusuz, sıfır kurulumla oynayın. Yanında, yayın öncesi eski sistemlere köklü bir bakım yapıldı — ışık/gölge hataları, seed mekaniği, blok yerleştirme yönü ve dünya oluşumunun doğallığı elden geçirildi.

### Yeni Eklenen Özellikler (New Features)

#### Co-op — Aynı Ağda Çok Oyunculu (LAN)
* **Sunucusuz Doğrudan Bağlantı (Host-Yetkili):** Ek bir sunucu programı yok; dünyayı açan oyuncu aynı zamanda sunucudur. Duraklatma menüsündeki **"Dünyayı Paylaş"** ile co-op açılır ve host'un LAN adresi ekranda gösterilir; arkadaşınız ana menüden **"Çok Oyuncu (Katıl)"** ile bu adresi yazarak bağlanır.
* **Dünya Aktarımı (RLE):** Katılan oyuncuya host'un dünyası RLE sıkıştırmasıyla kademeli gönderilir (tek-blok chunk: 16KB → 8 bayt); aktarım sırasında oyun donmaz. Dünya, host'un seed'iyle yerel olarak da üretildiği için yalnızca farklar taşınır.
* **Tam Senkronizasyon:** Oyuncu konumları ve animasyonları (yürüyüş, vuruş, çömelme), blok kırma/koyma (yerleştirme yönü dahil), varlıklar (AI host'ta çalışır), yere düşen ganimet, eşya verme ve PvP vuruşları ağ üzerinden senkronize edilir.
* **Sohbet ve İsimler:** Oyun içinde **T** ile sohbet açılır; ana menüden takma ad (nickname) belirlenir, oyuncuların üstünde isim etiketleri görünür. Aynı isimle katılanlara otomatik (1), (2)... eklenir.
* **Kalıcı Co-op Envanteri:** Katılan oyuncunun envanteri, host dünyasının seed'ine bağlı ayrı bir dosyada saklanır — çıkıp tekrar katılınca eşyalar geri gelir; her host dünyası ayrı envanter tutar.

#### Blok Yönü Sistemi (Block Orientation)
Bloklar artık koyduğunuz yöne göre yerleşiyor (yön, blok verisinin kullanılmayan üst 4 bitinde saklanır; eski kayıtlarla geriye uyumlu ve co-op'ta senkronize):
* **Kütükler ve Saman Balyası:** Tıklanan yüzün eksenine uzanır — yere koyunca dikey, duvara koyunca yatay; halka (kesit) dokusu doğru yüzlere geçer.
* **Sandık / Fırın / Kurutma Askısı:** Ön yüzü, koyan oyuncuya döner. Açık sandık modeli ve kapak animasyonu da bu yönle birlikte döner.
* **Yarım Basamak:** Bloğun üstüne koyunca alt yarım, tavana koyunca üst yarım; yan yüze koyarken tıkladığınız noktanın yüksekliğine göre alt/üst seçilir. Çarpışma kutusu da yarıma göre hesaplanır.
* **Dikey Kalas:** Artık hücrenin ortasında asılı durmuyor — duvara bakarak koyunca o bloğa yapışık yarım, yere koyunca size yakın yarım yerleşir.

### Düzeltilen Hatalar (Bug Fixes)
* **Yaprakların İçinde Doğma Düzeltildi:** Yeni dünyaya girişte oyuncu bazen bir ağacın kanopisinin içinde doğup hareket edemiyordu. İki neden vardı: yükleme sonrası "güvenli zemin" taraması, seçilen doğma noktasını yok sayıp oyuncuyu sabit (0,0) noktasına ışınlıyor ve zemini ararken yaprakları atlıyordu (ağaca denk gelince kanopinin içine gömüyordu). Tarama artık gerçek doğma sütununda yapılıyor ve yaprak da zemin sayılıyor — doğma noktasına ağaç denk gelirse oyuncu **ağacın tepesinde** başlıyor. Doğma noktası seçimi de çam kanopisinin ulaşabildiği ±4 blok yarıçapında ağaçlardan kaçınacak şekilde genişletildi; aynı koruma ölüm sonrası yeniden doğmada da geçerli.
* **Gece/Gündüz Döngüsü Dünyaya Kaydediliyor:** Gün saati artık her dünyanın kendi kaydında tutuluyor. Önceden güneş, dünyalar arası geçişte kaldığı yerden devam ediyordu; artık her dünya kendi saatinden açılıyor (yeni dünyalar öğlen başlar).
* **Chunk Boyu İnce Gölge Şeritleri:** İki kök neden düzeltildi: (1) Çakıl taşı, yarım basamak gibi "içinden görülen" bloklar ışık haritasında opak sayılıp bulundukları sütunun ışığını sıfırlıyordu; ışık geçirgenliği artık render şeffaflığıyla aynı merkezi tablodan okunuyor. (2) Mesh birleştirme (greedy meshing), şeridin ilk hücresinin ışığını chunk sonuna kadar tüm şeride uyguluyordu; birleştirme artık ışık değeri değişince kesiliyor. Eski dünyalardaki mevcut şeritler, dünya yüklenince kendiliğinden düzelir.
* **Seed Mekaniği Gerçekten Eşsiz:** Yeni dünyalar birbirine benziyordu çünkü ağaç/bitki/cevher yerleşim hash'lerinde seed deseni yalnızca kaydırıyordu ve seed düşük çözünürlüklü zaman damgasından üretiliyordu. Seed artık nanosaniye + avalanche karıştırıcıyla üretiliyor; tüm yerleşim hash'leri seed'i gerçekten karıştıran tek bir `feature_hash` fonksiyonuna taşındı — seed'in 1 birim değişmesi bile bambaşka bir dünya üretiyor (birim testle doğrulanıyor).
* **AMD/Intel Açılışta Çökme:** Swapchain present mode tutarsızlığı giderildi (v0.2 sonrası hotfix bu sürümle yayınlanıyor).
* **Yeniden Doğma (Respawn) Düzeltmesi:** Ölüm sonrası yeniden doğma akışındaki hata giderildi.

### Sistem İyileştirmeleri
* **Doğal Bitki Örtüsü Dağılımı:** Ağaçlar ve bitkiler artık tek sıra/çizgi halinde dizilmiyor. Ağaç yerleşimi jitter'lı 5×5 hücre ızgarasına taşındı (hücre başına en fazla bir aday → doğal aralık, yığılma yok); bitkiler düşük frekanslı bir "yama" gürültüsüyle öbekleniyor — çayır ve mantar kümeleri, araları görece boş.
* **Merkezî Işık Geçirgenlik Tablosu:** 6 ayrı dosyada elle kopyalanan şeffaf-blok listeleri tek fonksiyonda (`blocks.rs`) toplandı — yeni blok eklerken ışık davranışı artık otomatik doğru.
* **Modülerleştirme:** 7400 satırlık `app.rs`, `app/` altında alt modüllere (render, world, physics, save, coop, entities, vulkan) bölündü.
* **Birim Testleri:** Dünya üretimi determinizmi, seed duyarlılığı, hash kalitesi, ağaç ızgarası sınırları, doku yönü eşlemeleri, ışık geçirgenliği ve ağ el sıkışması için 10 birim test eklendi (`cargo test`).

---

## [v0.2.0] - 2026-06-23 — "Varlıklar & 3D Modeller"

Motorun en büyük güncellemesi: dünya artık yaşıyor. İlk **canlı varlıklar (Entities)** ve oyunun tüm görselini değiştiren **3 boyutlu kutu-modeller** geldi — yaratıklar, bir oyuncu bedeni ve yeni kamera modlarıyla.

### Yeni Eklenen Özellikler (New Features)

#### Varlık Sistemi (Entities)
* **Durum Makinesi Mimarisi:** Tüm canlılar tek bir merkezî `Entity` yapısı üzerinden yönetiliyor (`entities.rs`). Her varlık konum/hız, can ve bir durum makinesi (state machine) taşıyor; fizik, oyuncuyla aynı AABB çarpışma + yerçekimi mantığını kullanıyor. Varlıklar oyuncudan uzaklaşınca yok oluyor ve yakına yenileri doğuyor (performans için sayı sınırlı).
* **The Echo (Yankı) — Refleks Sınayıcı:** Karada doğan çevik bir avcı. Uzaktan gezinir, oyuncuyu fark edince düz gelmek yerine yana doğru **zig-zag sıçramalarla (dash)** üstüne atılır, tek bloklu engelleri tırmanarak aşar ve temas edince hasar verip oyuncuyu **geriye iter (knockback)**.
* **Abyssal Snare (Derinlik Pusu) — Su Altı Tehdidi:** Yalnızca **derin suların tabanında** doğan, hareketsiz bekleyen bir tuzak. Oyuncu suya girip yaklaşınca onu **aşağı çeker**; hasar vermez ama yüzeye çıkmanı engelleyerek **oksijenini tüketir** (boğulma riski).
* **The Cursed Taint (Lanet) — Dünya Bozucu:** Havada yavaşça süzülen lanetli bir varlık. Gezdiği yerlerin çevresindeki çim, toprak, kum, kar gibi doğal blokları periyodik olarak **"Lanetli Toprak"a dönüştürerek dünyayı kirletir** ve arkasında bir bozulma izi bırakır. Vurup öldürünce **değerli ganimet** düşürür.
* **Varlıkla Savaş:** Sol tık ile baktığınız yöndeki yakın bir varlığa vurabiliyorsunuz (alete göre değişen hasar: kılıç > balta/kazma > çıplak el). Echo ve Snare de öldürülebiliyor.
* **Işıkla Arınma (Cleansing):** **Işık Taşı** yerleştirdiğiniz noktanın çevresindeki Lanetli Toprak yavaşça temizlenip doğal hâline (çim/toprak) dönüyor. Taint'i avlayıp düşürdüğü Işık Taşı ile kirliliği geri alabiliyorsunuz.
* **Lanetli Toprak (Yeni Blok):** Cursed Taint'in kirlettiği karanlık blok eklendi.

#### 3D Kutu-Modeller (3D Models)
* **Billboard'lardan 3D'ye Geçiş:** Yaratıklar ve eşyalar artık kameraya dönük 2D düzlemler değil; kafa/gövde/kol/bacak gibi ayrı kutulardan oluşan **gerçek 3 boyutlu modeller** olarak çiziliyor. Her kutunun 6 yüzü ayrı doku bölgesine (yüz-başı UV) sahip.
* **Yaratık Modelleri & Animasyon:** Echo (gövde + kafa + 2 bacak), Snare (gövde + çene) ve Taint (süzülen lanet küpü) birer kutu-modele kavuştu. Yürüyen yaratıkların **bacakları hıza göre sallanıyor**, Taint yavaşça dönüyor, Snare çenesini oyuncuya çeviriyor.
* **Oyuncu Bedeni:** Artık bir vücudunuz var! İnsansı bir model (gövde, kafa, 2 kol, 2 bacak) yürürken kol ve bacaklarını sallıyor.
* **Kamera Modları:**
  * **1. Şahıs + Gövde (varsayılan):** Aşağı bakınca kendi gövdenizi, kollarınızı, bacaklarınızı ve ayaklarınızı görüyorsunuz. **F1** ile bedeni gizleyip sade 1. şahısa geçebiliyorsunuz.
  * **3. Şahıs:** **F5** ile kamera arkanıza geçip karakterinizi tepeden görüyorsunuz; kamera duvarlara girmeden otomatik yaklaşıyor.
* **Prosedürel Animasyon:** İskelet/kemik olmadan, hıza bağlı yürüyüş salınımı; **blok kırma / saldırı / blok koyma sırasında kol vuruş (chop) animasyonu**; ve gerçekçi bir **gövde-kafa yönelimi** — kafanızı çevirince gövde bir noktaya kadar yerinde kalıp omuzları gösteriyor, sonra dönüyor.

### Sistem İyileştirmeleri
* **Model Render Hattı:** Vulkan'a ayrı bir model pipeline'ı, model dokusu için yeni bir descriptor binding'i (skin sampler) ve standart UV ile örnekleyen yeni shader'lar (`model.vert/frag`) eklendi. Tüm modeller tek bir atlasta (`models.png`) toplanıyor.
* **Merkezî Model Tanımı:** Tüm modeller (`models.rs`) kutu listeleri olarak tanımlanıyor — her kutu offset/boyut/pivot/parça ve yüz-başı UV taşıyor. Yeni bir yaratık veya parça eklemek tek bir tablo işi.
* **Geri itme (Knockback) Altyapısı:** Oyuncu hareket girdisinin ezmediği, sönümlenen ayrı bir geri-itme hızı eklendi (varlık saldırıları için).

---

## [bugfix_v0.1.10] - 2026-06-13

Bu sürüm, v0.1.9 sonrası tespit edilen hataları düzeltir ve birkaç yeni mekanik ekler.

### Düzeltilen Hatalar (Bug Fixes)
* **Su Artık Kırılamıyor:** Durgun ve akan su blokları kırılıp envantere alınamıyor; suyun stack'lenip yerleştirilince kaybolması sorunu giderildi.
* **Su Nefes ve Çıkış Fiziği:** Oksijen artık yalnızca oyuncunun kafası su altındayken azalıyor (sığ suya girince nefes tükenmiyor). Sudan çıkarken yukarı fırlama (4 blok zıplama) engellendi.
* **Sneak (Ctrl) Düzeltmesi:** Yarım basamak, dikey kalas ve kalas türevleri üzerinde sneak yaparken artık yürünebiliyor (yanlış "katı değil" kontrolü düzeltildi); kenarda düşme engellemesi düzgün çalışıyor.
* **Desteksiz Bitkiler ve Dekorlar Kırılıyor:** Altındaki blok kırıldığında uzun çimen, eğrelti, çalı, mantar, sazlık ve Çakıl Taşı artık havada kalmıyor; kırılıp eşyalarını yere düşürüyor.
* **Bitki Yerleştirme Kuralları:** Bitkiler artık havada veya üst üste konulamıyor (altında katı blok zorunlu). Halat ve su blokları yere konulamıyor.
* **Mağara Sistemi Yeniden Yazıldı:** Mağaralar artık sabit bir yükseklikte kesilmiyor; yüzeyin altında her derinlikte (dağ ve tepelerin içi dahil) oluşuyor. Su altındaki "içi boş kraker" boşlukları giderildi (deniz tabanı kalın kalıyor) ve karada yüzeye açılan mağara girişleri eklendi.
* **Envanter ve Sandık Kaydı:** Ana envanter (30 slot) ve sandık içerikleri artık doğru kaydediliyor — oyundan tamamen çıkıp girince eşyalar siliniyordu, düzeltildi. Dünyalar arası geçişte envanterin karışması da giderildi (her dünya kendi envanterini yüklüyor).
* **Su Altındaki Blokları Kırma:** Deniz veya akan suyun altındaki bloklar artık kırılabiliyor — hedefleme ışını sudan geçip arkadaki katı bloğu seçiyor.
* **Üretim Matı Depolama Değil:** Üretim matına bırakılan eşyalar artık depolama olarak kullanılamıyor; envanteri kapatınca otomatik olarak envantere geri dönüyorlar (eşya kaybı da önlendi).
* **Sneak ile Kenara Blok Koyma:** Sneak modunda bir bloğun ucunda dururken artık altınıza/yanınıza blok yerleştirebiliyorsunuz (oyuncu çarpışma kontrolü sneak'te alt gövde için gevşetildi).
* **Ana Menü Başlık Taşması:** Ana menüdeki sürüm başlığının ekrandan taşması düzeltildi (ortalama hesabı ve boyut ayarlandı).

### Yeni Eklenen Özellikler (New Features)
* **Eşya Atma (Q Tuşu):** Q tuşu ile seçili eşyadan bir adet, baktığınız yöne fırlatabiliyorsunuz.
* **Ölümde Eşya Düşürme:** Öldüğünüzde eşyalarınız öldüğünüz yere düşüyor; geri dönüp toplayabiliyorsunuz. Yere düşen eşyalar uzaktayken (chunk'ı yüklü değilken) kaybolmuyor — yalnızca yakınınızdayken, 5 dakika alınmazsa yok oluyor. Düşen eşyalar artık kayda dahil (oyundan çıkıp girince yerinde duruyor).
* **Işık Taşı Tarifi:** Çubuk + Halat + Kömür ile Işık Taşı üretilebiliyor.
* **Yaratıcılık Modu İyileştirmeleri:** Yaratıcılık modunda bloklar yerleştirildiğinde envanterden tükenmiyor (sınırsız). Ayrıca yaratıcılık dünyasına girildiğinde envanter geniş bir blok paletiyle otomatik doluyor.

---

## [v0.1.9] - 2026-06-13

### Yeni Eklenen Özellikler (New Features)
* **Düşen Blok Animasyonu:** Desteğini kaybeden bloklar (kum, çakıl ve havada kalan yapılar) artık aniden aşağı ışınlanmak yerine yerçekimiyle akıcı bir şekilde düşüyor. Düşen blok her karede gerçek konumunda çiziliyor; birden fazla bloğun çöktüğü durumlarda hepsi grup halinde birlikte iniyor.
* **Yere Düşen Eşyalar (Item Entity):** Hayatta Kalma modunda blok kırıldığında eşyalar artık doğrudan envantere gitmiyor; yere düşen, kameraya dönük (billboard) küçük eşyalar olarak çıkıyor. Hafifçe zıplayıp yerçekimiyle düşüyor, yerde duruyor ve oyuncu yaklaşınca otomatik toplanıyor. Toplanmayan eşyalar 5 dakika sonra kayboluyor. (Yaratıcılık modunda eşyalar eskisi gibi doğrudan envantere gider.)
* **Sandık Açma Animasyonu:** Sandığa tıklandığında kapağı artık arkadan menteşeli olarak açılıyor (ses efektiyle birlikte). Açık sandık som bir küp değil; üstü açık, içi oyuk bir kutu olarak çiziliyor — içine bakılabiliyor. E/Esc ile kapatıldığında kapak kapanma animasyonu oynatılıyor.
* **Lonsdaleit (Katman Kayası):** Dünyanın en alt katmanına, kırılması imkansız "Lonsdaleit" bloğu eklendi. Yaratıcılık modunda bile kırılamıyor ve dünyanın dibinden düşmeyi engelliyor.
* **Yenilenmiş Dünya Oluşumu (World Gen Overhaul):** Arazi sistemi baştan yazıldı. Artık tek düze engebe yerine; geniş düz ovalar, yer yer yükselen gerçek dağlar ve okyanuslar bir arada bulunuyor. Ayrı bir "dağlılık" gürültüsü araziyi kontrol ediyor (çoğu yer düz, nadiren dramatik dağ). Çok-oktavlı (FBM) gürültü ile daha doğal, zengin yüzey elde edildi.
* **Okyanus ve Denizler:** Kıtasallık sistemiyle alçak bölgeler deniz seviyesinin altına inerek büyük su kütleleri (deniz/okyanus) oluşturuyor; kıyılarda kumlu sahiller bulunuyor. Dağlar yalnızca karada yükseliyor.
* **Yumuşak Biyom Geçişleri:** Çöl, orman, bataklık ve karlı bölgeler arasındaki sert sınırlar yumuşatıldı; biyomlar artık kademeli olarak birbirine karışıyor. Dağ zirvelerinde (ağaç sınırı üstünde) artık ağaç bitmiyor.
* **Yenilenmiş Bitki Görünümü:** Çalılar, mantarlar ve sazlık artık "küçültülmüş küp" yerine düzgün çapraz (X şeklinde) billboard olarak çiziliyor. Her bitki kendi boyutunda görünüyor (mantarlar kısa ve küçük, sazlık uzun ve ince vb.).

### Sistem İyileştirmeleri
* **Merkezi Blok Tanım Tablosu:** Tüm blok özellikleri (isim, her yüzün dokusu, sertlik, şeffaflık, render tipi) artık tek bir merkezi tabloda (`blocks.rs`) toplanıyor. Daha önce 5 ayrı dosyaya dağılmış olan bu bilgiler tek kaynaktan okunuyor — yeni blok veya doku eklemek artık çok daha hızlı ve hatasız.
* **Akıllı Doğma Sistemi (Safe Spawn):** Yeni bir dünyaya girildiğinde oyuncu artık dar bir vadiye veya dağ tepesine değil; orijin çevresinde taranan, su üstü ve mümkün olduğunca düz bir noktaya yerleştiriliyor. Aynı sistem ölüm sonrası yeniden doğmada da kullanılıyor.
* **Doku Düzeltmesi:** Keskin Çakmak Taşı'na ayrı/özel bir doku verildi (önceden başka bir item ile paylaşıyordu).

---

## [v0.1.8] - 2026-06-09

### Yeni Eklenen Özellikler (New Features)
* **Sandık Sistemi (Chest Storage):** 10 Kalas + 2 Çubuk ile üretilebilen sandık bloğu eklendi. Sandığa sağ tıklanarak 3x8 (24 slotluk) depolama arayüzü açılabiliyor. Eşyalar sandık içinde kalıcı olarak saklanıyor. Sandık kırıldığında içindeki tüm eşyalar oyuncunun envanterine aktarılıyor.
* **Alet Mekanikleri (Tool System):** Balta ile kütük, kalas ve ahşap türevleri daha hızlı kırılabiliyor. Kazma ile taş, kireç taşı, kömür ve bakır kazılabiliyor. Kılıç ile yapraklar hızlı kırılabiliyor. Yanlış aletle veya elle sert bloklar çok yavaş kırılıyor (10x yavaş) ve hiçbir eşya düşmüyor. Aletler blok olarak yerleştirilemez.
* **Taş → Kırık Taş Dönüşümü:** Kazma ile taş (ID: 2) kırıldığında artık Kırık Taş (ID: 21) olarak düşüyor. Bu, madencilik ilerleme sisteminin temelini oluşturuyor.
* **Fırın Craft Tarifi:** 12 Kil ile Fırın bloğu üretilebiliyor (ileride pişirme mekanikleri eklenecek).
* **Yarım Basamak (Half Slab):** Yarım basamaklar yarım yükseklikte çarpışma kutusuna sahip, zıplamadan üstüne çıkılabiliyor.
* **Dikey Kalas:** Dikey kalas bloğu düzgün hizalanıyor, yan yana konulduğunda doğru birleşiyor ve saydamlık sorunu bulunmuyor.

### Sistem İyileştirmeleri
* **Shader Güncellemesi:** `ui.frag` shader'ına sandık UI render sistemi eklendi. `UniformBufferObject` yapısına `chest_inventory[24]` dizisi eklenerek GPU tarafında sandık içeriği doğrudan çiziliyor.
* **Kütükten Kalas Üretimi:** Bir kütükten artık 2 kalas üretiliyor (daha önce 1'di).

---

## [v0.1.7-hotfix1] - 2026-06-09

### Düzeltilen Hatalar (Bug Fixes)
* **Intel/AMD GPU'larda Oyun Açılmıyordu (Descriptor Pool Hatası):** Vulkan Descriptor Pool oluşturulurken `COMBINED_IMAGE_SAMPLER` tipi için yeterli alan ayrılmıyordu. Her Descriptor Set'te 2 adet sampler (block texture + font texture) kullanılmasına rağmen havuzda sadece 1'er adet yer açılmıştı. NVIDIA sürücüleri bu duruma tolerans gösterirken, Intel Arc ve bazı AMD Radeon sürücüleri `ERROR_OUT_OF_POOL_MEMORY` hatası fırlatıyordu. Havuz boyutu `swapchain_images_count * 2` olarak düzeltildi.

---

## [v0.1.7] - 2026-06-09

### Yeni Eklenen Özellikler (New Features)
* **Gelişmiş Envanter Sistemi:** Minecraft benzeri, 3 satır ve 5 sütun (sağ ve sol) olmak üzere toplam 30 slotluk ana envanter tasarımı `ui.frag` üzerinden sıfırdan yazıldı.
* **Text Rendering ile Eşya Sayıları:** Artık envanterdeki tüm eşyaların miktarları, sağ alt köşede sayı olarak belirtiliyor. Sürüklenen eşyalar için sayı rengi sarı yapılarak etkileşim artırıldı.
* **The Forest Tarzı Dinamik Üretim (Crafting):** Artık oyun içi sabit bir craft butonu yerine, üretim matına konan eşyalar anlık analiz ediliyor ve hangi tarifler tam olarak eşleşiyorsa (Exact Match), o eşyanın ikonu matın altında dinamik olarak beliriyor. Kısayol üretimleri eklendi!
* **Stack Birleştirme ve Bölme:** Envanter içinde sol tıkla yığınlar aynı eşyanın üzerine sürüklenerek birleştirilebiliyor (Maks 128), sağ tıkla bir yığından tek bir eşya boş slota bırakılabiliyor.
* **Yeni Doğal Materyaller ve Aletler:** Yapraklardan `Çubuk (45)`, Uzun Çimenlerden `Bitki Halatı (46)`, Çakıllardan `Çakmak Taşı (43)` düşme oranları ayarlandı.
* **Yeni Ara Eşyalar ve Silah:** Kılıç üretmek için `Keskin Çakmak Taşı (49)`, `Çift Bıçaklı Taban (51)`, ve `Saplı Kılıç (52)` gibi materyaller eklendi. En nihayetinde `Çakmak Taşı Kılıcı (47)` tasarlandı.
* **Düz Eşya Render Sistemi (Flat Item Rendering):** Envanterde tutulan Çubuk, Halat, Kılıç gibi materyallerin 3 boyutlu blok yerine ikon şeklinde (2D) görünmesi için Texture Atlas `ui.frag` ile entegre edildi.

---

## [v0.1.6] - 2026-06-03

### Yeni Eklenen Özellikler (New Features)
* **Yenilenmiş Dünya Üretimi (World Gen Overhaul):** Dünya oluşumu dinamik ve mantıklı bir hale getirildi. Artık tepeler, mağaralar, çöller, ormanlar ve karlı biyomlar çok daha doğal bir şekilde oluşuyor.
* **Seed (Tohum) Mekaniği:** Artık her oluşturulan yeni dünya tamamen eşsiz bir rastgele Seed ile yaratılıyor. Kaydedilen dünya `dünyam.meta` dosyasında kendi seed değerini tutuyor, böylece oyun her açıldığında aynı yapı korunuyor.
* **Akıllı Doğma Sistemi (Safe Spawn):** Yeni bir dünyaya ilk defa girildiğinde, oyun otomatik olarak merkezdeki (0,0) yeryüzü yüksekliğini hesaplayıp oyuncuyu gökyüzünden çimlerin veya dağların üstüne güvenli bir şekilde indiriyor.
* **Yükleme Ekranı Sistemi:** Oyun menüden dünyaya geçerken "Oynanıyor" durumuna atlamadan önce `200` Mesh'lik (3D Obje) bir yükleme eşiği bekliyor ve bu esnada "Dunya Yukleniyor..." yazısını göstererek yumuşak bir geçiş sağlııyor.

### Düzeltilen Hatalar (Bug Fixes)
* **Karakterin Taşların İçine Doğması (Hitbox Sıkışması):** Yeni eklenen yeryüzü arama sisteminde karakterin çarpışma kutusu (hitbox) köşelere takılıp taşların içine sıkışıyordu. Başlangıç koordinatları `0.5, 0.5` blok merkezine kaydırılarak kusursuz iniş sağlandı.
* **Eski Dünyanın Titremesi (Flickering):** Dünyalar arası geçiş yapılırken veya yeni dünya yüklenirken bir önceki dünyanın kalıntılarının 1 salise ekranda yanıp sönmesi sorunu, `cached_opaque_index_count` sayıları sıfırlanarak giderildi.
* **Noclip Aktarım Hatası:** Yaratıcılık veya hile modundan Hayatta Kalma (Survival) moduna geçildiğinde eski kayıtların Noclip (duvardan geçme) ayarının bellekte kalması engellendi.

### Sistem İyileştirmeleri
* **GPU Bellek Temizliği (Allocator):** Megabuffer allocator yapısına `.reset()` fonksiyonu eklenerek menüye dönüldüğünde devasa GPU belleğinin (VRAM) başarıyla temizlenmesi sağlandı.

---

## [v0.1.5] - Alpha (İlk Kayıtlı Sürüm)

### Eklenen Özellikler
* **Voxel Tabanlı Dünya Üretimi:** Kademeli dünya üretimi, temel blok tipleri (Toprak, Taş, Çim vb.).
* **Ana Menü Sistemi:** "Tek Oyunculu", "Ayarlar" ve "Çıkış" butonlarından oluşan dinamik yazı tabanlı Kullanıcı Arayüzü (UI).
* **Dünya Seçim Ekranı:** Birden fazla dünyayı listeleme, silme ve yenisini oluşturma özelliği.
* **Temel Fizik ve Çarpışma:** Voxel dünyasıyla AABB tabanlı çarpışma tespiti, yerçekimi ve zıplama mekanikleri.
* **Işıklandırma Motoru (Lighting Engine):** Güneş ışığı (Sunlight) tabanlı voxel ışık yayılım sistemi.
* **Envanter ve Blok Etkileşimi:** Sol tık ile blok kırma, sağ tık ile blok yerleştirme mekanikleri ve seçilebilir hotbar tasarımı.
* **Isı Sistemi (Heat System):** Bloklar arasından ısı transferini hesaplayan ve sıcaklığı yayan ısı motoru.
* **Yapısal Bütünlük (Structural Integrity):** Blokların desteksiz durmalarını kontrol eden ve fiziksel mantık kuran yapısal bütünlük simülasyonu.
