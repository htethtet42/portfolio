
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-[100px]" />
      </div>

      {/* Hero introduction */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-emerald-400 shadow-[0_0_20px_#10b981]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-emerald-400 to-transparent" />
        </div>

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              5th Year Student · MTU
            </span>

            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm{" "}
              <span className="text-emerald-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.35)]">
                Htet Htet
              </span>
            </h1>

            <h2 className="mt-3 text-emerald-300 font-semibold text-xl sm:text-2xl">
              Full-Stack Developer
            </h2>

            <p className={`${styles.heroSubText} mt-5 text-gray-300 max-w-2xl`}>
              A fifth-year student at Mandalay Technological University,
              passionate about building modern web applications,
              creative digital experiences, and interactive 3D interfaces.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <a
                href="#work"
                className="px-7 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
              >
                Explore My Work →
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-xl border border-emerald-400/40 text-emerald-300 hover:bg-emerald-400/10 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive 3D object */}
      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-6 w-full flex justify-center items-center z-20">
        <a href="#about" aria-label="Scroll to about section">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-emerald-400/70 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-emerald-400 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
