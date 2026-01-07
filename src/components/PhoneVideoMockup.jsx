import { useRef, useState } from "react";
import PhoneFrame from "../assets/images/Thub.png";
import DemoVideo from "../assets/videos/Demo.mp4";

function PhoneVideoMockup() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className="flex flex-col items-center">

      {/* PHONE */}
      <div className="relative w-[300px] md:w-[360px] lg:w-[420px]">

        {/* SCREEN (ONLY ONE LAYER) */}
        <div
          className="
            absolute
            top-[6.8%]
            left-[6.2%]
            w-[87.6%]
            h-[85.8%]
            overflow-hidden
            rounded-[26px]
            z-10
          "
        >
          <video
            ref={videoRef}
            src={DemoVideo}
            muted
            playsInline
            preload="metadata"
            className={`
              w-full
              h-full
              object-cover
              transition-opacity duration-300
              ${isPlaying ? "opacity-100" : "opacity-0"}
            `}
          />
        </div>

        {/* PHONE FRAME (ALWAYS ON TOP) */}
        <img
          src={PhoneFrame}
          alt="RecipeHunt demo"
          className="relative z-20 w-full h-auto select-none pointer-events-none"
        />
      </div>

      {/* WATCH DEMO */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="
            mt-6
            text-sm
            font-medium
            text-[#1691DB]
            hover:underline
            flex items-center gap-2
          "
        >
          ▶ Watch Demo
        </button>
      )}
    </div>
  );
}

export default PhoneVideoMockup;
