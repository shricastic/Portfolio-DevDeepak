import Shapes from "@/components/my-components/Home/GoldenShapes";
import Background from "@/components/my-components/Home/Background";
import Hero from "@/components/my-components/Home/Hero";
import About from "@/components/my-components/About/About";
import Projects from "@/components/my-components/Projects/Projects";
import Skills from "@/components/my-components/Skills";
import Contact from "@/components/my-components/Contact/Main";
import Footer from "@/components/my-components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <section className="w-full">
        <div className="fixed top-0 h-screen w-full">
          <section
            id="home"
            className="relative grid h-screen place-items-center"
          >
            <Shapes></Shapes>
            <Hero></Hero>
            <Background></Background>
          </section>
        </div>
      </section>

      <section className="mt-[100vh]">
        <About></About>
        <Skills></Skills>

        <Projects></Projects>

        <Contact></Contact>
        <Footer></Footer>
      </section>
    </main>
  );
}
