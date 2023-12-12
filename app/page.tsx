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
    <main className="relative overflow-x-hidden scroll-smooth">
      <section className="relative top-full w-screen snap-both snap-mandatory scroll-smooth">
        <div className="fixed top-0 h-screen w-screen">
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

        <section id="projects" className="relative z-50 bg-black">
          <Projects></Projects>
        </section>

        <Contact></Contact>
        <Footer></Footer>
      </section>
    </main>
  );
}
