import Navbar from "@/components/NavBar";
import About from "@/sections/About";
import Contants from "@/sections/Contacts";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-5 pt-[61px]">
        <div className="container mx-auto">
          <About />
          <Services />
          <Contants />
        </div>
      </main>
    </>
  );
}
