"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What industries do you specialize in?",
        answer: "We primarily work with FinTech, E-commerce, and SaaS companies, but our AI solutions are industry-agnostic and can be tailored to any sector requiring automation.",
    },
    {
        question: "How long does it take to build a custom AI agent?",
        answer: "Simple chatbots can be deployed in 2-4 weeks. Complex custom agents with deep integrations usually take 8-12 weeks depending on scope and data readiness.",
    },
    {
        question: "Do you offer ongoing maintenance?",
        answer: "Yes, we provide monthly support packages to ensure your AI models stay accurate, secure, and compatible with your evolving infrastructure.",
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We adhere to SOC2 and GDPR standards. Your data is processed in isolated environments and is never used to train public models without explicit consent.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-black/50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-slate-400">Everything you need to know about our services.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/5 rounded-2xl bg-white/5 overflow-hidden">
                            <button
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-semibold text-lg">{faq.question}</span>
                                <ChevronDown
                                    className={cn(
                                        "w-5 h-5 text-slate-400 transition-transform duration-300",
                                        openIndex === index ? "rotate-180" : ""
                                    )}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-slate-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
