"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to send message");

            toast.success("Message sent successfully! We'll be in touch soon.");
            reset();
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-xl mx-auto glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-2">Ready to automate?</h2>
                        <p className="text-slate-400">Tell us about your project.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-slate-300">
                                Name
                            </label>
                            <input
                                {...register("name")}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                                placeholder="John Doe"
                            />
                            {errors.name && (
                                <p className="text-red-400 text-xs">{errors.name.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-slate-300">
                                Email
                            </label>
                            <input
                                {...register("email")}
                                type="email"
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                                placeholder="john@example.com"
                            />
                            {errors.email && (
                                <p className="text-red-400 text-xs">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-300">
                                Project Detail
                            </label>
                            <textarea
                                {...register("message")}
                                rows={4}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600 resize-none"
                                placeholder="How can we help you?"
                            />
                            {errors.message && (
                                <p className="text-red-400 text-xs">{errors.message.message}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90 text-white font-semibold py-6 rounded-xl shadow-lg shadow-primary/20"
                        >
                            {isSubmitting ? "Sending..." : "Send Request"}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
