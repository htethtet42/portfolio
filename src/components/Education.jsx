
import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Award,
  Code2,
  Globe,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const educationData = [
  {
    period: "2021 – Present",
    title: "Mandalay Technological University",
    subtitle: "University Education",
    description:
      "I began my university journey at Mandalay Technological University in the 2021–2022 academic year. Throughout my studies, I have been developing my technical knowledge, problem-solving abilities, and interest in software development through academic learning and practical projects.",
    icon: GraduationCap,
    status: "Currently Studying",
  },
  {
    period: "Previous Education",
    title: "Hsu Private High School",
    subtitle: "Grade 10",
    description:
      "I successfully completed Grade 10 at Hsu Private High School, achieving four distinctions. This achievement strengthened my commitment to learning and motivated me to continue pursuing my academic goals.",
    icon: Award,
    status: "Completed",
  },
];

const goals = [
  {
    icon: BriefcaseBusiness,
    title: "Internship Opportunity",
    description:
      "As I prepare to enter my final year next academic year, I am looking for a suitable company where I can gain real-world experience, apply my development skills, and learn from experienced professionals.",
  },
  {
    icon: Globe,
    title: "Learning Japanese",
    description:
      "One of my future goals is to learn the Japanese language and understand Japanese culture.",
  },
  {
    icon: Code2,
    title: "Career in Japan",
    description:
      "In the future, I hope to explore opportunities to work in Japan, contribute to software development projects, and grow as an international developer.",
  },
];

const Education = () => {
  return (
    <>
      {/* Section Heading */}
      <motion.div variants={textVariant()}>
        <p className="text-emerald-400 uppercase tracking-[3px] text-sm">
          My Academic Journey
        </p>

        <h2 className={styles.sectionHeadText}>
          Education<span className="text-emerald-400">.</span>
        </h2>

        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Every step in my education has helped shape my knowledge,
          discipline, and passion for technology.
        </p>
      </motion.div>

      {/* Education Timeline */}
      <div className="mt-16 relative">
        <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-600 to-transparent" />

        <div className="flex flex-col gap-10">
          {educationData.map((education, index) => {
            const Icon = education.icon;

            return (
              <motion.div
                key={education.title}
                variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                className="relative pl-16"
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>

                {/* Education Card */}
                <div className="group rounded-2xl border border-emerald-500/20 bg-tertiary p-6 sm:p-8 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-emerald-400 text-sm font-semibold tracking-wide">
                      {education.period}
                    </span>

                    <span className="text-xs text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                      {education.status}
                    </span>
                  </div>

                  <p className="mt-4 text-secondary text-sm uppercase tracking-wider">
                    {education.subtitle}
                  </p>

                  <h3 className="mt-2 text-white text-xl sm:text-2xl font-bold">
                    {education.title}
                  </h3>

                  <p className="mt-4 text-secondary leading-7">
                    {education.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Future Goals */}
      <motion.div
        variants={textVariant()}
        className="mt-24"
      >
        <p className="text-emerald-400 uppercase tracking-[3px] text-sm">
          Beyond University
        </p>

        <h2 className={styles.sectionHeadText}>
          Future Goals<span className="text-emerald-400">.</span>
        </h2>

        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          I believe learning never stops. These are some of the goals
          I am working toward as I prepare for my professional career.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {goals.map((goal, index) => {
          const Icon = goal.icon;

          return (
            <motion.div
              key={goal.title}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-emerald-500/20 bg-tertiary p-7 hover:border-emerald-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-emerald-400" />
              </div>

              <h3 className="mt-5 text-white text-xl font-bold">
                {goal.title}
              </h3>

              <p className="mt-3 text-secondary leading-7">
                {goal.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Location */}
      <motion.div
        variants={fadeIn("up", "spring", 0.4, 0.75)}
        className="mt-12 flex items-center gap-3 text-secondary"
      >
        <MapPin className="w-5 h-5 text-emerald-400" />
        <span>Mandalay, Myanmar</span>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Education, "education");
