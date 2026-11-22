# Assignment 26 - React Styling

Landing page kursus/edukasi LMS sederhana yang dibangun dengan React sebagai implementasi mini project pada materi React Styling, React Components, dan Props.

## Nama Pembuat

Muhammad Fadli Purnama - FWD#13

## Ringkasan Project

Project ini menampilkan halaman utama platform edukasi bernama **EDUCODE**. Tampilan mencakup header navigasi, bagian hero, daftar manfaat, daftar kursus, dialog detail kursus, serta footer.

## Cara Menjalankan Proyek Secara Lokal

Prasyarat:

- Node.js
- npm

Langkah instalasi dan pengembangan:

```bash
npm install
npm run dev
```

Vite akan menampilkan alamat server pengembangan di terminal, biasanya `http://localhost:5173`.

Perintah lain yang tersedia:

```bash
npm run build
npm run preview
npm run lint
```

## Tech Stack & Styling Setup

- React 19
- Vite 8
- Tailwind CSS 4 melalui `@tailwindcss/vite`
- React Router DOM untuk routing halaman
- TanStack React Query sebagai provider aplikasi
- CSS variables pada `src/index.css`
- Atomic Design untuk pengorganisasian komponen
- Lucide React untuk ikon
- shadcn dan Base UI untuk komponen UI

Styling utama menggunakan utility class Tailwind CSS bersama CSS variables. Tema terang dan gelap didefinisikan melalui `[data-theme="light"]` dan `[data-theme="dark"]` di `src/index.css`, lalu dipetakan ke token Tailwind melalui blok `@theme inline`.

## Struktur Folder & Arsitektur Komponen

```text
assignment-26-react/
├── public/
│   └── assets/images/       # Logo, ilustrasi, dan gambar kursus
├── src/
│   ├── components/
│   │   ├── atoms/           # Badge, button, card, dialog, dan ikon
│   │   ├── molecules/       # BenefitCard, CourseCard, CourseDialog, NavMenu
│   │   └── organisms/       # Header, Footer, dan section landing page
│   ├── data/                # Data manfaat dan daftar kursus
│   ├── lib/                 # Utility bersama
│   ├── pages/               # HomePage dan NotFoundPage
│   ├── services/            # Fungsi pengambilan data lokal
│   ├── App.jsx              # Routing utama dan layout aplikasi
│   ├── index.css            # Import Tailwind, CSS variables, dan tema
│   └── main.jsx             # Entry point React dan provider aplikasi
├── context/                 # Dokumen assignment
└── package.json
```

Organisasi komponen mengikuti pola Atomic Design:

- **Atoms**: elemen UI dasar yang reusable.
- **Molecules**: gabungan beberapa atom atau elemen UI dengan satu tanggung jawab.
- **Organisms**: bagian halaman yang lebih kompleks, seperti header, footer, dan section landing page.
- **Pages**: susunan organism dan section untuk membentuk halaman.
- **Data**: sumber data dummy untuk manfaat dan kursus.
- **Public**: aset statis yang dapat diakses langsung oleh aplikasi.

Data kursus dan manfaat dikirim ke komponen melalui props. Aplikasi juga memiliki halaman not-found untuk route yang tidak dikenali.

## Catatan Penggunaan AI

AI digunakan sebagai alat bantu atau alat diskusi untuk menjelaskan beberapa materi yang kurang dipahami, melakukan eksplorasi implementasi, serta membantu penyusunan dokumentasi README ini.
