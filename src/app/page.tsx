import Navbar from "@/components/NavBar";
import About from "@/sections/About";
// import Contants from "@/sections/Contacts";
// import Rewiews from "@/sections/Reviews";
import Services from "@/sections/Services";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-5 pt-[61px]">
        <div className="container mx-auto space-y-15">
          <About />
          <Skills />
          <Services />
          {/* <Rewiews /> */}
          {/* <Contants /> */}
        </div>
      </main>
    </>
  );
}
