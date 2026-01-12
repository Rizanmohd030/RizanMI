  import Hero from "../sections/Hero";
  import RecipeHunt from "../sections/RecipeHunt";
  import GenAI from "../sections/GenAI";
  import ProjectBlog from "../sections/ProjectBlog";
  import PrimaryButton from "../components/PrimaryButton";
  import AboutMe from "../sections/AboutMe";

  function Home() {
    return (
      <>
        <Hero />

        <main >

          {/* Project 1 */}
          <RecipeHunt />

          {/* Soft divider (reduced space) */}
          <div className="flex justify-center py-6">
            <span className="
              w-full 
              max-w-[1200px] 
              mx-10 
              h-px
              bg-black/60
            "></span>
          </div>

          {/* Project 2 (less overlap) */}
          <div className="-mt-16">
            <GenAI />
          </div>

          {/* Divider */}
          <div className="flex justify-center py-6">
            <span className="
              w-full 
              max-w-[1200px] 
              mx-10 
              h-px
              bg-black/60
            "></span>
          </div>

          {/* Project 3 */}
          <ProjectBlog />
               
               
               <div className="flex justify-center py-20">

                  <PrimaryButton>
                    Show More Projects.
                  </PrimaryButton>
        
               </div>

               <AboutMe />
                  

        </main>
      </>
    );
  }

  export default Home;
