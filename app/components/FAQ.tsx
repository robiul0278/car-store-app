'use client';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';

const faqs = [
    {
        question: 'What materials are the toy cars made of?',
        answer: (
            <>
                Our toy cars are primarily made of high-quality die-cast metal with some plastic components for detailing.
                <br /><br />
                They are durable, child-safe, and built to last for both play and collection.
            </>
        ),
    },
    {
        question: 'Do the toy cars have moving parts?',
        answer: (
            <>
                Yes! Many of our models feature opening doors, hoods, trunks, and functional wheels for a realistic experience.
                <br /><br />
                Product descriptions specify which features are included.
            </>
        ),
    },
    {
        question: 'How long does shipping take?',
        answer: (
            <>
                Orders are processed within 24 hours. Standard shipping within the USA typically takes 3–5 business days.
                <br /><br />
                Expedited options are available at checkout.
            </>
        ),
    },
    {
        question: 'Can I return or exchange a toy car?',
        answer: (
            <>
                Yes, we accept returns or exchanges within 7 days of delivery if the item is unused and in its original packaging.
                <br /><br />
                Just contact our support with your order ID and reason for return.
            </>
        ),
    },
    {
        question: 'Are these toys safe for kids?',
        answer: (
            <>
                Absolutely. All our toy cars meet US safety standards and are free from small detachable parts for kids under 3.
                <br /><br />
                Please check the recommended age on each product page.
            </>
        ),
    },
];

export default function FAQ() {
    return (
        <section className="max-w-7xl mx-auto py-6 w-full md:py-16 lg:py-16">
            <div className="flex items-center justify-center gap-4 mb-10">
                <hr className="flex-grow border border-t border-red-700" />
                <h2 className="text-xl md:text-3xl font-bold text-center whitespace-nowrap">
                    Frequently Asked Questions
                </h2>
                <hr className="flex-grow border border-t border-cyan-700" />
            </div>
            <div className="space-y-6">
                {faqs.map(({ question, answer }, idx) => (
                    <Collapsible key={idx} defaultOpen={false}>
                        <CollapsibleTrigger className="flex justify-between w-full rounded-md border-2 px-6 py-2 font-medium text-start focus:outline-none focus:ring-2 focus:ring-cyan-500">
                            {question}
                            <span className="ml-2 text-cyan-500 font-bold text-xl">+</span>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="border border-t-0 rounded-b-md">
                            <div className="max-w-7xl mx-auto px-6 py-4">
                                {answer}
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                ))}
            </div>
        </section>
    );
}