"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import portfolioData from "@/data/portfolio.json";

const skillCategories = [
  { key: "languages", title: "Languages" },
  { key: "frameworks", title: "Frameworks & Libraries" },
  { key: "tools", title: "Tools & Platforms" },
  { key: "other", title: "Other Skills" },
] as const;

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skills[category.key].map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
