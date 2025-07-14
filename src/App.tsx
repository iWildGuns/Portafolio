import Footer from "./components/Footer";
import Header from "./components/Header";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main className=" bg-indigo-500 py-3 px-10">
        <div className="my-5 py-10 text-justify ">
          <p className="text-white text-2xl indent-4">
            Estudiante de Tecnicatura Superior de desarrollo de software ||
            Conocimientos en creacion e integracion de APIs RESTfull mediante
            NodeJs y ExpressJs || Certificado Backend FullStack Develop
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
