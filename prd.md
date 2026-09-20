# PRD: Landing Page Kenara Visuals

**Versi:** 1.1
**Tanggal:** 20 September 2026
**Brand:** Kenara Visuals
**Layanan:** Wedding & Event Content Creator
**Area Utama:** Kendari & Unaaha

---

## 1. Latar Belakang

Kenara Visuals saat ini mendapatkan sebagian besar calon klien melalui Instagram, terutama dari akun:

* `@kenara.visuals`
* `@kenara.event`

Setelah melihat portfolio di Instagram, calon klien biasanya menghubungi admin melalui WhatsApp untuk menanyakan harga, ketersediaan jadwal, cakupan layanan, dan detail paket.

Alur tersebut masih memiliki beberapa kekurangan:

* calon klien belum mengetahui kisaran harga sebelum menghubungi admin;
* admin harus mengulang pertanyaan dasar seperti jenis acara, tanggal, dan lokasi;
* informasi kebutuhan calon klien belum tersusun ketika percakapan WhatsApp dimulai;
* Instagram menjadi satu-satunya titik pengenalan brand;
* belum ada halaman resmi yang menjelaskan layanan Kenara Visuals secara terstruktur.

Landing page ini dibuat sebagai jembatan antara Instagram dan WhatsApp.

Calon klien dapat mengenal Kenara Visuals, melihat portfolio dan layanan, mengisi kebutuhan acara, melihat pricelist, lalu memulai percakapan WhatsApp dengan informasi awal yang sudah otomatis disiapkan.

---

## 2. Tujuan Produk

Landing page Kenara Visuals memiliki empat tujuan utama:

### 2.1 Meningkatkan profesionalitas brand

Memberikan halaman resmi yang lebih terstruktur dibandingkan hanya mengandalkan profil Instagram.

### 2.2 Mempercepat calon klien mendapatkan informasi

Calon klien dapat mengetahui jenis layanan dan harga tanpa harus menunggu balasan admin.

### 2.3 Mengurangi pertanyaan berulang

Informasi dasar seperti:

* nama;
* jenis acara;
* tanggal;
* lokasi;
* kebutuhan tambahan;

sudah diberikan sebelum percakapan WhatsApp dimulai.

### 2.4 Mengarahkan calon klien ke WhatsApp

Tujuan akhir landing page adalah membawa calon klien yang memiliki minat cukup tinggi menuju percakapan WhatsApp dengan konteks kebutuhan yang sudah jelas.

---

## 3. Target Pengguna

Target utama adalah calon klien personal atau keluarga di:

* Kendari;
* Unaaha;
* wilayah sekitar Sulawesi Tenggara apabila layanan memungkinkan.

Jenis kebutuhan utama:

### Wedding

* Akad Nikah
* Pemberkatan
* Resepsi
* Engagement
* Wedding Content

### Event

* Birthday
* Gathering
* Family Event
* Corporate/Event kecil
* Celebration
* Acara lainnya

Mayoritas pengguna diperkirakan:

* datang dari Instagram;
* mengakses melalui smartphone;
* menggunakan jaringan seluler;
* ingin mengetahui harga dengan cepat;
* terbiasa berkomunikasi melalui WhatsApp.

Oleh karena itu desain harus menggunakan pendekatan **mobile-first**.

---

## 4. Scope Produk V1

Landing page dibuat sebagai **Single Page Application**.

Tidak terjadi reload halaman ketika pengguna berpindah proses.

Terdapat empat tampilan utama:

1. Landing / Hero
2. Form Kebutuhan
3. Konfirmasi
4. Pricelist

Flow utama:

```text
Instagram
    ↓
Landing Page
    ↓
Dapatkan Pricelist
    ↓
Form Kebutuhan
    ↓
Konfirmasi
    ↓
Pricelist
    ↓
Chat via WhatsApp
```

Tersedia juga jalur alternatif:

```text
Landing Page
    ↓
WhatsApp
```

untuk calon klien yang ingin langsung menghubungi admin tanpa mengisi form.

---

## 5. Di Luar Scope V1

Fitur berikut tidak dibuat pada versi pertama:

* Login pengguna
* Akun pelanggan
* Dashboard admin
* Database leads
* Supabase
* CMS
* Booking otomatis
* Kalender ketersediaan
* Payment gateway
* Invoice otomatis
* Pembayaran online
* Sistem membership
* Email automation
* CRM
* Backend API

Penambahan fitur tersebut hanya dipertimbangkan apabila kebutuhan bisnis sudah terbukti setelah landing page digunakan.

---

# 6. User Flow

## 6.1 Flow Utama

```text
[Landing]

     ↓

Klik "Dapatkan Pricelist"

     ↓

[Form Kebutuhan]

     ↓

Submit

     ↓

[Konfirmasi]

     ↓

Auto redirect ±1–1,5 detik

     ↓

[Pricelist]

     ↓

Klik "Chat via WhatsApp"

     ↓

WhatsApp terbuka
dengan pesan yang sudah terisi
```

---

## 6.2 Flow Alternatif

Pengguna yang belum ingin mengisi form tetap dapat memilih:

**Chat langsung via WhatsApp**

dari landing page.

Pesan pada jalur ini tidak memiliki data form.

---

# 7. Landing Page

Landing merupakan halaman pertama ketika pengguna membuka website.

Tujuan utamanya:

* membangun trust;
* menjelaskan layanan;
* menunjukkan hasil pekerjaan;
* mengarahkan pengguna menuju pricelist.

---

## 7.1 Navigation

Navbar sederhana.

Isi:

* Logo Kenara Visuals
* Layanan
* Portfolio
* Area
* Instagram
* CTA Pricelist

Pada mobile dapat menggunakan navigation sederhana atau hamburger apabila diperlukan.

Navbar tidak boleh terlalu dominan.

---

# 8. Hero Section

Hero harus langsung menjelaskan:

1. siapa Kenara;
2. layanan apa yang diberikan;
3. di mana area pelayanan;
4. tindakan berikutnya.

Contoh positioning:

> **Kamu Nikmati Momennya. Kami Abadikan Ceritanya.**

Wedding & Event Content Creator untuk Kendari & Unaaha.

Membantu mengabadikan momen penting menjadi konten yang siap disimpan dan dibagikan.

CTA utama:

**Dapatkan Pricelist**

CTA sekunder:

**Chat WhatsApp**

Tambahan opsional setelah harga final tersedia:

> Paket mulai dari Rp XXX.XXX

Tujuannya memberi gambaran budget tanpa membuka seluruh pricelist.

---

# 9. Section Layanan

Menjelaskan dua kategori layanan utama.

## Wedding

Contoh:

* Akad Nikah
* Pemberkatan
* Resepsi
* Engagement
* Wedding Content

Deskripsi singkat:

> Dokumentasi momen pernikahan dari persiapan sampai momen penting acara.

---

## Event

Contoh:

* Birthday
* Gathering
* Celebration
* Family Event
* Event lainnya

Deskripsi singkat:

> Dokumentasi berbagai acara personal maupun event dengan pendekatan konten yang natural.

---

# 10. Section "Hasil yang Kamu Dapatkan"

Section ini menjelaskan manfaat yang dibeli pelanggan, bukan hanya daftar layanan.

Headline contoh:

> **Bukan Sekadar Dokumentasi.**

atau:

> **Momen Hari Ini, Konten yang Bisa Dinikmati Kembali.**

Value proposition awal:

### Real-time Content

Momen penting direkam selama acara berlangsung.

### Ready to Share

Konten dibuat agar cocok digunakan untuk media sosial.

### Personal Coverage

Pengambilan konten disesuaikan dengan kebutuhan dan karakter acara.

Copy final masih dapat disesuaikan setelah positioning brand Kenara ditentukan.

---

# 11. Section Portfolio

Menampilkan contoh hasil pekerjaan Kenara Visuals.

Pada tahap development menggunakan placeholder.

Struktur portfolio dapat berupa:

* grid;
* masonry;
* carousel ringan.

Contoh kategori:

* F&A
* Y&R
* S&F
* D&A
* Y&A
* D&R
* R&O

Foto asli akan diganti sebelum website dipublikasikan.

Prioritas:

* wedding;
* candid moment;
* decoration;
* preparation;
* couple;
* event atmosphere.

Asset harus dioptimasi agar ukuran file kecil.

Format yang direkomendasikan:

* WebP
* AVIF apabila diperlukan.

---

# 12. Section Cakupan Area

Area utama:

**Kendari & Unaaha**

Copy contoh:

> Melayani dokumentasi Wedding & Event di Kendari, Unaaha, dan area sekitarnya.

Apabila terdapat biaya transport untuk area tertentu, informasi tersebut dapat ditambahkan setelah aturan operasional ditentukan.

---

# 13. Kenapa Kenara Visuals

Section ini memiliki maksimal tiga value proposition agar tidak terlalu panjang.

Placeholder awal:

### Natural & Personal

Mengabadikan momen secara natural tanpa membuat acara terasa seperti produksi yang kaku.

### Social Media Ready

Konten dibuat dalam format yang mudah digunakan kembali untuk Instagram, TikTok, atau platform lainnya.

### Fokus pada Momen

Kami membantu menangkap momen kecil yang sering tidak sempat diperhatikan ketika acara berlangsung.

Copy final akan ditinjau kembali sebelum publish.

---

# 14. Social Proof

Apabila tersedia, landing page dapat menampilkan:

* jumlah acara yang pernah ditangani;
* testimonial;
* screenshot feedback pelanggan.

Namun fitur ini bersifat opsional pada V1.

Tidak menggunakan testimonial palsu atau data placeholder saat production.

---

# 15. CTA Sebelum Footer

Headline contoh:

> **Punya acara dalam waktu dekat?**

Subheadline:

> Ceritakan kebutuhanmu dan lihat paket Kenara Visuals yang tersedia.

CTA:

**Dapatkan Pricelist**

---

# 16. Contact & Footer

Footer menampilkan:

### Instagram

* @kenara.visuals
* @kenara.event

### WhatsApp

Nomor sementara:

`6285190948215`

Nomor final harus dikonfirmasi sebelum deployment production.

Footer juga menampilkan:

**Kenara Visuals — Wedding & Event Content Creator**

Kendari & Unaaha.

---

# 17. Form Kebutuhan Calon Klien

Form dirancang sesingkat mungkin karena sebagian besar pengguna menggunakan HP.

---

## Field

### Nama Lengkap

Jenis:

```text
text
```

Status:

**Wajib**

---

### Nomor WhatsApp Aktif

Jenis:

```text
tel
```

Status:

**Wajib**

Validasi dasar diperlukan.

---

### Jenis Layanan

Status:

**Wajib**

Preferensi UI:

menggunakan selectable cards/button daripada dropdown jika tampilannya tetap sederhana.

Pilihan:

```text
Wedding
Event
```

Jika Wedding:

```text
Akad
Pemberkatan
Resepsi
Akad + Resepsi
Lainnya
```

Jika Event:

```text
Birthday
Gathering
Celebration
Event lainnya
```

Implementasi dapat disederhanakan menjadi satu daftar apabila lebih praktis.

---

### Tanggal Acara

Jenis:

```text
date
```

Status:

Opsional.

Gunakan native date picker browser agar ringan.

---

### Lokasi

Status:

**Wajib**

Pilihan:

```text
Kendari
Unaaha
Lainnya
```

Jika memilih:

```text
Lainnya
```

munculkan input tambahan:

```text
Nama kota / lokasi acara
```

---

### Catatan Tambahan

Jenis:

```text
textarea
```

Status:

Opsional.

Contoh placeholder:

> Ceritakan sedikit kebutuhan acara kamu...

---

### Persetujuan WhatsApp

Checkbox wajib:

> Saya setuju untuk menghubungi dan/atau dihubungi Kenara Visuals melalui WhatsApp terkait kebutuhan acara saya.

Checkbox harus dicentang sebelum form dapat dilanjutkan.

---

# 18. Tombol Submit

Label:

**Dapatkan Pricelist & Chat Kami**

Setelah ditekan:

1. validasi form;
2. simpan data sementara di state browser;
3. tampilkan halaman konfirmasi;
4. arahkan pengguna ke pricelist.

Tidak ada request ke server.

---

# 19. Confirmation Screen

Confirmation tidak digunakan sebagai halaman tunggu panjang.

Durasi rekomendasi:

**±1–1,5 detik**

Pesan contoh:

> **Terima kasih, [Nama]!**

> Kami sudah menyiapkan pilihan paket untuk kebutuhan acara kamu.

Tombol:

**Lihat Pricelist Sekarang**

Apabila pengguna tidak menekan tombol tersebut, sistem otomatis berpindah ke pricelist.

---

# 20. Pricelist

Pricelist menampilkan seluruh paket layanan Kenara Visuals.

Data pada tahap awal masih berupa placeholder.

---

## Struktur Paket

Hindari paket yang hanya dibedakan berdasarkan nama seperti:

```text
Basic
Standard
Premium
```

apabila tidak menjelaskan kebutuhan pelanggan.

Nama paket sebaiknya mencerminkan kebutuhan.

Contoh sementara:

### Wedding Content

Untuk coverage acara utama.

### Wedding Full Coverage

Untuk kebutuhan dokumentasi lebih panjang atau lebih lengkap.

### Event Content

Untuk gathering, birthday, dan event lainnya.

Nama final mengikuti layanan Kenara sebenarnya.

---

# 21. Informasi Setiap Paket

Setiap card paket minimal menampilkan:

* Nama paket
* Harga
* Durasi coverage
* Jenis output
* Jumlah / estimasi konten
* Highlight layanan
* Area pelayanan
* Estimasi delivery jika tersedia

Contoh struktur:

```text
Wedding Content

Mulai Rp X.XXX.XXX

✓ Coverage 4 jam
✓ X vertical videos
✓ X edited contents
✓ Raw content
✓ Ready for social media
```

Semua data ini masih placeholder sebelum Kenara memberikan pricelist final.

---

# 22. Paket Populer

Opsional.

Salah satu paket dapat diberi badge:

**Paling Sering Dipilih**

Tujuannya membantu pengguna memahami paket yang umum digunakan.

Tidak perlu menggunakan teknik yang terlalu agresif seperti countdown palsu atau diskon palsu.

---

# 23. CTA WhatsApp pada Pricelist

CTA utama:

**Konsultasikan Paket via WhatsApp**

atau:

**Chat via WhatsApp**

Nomor:

```text
6285190948215
```

Format:

```text
https://wa.me/6285190948215?text=ENCODED_MESSAGE
```

---

# 24. Format Pesan WhatsApp

Pesan harus terasa natural dan mudah dibaca admin.

Contoh:

```text
Halo Kenara Visuals 👋

Saya [Nama], ingin konsultasi mengenai layanan [Jenis Layanan].

Detail acara:

Tanggal: [Tanggal]
Lokasi: [Lokasi]

Catatan:
[Catatan]

Saya sudah melihat pricelist di website Kenara Visuals.

Boleh dibantu untuk rekomendasi paket yang cocok?
```

Jika tanggal atau catatan tidak tersedia, bagian tersebut tidak perlu ditampilkan.

---

# 25. Tombol Isi Ulang Form

Pada halaman pricelist tersedia tombol sekunder:

**Ubah Detail Acara**

atau:

**Isi Ulang Form**

Pengguna dapat kembali ke form tanpa reload.

Data sebelumnya tetap muncul selama halaman belum direfresh.

---

# 26. Penyimpanan Data

Tidak menggunakan database.

Data form hanya disimpan sementara pada:

```text
React State
```

atau mekanisme client-side sederhana.

Data digunakan untuk:

* menampilkan personalisasi;
* membuat WhatsApp message.

Data tidak dikirim ke server.

Data akan hilang ketika halaman:

* direfresh;
* ditutup;
* browser membersihkan state.

---

# 27. Definisi Lead

Karena tidak ada database, submit form **tidak berarti data calon klien sudah tersimpan oleh Kenara**.

Lead baru tercatat ketika pengguna benar-benar:

1. menekan tombol WhatsApp;
2. membuka WhatsApp;
3. mengirim pesan.

Riwayat WhatsApp menjadi sumber pencatatan lead pada V1.

---

# 28. Navigation State

Walaupun berupa SPA, perpindahan halaman harus tetap mendukung browser navigation.

Contoh state:

```text
/
#form
#confirmation
#pricelist
```

atau menggunakan History API.

Tujuannya:

* tombol Back tetap berfungsi;
* pengguna tidak langsung keluar dari website;
* UX terasa seperti halaman normal.

---

# 29. Technical Stack

Frontend:

```text
React
Tailwind CSS
```

Opsional:

```text
Vite
```

untuk build tooling.

Tidak diperlukan Next.js untuk V1 karena:

* tidak ada server;
* tidak ada database;
* tidak ada dynamic route;
* tidak ada authentication;
* halaman hanya berupa static SPA.

Namun apabila Kenara ingin menyatukannya dengan ekosistem Next.js yang sudah dimiliki, Next.js tetap dapat digunakan.

---

# 30. Content Configuration

Konten yang sering berubah tidak boleh ditulis tersebar di dalam component.

Gunakan struktur konfigurasi terpusat.

Contoh:

```text
src/
  config/
    site.ts
    services.ts
    packages.ts
    portfolio.ts
    contact.ts
```

Contoh:

```ts
export const contact = {
  whatsapp: '6285190948215',
  instagramVisuals: '@kenara.visuals',
  instagramEvent: '@kenara.event',
};
```

Dengan demikian nomor WA, harga, layanan, dan informasi bisnis mudah diganti tanpa mengubah banyak component.

---

# 31. Component Architecture

Contoh struktur:

```text
src/

components/
  Navbar
  Hero
  Services
  Benefits
  Portfolio
  CoverageArea
  WhyKenara
  CTA
  Footer

  LeadForm
  Confirmation
  PriceList
  PriceCard

config/
  site.ts
  services.ts
  packages.ts
  portfolio.ts
  contact.ts

utils/
  whatsapp.ts

App.tsx
```

---

# 32. Mobile First Design

Prioritas utama:

```text
375px – 430px
```

Kemudian responsive untuk:

* tablet;
* laptop;
* desktop.

CTA utama harus mudah ditekan menggunakan satu tangan.

Ukuran target tombol minimum sekitar:

```text
44px
```

untuk kenyamanan mobile.

---

# 33. Visual Direction

Style tidak boleh terasa seperti template SaaS generik.

Visual mengikuti karakter Kenara Visuals.

Arah desain:

* dark;
* elegant;
* modern;
* visual-heavy tetapi tetap ringan.

Referensi brand:

* logo huruf K;
* background gelap;
* gradient accent;
* photography-focused.

Hindari terlalu banyak:

* card;
* shadow;
* border;
* gradient berbeda-beda;
* animasi berlebihan.

---

# 34. Animasi

Gunakan animasi kecil apabila membantu UX.

Contoh:

* fade section;
* subtle slide;
* button interaction;
* form transition.

Hindari animasi berat.

Landing page harus tetap nyaman pada HP kelas menengah.

Respect:

```text
prefers-reduced-motion
```

---

# 35. Performance

Target utama:

* cepat dibuka dari link Instagram;
* tetap nyaman pada jaringan seluler.

Prinsip:

* optimized images;
* lazy loading portfolio;
* tidak menggunakan video background besar;
* tidak menggunakan library besar jika tidak diperlukan;
* minim third-party script;
* font seminimal mungkin.

---

# 36. Accessibility

Minimum:

* semantic HTML;
* label form jelas;
* keyboard navigation;
* kontras teks cukup;
* alt text untuk portfolio;
* focus state terlihat;
* tombol memiliki accessible label.

---

# 37. SEO Dasar

Walaupun trafik utama berasal dari Instagram, halaman tetap memiliki metadata dasar.

Title contoh:

```text
Kenara Visuals | Wedding & Event Content Creator Kendari
```

Description contoh:

```text
Wedding & Event Content Creator di Kendari dan Unaaha. Abadikan momen pernikahan dan acara spesial bersama Kenara Visuals.
```

Tambahkan:

* Open Graph image;
* favicon;
* brand logo;
* social metadata.

---

# 38. Analytics

Tidak wajib pada MVP.

Namun disarankan setelah production untuk mengetahui conversion funnel:

```text
Landing
↓
Klik Pricelist
↓
Submit Form
↓
View Pricelist
↓
Klik WhatsApp
```

Analytics dapat ditambahkan setelah website aktif tanpa mengubah arsitektur utama.

---

# 39. Placeholder Content

Berikut data yang masih perlu diberikan oleh Kenara sebelum production:

### Pricelist

* jumlah paket;
* nama paket;
* harga;
* durasi;
* deliverables;
* add-on;
* ketentuan transport.

### Portfolio

Foto dari project:

* F&A
* Y&R
* S&F
* D&A
* Y&A
* D&R
* R&O
* project lainnya.

### Contact

Konfirmasi nomor final:

```text
6285190948215
```

### Brand

* logo final;
* favicon;
* warna utama;
* gradient utama.

### Copywriting

Finalisasi:

* hero headline;
* benefit;
* why Kenara;
* CTA.

---

# 40. Definition of Done

Landing page dianggap selesai apabila seluruh kondisi berikut terpenuhi.

### Functional

* Landing tampil dengan benar.
* CTA menuju form.
* Validasi form berfungsi.
* Confirmation tampil.
* Auto redirect berjalan.
* Pricelist dapat dibuka.
* Data form berhasil masuk ke WhatsApp message.
* Tombol WhatsApp membuka nomor yang benar.
* Tombol kembali / browser navigation berfungsi.
* Tidak terjadi full reload antar-flow utama.

### Responsive

Diuji minimal pada:

```text
375px
390px
430px
768px
1024px
1440px
```

### Performance

* portfolio lazy-loaded;
* tidak ada asset berat yang tidak diperlukan;
* loading awal cepat.

### Content

Semua placeholder mudah ditemukan melalui file config.

### Production

* nomor WhatsApp final sudah benar;
* portfolio asli sudah dimasukkan;
* pricelist final sudah dimasukkan;
* tidak ada placeholder yang tersisa.

---

# 41. Success Metric Awal

Karena belum menggunakan CRM atau database, metric paling sederhana adalah:

### Traffic

Berapa banyak orang membuka landing page.

### Form Completion

Berapa banyak orang menyelesaikan form.

### WhatsApp Click

Berapa banyak orang menekan CTA WhatsApp.

### Conversion sederhana

```text
WhatsApp Click
÷
Landing Page Visitors
```

Ini dapat digunakan sebagai dasar pengembangan versi berikutnya.

---

# 42. Potensi V2

Hanya dipertimbangkan apabila V1 sudah berjalan dan kebutuhan bisnis muncul.

Contoh:

* tracking leads;
* Supabase;
* dashboard admin;
* CMS portfolio;
* booking availability;
* automated follow-up;
* Google Calendar integration;
* payment;
* invoice;
* analytics funnel;
* Meta Pixel;
* Google Ads conversion tracking.

Fitur-fitur tersebut bukan bagian dari V1.

---

# 43. Keputusan Arsitektur V1

Arsitektur final yang direkomendasikan:

```text
Static React SPA

        ↓

Config-driven Content

        ↓

Landing
Form
Confirmation
Pricelist

        ↓

WhatsApp Deep Link
```

Tidak ada backend.

Tidak ada database.

Tidak ada authentication.

WhatsApp menjadi titik akhir conversion.

---

# 44. Development Flow

Tahap pengerjaan:

```text
1. Setup React + Tailwind
        ↓
2. Buat design system dasar
        ↓
3. Landing page
        ↓
4. Portfolio placeholder
        ↓
5. Form
        ↓
6. Confirmation
        ↓
7. Pricelist
        ↓
8. WhatsApp message generator
        ↓
9. Responsive testing
        ↓
10. Performance optimization
        ↓
11. Masukkan konten Kenara asli
        ↓
12. Final QA
        ↓
13. Deploy
```

---

# 45. Prinsip Produk

V1 harus tetap sederhana.

Tujuan sistem bukan membuat platform booking yang kompleks.

Tujuan sistem adalah:

> **Mengubah orang yang datang dari Instagram menjadi percakapan WhatsApp yang lebih siap untuk closing.**

Semua fitur yang tidak membantu flow tersebut sebaiknya tidak dimasukkan pada versi pertama.
