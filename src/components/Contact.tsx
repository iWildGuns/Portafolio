import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Hablemos
        </h2>

        <div className="grid items-start">
          {/* Direct Contact Buttons */}
          <div className="flex flex-col gap-4 justify-center">
            <p className="text-gray-300 mb-4">
              ¿Tienes un proyecto en mente o quieres charlar sobre tecnología?
            </p>

            <a
              href="mailto:hrdr1995@gmail.com"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <FaEnvelope className="text-indigo-400 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Enviar un Email</span>
            </a>

            <a
              href="https://wa.me/541125065257"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 group"
            >
              <FaWhatsapp className="text-green-400 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Mensaje por WhatsApp</span>
            </a>
          </div>

          {/* Minimalist Form */}
          {/* <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl">
            <form action="https://formspree.io/f/your-id-here" method="POST" className="flex flex-col gap-4 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="¿En qué puedo ayudarte?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <FaPaperPlane /> Enviar Mensaje
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </motion.section>
  );
}
