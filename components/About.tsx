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
            <p className="mb-3">
                Aprés l'obtention de mon {" "}
                <span className="font-medium">BTS SIO(slam)</span>, j'ai decider de poursuivre ma
                passion pour la programmation. Actuellement je fais une formation TP CDA(Concepteur développeur d'appplications) bac+3/4 au Greta des Hauts-de-seine afin de grandir en tant que{" "}
                <span className="font-medium">développeur d'applications</span>.{" "}
                <span className="italic">Ce que je préfère dans la programmation</span> c'est l'aspect de résolution de problèmes. J'<span className="">aime</span> le sentiment de trouver enfin une solution à un problème. Ma pile principale est
                {" "}
                <span className="font-medium">
                    Php, Java, Spring, Spring Boot, JavaScript, React, Angular, Mysql et MongoDB, Git, Docker
                </span>
                . Je connais également TypeScript,Python et C# Tailwind CSS, Vagrant, . Je cherche toujours à apprendre de nouvelles technologies. Je suis actuellement à la recherche d'un{" "}
                <span className="font-medium">d'un stage à partir du 10 Mars jusqu'au 23 Mai 2025</span> en tant que développeur d'applications.
            </p>

            <p>
                <span className="italic">Quand je ne code pas</span>, J'aime jouer au jeux vidéos, regarder des films et séries, faire du sport tel que la musculation et jouer au football. J'aime aussi{" "}
                <span className="font-medium">apprendre de nouvelles choses</span>.
            </p>
        </motion.section>
    )
}
