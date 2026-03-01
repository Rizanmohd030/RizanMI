import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef(null);
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        setError(false);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
            )
            .then(() => {
                setSending(false);
                setSent(true);
                formRef.current.reset();
                setTimeout(() => setSent(false), 4000);
            })
            .catch(() => {
                setSending(false);
                setError(true);
            });
    };

    return (
        <section id="contact" className="py-24 sm:py-32 lg:py-40 px-8 sm:px-16 lg:px-24">
            <div className="max-w-[700px] mx-auto text-center">
                {/* Label */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs sm:text-sm uppercase tracking-[0.3em] text-black/30 font-medium mb-6"
                >
                    Contact
                </motion.p>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black"
                >
                    Got a project idea?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mt-3 text-lg sm:text-xl text-black/40"
                >
                    Let's talk.
                </motion.p>

                {/* Form */}
                <motion.form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 space-y-5 text-left"
                >
                    <div>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Name"
                            required
                            className="w-full px-0 py-4 bg-transparent border-b border-black/10 text-black text-base sm:text-lg font-medium placeholder:text-black/25 focus:outline-none focus:border-black/40 transition-colors"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            required
                            className="w-full px-0 py-4 bg-transparent border-b border-black/10 text-black text-base sm:text-lg font-medium placeholder:text-black/25 focus:outline-none focus:border-black/40 transition-colors"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows={4}
                            required
                            className="w-full px-0 py-4 bg-transparent border-b border-black/10 text-black text-base sm:text-lg font-medium placeholder:text-black/25 focus:outline-none focus:border-black/40 transition-colors resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <div className="pt-6 flex justify-center">
                        <div className="bg-black w-fit">
                            <button
                                type="submit"
                                disabled={sending}
                                className="
                  px-10 sm:px-16 py-4
                  border-2 border-black bg-white text-black
                  font-bold uppercase tracking-wider text-sm sm:text-base
                  transition-transform duration-200
                  -translate-x-0 -translate-y-0
                  hover:-translate-x-[3px] hover:-translate-y-[3px]
                  active:translate-x-0 active:translate-y-0
                  disabled:opacity-50 disabled:cursor-not-allowed
                  cursor-pointer
                  flex items-center gap-3
                "
                            >
                                {sending ? "Sending..." : sent ? "Sent! ✓" : "Send it"}
                                {!sending && !sent && <span>→</span>}
                            </button>
                        </div>
                    </div>

                    {/* Status messages */}
                    {sent && (
                        <p className="text-center text-green-600 text-sm mt-4">
                            Message sent successfully!
                        </p>
                    )}
                    {error && (
                        <p className="text-center text-red-500 text-sm mt-4">
                            Something went wrong. Try again or email me directly.
                        </p>
                    )}
                </motion.form>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 flex justify-center gap-8 text-sm text-black/40"
                >
                    <a
                        href="https://www.linkedin.com/in/rizan-mohammed-ismail-b059b7269"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors uppercase tracking-widest"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/Rizanmohd030"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors uppercase tracking-widest"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.instagram.com/rizan__m/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors uppercase tracking-widest"
                    >
                        Instagram
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
