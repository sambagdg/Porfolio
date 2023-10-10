"use server";

import { Resend } from 'resend';
import { validateString, getErrormessage } from '@/lib/utils';
import ContactFormEmail  from '@/email/contact_form_email'
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const message = (formData.get("senderEmail"));
    const senderEmail = (formData.get("message"));

    if (!validateString(senderEmail, 500)) {
        return { error: 'Invalid sender email', };
    }

    if (!validateString(message, 5000)) {
        return { error: 'Invalid message', };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "sambagdg@gmail.com",
            subject: "Message contact form",
            // reply_to: senderEmail as string,
            react : React.createElement(ContactFormEmail, {message : message as string, senderEmail : senderEmail as string})
        });
    } catch (error: unknown) {
        return {
            error : getErrormessage(error),
        }
    }
    return {
        data,
    };
};