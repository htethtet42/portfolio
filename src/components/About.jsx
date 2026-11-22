
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Lightbulb,
  Rocket,
  Target,
  GraduationCap,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

import { styles } from "../styles";
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
        <p className="text-[14px] uppercase tracking-[3px] text-emerald-400">
          Get to know me
        </p>

        <h2 className={styles.sectionHeadText}>
          About Me<span className="text-emerald-400">.</span>
        </h2>
      </motion.div>

      {/* Main Introduction */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-8 items-stretch">
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-tertiary p-7 sm:p-9"
        >
          {/* Decorative Background */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-emerald-600/10 blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-emerald-400" />
              <p className="text-sm uppercase tracking-[3px] text-emerald-400">
                Who I am
              </p>
            </div>

            <h3 className="mt-6 text-3xl sm:text-4xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-emerald-400">
                Htet Htet
              </span>
              .
            </h3>

            <p className="mt-2 text-lg font-medium text-gray-300">
              Aspiring Full-Stack Developer
            </p>

            <p className="mt-6 text-secondary text-[16px] leading-[30px]">
              I'm Htet Nandar Aung, also known as Htet Htet, a
              university student at Mandalay Technological University
              (MTU). I have a strong interest in full-stack web
              development and enjoy transforming ideas into modern,
              responsive, and interactive web applications.
            </p>

            <p className="mt-4 text-secondary text-[16px] leading-[30px]">
              My development journey involves working with technologies
              such as React, JavaScript, Tailwind CSS, PHP, MySQL, Go,
              and Java. Through building projects, I've gained practical
              experience with frontend development, backend functionality,
              database integration, and application development.
            </p>

            <p className="mt-4 text-secondary text-[16px] leading-[30px]">
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
        className="flex flex-col gap-5"
>
        {/* Developer Identity Card */}
        <div className="relative flex-1 overflow-hidden rounded-3xl border border-emerald-500/20 bg-tertiary p-7">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <Code2 className="h-6 w-6 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">
                Developer Identity
              </h3>
            </div>

            <p className="mt-5 text-sm leading-7 text-secondary">
              I enjoy building web applications that combine attractive
              user interfaces with practical functionality. My interests
              include frontend development, backend systems, database
              management, and interactive web experiences. I'm also
              particularly interested in AI engineering and understanding
              how artificial intelligence works, from its underlying
              technologies to its real-world applications.
            </p>

            <div className="mt-12 flex flex-wrap gap-2">
            </div>
          </div>
        </div>

        {/* Development Philosophy Card */}
        <div className="flex-1 rounded-3xl border border-emerald-500/20 bg-tertiary p-7">
          <div className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">
              My Philosophy
            </h3>
          </div>

          <p className="mt-5 text-sm leading-7 text-secondary">
            I believe every great developer starts with curiosity
            and grows through consistent practice. I enjoy exploring
            new technologies, learning from mistakes, and improving
            every project I build.
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-400">
            <Rocket className="h-4 w-4" />
            Learn, Build, Improve.
          </div>
        </div>
      </motion.div>

      </div>

      {/* What I Focus On */}
      <motion.div
        variants={textVariant()}
        className="mt-24"
      >
        <p className="text-[14px] uppercase tracking-[3px] text-emerald-400">
          What drives me
        </p>

        <h2 className={styles.sectionHeadText}>
          My Mindset<span className="text-emerald-400">.</span>
        </h2>

        <p className="mt-4 max-w-3xl text-secondary text-[16px] leading-[30px]">
          I'm motivated by curiosity and the opportunity to create
          meaningful digital solutions. These are the principles
          that guide my development journey.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {highlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              variants={fadeIn("up", "spring", index * 0.15, 0.75)}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-emerald-500/20 bg-tertiary p-6 transition-all duration-300 hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.1)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 transition-all duration-300 group-hover:bg-emerald-400/20">
                <Icon className="h-6 w-6 text-emerald-400" />
              </div>

              <h3 className="mt-6 text-lg font-bold text-white">
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
        className="mt-24"
      >
        <p className="text-[14px] uppercase tracking-[3px] text-emerald-400">
          My Expertise
        </p>

        <h2 className={styles.sectionHeadText}>
          What I Do<span className="text-emerald-400">.</span>
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap justify-center gap-7">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="w-full xs:w-[250px]"
          >
            <div className="h-full rounded-[20px] bg-gradient-to-br from-emerald-400 to-emerald-900 p-[1px] shadow-[0_0_25px_rgba(16,185,129,0.08)]">
              <div className="flex min-h-[250px] h-full flex-col items-center justify-center gap-8 rounded-[20px] bg-tertiary px-8 py-7">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-16 w-16 object-contain"
                />

                <h3 className="text-center text-[20px] font-bold text-white">
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
        className="mt-20 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-tertiary to-tertiary p-8 sm:p-10"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[3px] text-emerald-400">
              The journey continues
            </p>

            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
              Always learning. Always building.
            </h3>

            <p className="mt-3 max-w-2xl text-secondary leading-7">
              I'm excited to connect with people, explore opportunities,
              and contribute to projects that make a difference.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-[#02140E] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]"
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
