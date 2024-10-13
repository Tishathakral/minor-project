"use client";
import { motion } from 'framer-motion';
import React from 'react';

const HomePage = () => {
  return (
    <div className="relative">
      <section className="bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
          
          {/* Left Section (Image + Tagline) */}
          <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full scale-90"
                src="https://image.lexica.art/full_webp/fb448c6c-165c-456f-85ae-6495734f84cc"
                alt="AI Analyzing Documents"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0">
              <div className="p-4 sm:p-6 lg:p-8">
                <motion.div 
                  className="flex items-center" 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.6, duration: 1.2 }}
                >
                  <svg
                    className="w-10 h-10 text-yellow-500 dark:text-yellow-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h2 className="font-bold text-white dark:text-white text-5xl ml-2.5">InquiroAI</h2>
                </motion.div>
                <p className="max-w-xs mt-1.5 text-xl text-white dark:text-gray-200">
                  Empowering Document Analysis & SEO through AI-Driven Automation
                </p>
              </div>
            </div>
          </div>

          {/* Right Section (Heading + Buttons) */}
          <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
            <div className="absolute bottom-0 right-0 hidden lg:block">
              <img
                className="object-contain w-auto h-48"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                alt="Decorative lines"
              />
            </div>

            <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
              {/* Animated Heading */}
              <motion.h1
                className="text-4xl font-bold text-gray-800 dark:text-gray-100 sm:text-6xl xl:text-7xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
              >
                Unlock Insights <br />
                with Smart Document Analysis
              </motion.h1>

              {/* Animated Tagline */}
              <motion.p
                className="mt-8 text-xl text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
              >
                Utilize cutting-edge AI and NLP technologies to extract keywords, analyze documents, 
                and compare their similarities faster and more accurately than ever.
              </motion.p>

              {/* Explore & Learn More Buttons */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <motion.a
                  href="#explore"
                  className="inline-block px-6 py-3 mr-4 text-lg font-semibold text-white transition-all duration-200 bg-yellow-500 border border-transparent rounded-lg hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-500"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Explore Now
                </motion.a>
                <motion.a
                  href="#learn-more"
                  className="inline-block px-6 py-3 text-lg font-semibold text-yellow-500 transition-all duration-200 bg-white border border-yellow-500 rounded-lg hover:bg-yellow-50 hover:border-yellow-600 dark:bg-gray-800 dark:text-yellow-500 dark:border-yellow-500 dark:hover:bg-gray-700"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Learn More
                </motion.a>
              </div>

              <p className="mt-5 text-base text-gray-600 dark:text-gray-400">
                Revolutionize how you work with documents, today!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
