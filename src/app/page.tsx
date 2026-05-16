import Navbar from "@/components/NavBar";
import About from "@/sections/About";
import Contaсts from "@/sections/Contacts";
import Footer from "@/sections/Footer";
import Reviews from "@/sections/Reviews";
import Services from "@/sections/Services";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-5 py-[61px]">
        <div className="container mx-auto space-y-15 xl:space-y-20 2xl:space-y-25">
          <About />
          <Skills />
          <Services />
          <Reviews />
          <Contaсts />
        </div>
      </main>
      <Footer />
    </>
  );
}
