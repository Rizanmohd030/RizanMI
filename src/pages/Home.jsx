import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
// later: About, Contact, Footer

function Home() {
  return (
    <>
      {/* Vanta Hero */}
      <Hero />

      {/* Main content after hero */}
      <main className="bg-[#F3F3F4]">
        <Projects />
        {/* <About /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default Home;
