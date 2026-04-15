import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Portal from "../components/Portal";

// Import images to ensure they are bundled correctly by Vite
import kaushal1 from "../assets/images/kaushal 1.jpg";
import kaushal2 from "../assets/images/kaushal 2.jpg";
import kaushal3 from "../assets/images/kaushal 3.jpg";
import adc1 from "../assets/images/adc 1.jpg";
import adc2 from "../assets/images/adc 2.jpg";
import adc3 from "../assets/images/adc 3.jpg";
import hacksummit from "../assets/images/hacksummit.jpg";
import rizanProfile from "../assets/images/RizanProfile.JPG";

const achievementsList = [
  {
    year: "2025",
    title: "Kaushal Project Expo",
    desc: "Showcased an innovative tech project at the college-level expo, demonstrating problem-solving skills and technical proficiency.",
    badgeClass: "bg-[#FF5F56] text-white",
    hoverClass: "hover:border-[#FF5F56]",
    isMain: false,
    image: [
      kaushal1,
      kaushal2,
      kaushal3
    ],
    imagePosition: [
      "object-center",
      "object-center",
      "object-[75%_center]"
    ]
  },
  {
    year: "2024",
    title: "ACC's Design Challenge (ADC)",
    desc: "Emerged victorious in this prestigious national-level challenge hosted by IIIT Bangalore. Competed against top teams to deliver a cutting-edge design solution.",
    badgeClass: "bg-[#FFBD2E] text-black",
    hoverClass: "", // Handled inline for main achievement
    isMain: true,
    image: [
      adc1,
      adc2,
      adc3
    ],
    // Position classes to ensure the user is visible in the frame
    imagePosition: [
      "object-[center_5%]",  // adjusted to show face in pic 1
      "object-[center_35%]", // adjust vertical framing for pic 2 
      "object-[center_40%]"  // adjust vertical framing for pic 3
    ]
  },
  {
    year: "2023",
    title: "HackSummit",
    desc: "Actively participated in the HackSummit conducted by GLUG. Collaborated with peers to build and deploy a creative software solution under a tight deadline.",
    badgeClass: "bg-[#27C93F] text-white",
    hoverClass: "hover:border-[#27C93F]",
    isMain: false,
    image: hacksummit
  }
];

// Mobile-specific slideshow component for achievements with multiple images
const MobileSlideshow = ({ images, positions, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          src={images[currentIndex]}
          alt={`${alt} slide ${currentIndex + 1}`}
          className={`absolute inset-0 w-full h-full object-cover ${positions ? positions[currentIndex] : 'object-center'}`}
        />
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`}
          />
        ))}
      </div>
    </>
  );
};

export default function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [currentImageSlide, setCurrentImageSlide] = useState(0);

  useEffect(() => {
    const ach = achievementsList[hoveredIndex];
    if (Array.isArray(ach.image) && ach.image.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageSlide((prev) => (prev + 1) % ach.image.length);
      }, 2500); // changes every 2.5 seconds
      return () => clearInterval(timer);
    }
  }, [hoveredIndex]);

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 px-8 sm:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto relative">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm uppercase tracking-[0.3em] text-black/30 font-medium mb-6"
        >
          About
        </motion.p>

        {/* Heading & Profile Pic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14"
        >
          {/* Profile Image — Simple Neo-brutalist shadow */}
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 shrink-0 group perspective-1000">
            <div className="w-full h-full border-2 border-black rounded-xl overflow-hidden bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:-translate-y-3 group-hover:-translate-x-3 group-hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative flex flex-col">

              {/* Image Container */}
              <div className="relative overflow-hidden flex-1 bg-surface">
                <img
                  src={rizanProfile}
                  alt="Rizan"
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

            </div>
          </div>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black leading-tight max-w-[800px] transition-transform duration-300 hover:-translate-y-2 hover:-translate-x-2 cursor-default select-none"
          >
            Heyy, I'm <span className="ml-4 inline-block leading-[0.75] border-b-8 border-yellow-400" style={{ fontFamily: "'Sungkem', sans-serif", fontSize: "1.6em" }}>Rizan.</span>
          </h2>
        </motion.div>

        {/* Bio */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/60 leading-relaxed font-medium">
              Final-year Computer Science student and MERN Stack Developer based in Bangalore, India. I specialize in building scalable, high-performance web applications with clean architecture and smooth UI interactions.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/60 leading-relaxed font-medium">
              I enjoy turning complex problems into elegant digital experiences using modern technologies. Currently exploring AI-driven solutions to create real-world impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Skills */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-black/30 font-medium mb-3">
                Technologies
              </h4>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 leading-relaxed font-medium">
                React · Node.js · Express · MongoDB · JavaScript · Tailwind CSS · GSAP · Framer Motion · Git
              </p>
            </div>

            {/* Currently */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-black/30 font-medium mb-3">
                Currently
              </h4>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 leading-relaxed font-medium">
                Exploring GenAI and building cool projects.
              </p>
            </div>

            {/* Achievements Link */}
            <div className="pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block text-xl sm:text-2xl lg:text-4xl font-bold text-black border-b-[3px] border-transparent hover:border-black transition-colors duration-300 pb-1 text-left"
              >
                <span className="highlight">Want to learn about my achievements?</span> →
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Achievements Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <Portal>
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
                className="relative w-full max-w-5xl bg-white border-2 border-black rounded-xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row h-[85vh] md:h-[650px] overflow-hidden select-none"
              >
                {/* Header Bar */}
                <div className="absolute top-0 left-0 right-0 border-b-2 border-black bg-surface px-4 py-3 flex items-center justify-between z-20">
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

                {/* Left Side: Scrollable Content Area */}
                <div className="w-full md:w-1/2 pt-20 pb-8 px-8 sm:px-12 overflow-y-auto custom-scrollbar flex flex-col bg-white">
                  <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black mb-6">
                    Achievements
                  </h3>

                  <div className="space-y-6 pb-6">
                    {achievementsList.map((ach, idx) => (
                      <div key={idx} className="flex flex-col gap-4">
                        <div
                          onMouseEnter={() => {
                            if (hoveredIndex !== idx) {
                              setHoveredIndex(idx);
                              setCurrentImageSlide(0);
                            }
                          }}
                          className={`p-5 border-2 ${ach.isMain ? 'border-black bg-black/5 hover:bg-black/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : 'border-black/10 transition-colors ' + ach.hoverClass} rounded-lg rounded-tl-none relative group cursor-pointer`}
                        >
                          <div className={`absolute -top-3 -left-0.5 ${ach.badgeClass} text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border-2 border-black rounded-sm`}>
                            {ach.year}
                          </div>
                          <h4 className={`text-xl font-bold text-black mb-2 flex items-center gap-2 ${ach.isMain ? 'text-2xl font-black' : ''}`}>
                            {ach.title}
                            {ach.isMain && <span className="text-yellow-500 text-lg" title="Main Achievement">★</span>}
                          </h4>
                          <p className={`text-black/70 leading-relaxed text-sm ${ach.isMain ? 'font-medium' : ''}`}>
                            {ach.desc}
                          </p>
                        </div>

                        {/* Mobile-only image preview shown directly beneath the card since 'hover' right pane is hidden */}
                        <div className="md:hidden w-full h-48 sm:h-56 relative border-2 border-black rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-black/5">
                          {Array.isArray(ach.image) ? (
                            <MobileSlideshow images={ach.image} positions={ach.imagePosition} alt={ach.title} />
                          ) : (
                            <img
                              src={ach.image}
                              alt={ach.title}
                              className={`absolute inset-0 w-full h-full object-cover ${ach.imagePosition || 'object-center'}`}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Image Preview Area */}
                <div className="hidden md:block w-1/2 relative border-l-2 border-black bg-black/5 group overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={Array.isArray(achievementsList[hoveredIndex].image) ? achievementsList[hoveredIndex].image[currentImageSlide] : achievementsList[hoveredIndex].image}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      src={Array.isArray(achievementsList[hoveredIndex].image) ? achievementsList[hoveredIndex].image[currentImageSlide] : achievementsList[hoveredIndex].image}
                      alt="Achievement preview"
                      className={`absolute inset-0 w-full h-full object-cover ${Array.isArray(achievementsList[hoveredIndex].imagePosition) ? achievementsList[hoveredIndex].imagePosition[currentImageSlide] : (achievementsList[hoveredIndex].imagePosition || 'object-center')} group-hover:scale-110 transition-transform duration-700 ease-in-out`}
                    />
                  </AnimatePresence>

                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Slide Indicators if array */}
                  {Array.isArray(achievementsList[hoveredIndex].image) && achievementsList[hoveredIndex].image.length > 1 && (
                    <div className="absolute bottom-6 left-0 right-0 gap-2 flex justify-center z-10">
                      {achievementsList[hoveredIndex].image.map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 rounded-full transition-all duration-300 ${i === currentImageSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </Portal>
        )}
      </AnimatePresence>
    </section>
  );
}
