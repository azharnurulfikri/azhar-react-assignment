# 📚 BookSales App - React JS Dasar

Project ini merupakan tugas mata kuliah React JS Dasar dalam program SIB Mandiri di NF Academy. Aplikasi ini menampilkan daftar koleksi buku secara dinamis menggunakan React Hooks dan styling Bootstrap.

## 🚀 Fitur Utama
- **Render Data Dinamis:** Menampilkan minimal 9 data buku dari file `Utils/books.js`.
- **Manajemen State:** Menggunakan `useState` untuk menyimpan dan menampilkan data buku.
- **Fitur Tambah Buku:** (Nilai Tambah) Terdapat tombol untuk menambahkan data buku baru secara otomatis menggunakan *spread operator*.
- **Desain Responsif:** Menggunakan Bootstrap 5 untuk layouting kartu buku agar rapi di berbagai ukuran layar.
- **Custom Assets:** Menggunakan gambar lokal yang disimpan di folder `public` untuk performa yang lebih stabil.

## 🛠️ Teknologi yang Digunakan
- **Frontend:** React.js (Vite)
- **Styling:** CSS3 & Bootstrap 5
- **Data Management:** JavaScript (ES6+)
- **Icons/Images:** Unsplash & Local Assets

## 📂 Struktur Folder Utama
```text
src/
├── Pages/
│   ├── Book.jsx       # Komponen utama untuk menampilkan list buku
│   └── Book.css       # Custom styling untuk layout kartu buku
├── Utils/
│   └── books.js       # Database lokal (Array of Objects) berisi 9+ data buku
├── App.jsx            # Entry point aplikasi
└── main.jsx           # Render engine Vite
