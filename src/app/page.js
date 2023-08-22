import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Landing from "@/components/landing";
import Navbar from "@/components/navbar";
import Project from "@/components/project";

export default function Home() {
  return (
    <main className="container z-0 m-auto flex min-h-screen flex-col items-center justify-between md:p-24 pb-5 md:pb-5">
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
