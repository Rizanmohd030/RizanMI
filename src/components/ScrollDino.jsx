import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DINO_BODY =
    "M80,100L76,100L76,114L72,114L72,120L68,120L68,124L64,124L64,140L68,140L68,144L60,144L60,132L56,132L56,128L52,128L52,132L48,132L48,136L44,136L44,140L48,140L48,144L40,144L40,128L36,128L36,124L32,124L32,120L28,120L28,116L24,116L24,112L20,112L20,88L24,88L24,96L28,96L28,100L32,100L32,104L40,104L40,100L44,100L44,96L50,96L50,92L56,92L56,88L60,88L60,62L64,62L64,58L96,58L96,62L100,62L100,80L80,80L80,84L92,84L92,88L76,88L76,96L84,96L84,104L80,104L80,100Z";
const DINO_EYE = "M68,64L68,68L72,68L72,64L68,64Z";

export default function ScrollDino() {
    const containerRef = useRef(null);
    const dinoRef = useRef(null);
    const cactusRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Detect mobile to scale jump height accordingly
            const isMobile = window.innerWidth < 1024;
            const jumpHeight = isMobile ? -70 : -120;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#hero-section",
                    start: "top top",
                    end: "+=300%",
                    scrub: 1,
                },
            });

            // Running leg bob
            tl.to({}, {
                duration: 1,
                onUpdate: function () {
                    const p = this.progress();
                    const running = p > 0.05 && p < 0.45;
                    if (running) {
                        gsap.set(dinoRef.current, { y: Math.floor(p * 120) % 2 === 0 ? 0 : -3 });
                    } else {
                        gsap.set(dinoRef.current, { y: 0 });
                    }
                },
            });

            // Jump over cactus
            tl.to(dinoRef.current, { y: jumpHeight, ease: "power2.out", duration: 0.15 }, 0.45);
            tl.to(dinoRef.current, { y: 0, ease: "power2.in", duration: 0.15 }, 0.60);

            // Cactus slides in from right, exits left
            tl.fromTo(
                cactusRef.current,
                { x: isMobile ? 400 : 700 },
                { x: isMobile ? -300 : -600, duration: 1, ease: "none" },
                0
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            // Mobile: smaller height, centered; Desktop: right-aligned, taller
            className="relative w-full h-[180px] sm:h-[220px] lg:h-[300px] overflow-hidden select-none"
        >
            {/* Ground line */}
            <div className="absolute bottom-10 sm:bottom-12 lg:bottom-14 left-0 w-full h-[1.5px] bg-black/25" />

            {/* Cactus — smaller on mobile */}
            <div ref={cactusRef} className="absolute bottom-10 sm:bottom-12 lg:bottom-14">
                <svg
                    viewBox="0 0 25 50"
                    fill="#535353"
                    style={{ shapeRendering: "crispEdges", display: "block" }}
                    className="w-5 h-10 sm:w-6 sm:h-12 lg:w-7 lg:h-14"
                >
                    {/* Trunk */}
                    <rect x={8} y={0} width={9} height={50} />
                    {/* Left arm */}
                    <rect x={0} y={18} width={8} height={4} />
                    <rect x={0} y={10} width={4} height={18} />
                    {/* Right arm */}
                    <rect x={17} y={14} width={8} height={4} />
                    <rect x={21} y={8} width={4} height={20} />
                </svg>
            </div>

            {/* Dino — scales down on mobile, positioned left-aligned on mobile, slightly right on desktop */}
            <div
                ref={dinoRef}
                className="absolute bottom-10 sm:bottom-12 lg:bottom-14 left-8 sm:left-12 lg:left-24"
            >
                <svg
                    viewBox="16 50 88 96"
                    fill="#1a1a1a"
                    style={{ shapeRendering: "crispEdges", display: "block" }}
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24"
                >
                    <path d={DINO_BODY} />
                    <path d={DINO_EYE} fill="#ffffff" />
                </svg>
            </div>
        </div>
    );
}
