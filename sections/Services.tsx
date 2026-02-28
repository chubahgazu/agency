"use client";

import { motion } from "framer-motion";
import { Bot, Zap, Code, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        icon: Zap,
        title: "Business Automation",
        description: "Streamline repetitive tasks and complex workflows with intelligent automation systems that work 24/7.",
    },
    {
        icon: Bot,
        title: "AI Chatbots",
        description: "Custom-trained LLMs that handle customer support, sales, and internal queries with human-like accuracy.",
    },
    {
        icon: Code,
        title: "Custom AI Solutions",
        description: "Tailor-made AI models and applications dealing with predictive analytics, computer vision, or NLP.",
    },
    {
        icon: BarChart3,
        title: "Data Integration",
        description: "Unify your data sources and leverage AI to gain actionable insights and drive decision making.",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Capabilities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        We leverage cutting-edge AI technologies to transform your business infrastructure.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
                                Learn more <ArrowRight className="ml-1 w-4 h-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
