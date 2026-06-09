# Project M - Sürüm Notları (Changelog)

Bu dosya, oyun motoruna eklenen yeni özellikleri, düzeltilen hataları ve yapılan sistem iyileştirmelerini kayıt altında tutar.

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
