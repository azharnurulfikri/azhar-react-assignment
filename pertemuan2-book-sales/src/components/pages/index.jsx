import Contact from "../shared/contact/contact";
import Hero from "../shared/hero";
import ProdukList from "../shared/prouduk-list/produk-list";
import Team from "../shared/team-section/team";

export default function Home() {
  return (
    <>
      <div className="container">
        <main>
          <Hero />
          <ProdukList />
          <Team />
          <Contact />
        </main>
      </div>
    </>
  );
}
