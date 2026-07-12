# Project M — Sürüm Notları

Oyun motorunun gelişimini takip edin. Tüm eski ve yeni sürümleri indirip test edebilirsiniz.

---

## v0.2.3 — En Yeni · Tarım, Hayvancılık & Keşif Çağı

### 🌱 Mevsimler & Tarım
- **Mevsim döngüsü:** Her mevsim 7 gün sürer ve büyüme hızını belirler — İlkbahar %130, Yaz %100, Sonbahar %60, **Kış'ta büyüme durur**.
- **Toprak işleme & sulama:** Çapa ile çim/toprak Sürülmüş Toprak'a döner; kovayla taşınan su 4 blok içindeyse toprak ıslanır (ıslakta tam hız, kuruda yavaş büyür). Kürek ve çapa 4 kademeli (çakmak taşı → bakır → demir → obsidyen).
- **Mahsuller & yemek:** Buğday, patates ve domates 4 evrede büyür; 3 buğday = ekmek. Meşe yapraklarından kırmadan elma toplanır. Tüm yiyecekler farklı tokluk verir; çiğ etler fırında pişer (pişirme kalitesi besleyiciliği belirler).

### 🐄 Hayvancılık
- **4 yeni hayvan:** Tavuk, domuz, inek ve koyun — prosedürel 3D modeller, pasif otlama, vurulunca panik kaçışı.
- **Üreme:** Doğru yemle beslenen yakın iki hayvandan yavru doğar (zamanla büyür).
- **Kaynaklar:** Ölünce çiğ et (+inek derisi, +koyun yünü); **makasla koyun kırkma** (koyun ölmez, yünü geri uzar). Çiftlik hayvanları kalıcıdır, dünya kaydına yazılır.

### 🌋 Keşif: Yeni Biyomlar
- **Volkan:** Bazalt kabuk ve yüzeyde lav havuzları — lav kırılamaz, kendi ışığını saçar ve üstünde durmak yakar.
- **Kızıl Orman & Dev Mantar Ormanı:** Kızıl kütüklü/yapraklı uzun ağaçlar ve sap + şapka bloklarından oluşan prosedürel dev mantarlar.

### 🏛️ Keşif: Yapılar & Ganimet
- **Prosedürel yapılar:** Terk edilmiş evler, mazgallı kuleler, obsidyen tapınaklar ve yeraltı maden tünelleri / mağara şehirleri — araziye uyumlu, chunk sınırlarında dikişsiz.
- **Ganimet sandıkları:** Bölgeye göre dolar (madende cevher/kömür, tapınak ve evde erzak/tohum); nadiren **Dürbün** (uzağı yakınlaştırır) ve **Harita** (2D kuşbakışı keşif haritası) çıkar.

### 🐛 Önemli Düzeltmeler
- **Işık/Isı bellek sızıntısı:** Yayılım artık yalnızca yüklü chunk'larda çalışıyor (v0.2.2'den kalan gizli hata giderildi).
- **Ekinlerde çarpışma:** Ekinler ve çapraz-çizim bitkiler artık doğru şekilde içinden geçilebiliyor.

---

## v0.2.2 — Ustalık Çağı

### 🔥 Isı Tabanlı Fırın Sistemi
- **Süreç odaklı işleme:** Yakıt önce tutuşmalı (soğuk fırında çok yavaş; **Çakmak** ile anında), yanan yakıt iç sıcaklığı kendi karakteristik sıcaklığına çeker, işlenen eşya **ideal sıcaklık bandında** kalmalı. Bandın üstüne çıkarsan metalin yanar, kalitesi düşer.
- **Kalite → Dayanıklılık:** İşlenmiş metalin fırın kalitesi (0-100), ondan üretilen aletin başlangıç dayanıklılığına aktarılır. Özenli fırıncılık = uzun ömürlü alet.
- **Yeni işlemeler:** Ham Bakır → İşlenmiş Bakır, Ham Demir → İşlenmiş Demir, **Kum → Cam**, Çamur → Kerpiç Tuğla, **Kırık Taş → Taş**.

### 🚪 İki Bloklu Kapılar (Meşe / Çam / Huş)
- **Akıllı yerleştirme:** Kapı alt+üst iki hücre olarak yerleşir; menteşe tıklanan noktaya göre sağ/sol seçilir. Yan yana koyunca **çift kanat** otomatik oluşur.
- **Menteşe animasyonu:** Sağ tıkla panel menteşe etrafında dönerek açılır/kapanır; açık kapının boşluğundan sorunsuz geçilir.

### 🛡️ Zırh, Dayanıklılık & Onarım
- **Zırh sistemi:** 4 zırh slotu (kask/zırh/tozluk/kolluk). Tam bakır takım hasarın **%30**'unu, tam demir takım **%50**'sini emer. Her darbe zırhı aşındırır.
- **Dayanıklılık:** Aletler ve zırh kullanıldıkça aşınır; dayanıklılık bitince eşya kırılıp yok olur.
- **Örs ile onarım:** 6 İşlenmiş Demir + 2 Taş ile üretilen Örs'e hasarlı eşya ile sağ tıkla → uygun malzeme karşılığında **%40** onarım.

### ✨ 36 Yeni Eşya & Denge
- **Yeni eşyalar:** Kömür, Ham Bakır/Demir Cevheri, Obsidyen Parçası, Bakır/Demir/Obsidyen kılıç, balta, kazma (9 alet), 8 zırh parçası, Çakmak, Makas, Bakır & Demir Kova, Örs ve daha fazlası.
- **Kılıç artık sadece silah:** Yaprak kırpma Makas'a devredildi. Savaş hiyerarşisi: çakmak taşı 3 → bakır 5 → demir 7 → obsidyen 10 hasar.

### 🐛 Önemli Düzeltmeler
- **Işık/Isı bellek patlaması:** Yayılım algoritmaları yüklü olmayan chunk'lara ilerliyordu; artık yalnızca yüklü chunk'larda yayılıyor.
- **Eşyalar duvarda kaybolmuyor:** Q ile atılan eşyalar artık katı bloklara çarpınca önüne düşüyor.
- **Varlık birikmesi:** Echo, Taint ve Snare'lere doğal ömür eklendi — nüfus artık döngüde kalıyor.

---

## v0.2.1 — Co-op & Bakım

### 🌐 Co-op — Aynı Ağda Çok Oyunculu (LAN)
- **Sunucusuz doğrudan bağlantı:** Dünyayı açan oyuncu host olur ("Dünyayı Paylaş"), arkadaşınız ana menüden LAN adresiyle katılır — ek sunucu programı yok.
- **Tam senkron oynanış:** Oyuncular, bloklar, varlıklar ve PvP ağ üzerinden eşitleniyor; oyun içi sohbet (`T`), isim etiketleri ve kalıcı co-op envanteri dahil.

### ✨ Oynanış Yenilikleri
- **Blok Yönü Sistemi:** Bloklar artık koyduğunuz yöne göre yerleşiyor — kütükler, sandık/fırın, yarım basamak ve dikey kalas doğru yönde duruyor.
- **Daha Doğal Dünya:** Ağaçlar ve bitkiler tek sıra yerine öbekler halinde, çok daha doğal dağılıyor.
- **Gece/Gündüz Kaydı:** Gün saati artık her dünyaya ayrı kaydediliyor; her dünya kendi saatinden açılıyor.

### 🐛 Önemli Düzeltmeler
- **İnce gölge şeritleri:** Chunk sınırlarındaki hatalı gölge şeritleri giderildi (eski dünyalar yüklenince kendiliğinden düzeliyor).
- **Gerçekten eşsiz seed:** Yeni dünyalar artık birbirine benzemiyor; seed'in ufak bir değişimi bile bambaşka bir dünya üretiyor.
- **AMD/Intel açılış çökmesi:** Bazı AMD/Intel kartlarında açılışta yaşanan çökme düzeltildi.

---

## v0.2.0 — Varlıklar & 3D

### 👾 Varlık Sistemi (Entities)
- **Canlı Varlıklar:** Dünya artık yaşıyor. Tüm canlılar tek bir merkezî `Entity` yapısı ve durum makinesi üzerinden yönetiliyor; oyuncuyla aynı AABB çarpışma + yerçekimi fiziğini kullanıyorlar.
- **The Echo (Yankı):** Karada doğan çevik bir avcı. Oyuncuyu fark edince yana doğru zig-zag sıçramalarla (dash) üstüne atılıyor, tek bloklu engelleri aşıyor ve temas edince hasar verip geriye itiyor (knockback).
- **Abyssal Snare (Derinlik Pusu):** Derin suların tabanında bekleyen bir tuzak. Yaklaşınca oyuncuyu aşağı çekiyor; hasar vermiyor ama yüzeye çıkmanı engelleyerek oksijenini tüketiyor.
- **The Cursed Taint (Lanet):** Havada süzülen lanetli varlık. Çevresindeki doğal blokları periyodik olarak "Lanetli Toprak"a dönüştürerek dünyayı kirletiyor; öldürünce değerli ganimet düşürüyor.
- **Varlıkla Savaş & Işıkla Arınma:** Sol tık ile varlıklara vurabiliyorsunuz (alete göre hasar). Yerleştirilen Işık Taşı çevresindeki Lanetli Toprağı yavaşça temizleyip doğal hâline döndürüyor.

### 🧊 3D Kutu-Modeller
- **Billboard'lardan 3D'ye:** Yaratıklar ve eşyalar artık 2D düzlemler değil; kafa/gövde/kol/bacak kutularından oluşan gerçek 3 boyutlu modeller olarak çiziliyor.
- **Oyuncu Bedeni:** Artık bir vücudunuz var — insansı bir model yürürken kollarını ve bacaklarını sallıyor.
- **Kamera Modları:** Varsayılan 1. şahıs + gövde (aşağı bakınca bedeninizi görüyorsunuz, `F1` ile gizlenir) ve `F5` ile duvarlara girmeden yaklaşan 3. şahıs kamerası.
- **Prosedürel Animasyon:** Hıza bağlı yürüyüş salınımı, blok kırma/saldırı sırasında kol vuruş (chop) animasyonu ve gerçekçi gövde-kafa yönelimi.

### ⚡ Sistem İyileştirmeleri
- **Model Render Hattı:** Vulkan'a ayrı bir model pipeline'ı, skin sampler descriptor binding'i ve yeni shader'lar (`model.vert/frag`) eklendi; tüm modeller tek bir atlasta (`models.png`) toplanıyor.
- **Merkezî Model Tanımı:** Tüm modeller (`models.rs`) kutu listeleri olarak tanımlanıyor — yeni bir yaratık veya parça eklemek tek bir tablo işi.

---

## v0.1.10 — Bugfix

### ✨ Yeni Özellikler
- **Eşya Atma (Q Tuşu):** Q tuşu ile seçili eşyadan bir adet, baktığınız yöne fırlatabiliyorsunuz.
- **Ölümde Eşya Düşürme:** Öldüğünüzde eşyalarınız öldüğünüz yere düşüyor ve geri dönüp toplayabiliyorsunuz. Yere düşen eşyalar artık kayda dahil — oyundan çıkıp girince yerinde duruyor.
- **Işık Taşı Tarifi:** Çubuk + Halat + Kömür ile Işık Taşı üretilebiliyor.
- **Yaratıcılık Modu İyileştirmeleri:** Bloklar yerleştirildiğinde envanterden tükenmiyor (sınırsız) ve dünyaya girince envanter geniş bir blok paletiyle otomatik doluyor.

### 🐛 Hata Düzeltmeleri
- **Su Artık Kırılamıyor:** Durgun ve akan su blokları kırılıp envantere alınamıyor; suyun stack'lenip yerleştirilince kaybolması giderildi.
- **Su Nefes ve Çıkış Fiziği:** Oksijen yalnızca kafa su altındayken azalıyor; sudan çıkarken yukarı fırlama (4 blok zıplama) engellendi.
- **Sneak (Ctrl) Düzeltmesi:** Yarım basamak ve kalas türevleri üzerinde sneak yaparken artık yürünebiliyor; kenarda düşme engellemesi düzgün çalışıyor.
- **Desteksiz Bitkiler Kırılıyor:** Altındaki blok kırıldığında çimen, eğrelti, çalı, mantar, sazlık ve Çakıl Taşı artık havada kalmıyor; kırılıp düşüyor.
- **Bitki Yerleştirme Kuralları:** Bitkiler artık havada veya üst üste konulamıyor (altında katı blok zorunlu). Halat ve su yere konulamıyor.
- **Mağara Sistemi Yeniden Yazıldı:** Mağaralar sabit yükseklikte kesilmiyor; her derinlikte oluşuyor, deniz tabanı kalın kalıyor ve karada yüzeye açılan girişler eklendi.
- **Envanter ve Sandık Kaydı:** Ana envanter (30 slot) ve sandık içerikleri artık doğru kaydediliyor; dünyalar arası geçişte envanterin karışması giderildi.
- **Su Altındaki Blokları Kırma:** Hedefleme ışını sudan geçip arkadaki katı bloğu seçtiği için deniz/akan su altındaki bloklar artık kırılabiliyor.
- **Üretim Matı Depolama Değil:** Mata bırakılan eşyalar envanter kapatılınca otomatik geri dönüyor (eşya kaybı önlendi).
- **Sneak ile Kenara Blok Koyma:** Bloğun ucunda sneak yaparken altınıza/yanınıza blok yerleştirebiliyorsunuz.
- **Ana Menü Başlık Taşması:** Ana menüdeki sürüm başlığının ekrandan taşması düzeltildi.

---

## v0.1.9 — Alpha

### ✨ Yeni Özellikler
- **Düşen Blok Animasyonu:** Desteğini kaybeden bloklar (kum, çakıl, havada kalan yapılar) artık aniden ışınlanmak yerine yerçekimiyle akıcı bir şekilde düşüyor. Birden fazla blok çökerse hepsi grup halinde birlikte iniyor.
- **Yere Düşen Eşyalar (Item Entity):** Hayatta Kalma modunda kırılan bloklar artık doğrudan envantere gitmiyor; kameraya dönük küçük eşyalar olarak yere düşüyor, hafifçe zıplıyor ve oyuncu yaklaşınca otomatik toplanıyor. Toplanmayan eşyalar 5 dakika sonra kayboluyor.
- **Sandık Açma Animasyonu:** Sandığa tıklandığında kapağı ses efektiyle arkadan menteşeli olarak açılıyor. Açık sandık artık içi oyuk bir kutu olarak çiziliyor — içine bakılabiliyor.
- **Yenilenmiş Dünya Oluşumu:** Arazi sistemi baştan yazıldı. Geniş düz ovalar, yer yer yükselen gerçek dağlar ve okyanuslar bir arada bulunuyor; çok-oktavlı (FBM) gürültü ile çok daha doğal bir yüzey elde edildi.
- **Okyanus ve Denizler:** Kıtasallık sistemiyle alçak bölgeler deniz seviyesinin altına inerek büyük su kütleleri oluşturuyor; kıyılarda kumlu sahiller bulunuyor. Dağlar yalnızca karada yükseliyor.
- **Yumuşak Biyom Geçişleri:** Çöl, orman, bataklık ve karlı bölgeler arasındaki sert sınırlar yumuşatıldı; biyomlar kademeli olarak birbirine karışıyor.
- **Yenilenmiş Bitki Görünümü:** Çalı, mantar ve sazlık artık düzgün çapraz (X şeklinde) billboard olarak ve her biri kendi boyutunda çiziliyor.
- **Lonsdaleit (Katman Kayası):** Dünyanın en alt katmanına kırılması imkansız blok eklendi — yaratıcılık modunda bile kırılamıyor ve dibe düşmeyi engelliyor.

### ⚡ İyileştirmeler
- **Merkezi Blok Tanım Tablosu:** Tüm blok özellikleri (isim, doku, sertlik, şeffaflık, render tipi) artık tek bir merkezi tabloda (`blocks.rs`) toplanıyor — yeni blok eklemek çok daha hızlı ve hatasız.
- **Akıllı Doğma Sistemi (Safe Spawn):** Oyuncu artık dar bir vadiye veya dağ tepesine değil; su üstü ve mümkün olduğunca düz bir noktaya yerleştiriliyor.
- **Doku Düzeltmesi:** Keskin Çakmak Taşı'na ayrı/özel bir doku verildi (önceden başka bir item ile paylaşıyordu).

---

## v0.1.8 — Alpha

### ✨ Yeni Özellikler
- **Sandık Sistemi (Chest Storage):** 10 Kalas + 2 Çubuk ile üretilebilen sandık bloğu eklendi. 3×8 (24 slotluk) depolama arayüzü ile eşyalar kalıcı olarak saklanıyor. Sandık kırıldığında içindekiler envantere aktarılıyor.
- **Alet Mekanikleri (Tool System):** Balta ile ahşap, kazma ile taş/maden, kılıç ile yapraklar hızlı kırılıyor. Yanlış aletle sert bloklar 10× yavaş kırılıyor ve eşya düşmüyor.
- **Taş → Kırık Taş Dönüşümü:** Kazma ile taş kırıldığında artık Kırık Taş olarak düşüyor — madencilik ilerleme sisteminin temeli.
- **Fırın Craft Tarifi:** 12 Kil ile Fırın bloğu üretilebiliyor (pişirme mekanikleri yakında).
- **Yarım Basamak (Half Slab):** Yarım yükseklikte çarpışma kutusu, zıplamadan üstüne çıkılabiliyor.
- **Dikey Kalas:** Düzgün hizalama, yan yana doğru birleşme ve saydamlık sorunu yok.

### ⚡ İyileştirmeler
- **Shader Güncellemesi:** `ui.frag` shader'ına sandık UI render sistemi ve `chest_inventory[24]` dizisi eklendi.
- **Kütükten Kalas Üretimi:** Bir kütükten artık 2 kalas üretiliyor (önceden 1'di).

---

## v0.1.7-hotfix1 — Alpha

### ✨ Yeni Özellikler
- **Gelişmiş Envanter Sistemi:** 3 satır × 5 sütun (sağ ve sol) toplam 30 slotluk Minecraft benzeri envanter, `ui.frag` üzerinden sıfırdan tasarlandı.
- **Eşya Sayıları (Text Rendering):** Envanterdeki tüm eşyaların miktarları sağ alt köşede sayı olarak görünüyor. Sürüklenen eşyalarda sarı renk.
- **Dinamik Üretim (Crafting):** Üretim matına konan eşyalar anlık analiz ediliyor ve eşleşen tarif ikonu dinamik olarak beliriyor.
- **Stack Birleştirme & Bölme:** Sol tıkla yığın birleştirme (Maks 128), sağ tıkla tek eşya bırakma.
- **Yeni Materyaller:** Çubuk, Bitki Halatı, Çakmak Taşı ve Keskin Çakmak Taşı gibi yeni doğal malzemeler eklendi.
- **Çakmak Taşı Kılıcı:** Yeni ara eşyalar ve craft zinciriyle üretilebilen ilk silah tasarlandı.
- **Düz Eşya Render:** Çubuk, Halat, Kılıç gibi eşyalar artık 2D ikon olarak Texture Atlas ile görünüyor.

### 🐛 Hata Düzeltmeleri (hotfix1)
- **Intel/AMD GPU'larda Oyun Açılmıyordu:** Vulkan Descriptor Pool oluşturulurken `COMBINED_IMAGE_SAMPLER` tipi için yeterli alan ayrılmıyordu. NVIDIA sürücüleri tolerans gösterirken, Intel Arc ve bazı AMD Radeon sürücüleri `ERROR_OUT_OF_POOL_MEMORY` hatası fırlatıyordu. Havuz boyutu düzeltildi.

---

## v0.1.6 — Alpha

### ✨ Yeni Özellikler
- **Yenilenmiş Dünya Üretimi:** Tepeler, mağaralar, çöller, ormanlar ve karlı biyomlar çok daha doğal oluşuyor.
- **Seed (Tohum) Mekaniği:** Benzersiz seed ile yaratılan dünyalar `dünyam.meta` dosyasına kaydedilir.
- **Akıllı Doğma Sistemi:** Oyuncu gökyüzünden güvenli bir şekilde yüzeye indirilir.
- **Yükleme Ekranı:** Dünya yüklenirken 200 Mesh'lik yükleme eşiği bekletilir.

### 🐛 Hata Düzeltmeleri
- Karakterin taşların içine doğması (Hitbox Sıkışması) düzeltildi.
- Eski dünyanın titremesi ve noclip ayarının kalıcı olması sorunu çözüldü.

### ⚡ İyileştirmeler
- **GPU Bellek Temizliği:** Menüye dönüldüğünde devasa VRAM başarıyla temizleniyor.

---

## v0.1.5 — Alpha (İlk Kayıtlı Sürüm)

### 🚀 İlk Kayıtlı Sürüm
- **Voxel Tabanlı Dünya Üretimi:** Temel blok tipleri (Toprak, Taş, Çim vb.) eklendi.
- **Ana Menü ve Seçim Ekranı:** Dünyaları listeleme, silme ve yenisini oluşturma özelliği.
- **Temel Fizik:** AABB tabanlı çarpışma, yerçekimi ve zıplama mekanikleri.
- **Işıklandırma Motoru:** Güneş ışığı tabanlı voxel ışık yayılım sistemi.
- **Etkileşim ve Sistemler:** Blok kırma/yerleştirme, Isı Sistemi ve Yapısal Bütünlük simülasyonu.
