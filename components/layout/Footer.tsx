import Link from "next/link";
import { Rocket, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-black pt-20 pb-10 overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20">
                                <Rocket className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-xl font-bold text-white">AI Agency</span>
                        </Link>
                        <p className="text-slate-400 max-w-sm mb-6">
                            Empowering businesses with intelligent automation and custom AI solutions.
                            We build the future of work.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Github].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-4">
                            {["AI Automation", "Chatbots", "Custom Solutions", "Consulting"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            {["About", "Process", "Careers", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2025 AI Agency. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-slate-500 hover:text-white text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-slate-500 hover:text-white text-sm">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
