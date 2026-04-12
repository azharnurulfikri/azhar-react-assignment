# 📚 BookSales - Web App (Tugas Pertemuan 2)

Project ini merupakan tugas dalam program **Studi Independen Bersertifikat (SIB) Mandiri Fullstack Web Development** di NF Academy. Fokus pada pertemuan ini adalah implementasi **React Router** untuk navigasi antar halaman dan **Styling Components** menggunakan Bootstrap.

## 🚀 Fitur Utama
- **Declarative Routing**: Navigasi antar halaman menggunakan `react-router-dom` tanpa reload (SPA).
- **Responsive Layout**: Header, Footer, dan Form yang menyesuaikan ukuran layar.
- **Modern Login Form**: Form pendaftaran dengan *floating labels* dan integrasi tombol pihak ketiga.
- **Active Navigation**: Menu navigasi yang berubah warna saat halaman sedang aktif (menggunakan `NavLink`).

## 🛠️ Tech Stack
- **Library Utama**: [React.js](https://react.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/) & FontAwesome Icons
- **Build Tool**: [Vite](https://vitejs.dev/)

## 📂 Struktur Halaman
| Rute | Komponen | Deskripsi |
| :--- | :--- | :--- |
| `/` | `Home` | Halaman utama katalog buku |
| `/books` | `Books` | Daftar koleksi buku yang tersedia |
| `/team` | `Team` | Informasi mengenai pengembang/tim |
| `/contact` | `Contact` | Form kontak dan layanan pelanggan |
| `/login` | `Login` | Halaman masuk/pendaftaran akun |

## 💻 Cara Menjalankan Project Lokal

1. **Clone Repository**
   ```bash
   git clone [URL_REPO_LU_DI_SINI]
   cd pertemuan2-book-sales
