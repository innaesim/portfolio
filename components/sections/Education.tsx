"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import portfolioData from "@/data/portfolio.json";

export default function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <SectionHeading
          title="Education & Certifications"
          subtitle="My academic background and credentials"
        /> */}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-medium text-white">{edu.institution}</h4>
                        <p className="text-gray-400">
                          {edu.degree} in {edu.field}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500">{edu.period}</span>
                    </div>
                    {edu.achievements.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {/* <div>
            <h3 className="text-xl font-semibold text-white mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">{cert.name}</h4>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">{cert.date}</span>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="Verify certification"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
