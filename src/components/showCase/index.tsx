'use client';
import {motion} from 'framer-motion';
import React from 'react';
import CustomImage from '../image';

interface ShowCaseProps {
  title: string;
  description: string;
  link: string;
  url: string;
}

const ShowCase = ({title, description, link, url}: ShowCaseProps) => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{y: 10, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.6, ease: 'easeInOut'}}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative overflow-hidden">
          <CustomImage
            alt={title}
            src={url}
            classes="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-6 space-y-3">
          <h5 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-pink-600 transition-colors duration-300">
            {title}
          </h5>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>
      </a>
    </motion.div>
  );
};

export default ShowCase;
