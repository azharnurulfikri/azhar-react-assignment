# 📚 Tugas Pertemuan 2: React Router & Form Login

Project ini adalah kelanjutan dari pengembangan aplikasi **BookSales**. Fokus utama pada tugas ini adalah mengubah web menjadi **Single Page Application (SPA)** menggunakan React Router dan menambahkan fitur pendaftaran/masuk.

## ✨ Update dari Tugas Sebelumnya
1. **Navigasi Tanpa Reload**: Mengganti semua tag `<a>` menjadi `<Link>` dan `<NavLink>` dari `react-router-dom` agar perpindahan halaman instan.
2. **Routing System**: Implementasi `BrowserRouter`, `Routes`, dan `Route` pada file `App.jsx` untuk mengatur alur navigasi aplikasi.
3. **Halaman Login Baru**: Membuat form login dan pendaftaran yang menggunakan *floating labels*, tombol media sosial (Google/Facebook), dan desain yang sepenuhnya responsif.
4. **Active Link Styling**: Menu pada Navbar akan otomatis berubah warna (aktif) sesuai dengan halaman yang sedang dikunjungi user.

## 🛠️ Komponen yang Dikerjakan
- `src/App.jsx`: Sebagai pusat pengaturan rute (Routing Center).
- `src/components/pages/login/index.jsx`: Komponen form login baru.
- `src/components/shared/Header/header.jsx`: Navigasi yang sudah terintegrasi dengan Link.
- `src/components/shared/Footer/footer.jsx`: Footer yang sudah dirapikan navigasinya.

## 🚀 Cara Menjalankan Project
Karena folder `node_modules` tidak disertakan dalam repository ini, ikuti langkah berikut:

1. **Buka Terminal** dan arahkan ke folder ini:
   ```bash
   cd pertemuan-2-book-sales
