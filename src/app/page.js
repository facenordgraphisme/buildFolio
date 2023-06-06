import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Processus from "@/components/Processus";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      {/* <Processus /> */}
      <About />
      <Skills />
      <Contact />
      <Processus />
      <Footer />
    </div>
  );
}
