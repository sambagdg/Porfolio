"use client"

import React from 'react';
import SectionHeading from './section_heading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';

import SubmitBtn from './submit_btn';
import { toast } from 'react-hot-toast';



export default function Contact() {
    const { ref } = useSectionInView("Contact");
    return (
        <motion.section ref={ref} id='contact' className='mb- 20 sm:mb-28 scroll-mt-28 w-[min(100%, 38rem)] text-center' initial = {{opacity: 0,}}whileInView={{opacity:1,}} transition={{duration:1,}} viewport={{once:true}}>
            <SectionHeading>Contact</SectionHeading>
            <p className='text-gray-700 dark:text-white/80'>Vous pouvez me contacter directement avec mon mail <a href="mailto: sambagdg@gmail.com" className='underline'>sambagdg@gmail.com </a>ou bien en remplissant le formulaire ci-dessous</p>
            <form
                className='mt-10 flex flex-col dark:text-black'
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                    } else {
                        toast.success("votre message à été envoyé avec succées !");
                    }
                }}>
                <input
                    required={true}
                    name='senderEmail'
                    placeholder='exemple@domain.com'
                    className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-gray-400 outline-gray-300'
                    type="email"
                    maxLength={500}
                />
                <textarea
                    placeholder='Votre message...'
                    name='message'
                    className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-gray-400 outline-gray-300'
                    maxLength={5000}
                    required={true}
                />
                <SubmitBtn/>
            </form>
        </motion.section>
    )
}
