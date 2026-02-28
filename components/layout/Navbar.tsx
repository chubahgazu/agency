"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // We need to create this later, but for now I'll use standard button or create it inline if simple. 
// Actually, better to create a Button component first. I'll use a placeholder generic button for now, or just raw jsx. 
// I'll assume Button component for cleaner code and create it in next step.

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Cases", href: "#cases" },
    { name: "FAQ", href: "#faq" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "py-4" : "py-6"
            )}
        >
            <div className="container mx-auto px-4">
                <nav
                    className={cn(
                        "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
                        isScrolled
                            ? "bg-black/40 backdrop-blur-md border border-white/5 shadow-lg"
                            : "bg-transparent"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                            <Rocket className="w-5 h-5 text-primary" />
                            <div className="absolute inset-0 rounded-full bg-primary/20 blur-md group-hover:blur-lg transition-all" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">
                            AI Agency
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="#contact"
                            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all bg-primary rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                        >
                            Start Project
                        </Link>

                        <button
                            className="md:hidden text-slate-300 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 p-4 md:hidden"
                    >
                        <div className="p-4 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-300 hover:text-white py-2 px-4 rounded-lg hover:bg-white/5"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                className="w-full text-center py-3 font-semibold text-white bg-primary rounded-xl"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Start Project
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
