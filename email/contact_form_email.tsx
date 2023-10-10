
import React from 'react'

import {Html,Body,Head,Heading,Hr,Container,Preview,Text, Section} from '@react-email/components'
import { Tailwind } from '@react-email/components'


type ContactFormEmailProps = {
    message: string
    senderEmail : string
}

export default function ContactFormEmail({ message, senderEmail} : ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview> Nouveau message depuis votre portfolio</Preview>
            <Tailwind>
                <Body className='bg-gray-100 text-black'>
                    <Container>
                        <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                            <Heading className='leadind-tight'>Vous avez reçu le message suivant depuis votre portfolio</Heading>
                            <Text>{senderEmail}</Text>
                            <Hr />
                            <Text>Envoyé par: {message}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
