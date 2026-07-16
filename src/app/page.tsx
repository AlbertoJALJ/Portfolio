import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import GithubStats from "@/components/GithubStats";
import Skills from "@/components/Skills";
import Teaching from "@/components/Teaching";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <About />
        <Experience />
        <Services />
        <Projects />
        <GithubStats />
        <Skills />
        <Teaching />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
