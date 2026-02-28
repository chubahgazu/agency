"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
                >
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-slate-300">New: AI Agent Development Services</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    Automate Your Business <br />
                    with <span className="text-gradient">Intelligent AI</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
                >
                    We build custom AI solutions, chatbots, and automation workflows that
                    save time, reduce costs, and scale your operations 24/7.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="h-12 px-8 text-base rounded-full shadow-lg shadow-primary/25">
                        Get Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="h-12 px-8 text-base rounded-full border-white/10 hover:bg-white/5">
                        View Case Studies
                    </Button>
                </motion.div>

                {/* Floating Elements / Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 relative w-full max-w-5xl mx-auto"
                >
                    <div className="relative rounded-xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
                        {/* Mock UI Content */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

                        {/* Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/30">
                                    <Bot className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">AI Agent Active</h3>
                                <p className="text-slate-400">Processing real-time data...</p>
                            </div>
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 left-10 p-4 rounded-lg bg-black/80 border border-white/10 backdrop-blur-md w-48 hidden md:block"
                        >
                            <div className="h-2 w-20 bg-slate-700 rounded mb-2"></div>
                            <div className="h-2 w-32 bg-slate-800 rounded"></div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 right-10 p-4 rounded-lg bg-black/80 border border-white/10 backdrop-blur-md w-48 hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                </div>
                                <div>
                                    <div className="h-2 w-16 bg-slate-700 rounded mb-1"></div>
                                    <div className="h-2 w-10 bg-slate-800 rounded"></div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
