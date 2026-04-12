export default function Contact() {
  return (
    <>
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
    </>
  );
}
