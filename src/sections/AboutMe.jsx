import PrimaryButton from "../components/PrimaryButton";
import myPic from "../assets/images/RizanProfile.jpg";

function AboutMe() {
  return (
    <section className="py-32">

      <div className="flex justify-center">

        {/* MAIN BLUE BOX */}
        <div
          className="
            relative 
            w-[94%] 
            max-w-[1500px]
            h-[900px]
            bg-[#8FD3F8]
            shadow-[0_10px_30px_rgba(0,0,0,0.12)]
            overflow-hidden
          "
        >

          {/* INNER WHITE CARD */}
          <div
            className="
              absolute
              inset-20
              bg-white
              shadow-[0_20px_50px_rgba(0,0,0,0.18)]
              flex
              items-center
            "
          >

            {/* LEFT IMAGE (OVERLAP) */}
            <div className="relative w-1/2 flex justify-center">
              <img
                src={myPic}
                alt="Rizan"
                className="
                  w-[420px]
                  h-[560px]
                  object-cover
                  shadow-xl
                  -ml-32   /* overlap effect */
                  z-10
                "
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-1/2 pr-24 text-gray-800">

              {/* INTRO */}
              <p className="text-3xl font-medium opacity-80">
                Heyy, I’m
              </p>

              <h1 className="text-9xl font-bold tracking-wide mt-1">
                RIZAN
              </h1>

              {/* ROLE */}
              <p className="text-2xl mt-6 font-medium">
                Final-year Computer Science Student
              </p>

              <p className="text-xl text-gray-600 mt-1">
                MERN Stack Developer
              </p>

              {/* DESCRIPTION */}
              <p className="text-xl mt-6 leading-relaxed text-gray-700">
                I specialize in building scalable, high-performance web
                applications with clean architecture and smooth UI
                interactions.
              </p>

              <p className="text-xl mt-4 leading-relaxed text-gray-700">
                I enjoy turning complex problems into elegant digital
                experiences using modern technologies.
              </p>

              <p className="text-xl mt-4 leading-relaxed text-gray-700">
                Currently exploring AI-driven solutions to create real-world
                impact.
              </p>

              {/* BUTTON */}
              <div className="mt-12 flex justify-start">
                <PrimaryButton>
                  My Journey →
                </PrimaryButton>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutMe;
