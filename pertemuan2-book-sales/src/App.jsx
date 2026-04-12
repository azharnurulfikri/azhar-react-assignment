import { Routes, Route } from "react-router-dom";
import Home from "./components/pages";
import Footer from "./components/shared/footer/footer";
import Books from "./components/pages/books";
import Contact from "./components/shared/contact/contact";
import Team from "./components/shared/team-section/team";
import Header from "./components/shared/Header/header";
import Login from "./components/pages/auth/login-auth/login-auth";
import SignUp from "./components/pages/auth/sign-auth/register";

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
