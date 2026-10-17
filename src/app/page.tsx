import Navbar from "@/components/NavBar";
import About from "@/sections/About";
import Contacts from "@/sections/Contacts";
import Footer from "@/sections/Footer";
import Reviews from "@/sections/Reviews";
import Services from "@/sections/Services";
import Faq from "@/sections/Faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-5 py-[61px]">
        <div className="container mx-auto space-y-15 xl:space-y-20 2xl:space-y-25">
          <About />
          <Faq />
          <Services />
          <Reviews />
          <Contacts />
        </div>
      </main>
      <Footer />
    </>
  );
}
