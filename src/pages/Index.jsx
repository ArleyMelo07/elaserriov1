import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Levels from "@/components/Levels";
import About from "@/components/About";
import Values from "@/components/Values";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Levels />
        <About />
        <Values />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
