
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { github } from "../assets";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="h-full"
    >
        <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-500/20 bg-[#071F18]/80 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/70 hover:shadow-[0_15px_45px_rgba(16,185,129,0.12)]">

          {/* Project image */}
          <div className="relative h-[220px] w-full overflow-hidden rounded-xl bg-[#030712]">
            <img
              src={image}
              alt={`${name} project screenshot`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/50 via-transparent to-transparent opacity-60" />

            {/* GitHub shortcut */}
            {source_code_link && source_code_link !== "#" && (
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${name} source code on GitHub`}
                className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-emerald-500 hover:text-black"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="h-5 w-5 object-contain"
                />
              </a>
            )}

            {/* Project number */}
            <span className="absolute bottom-3 left-3 rounded-full border border-emerald-400/30 bg-black/60 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-md">
              PROJECT 0{index + 1}
            </span>
          </div>

          {/* Project information */}
          <div className="mt-5 flex flex-1 flex-col">
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-emerald-400">
              {name}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
              {description}
            </p>

            {/* Technology tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <span
                  key={`${name}-${tag.name}`}
                  className={`rounded-full border border-white/5 bg-white/[0.04] px-3 py-1 text-xs font-medium ${tag.color}`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            {/* Project links */}
            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">

              {live_demo_link && live_demo_link !== "#" && (
                <a
                  href={live_demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-[#030712] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                >
                  Live Demo
                  <ExternalLink size={15} />
                </a>
              )}

              {source_code_link && source_code_link !== "#" && (
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 px-4 py-2.5 text-sm font-semibold text-emerald-300 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/10"
                >
                  <img
                    src={github}
                    alt=""
                    className="h-4 w-4 object-contain"
                  />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* Section heading */}
      <motion.div variants={textVariant()}>
        <p className="text-sm font-medium uppercase tracking-[4px] text-emerald-400">
          What I've Built
        </p>

        <h2 className={styles.sectionHeadText}>
          Featured Projects
          <span className="text-emerald-400">.</span>
        </h2>
      </motion.div>

      {/* Introduction */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 max-w-3xl text-[16px] leading-8 text-gray-400"
      >
        These are some of my personal and academic projects, where I apply
        my knowledge of frontend development, backend technologies, and
        database integration. Each project represents my learning journey,
        technical growth, and passion for building practical web applications.
      </motion.p>

      {/* Project cards */}
      <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
