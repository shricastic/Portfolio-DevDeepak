import About from "@/components/my-components/About/About";
import Projects from "@/components/my-components/Projects/Projects";
import Skills from "@/components/my-components/Skills";
import Contact from "@/components/my-components/Testimonial/Main";
import Footer from "@/components/my-components/Footer";
import Hero from "@/components/my-components/Home/Hero";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero></Hero>
      <About></About>
      <Skills></Skills>

      <Projects></Projects>

      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
