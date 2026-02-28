"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "FinTech Support Bot",
        category: "Conversational AI",
        description: "Reduced support ticket volume by 65% for a leading neo-bank.",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "Legal Document Analyzer",
        category: "NLP / Custom Solution",
        description: "Automated contract review process, saving 200+ hours per month.",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        title: "E-com Personalization",
        category: "Recommendation Engine",
        description: "Increased conversion rate by 25% through personalized product feeds.",
        gradient: "from-amber-500 to-orange-500",
    },
];

export function Cases() {
    return (
        <section id="cases" className="py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Success Stories</h2>
                        <p className="text-slate-400 max-w-lg">
                            Real results we've delivered for forward-thinking companies.
                        </p>
                    </div>
                    <a href="#" className="text-primary hover:text-white transition-colors flex items-center gap-2">
                        View all projects <ArrowUpRight size={18} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 border border-white/5"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-xs font-semibold tracking-wider uppercase text-white/60 mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
