# Project M — Tarif Kitabı (Alpha v0.2.2)

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
| Uzun Çimen kır | %50 Bitki Halatı | |
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
| Makas | 2 İşlenmiş Demir | Yaprak/bitkileri hızlı kırpar |
| Bakır Kova | 5 İşlenmiş Bakır | (gelecek sürümde sıvı taşıma) |
| Demir Kova | 5 İşlenmiş Demir | (gelecek sürümde sıvı taşıma) |
| **Örs** | 6 İşlenmiş Demir + 2 Taş | Alet/zırh onarımı |

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

## 6. Kapı Kullanımı

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

Eşya verisi (`ItemStack.data`): aletlerde/zırhta kalan dayanıklılık
(0 = hiç aşınmamış), işlenmiş metallerde fırın kalitesi (0-100).
Fırın tarifleri ve yakıt değerleri: `src/app/furnace.rs` —
üretim matı tarifleri: `src/inventory.rs (get_craftable_options)`.
