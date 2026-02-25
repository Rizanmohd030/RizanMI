import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MoreProjects() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="pt-24 sm:pt-32 flex justify-center w-full">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-block text-lg sm:text-xl font-bold text-black border-b-2 border-transparent hover:border-black transition-colors duration-300"
                >
                    See my other projects ➔
                </button>
            </div>

            {/* More Projects Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                            className="relative w-full max-w-3xl bg-white border-2 border-black rounded-xl p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col max-h-[90vh]"
                        >
                            {/* Header Bar */}
                            <div className="absolute top-0 left-0 right-0 border-b-2 border-black bg-surface px-4 py-3 flex items-center justify-between rounded-t-xl z-20">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full border border-black bg-[#FF5F56]" />
                                    <div className="w-3 h-3 rounded-full border border-black bg-[#FFBD2E]" />
                                    <div className="w-3 h-3 rounded-full border border-black bg-[#27C93F]" />
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-black font-bold text-sm tracking-widest uppercase hover:text-[#FF5F56] transition-colors"
                                >
                                    Close [X]
                                </button>
                            </div>

                            {/* Scrollable Content Area */}
                            <div className="mt-12 overflow-y-auto pr-4 custom-scrollbar flex-1">
                                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black mb-6">
                                    Other Projects
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Sample Project 1 */}
                                    <div className="p-6 border-2 border-black rounded-xl hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 bg-white flex flex-col h-full">
                                        <h4 className="text-xl font-black uppercase text-black mb-2">Project Name</h4>
                                        <p className="text-black/60 text-sm mb-4 flex-1">A brief description of this cool side project, what it does, and why it's interesting.</p>
                                        <div className="flex gap-2 mb-6">
                                            <span className="text-[10px] font-bold uppercase tracking-widest bg-black/5 px-2 py-1 rounded">React</span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest bg-black/5 px-2 py-1 rounded">Node.js</span>
                                        </div>
                                        <a href="#" className="text-xs font-bold uppercase tracking-widest text-black border-b-2 border-black pb-0.5 inline-block w-fit hover:text-[#FF4500] hover:border-[#FF4500] transition-colors">
                                            View Code ➔
                                        </a>
                                    </div>

                                    {/* Sample Project 2 */}
                                    <div className="p-6 border-2 border-black rounded-xl hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 bg-white flex flex-col h-full">
                                        <h4 className="text-xl font-black uppercase text-black mb-2">Another Project</h4>
                                        <p className="text-black/60 text-sm mb-4 flex-1">Another brief description of a smaller side project or experiment.</p>
                                        <div className="flex gap-2 mb-6">
                                            <span className="text-[10px] font-bold uppercase tracking-widest bg-black/5 px-2 py-1 rounded">Python</span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest bg-black/5 px-2 py-1 rounded">FastAPI</span>
                                        </div>
                                        <a href="#" className="text-xs font-bold uppercase tracking-widest text-black border-b-2 border-black pb-0.5 inline-block w-fit hover:text-[#FF4500] hover:border-[#FF4500] transition-colors">
                                            View Code ➔
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
