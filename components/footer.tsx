import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='mb-10 px-4 text-center text-gray-600'>
            <small className='mb-2 block text-xs dark:text-white/75'>
                &copy; GANDEGA Samba {currentYear}. Tous les droits sont réservées.
            </small>
            <p className='text-xs dark:text-white/75'>
                <span className='font-semibold '>A propos du site web:</span> Ce site à été réalisé avec React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend et hébergé sur Vercel hosting.
            </p>
        </footer>
    )
}
