import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row mx-5">
          <div className="mb-4 md:mb-0 ">
            <h3 className="text-xl font-semibold mb-2">Redes</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/hector-rafael-diaz-rodriguez-685033263/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/iWildGuns"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/hrdr1995/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-pink-400 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="mb-4 md:mb-0 ">
            <h3 className="text-xl font-semibold mb-2 ">Contactos</h3>
            <div>
              <p>
                mail: <span>hrdr1995@gmail.com</span>
              </p>
              <p>
                tfl. movil: <span>+54 11 2506 5257</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
