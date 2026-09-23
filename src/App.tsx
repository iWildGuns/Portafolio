import Footer from "./components/Footer";
import Header from "./components/Header";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="bg-gray-900 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black py-3 px-6 sm:px-10">
        <About />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-10">
          <Skills />
          <Proyectos />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
