# Project M — Tarif Kitabı (Alpha v0.2.3)

Bu kitap, oyundaki tüm üretim tariflerini, fırın işleme süreçlerini ve onarım
bilgilerini içerir. Üretim matı tarifleri **tam eşleşme** ister: matta tarifte
olmayan fazladan bir eşya türü varsa tarif görünmez. Uyan tarifler matın
altında ikon olarak belirir — istediğine tıkla, ürünü imlecine al.

---

## 1. Ham Madde Kaynakları

| Kaynak | Ne düşürür | Not |
|---|---|---|
| Çakıl kır | Çakıl + %20 Çakmak Taşı | El ile kırılır |
| Yaprak kır | %10 Elma, %20 Çubuk | Makas ile çok hızlı kırılır |
| Uzun Çimen kır | %50 Bitki Halatı, %40 **Buğday Tohumu** | Tarımın başlangıcı |
| Kömür Cevheri | **Kömür** | Herhangi bir kazma ister |
| Bakır Cevheri | **Ham Bakır Cevheri** | Herhangi bir kazma ister |
| Demir Cevheri | **Ham Demir Cevheri** | En az **Bakır Kazma** ister |
| Obsidyen | **Obsidyen Parçası** | En az **Demir Kazma** ister |
| Taş kır | Kırık Taş | Kazma ister — fırında ısıtılarak tekrar **Taş** olur |

> **İlerleme zinciri:** Çakmak Taşı Kazma → bakır kazabilirsin → Bakır Kazma →
> demir kazabilirsin → Demir Kazma → obsidyen kazabilirsin.

---

## 2. Üretim Matı Tarifleri

### Temel / Ahşap
| Ürün | Malzemeler |
|---|---|
| Kalas ×2 | 1 Kütük (meşe/çam/huş → kendi kalası) |
| Yarım Basamak ×2 | 1 Kalas (kendi türü) |
| Dikey Kalas ×2 | 1 Kalas (kendi türü) |
| **Kapı** (meşe/çam/huş) | 6 Kalas (kendi türü) |
| Sandık | 10 Kalas (türler karışabilir) + 2 Çubuk |
| Kil Fırın | 12 Kil |
| Işık Taşı | 1 Çubuk + 1 Bitki Halatı + 1 **Kömür** |

### Çakmak Taşı Seti (başlangıç)
| Ürün | Malzemeler |
|---|---|
| Keskin Çakmak Taşı | 1 Çakmak Taşı + 1 Çakıl Taşı |
| Çakmak Taşı Kılıcı | 2 Keskin Çakmak Taşı + 1 Çubuk + 1 Halat |
| Çakmak Taşı Balta | 3 Keskin Çakmak Taşı + 1 Çubuk + 1 Halat |
| Çakmak Taşı Kazma | 3 Keskin Çakmak Taşı + 1 Çubuk + 1 Halat |

### Metal Aletler
Metal aletler **fırında işlenmiş** metal ister (bkz. bölüm 3). İşlenmiş
metalin **kalitesi** aletin başlangıç dayanıklılığını belirler!

| Ürün | Malzemeler |
|---|---|
| Bakır Kılıç | 2 İşlenmiş Bakır + 1 Çubuk + 1 Halat |
| Bakır Balta / Kazma | 3 İşlenmiş Bakır + 1 Çubuk + 1 Halat |
| Demir Kılıç | 2 İşlenmiş Demir + 1 Çubuk + 1 Halat |
| Demir Balta / Kazma | 3 İşlenmiş Demir + 1 Çubuk + 1 Halat |
| Keskinleştirilmiş Obsidyen | 1 Obsidyen Parçası + 1 Çakmak Taşı (yontma) |
| Obsidyen Kılıç | 2 Keskinleştirilmiş Obsidyen + 1 Çubuk + 1 Halat |
| Obsidyen Balta / Kazma | 3 Keskinleştirilmiş Obsidyen + 1 Çubuk + 1 Halat |

### Zırh
| Parça | Bakır | Demir |
|---|---|---|
| Kask | 5 İşlenmiş Bakır | 5 İşlenmiş Demir |
| Zırh (göğüs) | 8 İşlenmiş Bakır | 8 İşlenmiş Demir |
| Tozluk | 7 İşlenmiş Bakır | 7 İşlenmiş Demir |
| Kolluk | 4 İşlenmiş Bakır | 4 İşlenmiş Demir |

> Tam bakır takım hasarın **%30**'unu, tam demir takım **%50**'sini emer
> (varlık saldırıları, PvP ve yüksekten düşme dahil). Her darbe zırhı aşındırır.

### Kullanım Eşyaları
| Ürün | Malzemeler | İşe yarar |
|---|---|---|
| **Çakmak** | 1 Çakmak Taşı + 1 İşlenmiş Demir | Fırını anında tutuşturur |
| Makas | 2 İşlenmiş Demir | Yaprak kırpma + **koyun kırkma** |
| Bakır Kova | 5 İşlenmiş Bakır | Su taşır (32 dökme dayanır) |
| Demir Kova | 5 İşlenmiş Demir | Su taşır (128 dökme dayanır) |
| **Örs** | 6 İşlenmiş Demir + 2 Taş | Alet/zırh onarımı |
| **Dürbün** (v0.2.4) | 2 Cam + 1 İşlenmiş Bakır | Sağ tık basılı: uzağı yakınlaştırır |
| **Harita** (v0.2.4) | 4 Meşe Kalas + 1 Deri | Elde tutunca keşfedilen bölgelerin kuşbakışı haritası |
| Kızıl Kalas ×2 (v0.2.4) | 1 Kızıl Kütük | Kızıl orman ahşabı |

> 🗺️ **Keşif (v0.2.4):** Dünyada terk edilmiş evler, kuleler ve tapınaklar;
> yeraltında destekli maden tünelleri ve mağara şehirleri bulunur. İçlerindeki
> **ganimet sandıkları** ilk açanı bölgeye göre ödüllendirir (madenlerde cevher,
> tapınaklarda erzak — nadiren dürbün/harita çıkar). Volkan biyomunda lavdan
> uzak dur: üstünde durmak yakar ve lav kırılamaz!

### Tarım Aletleri (v0.2.3)
| Ürün | Malzemeler | İşe yarar |
|---|---|---|
| Kürek (4 kademe) | 1 malzeme + 1 Çubuk + 1 Halat | Toprak/kum/çakıl hızlı kazma |
| **Çapa** (4 kademe) | 2 malzeme + 1 Çubuk + 1 Halat | Çim/toprağı **Sürülmüş Toprak** yapar |
| **Ekmek** | 3 Buğday | +40 tokluk — en iyi bitkisel yemek |

> Kademe malzemeleri diğer aletlerle aynı: Keskin Çakmak Taşı → İşlenmiş
> Bakır → İşlenmiş Demir → Keskinleştirilmiş Obsidyen. Çapa tarifi kılıçla
> aynı malzemeyi kullanır — mat altında iki seçenek birden görünür.

> Not: 5 İşlenmiş Bakır hem Kask hem Kova tarifine uyar — mat altında iki
> seçenek birden belirir, istediğine tıkla.

---

## 3. Kil Fırın — Isıyla İşleme

Fırın "koy ve bekle" değildir; **süreci sen yönetirsin**:

1. Fırına sağ tıkla → panel açılır. Sol üst slot **girdi**, sol alt slot **yakıt**.
2. Yakıt kendiliğinden yanmaz — **tutuşması gerekir.** Soğuk fırında bu çok
   yavaştır; elinde **Çakmak** ile fırına sağ tıklarsan anında tutuşur.
   Sıcak fırında sonraki yakıtlar kendiliğinden kolayca tutuşur.
3. Yanan yakıt fırının iç sıcaklığını kendi karakteristik sıcaklığına çeker.
   Göstergedeki **yeşil bant**, girdinin ideal sıcaklık aralığıdır:
   bandın içinde pişer, bandın **üstünde kalitesi yanar!**
4. Süre dolunca ürün sağdaki çıktı slotuna düşer. İşlenmiş metalin
   **kalitesi (0-100)**, ondan yapılan aletin dayanıklılığına aktarılır.

### Yakıtlar
| Yakıt | Sıcaklık | Yanma Süresi |
|---|---|---|
| Çubuk | ~400° | 8 sn |
| Kalas | ~700° | 20 sn |
| **Kütük** | ~800° | 35 sn |
| **Kömür** | ~1100° | 60 sn |

### İşleme Tarifleri
| Girdi | Çıktı | İdeal Bant | Süre | Önerilen Yakıt |
|---|---|---|---|---|
| Kum | **Cam** | 600–900° | 12 sn | Kalas / Kütük |
| Çamur | Kerpiç Tuğla | 500–800° | 10 sn | Kalas |
| Kırık Taş | **Taş** | 650–1000° | 15 sn | Kütük |
| Ham Bakır Cevheri | İşlenmiş Bakır | 750–950° | 20 sn | **Kütük** |
| Ham Demir Cevheri | İşlenmiş Demir | 1000–1200° | 25 sn | **Kömür** (şart) |
| Çiğ Tavuk Eti | Pişmiş Tavuk (+35) | 550–800° | 12 sn | Kalas / Kütük |
| Çiğ Domuz Eti | Pişmiş Domuz (+45) | 600–850° | 14 sn | Kalas / Kütük |
| Çiğ Biftek | Pişmiş Biftek (+50) | 600–850° | 14 sn | Kalas / Kütük |
| Çiğ Koyun Eti | Pişmiş Koyun (+40) | 600–850° | 13 sn | Kalas / Kütük |

> 🍖 Pişmiş yemeğin **kalitesi besleyiciliğini** belirler (%70-%100):
> eti kömür ateşinde yakarsan doyuruculuğu düşer. Etler için kalas/kütük idealdir.

> ⚠️ **Bakırı kömürle pişirme!** Kömür 1100°'ye çıkar, bakırın bandını (950°)
> aşar — metalin yanar, kalitesi 5'e düşer ve ondan yapılan alet çabuk kırılır.
> Bakır için kütük ateşi idealdir. Demir ise ancak kömürle pişecek kadar
> sıcaklık ister. Doğru yakıt, ustalığın yarısıdır.

---

## 4. Savaş & Alet Hiyerarşisi

| Kademe | Kılıç Hasarı | Balta/Kazma Hasarı | Dayanıklılık (alet) | Kazabildiği |
|---|---|---|---|---|
| Çıplak El | 0.75 | — | — | taş kazamaz |
| Çakmak Taşı | 3 | 2 | 80 | taş, kömür, bakır |
| Bakır | 5 | 3 | 180 | + demir cevheri |
| Demir | 7 | 4.5 | 360 | + obsidyen |
| Obsidyen | 10 | 6 | 720 | her şey |

* Kılıç artık **yalnızca silahtır** — blok/yaprak kırmayı hızlandırmaz.
  Yaprak ve bitki kırpmanın aracı **Makas**'tır.
* Aletler kullandıkça aşınır (slotun altındaki kırmızı-yeşil çubuk).
  Dayanıklılık bitince alet **kırılır ve yok olur** — örse uğramayı unutma.

---

## 5. Örs ile Onarım

Hasarlı alet/zırh **elindeyken (hotbar'da seçili)** örse sağ tıkla.
Envanterinden 1 malzeme tüketilir, eşya **%40** onarılır.

| Eşya | Onarım Malzemesi |
|---|---|
| Çakmak taşı aletleri | Keskin Çakmak Taşı |
| Bakır alet & zırh | İşlenmiş Bakır |
| Demir alet & zırh, Çakmak, Makas | İşlenmiş Demir |
| Obsidyen aletler | Keskinleştirilmiş Obsidyen |

---

## 6. Tarım Rehberi (v0.2.3)

1. **Toprağı sür:** Çapayla çim/toprağa sağ tıkla → Sürülmüş Toprak.
2. **Sula:** 4 blok içinde su varsa toprak **ıslak** olur (üstü koyulaşır) —
   ıslak toprakta ekin TAM hızda, kuruda %35 hızda büyür. Kovanla su taşıyıp
   tarlanın ortasına dökebilirsin (boş kovayla su kaynağına sağ tıkla → dolu
   kova; dolu kovayla boş hücreye sağ tıkla → su kaynağı).
3. **Ek:** Sürülmüş toprağa Buğday Tohumu / Patates / Domates ile sağ tıkla.
4. **Bekle:** Ekinler 4 evrede büyür. **MEVSİM** önemli: İlkbahar %130,
   Yaz %100, Sonbahar %60, **Kış %0 (büyüme durur!)**. Her mevsim 7 gün sürer.
5. **Hasat:** Olgun ekini kır — buğday tohum da verir (döngü sürer),
   patates/domates 2-3 ürün düşürür (bir kısmını yeniden ek).

**Meyve Ağacı:** Meşe yaprağına sağ tıkla → kırmadan elma toplarsın.
Toplanan yaprak bir süre sonra (kış hariç) yeniden meyve verir.

### Yiyecek Değerleri
| Yiyecek | Tokluk | | Yiyecek | Tokluk |
|---|---|---|---|---|
| Elma | +30 | | Pişmiş Tavuk | +35 |
| Domates | +22 | | Pişmiş Koyun | +40 |
| Çiğ Patates | +10 | | Pişmiş Domuz | +45 |
| **Ekmek** | +40 | | **Pişmiş Biftek** | +50 |
| Çiğ etler | +8..10 | | | |

---

## 7. Hayvancılık Rehberi (v0.2.3)

Çimenli alanlarda **Tavuk, Koyun, İnek ve Domuz** dolaşır. Vurursan kaçarlar;
öldürürsen et (+inek deri, +koyun yün) düşürürler. Ama asıl güç ÜRETMEKTE:

* **Besle:** Hayvanın istediği yemle sağ tıkla → üreme moduna girer (başını kaldırır).
  | Hayvan | Yemi | Ölünce düşürdüğü |
  |---|---|---|
  | Tavuk | Buğday Tohumu | Çiğ Tavuk Eti |
  | Domuz | Patates | Çiğ Domuz Eti ×1-2 |
  | İnek | Buğday | Çiğ Biftek ×1-2 + Deri |
  | Koyun | Buğday | Çiğ Koyun Eti + Yün |
* **Üret:** Aşık iki aynı tür hayvan yakınsa **yavru** doğar (yarı boy).
  Yavru ~3 dakikada büyür; yem verirsen daha hızlı büyür. Üreyen çift bir
  süre dinlenir.
* **Kırk:** Koyuna **Makas** ile sağ tıkla → yün düşer, koyun ölmez;
  yünü zamanla geri uzar. Yün blok olarak yerleştirilebilir.
* Çiftlik hayvanları **kalıcıdır**: uzaklaşınca kaybolmaz, dünya kaydına yazılır.

---

## 8. Kapı Kullanımı

* Kapı **zemine** yerleştirilir; üst üste iki boş hücre ister. Alt+üst birlikte
  oluşur, hangisini kırarsan kır **ikisi birden** yok olur ve tek kapı düşer.
* Kapalı panel, koyarken **sana yakın kenara** yaslanır; **menteşe** tıkladığın
  noktanın sağ/sol yarısına göre seçilir.
* Yan yana iki kapı koyarsan menteşeler otomatik karşıt olur → **çift kanat**.
* Sağ tık: aç/kapa (menteşe animasyonuyla). Açık kapının boş kısmından
  rahatça geçersin; kapalı kapı ince panel gibi yer kaplar.

---

## Ek: Geliştirici Referansı (ID → Eşya → Doku)

| ID | Eşya | Doku | ID | Eşya | Doku |
|---|---|---|---|---|---|
| 55 | Kömür | 86 | 72-74 | Bakır Kılıç/Balta/Kazma | 96-98 |
| 56 | Ham Bakır Cevheri | 87 | 75-77 | Demir Kılıç/Balta/Kazma | 99-101 |
| 57 | Ham Demir Cevheri | 88 | 78-80 | Obsidyen Kılıç/Balta/Kazma | 103-105 |
| 58 | Obsidyen Parçası | 89 | 81-84 | Bakır Kask/Zırh/Tozluk/Kolluk | 106-109 |
| 59 | İşlenmiş Bakır | 87 | 85-88 | Demir Kask/Zırh/Tozluk/Kolluk | 110-113 |
| 60 | İşlenmiş Demir | 88 | 62 | Çakmak | 114 |
| 61 | Keskinleştirilmiş Obsidyen | 102 | 63/64 | Bakır/Demir Kova | 115/116 |
| 66/67 | Meşe Kapı Alt/Üst | 90/91 | 65 | Makas | 117 |
| 68/69 | Çam Kapı Alt/Üst | 92/93 | 89 | Örs | 118-121 |
| 70/71 | Huş Kapı Alt/Üst | 94/95 | | | |
| 90 | Sürülmüş Toprak | 122 kuru / 123 ıslak | 94 | Yün Bloğu | 141 |
| 91 | Buğday Ekini | 124-127 (4 evre) | 95/96 | Buğday / Tohumu | 136/137 |
| 92 | Patates Ekini | 128-131 (4 evre) | 97/98 | Patates / Domates | 138/139 |
| 93 | Domates Ekini | 132-135 (4 evre) | 99 | Ekmek | 140 |
| 107 | Deri | 142 | 108/109 | Su Dolu B./D. Kova | 143/144 |
| 121-124 | Kürekler (ÇT/B/D/O) | 145-148 | 125-128 | Çapalar (ÇT/B/D/O) | 149-152 |
| 129-136 | Çiğ/Pişmiş Etler | 153-160 | 137/138 | Bazalt / Lav | 161/162 |
| 139 | Kızıl Kütük | 163 halka / 164 kabuk | 140/141 | Kızıl Yaprak / Kalas | 165/166 |
| 142 | Mantar Sapı | 167 | 143/144 | Kırmızı/Kahve Şapka | 168/169 |
| 145 | Dürbün | 170 | 146 | Harita | 171 |

Eşya verisi (`ItemStack.data`): aletlerde/zırhta kalan dayanıklılık
(0 = hiç aşınmamış), işlenmiş metallerde fırın kalitesi (0-100).
Fırın tarifleri ve yakıt değerleri: `src/app/furnace.rs` —
üretim matı tarifleri: `src/inventory.rs (get_craftable_options)`.
