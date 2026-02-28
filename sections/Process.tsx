"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Analysis",
        description: "We audit your current processes to identify bottlenecks and high-value automation opportunities.",
    },
    {
        number: "02",
        title: "Strategy",
        description: "We design a comprehensive roadmap and architecture tailored to your specific business goals.",
    },
    {
        number: "03",
        title: "Development",
        description: "Our engineers build and train your custom AI solution using the latest models and frameworks.",
    },
    {
        number: "04",
        title: "Launch & Scale",
        description: "We deploy the solution, train your team, and provide ongoing support to ensure scalability.",
    },
];

export function Process() {
    return (
        <section id="process" className="py-24 bg-black/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        How We Work
                    </motion.h2>
                    <p className="text-slate-400">Streamlined process from concept to deployment.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative z-10"
                            >
                                <div className="glass bg-black rounded-2xl p-6 text-center h-full border border-white/10 hover:border-primary/50 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xl font-bold text-white mx-auto mb-6 relative z-10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-slate-400 text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
