//

export default function Header() {
  return (
    <div
      style={{ height: "50vh" }}
      className="py-10 relative min-h-[50vh] flex flex-col items-center justify-center bg-gradient-to-br from-indigo-800 to-blue-900 text-white "
    >
      <div className="relative flex flex-col items-start px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-4 w-full">
          <img
            src="../Perfil.jpg"
            alt="Perfil"
            className="w-40 h-40 sm:w-50 sm:h-50 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              <span className="block">Héctor Díaz Rafael</span>
              <span className="block text-blue-400">Rodríguez</span>
            </h1>
            <p className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-indigo-200">
              &#123; Full-Stack Developer Trainee &#125;
            </p>
            <p className="mt-1 text-base sm:text-lg md:text-xl text-indigo-300">
              Portafolio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
