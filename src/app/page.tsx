import Navbar from "@/components/NavBar";
import About from "@/sections/About";
import Contacts from "@/sections/Contacts";
import Footer from "@/sections/Footer";
import Reviews from "@/sections/Reviews";
import Faq from "@/sections/Faq";
import Programs from "@/sections/Programs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <About />
        <Faq />
        <Programs />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
