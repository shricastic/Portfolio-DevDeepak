import Shapes from "@/components/my-components/Home/GoldenShapes";
import Background from "@/components/my-components/Home/Background";
import Hero from "@/components/my-components/Home/Hero";
import About from "@/components/my-components/About/About";
import FacebookClone from "@/components/my-components/Projects/FacebookClone";
import SuperGuest from "@/components/my-components/Projects/SuperGuest";

export const metadata = {
  title: "Web Dev | Deepak Bhattarai",
};
export default function Home() {
  return (
    <main className="relative overflow-x-hidden ">
      <section className="h-[200vh] w-screen top-full relative snap-mandatory snap-both ">
        <div className="fixed h-screen w-screen top-0">
          <section className="grid place-items-center relative h-screen">
            <Shapes></Shapes>
            <Hero></Hero>
            <Background></Background>
          </section>
        </div>
        <About></About>
      </section>

      <section className="h-[200vh] relative z-50  bg-black">
        <FacebookClone></FacebookClone>
        <SuperGuest></SuperGuest>
      </section>
    </main>
  );
}
