import Footer from "./components/Footer";
import Header from "./components/Header";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="bg-gray-800 py-3 px-10">
        <div className="my-5 py-10 text-center">
          <p className=" px-auto text-white sm:text-2xl indent-4 max-w-auto">
            Bienvenido a mi portafolio. Soy un desarrollador backend junior
            especializado en tecnologías como Node.js y JavaScript, con
            experiencia en <b>Base de datos</b> relacionales y no relacionales, así
            como en la creación de <b>APIs REST</b>. Cada proyecto aquí refleja mi dedicación
            por la calidad del código y mi constante búsqueda de aprendizaje.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-10">
          <Skills />
          <Proyectos />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
