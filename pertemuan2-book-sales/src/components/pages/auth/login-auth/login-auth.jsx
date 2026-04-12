import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="py-5">
      {" "}
      {/* Warna abu-abu (bg-body-secondary) sudah dihapus */}
      <div className="container d-flex justify-content-center">
        {/* Tambahkan border agar kotak tetap terlihat elegan di atas BG putih */}
        <div
          className="card rounded-4 shadow-sm border"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <div className="card-header p-4 pb-0 border-bottom-0 bg-transparent text-center">
            <h1 className="fw-bold mb-0 fs-4">BookSales</h1>
          </div>

          <div className="card-body p-4 pt-3">
            <form>
              <div className="form-floating mb-2">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <button
                className="w-100 mb-2 btn btn-primary rounded-3"
                type="submit"
              >
                Login
              </button>

              <hr className="my-3" />

              <h2 className="fs-6 fw-bold mb-3 text-center">
                Or use a third-party
              </h2>

              <div className="d-grid gap-2">
                <button
                  className="btn btn-sm btn-outline-secondary rounded-3"
                  type="button"
                >
                  <i className="fa-brands fa-google me-2"></i> Google
                </button>
                <button
                  className="btn btn-sm btn-outline-primary rounded-3"
                  type="button"
                >
                  <i className="fa-brands fa-facebook me-2"></i> Facebook
                </button>
                <button
                  className="btn btn-sm btn-outline-dark rounded-3"
                  type="button"
                >
                  <i className="fa-brands fa-github me-2"></i> GitHub
                </button>
              </div>
            </form>
            <p>
              Don't have any account yet? <Link to="/signUP">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
