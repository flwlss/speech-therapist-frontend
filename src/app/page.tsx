import Navbar from "@/components/NavBar";
import About from "@/sections/About";
import Contaсts from "@/sections/Contacts";
// import Rewiews from "@/sections/Reviews";
import Services from "@/sections/Services";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-5 py-[61px]">
        <div className="container mx-auto space-y-15">
          <About />
          <Skills />
          <Services />
          {/* <Rewiews /> */}
          <Contaсts />
        </div>
      </main>
    </>
  );
}
