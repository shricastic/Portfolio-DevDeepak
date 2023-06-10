import Shapes from "@/components/my-components/Home/GoldenShapes";
import Background from "@/components/my-components/Home/Background";
import Hero from "@/components/my-components/Home/Hero";
import About from "@/components/my-components/About/About";

export const metadata = {
  title: "Web Dev | Deepak Bhattarai",
};
export default function Home() {
  return (
    <main className="relative w-[100dvw]">
      <section className="h-[210vh]">
        <Hero></Hero>
        <Background></Background>
        <Shapes></Shapes>
      </section>
      <section className="h-screen">
        <About></About>
      </section>
    </main>
  );
}
