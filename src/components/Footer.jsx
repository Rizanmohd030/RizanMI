export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-black border-t border-white/10">
            {/* Main footer body */}
            <div className="px-8 sm:px-16 lg:px-24 py-16 sm:py-20">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Col 1 — Brand */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-white text-2xl sm:text-3xl font-black uppercase tracking-tight">
                            Rizan.
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed max-w-[320px]">
                            Software developer based in Bangalore, India. Building scalable web apps and AI-driven experiences.
                        </p>
                        <a
                            href="mailto:rizanmohd030@gmail.com"
                            className="inline-block text-sm text-white/40 hover:text-white transition-colors duration-200 pt-2"
                        >
                            rizanmohd030@gmail.com
                        </a>
                    </div>

                    {/* Col 2 — Connect */}
                    <div className="space-y-4">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-semibold">Connect</p>
                        <ul className="space-y-3">
                            {[
                                { label: "LinkedIn", href: "https://www.linkedin.com/in/rizanmohd030/" },
                                { label: "GitHub", href: "https://github.com/Rizanmohd030" },
                                { label: "Instagram", href: "https://www.instagram.com/rizan__m/" },
                            ].map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Work */}
                    <div className="space-y-4">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-semibold">Work</p>
                        <ul className="space-y-3">
                            {[
                                { label: "RecipeHunt", href: "https://recipehunt.vercel.app/" },
                                { label: "Interview Assistant", href: "https://genai-resume.vercel.app/" },
                                { label: "Blog Platform", href: "https://personal-blog-self-six.vercel.app/" },
                            ].map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 px-8 sm:px-16 lg:px-24 py-5">
                <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/20">
                    <p>© {year} Rizan. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                        Available for opportunities
                    </p>
                </div>
            </div>
        </footer>
    );
}
