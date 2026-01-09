import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { FluidBackground } from "./components/FluidBackground";

function App() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* 1. El fondo siempre va primero para quedar detrás de todo */}
      <FluidBackground />

      {/* 2. La navegación va fija en la parte superior */}
      <Navigation />

      {/* 3. Las secciones de contenido envueltas en un contenedor relativo */}
      <div className="relative z-10">
        <Hero />
        
        {/* Aquí es donde se añadieron los Proyectos */}
        <Projects /> 
        
        <About />
        <Contact />
      </div>
    </main>
  );
}

export default App;
