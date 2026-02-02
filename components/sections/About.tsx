"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import portfolioData from "@/data/portfolio.json";

export default function About() {
  const { avatar, name } = portfolioData.personal;
  const { summary, highlights } = portfolioData.about;

  return (
    <section id="about" className="py-20 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl transform rotate-6" />
              <div className="absolute inset-0 bg-gray-800 rounded-2xl overflow-hidden">
                <Image
                  src={avatar}
                  alt={name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {summary}
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-400">{highlight}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
