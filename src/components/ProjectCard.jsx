import { motion } from "framer-motion";
import NeuButton from "../components/NeuButton";

export default function ProjectCard({ title, description, tech, liveUrl, gitUrl, image, accentColor = "#FF4500", reverse = false }) {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:direction-rtl" : ""}`}>
            {/* TEXT SIDE */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`${reverse ? "lg:order-2" : "lg:order-1"}`}
            >
                <div className="flex items-center gap-4">
                    <span
                        className="w-3 sm:w-4 h-3 sm:h-4 rounded-full flex-shrink-0"
                        style={{ backgroundColor: accentColor }}
                    />
                    <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-black uppercase tracking-tight text-black leading-none">
                        {title}
                    </h3>
                </div>

                <p className="mt-6 sm:mt-8 text-xl sm:text-2xl md:text-3xl text-black/60 leading-relaxed font-medium max-w-[650px]">
                    {description}
                </p>

                {tech && (
                    <p className="mt-5 text-sm sm:text-base uppercase tracking-[0.25em] text-black/40 font-bold">
                        {tech}
                    </p>
                )}

                <div className="mt-10 flex flex-wrap gap-4 sm:gap-6">
                    {liveUrl && <NeuButton href={liveUrl}>Watch Live</NeuButton>}
                    {gitUrl && <NeuButton href={gitUrl}>See Code</NeuButton>}
                </div>
            </motion.div>

            {/* IMAGE SIDE */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className={`${reverse ? "lg:order-1" : "lg:order-2"} group`}
            >
                {/* Mock Browser Window Container */}
                <div className="border-2 border-black rounded-xl overflow-hidden bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative">

                    {/* Header Bar */}
                    <div className="border-b-2 border-black bg-surface px-4 py-3 flex items-center gap-2 relative z-10">
                        <div className="w-3 h-3 rounded-full border border-black bg-white group-hover:bg-[#FF5F56] transition-colors duration-300 delay-75" />
                        <div className="w-3 h-3 rounded-full border border-black bg-white group-hover:bg-[#FFBD2E] transition-colors duration-300 delay-100" />
                        <div className="w-3 h-3 rounded-full border border-black bg-white group-hover:bg-[#27C93F] transition-colors duration-300 delay-150" />
                    </div>

                    {/* Image Container with Styling */}
                    <div className="bg-surface relative flex items-center justify-center p-4 sm:p-8 min-h-[300px] h-full overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-auto max-h-[400px] object-contain grayscale contrast-[1.1] opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-in-out"
                        />
                    </div>

                </div>
            </motion.div>
        </div>
    );
}
