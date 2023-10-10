"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active_section_context';

export default function Intro() {
  const { ref } = useSectionInView("Accueil", 0.5);
  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
  return (
    <section ref={ref} className='mb-25 max-w-[70rem] text-center sm:mb-0 scroll-mt-[100rem]' id='home'>
      <div className="flex items-center justify-center mb-10">
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2
            }}
          >
            <Image src="/samba.png"
                alt='photo'
                width="192"
                height="192"
                quality="95"
                priority={true}
                className='w-30 h-30 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
              />
          </motion.div>

          <motion.span
            className='absolute text-4xl bottom-5 right-2'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ✌️
          </motion.span>
          </div>
      </div>
      <motion.p
        className='mb-7 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate = {{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hey, Je m'appelle Samba</span> Je suis un apprenti et futur{" "}
        <span className="font-bold">développeur full-stack.</span> je suis passioné par la création{" "}
        <span className="italic">d'applications web et mobiles innovantes</span>. Explorez mon site pour en savoir plus sur mes{" "}
          <span className="font-bold">compétences et mes projets antérieurs !</span>.
      </motion.p>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link href="#contact"
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-gray-50 dark:text-black'
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
            Contacte-moi <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>
        <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10' href='/GANDEGA_SAMBA_CV.pdf' target ="_blank">Télécharger mon CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/></a>
        <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60' href = "https://www.linkedin.com/in/gandegasamba/?originalSubdomain=fr" target= '_blank'><BsLinkedin/></a>
        <a className='bg-white p-4  text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60' href ="https://github.com/sambagdg" target ="_blank"><FaGithubSquare/></a>
      </motion.div>
    </section>
  )
}
