function App() {
  return (
    <>
      {/* navbar */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="#"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-2xl me-2"
                style={{ color: "rgb(177, 151, 252)" }}
              ></i>
              <span className="fs-4 fw-bold">BookSales</span>
            </a>
          </div>

          {/* Kolom Menu (Tengah) - HUBUNGKAN DI SINI */}
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2">
                Home
              </a>
            </li>
            <li>
              <a href="#koleksi" className="nav-link px-2 text-body-secondary">
                Book
              </a>
            </li>
            <li>
              <a href="#team" className="nav-link px-2 text-body-secondary">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link px-2 text-body-secondary">
                Contact
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Sign-up
            </button>
          </div>
        </header>
      </div>

      {/* Main Hero - Kita beri ID 'home' (opsional) */}
      <div className="container my-5" id="home">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Atomic Habits: Perubahan Kecil yang memberikan hasil luar biasa
            </h1>
            <p className="lead">
              Cara mudah yang terbukti untuk membentuk kebiasaan baik dan
              menghilangkan kebiasaan buruk
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Buy Now
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Detail
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-docs.png"
              alt="Hero Example"
              width="720"
            />
          </div>
        </div>
      </div>

      {/* Hero Home Section */}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold">Temukan Jendela Dunia Anda</h1>
            <p className="lead text-body-secondary">
              Selamat datang di BookSales. Kami menyediakan ribuan koleksi buku
              pilihan...
            </p>
            <p>
              {/* Tombol internal loncat ke grid koleksi */}
              <a
                href="#koleksi"
                className="btn btn-primary my-2 me-2 rounded-3 px-4"
              >
                Lihat Koleksi
              </a>
              <a
                href="#team"
                className="btn btn-outline-secondary my-2 rounded-3 px-4"
              >
                Tentang Kami
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Grid Album - ID 'koleksi' sudah ada */}
      <div id="koleksi" className="album py-5 bg-body-tertiary">
        <div className="container">
          <h2 className="pb-4 fw-bold text-center">Koleksi Buku</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div className="col" key={item}>
                <div className="card shadow-sm border-0 rounded-4 overflow-hidden h-100">
                  <img
                    src={`https://picsum.photos/seed/${item + 20}/400/250`}
                    className="card-img-top"
                    alt="Cover Buku"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Judul Buku {item}</h5>
                    <p className="card-text text-body-secondary">
                      Kisah inspiratif yang akan mengubah cara pandang Anda
                      tentang kehidupan.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-primary">Rp 85.000</span>
                      <button
                        type="button"
                        className="btn btn-sm btn-primary rounded-pill px-3"
                      >
                        Beli Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section - ID 'team' sudah ada */}
      <div className="container py-5" id="team">
        <h2 className="text-center fw-bold mb-5">Tim Kreatif Kami</h2>

        {/* Tambahkan justify-content-center biar kolomnya ngumpul di tengah */}
        <div className="row justify-content-center text-center">
          {/* Member 1: Azhar sebagai Lead Developer */}
          <div className="col-lg-4 mb-4">
            <img
              src="https://ui-avatars.com/api/?name=Azhar+Nurul+Fikri&background=random"
              className="rounded-circle shadow mb-3"
              width="140"
              height="140"
              alt="Azhar"
            />
            <h4 className="fw-bold">Azhar Nurul Fikri</h4>
            <p className="text-primary">Web Developer</p>
            <p>Mahasiswa Teknik Informatika</p>
          </div>
        </div>
      </div>

      {/* Contact Section - ID 'contact' sudah ada */}
      <div className="bg-light py-5" id="contact">
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 mb-3 text-body-emphasis">
                Hubungi Kami
              </h1>
              <p className="col-lg-10 fs-4">
                Punya pertanyaan seputar stok buku atau kerja sama? Kirimkan
                pesan Anda dan tim kami akan segera membalasnya.
              </p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <form className="p-4 p-md-5 border rounded-4 bg-white shadow-sm">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="nameInput"
                    placeholder="Nama Anda"
                  />
                  <label htmlFor="nameInput">Nama Lengkap</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="emailInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="emailInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control rounded-3"
                    id="messageInput"
                    placeholder="Pesan Anda"
                    style={{ height: "100px" }}
                  ></textarea>
                  <label htmlFor="messageInput">Pesan</label>
                </div>
                <button
                  className="w-100 btn btn-lg btn-primary rounded-3"
                  type="submit"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#koleksi" className="nav-link px-2 text-body-secondary">
                Book
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link px-2 text-body-secondary">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link px-2 text-body-secondary">
                Contact
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">
            © 2026 BookSales Company, Inc
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
