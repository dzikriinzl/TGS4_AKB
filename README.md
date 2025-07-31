# 📚 Lab-AKB-T4: Aplikasi Daftar Nama dan Font Kustom

Proyek ini adalah implementasi tugas mata kuliah Pengembangan Aplikasi Bergerak (AKB) untuk membuat aplikasi daftar nama dengan implementasi *font* kustom di React Native menggunakan Expo.

Aplikasi ini menampilkan daftar nama, di mana setiap nama dipasangkan dengan Nomor Induk Mahasiswa (NIM) dan ditampilkan menggunakan jenis *font* yang berbeda, sesuai dengan kriteria tugas.

## ✨ Fitur Utama

* **Daftar Nama dengan NIM:** Menampilkan 10 nama, lengkap dengan NIM, yang dibagi menjadi 5 nama sebelum dan 5 nama setelah urutan stambuk yang telah ditentukan.
* **Font Kustom Berbeda:** Setiap nama ditampilkan menggunakan jenis *font* yang berbeda, untuk mendemonstrasikan kemampuan memuat dan menggunakan *font* kustom.
* **Dukungan Font Statis & Variabel:** Implementasi meliputi pemuatan 5 *font* statis (tiap *weight* adalah *file* terpisah) dan 5 *font* *variable* (satu *file* mendukung banyak *weight*).
* **Tampilan Informatif:** Setiap item daftar juga menampilkan nama *font* yang digunakan untuk referensi.

## 🚀 Instalasi & Menjalankan Proyek

Pastikan Anda memiliki Node.js dan Expo CLI (atau menggunakan `npx expo`) terinstal di sistem Anda.

1.  **Clone Repository:**
    ```bash
    git clone [URL_REPO_ANDA]
    cd Lab-AKB-T4-main
    ```

2.  **Instal Dependensi:**
    ```bash
    npm install
    # atau
    yarn install
    ```

3.  **Instal Paket Font Google (jika menggunakan @expo-google-fonts):**
    Jika Anda memilih untuk menggunakan beberapa *font* dari Google Fonts via `@expo-google-fonts`, pastikan Anda telah menginstalnya:
    ```bash
    npx expo install @expo-google-fonts/roboto @expo-google-fonts/merriweather @expo-google-fonts/oswald @expo-google-fonts/lora @expo-google-fonts/playfair-display @expo-google-fonts/inter @expo-google-fonts/manrope @expo-google-fonts/outfit @expo-google-fonts/urbanist @expo-google-fonts/red-hat-mono
    ```
    *(Sesuaikan daftar ini dengan font @expo-google-fonts yang benar-benar Anda gunakan di proyek Anda.)*

4.  **Siapkan File Font Lokal (jika menggunakan font lokal):**
    Jika Anda memuat *font* dari folder `assets/fonts/` (seperti `Lora-Bold.ttf`, `Inter-Italic-VariableFont_opsz,wght.ttf`, dll.), pastikan *file-file* `.ttf` atau `.otf` tersebut sudah ada di lokasi yang benar seperti yang ditunjukkan di struktur proyek.

5.  **Jalankan Aplikasi:**
    ```bash
    npx expo start
    ```
    Setelah server berjalan, Anda bisa memindai kode QR dengan aplikasi Expo Go di perangkat *mobile* Anda atau menjalankannya di emulator.

## 📁 Struktur Proyek
├── .expo/
├── .vscode/
├── app/
│   ├── _layout.tsx           # Layout aplikasi utama & pemuatan font
│   └── index.tsx             # Halaman utama aplikasi
├── assets/
│   └── fonts/
│       ├── static/           # Font statis (.ttf)
│       │   ├── Lora-Bold.ttf
│       │   ├── MerriweatherSans-SemiBoldItalic.ttf
│       │   ├── Oswald-Regular.ttf
│       │   ├── PlayfairDisplay-Regular.ttf
│       │   └── Roboto-Black.ttf
│       └── variable/         # Font variabel (.ttf)
│           ├── Inter-Italic-VariableFont_opsz,wght.ttf
│           ├── Manrope-Bold.ttf
│           ├── Outfit-Black.ttf
│           ├── RedHatMono.ttf
│           └── Urbanist.ttf
├── components/
│   ├── NamaItem.tsx          # Komponen untuk menampilkan satu nama & font
│   └── NamaList.tsx          # Komponen untuk menampilkan daftar nama
├── constants/
│   ├── daftarFont.ts         # Daftar nama kunci font yang digunakan
│   └── daftarNama.ts         # Daftar NIM dan Nama mahasiswa
├── node_modules/
├── .gitignore
├── app.json
├── eslint.config.js
├── expo-env.d.ts
├── package-lock.json
├── package.json
├── README.md                 # File ini
└── tsconfig.json

## ⚙️ Detail Implementasi Tugas

### 1. Pemuatan Font (`app/_layout.tsx`)

* Menggunakan `expo-font`'s `useFonts` hook untuk memuat semua *font* di awal aplikasi.
* **5 Font Statis:** Diimpor langsung dari `assets/fonts/static/` menggunakan `import FontName from 'path/to/font.ttf';`. Contoh: `Roboto-Black.ttf`.
* **5 Font Variabel:** Diimpor langsung dari `assets/fonts/variable/` menggunakan `import FontName from 'path/to/font.ttf';`. Contoh: `Inter-Italic-VariableFont_opsz,wght.ttf`.
* Setiap *font* didaftarkan dengan nama kunci unik (misal: `"Roboto-Black"`) yang kemudian digunakan di `fontFamily` CSS.

### 2. Data Nama dan NIM (`constants/daftarNama.ts`)

* Daftar nama dan NIM disimpan dalam sebuah *array* objek.
* Struktur datanya adalah `Array<{ nim: string, nama: string }>`.
* Data dibagi menjadi 5 nama sebelum dan 5 nama setelah "urutan stambuk" yang diasumsikan sebagai batas pemisah dalam daftar.

### 3. Pemetaan Font ke Nama (`constants/daftarFont.ts` & `components/NamaList.tsx`)

* `daftarFont.ts` berisi *array* *string* nama kunci *font* yang persis sama dengan yang didaftarkan di `_layout.tsx`.
* `NamaList.tsx` mengiterasi `daftarNama` dan menggunakan *index* (`idx`) untuk mengambil *font* yang sesuai dari `daftarFont[idx]`, lalu meneruskannya ke `NamaItem`.

### 4. Menampilkan NIM dan Nama (`components/NamaItem.tsx`)

* Komponen `NamaItem` menerima `nim`, `nama`, dan `font` sebagai *props*.
* Teks ditampilkan dengan format **"NIM - Nama"** (contoh: "105841112122 - Aninisa Alfrini"), dan properti `fontFamily` diterapkan menggunakan *prop* `font` yang diterima.
* Nama *font* yang digunakan juga ditampilkan di bawah nama untuk informasi.

## 📝 Catatan Tambahan

* Pastikan nama file *font* di folder `assets/fonts/` Anda **persis** sama dengan yang diimpor di `_layout.tsx` (termasuk huruf besar/kecil, tanda baca, dan ekstensi).
* Jika terjadi *error* `Cannot find module`, coba jalankan `npx expo start --clear` atau pastikan tidak ada *typo* pada *path* atau nama *file*.

---