export default function ProdukList() {
  return (
    <>
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
    </>
  );
}
