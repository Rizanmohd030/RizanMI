import Hero from "../sections/Hero";
import RecipeHunt from "../sections/RecipeHunt";
import GenAI from "../sections/GenAI";

function Home() {
  return (
    <>
      <Hero />

      <main className="bg-[#F3F3F4]">

        {/* Project 1 */}
        <RecipeHunt />

        {/* Soft divider */}
        <div className="flex justify-center py-10">
          <span className="w-32 h-[6px] bg-black/10 rounded-full"></span>
        </div>

        {/* Project 2 with overlap */}
        <div className="-mt-32">
          <GenAI />
        </div>

      </main>
    </>
  );
}

export default Home;
