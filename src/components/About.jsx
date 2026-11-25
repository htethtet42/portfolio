
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Lightbulb,
  Rocket,
  Target,
  ArrowUpRight,
} from "lucide-react";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building responsive interfaces and developing backend functionality with database integration.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Enjoying challenges, exploring new technologies, and turning ideas into practical solutions.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    description:
      "Always improving my technical knowledge and exploring modern development practices.",
  },
  {
    icon: Target,
    title: "Career Growth",
    description:
      "Preparing for professional experience through internships, collaboration, and real-world projects.",
  },
];

const About = () => {
  return (
    <>
      {/* Section Heading */}
      <motion.div variants={textVariant()}>
        <p className="text-xs sm:text-sm uppercase tracking-[2px] sm:tracking-[3px] text-emerald-400">
          Get to know me
        </p>

        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          About Me<span className="text-emerald-400">.</span>
        </h2>
      </motion.div>

      {/* Main Introduction */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-5 sm:gap-7 lg:gap-8 items-stretch">

        {/* Introduction Card */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="relative min-w-0 overflow-hidden rounded-2xl sm:rounded-3xl border border-emerald-500/20 bg-tertiary p-5 sm:p-7 lg:p-9"
        >
          {/* Decorative Background */}
          <div className="absolute -right-20 -top-20 h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 sm:h-48 sm:w-48 rounded-full bg-emerald-600/10 blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 sm:w-10 bg-emerald-400" />

              <p className="text-xs sm:text-sm uppercase tracking-[2px] sm:tracking-[3px] text-emerald-400">
                Who I am
              </p>
            </div>

            <h3 className="mt-5 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-emerald-400">Htet Htet</span>.
            </h3>

            <p className="mt-2 text-base sm:text-lg font-medium text-gray-300">
              Aspiring Full-Stack Developer
            </p>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-secondary leading-7 sm:leading-[30px]">
              I'm Htet Nandar Aung, also known as Htet Htet, a
              university student at Mandalay Technological University
              (MTU). I have a strong interest in full-stack web
              development and enjoy transforming ideas into modern,
              responsive, and interactive web applications.
            </p>

            <p className="mt-4 text-sm sm:text-base text-secondary leading-7 sm:leading-[30px]">
              My development journey involves working with technologies
              such as React, JavaScript, Tailwind CSS, PHP, MySQL, Go,
              and Java. Through building projects, I've gained practical
              experience with frontend development, backend functionality,
              database integration, and application development.
            </p>

            <p className="mt-4 text-sm sm:text-base text-secondary leading-7 sm:leading-[30px]">
              I believe that becoming a good developer requires more
              than writing code. It takes curiosity, consistency,
              problem-solving, and the willingness to keep learning.
              I'm currently focused on improving my skills and preparing
              for the next step in my professional journey.
            </p>
          </div>
        </motion.div>

        {/* Developer Profile */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className="flex min-w-0 flex-col gap-5"
        >
          {/* Developer Identity */}
          <div className="relative flex-1 min-w-0 overflow-hidden rounded-2xl sm:rounded-3xl border border-emerald-500/20 bg-tertiary p-5 sm:p-7">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <Code2 className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-emerald-400" />

                <h3 className="text-base sm:text-lg font-bold text-white">
                  Developer Identity
                </h3>
              </div>

              <p className="mt-4 sm:mt-5 text-sm leading-7 text-secondary">
                I enjoy building web applications that combine attractive
                user interfaces with practical functionality. My interests
                include frontend development, backend systems, database
                management, and interactive web experiences. I'm also
                particularly interested in AI engineering and understanding
                how artificial intelligence works, from its underlying
                technologies to its real-world applications.
              </p>
            </div>
          </div>

          {/* Development Philosophy */}
          <div className="flex-1 min-w-0 rounded-2xl sm:rounded-3xl border border-emerald-500/20 bg-tertiary p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-emerald-400" />

              <h3 className="text-base sm:text-lg font-bold text-white">
                My Philosophy
              </h3>
            </div>

            <p className="mt-4 sm:mt-5 text-sm leading-7 text-secondary">
              I believe every great developer starts with curiosity
              and grows through consistent practice. I enjoy exploring
              new technologies, learning from mistakes, and improving
              every project I build.
            </p>

            <div className="mt-5 sm:mt-6 flex items-center gap-2 text-sm font-medium text-emerald-400">
              <Rocket className="h-4 w-4 shrink-0" />
              Learn, Build, Improve.
            </div>
          </div>
        </motion.div>
      </div>

      {/* My Mindset */}
      <motion.div
        variants={textVariant()}
        className="mt-16 sm:mt-20 lg:mt-24"
      >
        <p className="text-xs sm:text-sm uppercase tracking-[2px] sm:tracking-[3px] text-emerald-400">
          What drives me
        </p>

        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          My Mindset<span className="text-emerald-400">.</span>
        </h2>

        <p className="mt-4 max-w-3xl text-sm sm:text-base text-secondary leading-7 sm:leading-[30px]">
          I'm motivated by curiosity and the opportunity to create
          meaningful digital solutions. These are the principles
          that guide my development journey.
        </p>
      </motion.div>

      {/* Mindset Cards */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {highlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              variants={fadeIn("up", "spring", index * 0.15, 0.75)}
              whileHover={{ y: -8 }}
              className="group min-w-0 rounded-2xl border border-emerald-500/20 bg-tertiary p-5 sm:p-6 transition-all duration-300 hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.1)]"
            >
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 transition-all duration-300 group-hover:bg-emerald-400/20">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400" />
              </div>

              <h3 className="mt-5 sm:mt-6 text-base sm:text-lg font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-secondary">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Services */}
      <motion.div
        variants={textVariant()}
        className="mt-16 sm:mt-20 lg:mt-24"
      >
        <p className="text-xs sm:text-sm uppercase tracking-[2px] sm:tracking-[3px] text-emerald-400">
          My Expertise
        </p>

        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          What I Do<span className="text-emerald-400">.</span>
        </h2>
      </motion.div>

      {/* Service Cards */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 justify-items-center">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-[320px] min-w-0"
          >
            <div className="h-full rounded-2xl sm:rounded-[20px] bg-gradient-to-br from-emerald-400 to-emerald-900 p-[1px] shadow-[0_0_25px_rgba(16,185,129,0.08)]">
              <div className="flex min-h-[210px] sm:min-h-[250px] h-full flex-col items-center justify-center gap-6 sm:gap-8 rounded-2xl sm:rounded-[20px] bg-tertiary px-5 sm:px-8 py-7">
                <img
                  src={service.icon}
                  alt={service.title}
                  loading="lazy"
                  className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
                />

                <h3 className="text-center text-base sm:text-xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing Message */}
      <motion.div
        variants={fadeIn("up", "spring", 0.4, 0.75)}
        className="mt-14 sm:mt-16 lg:mt-20 rounded-2xl sm:rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-tertiary to-tertiary p-5 sm:p-8 lg:p-10"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs sm:text-sm uppercase tracking-[2px] sm:tracking-[3px] text-emerald-400">
              The journey continues
            </p>

            <h3 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
              Always learning. Always building.
            </h3>

            <p className="mt-3 max-w-2xl text-sm sm:text-base text-secondary leading-7">
              I'm excited to connect with people, explore opportunities,
              and contribute to projects that make a difference.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm sm:text-base font-semibold text-[#02140E] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]"
          >
            Let's Connect
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
