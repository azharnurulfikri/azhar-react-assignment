export default function Team() {
  return (
    <>
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
    </>
  );
}
