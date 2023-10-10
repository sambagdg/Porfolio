"use client"

import React from 'react'
import SectionHeading from './section_heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
    const { ref } = useSectionInView("A_propos");
    return (
        <motion.section ref={ref} className='mb-28 max-w-[65rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial = {{opacity : 0, y: 100}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
        >
            <SectionHeading>A propos de moi</SectionHeading>
            <p className="mb-3 ">
                Aprés l'obtention de mon {" "}
                <span className="font-medium">BTS SIO(slam)</span>, j'ai decider de poursuivre ma
                passion pour la programmation. Actuellement je me suis inscrit en 3éme année de bachelor en ingénierie du web à l'ESGI afin de grandir en tant que{" "}
                <span className="font-medium">développeur full-stack</span>.{" "}
                <span className="italic">Ce que je préfère dans la programmation</span> c'est l'aspect de résolution de problèmes. J'<span className="">aime</span> le sentiment de trouver enfin une solution à un problème. Ma pile principale est
                {" "}
                <span className="font-medium">
                    Php, React, Next.js, Vuejs, Node.js, Bootstrap, Tailwind-Css, Mysql et MongoDB
                </span>
                . Je connais également TypeScript, Java, Python et C#. Je cherche toujours à apprendre de nouvelles technologies. Je suis actuellement à la recherche d'une{" "}
                <span className="font-medium">alternance rythme 3 samaines en entreprise/ 1 semaine en formation</span> en tant que développeur web.
            </p>

            <p>
                <span className="italic">Quand je ne code pas</span>, J'aime jouer au jeux vidéos, regarder des films et séries, faire du sport tel que la musculation et jouer au football. J'aime aussi{" "}
                <span className="font-medium">apprendre de nouvelles choses</span>.
            </p>
        </motion.section>
    )
}
