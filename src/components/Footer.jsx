export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="py-10 sm:py-14 px-8 sm:px-16 lg:px-24 border-t border-black/5">
            <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-black/30">
                <p>
                    © {year} Rizan. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a
                        href="mailto:rizanmohd030@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors"
                    >
                        rizanmohd030@gmail.com
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rizanmohd030/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/Rizanmohd030"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
