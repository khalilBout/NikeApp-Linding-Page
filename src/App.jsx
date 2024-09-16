import Nav from "./components/Nav";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

function App() {
  return (
    <>
      <main className="">
        <Nav />
        <section className="pb-20 padding-container">
          <Hero />
        </section>

        <section className="py-8 padding-container">
          <PopularProducts />
        </section>

        <section className="py-8 padding-container">
          <SuperQuality />
        </section>

        <section className="py-8 padding-container">
          <Services />
        </section>

        <section className="py-8 padding-container">
          <SpecialOffer />
        </section>

        <section className="bg-pale-blue py-8 padding-container">
          <CustomerReviews />
        </section>

        <section className="py-8 padding-container">
          <Subscribe />
        </section>

        <section className="padding-container bg-black py-8">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
