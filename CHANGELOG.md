# Project M - Sürüm Notları (Changelog)

Bu dosya, oyun motoruna eklenen yeni özellikleri, düzeltilen hataları ve yapılan sistem iyileştirmelerini kayıt altında tutar.

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
