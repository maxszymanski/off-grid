'use client'

import { useState } from 'react'
import Accorderon from './Accorderon'

const questions = [
    {
        title: 'Anonymous How does Off Grid work without KYC?',
        answer: 'Off Grid uses advanced cryptographic protocols to verify transactions without collecting personal data. Our zero-knowledge architecture ensures compliance while maintaining complete user anonymity. You load crypto, we handle the rest — no questions asked.',
    },
    {
        title: 'Which cryptocurrencies are supported?',
        answer: 'Off Grid uses advanced cryptographic protocols to verify transactions without collecting personal data. Our zero-knowledge architecture ensures compliance while maintaining complete user anonymity. You load crypto, we handle the rest — no questions asked.',
    },
    {
        title: 'How do I add funds to my Off Grid card?',
        answer: 'Off Grid uses advanced cryptographic protocols to verify transactions without collecting personal data. Our zero-knowledge architecture ensures compliance while maintaining complete user anonymity. You load crypto, we handle the rest — no questions asked.',
    },
    {
        title: 'Where can I use my Off Grid card?',
        answer: 'Off Grid uses advanced cryptographic protocols to verify transactions without collecting personal data. Our zero-knowledge architecture ensures compliance while maintaining complete user anonymity. You load crypto, we handle the rest — no questions asked.',
    },
    {
        title: 'What happens if my transaction gets declined?',
        answer: 'Off Grid uses advanced cryptographic protocols to verify transactions without collecting personal data. Our zero-knowledge architecture ensures compliance while maintaining complete user anonymity. You load crypto, we handle the rest — no questions asked.',
    },
    {
        title: 'Is there a mobile app and web interface?',
        answer: 'Off Grid uses advanced cryptographic protocols to verify transactions without collecting personal data. Our zero-knowledge architecture ensures compliance while maintaining complete user anonymity. You load crypto, we handle the rest — no questions asked.',
    },
]

function FaqQuestions() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0)

    const toggleAccordion = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
    }
    return (
        <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-2 py-8 lg:py-[60px]">
            {questions.map((item, idx) => (
                <Accorderon
                    key={idx}
                    isOpen={activeIndex === idx}
                    onClick={() => toggleAccordion(idx)}
                    answer={item.answer}
                    title={item.title}
                />
            ))}
        </div>
    )
}

export default FaqQuestions
