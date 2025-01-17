"use client";

import React from 'react';
import { motion, } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active_section_context';

export default function Header() {
  const {activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <header className='z-[1000]'>
      <motion.div className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-gray-200 border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[45rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0' aria-label="Navigation principale">
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map((link) => (
            <motion.li className='flex relative justify-center items-center h-3/4 whitespace-no-wrap'
              key={link.hash}
              initial={{ y: -100 , opacity: 0 }}
              animate={{ y: 0 , opacity: 1 }}
            >
              <Link
                className={clsx('flex w-full items-center justify-center px-3 py-3 hover:text-sky-950 transition dark:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap', {
                  "text-gray-950 dark:text-gray-200" :activeSection === link.name,
                })}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
                aria-current={activeSection === link.name ? "page" : undefined}
              >
                {link.name}
                {
                  link.name === activeSection && (
                    <motion.span
                      className='absolute inset-0 bg-gray-200 rounded-full -z-10 dark:bg-gray-800'
                      layoutId='activeSection'
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    >
                    </motion.span>
                  )
                }
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
