"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/ui/SocialLinks";
import { copyToClipboard } from "@/lib/utils";
import portfolioData from "@/data/portfolio.json";

export default function Contact() {
  const { email, location, social } = portfolioData.personal;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(email);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's talk."
        />

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-lg p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <p className="text-gray-400 text-lg mb-6">
                I&apos;m always open to discussing new opportunities, creative ideas, or
                potential collaborations. Feel free to reach out!
              </p>

              <div className="flex items-center justify-center gap-2 text-gray-500 mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{location}</span>
              </div>
            </div>

            {/* Email button */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={`mailto:${email}`}
                  className="text-white hover:text-gray-300 transition-colors text-lg font-medium"
                >
                  {email}
                </a>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy
                    </>
                  )}
                </Button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 w-full max-w-xs">
                <div className="flex-1 h-px bg-gray-800" />
                <span className="text-gray-600 text-sm">or connect on</span>
                <div className="flex-1 h-px bg-gray-800" />
              </div>

              {/* Social links */}
              <SocialLinks social={social} size="lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
