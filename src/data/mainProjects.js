// src/data/mainProjects.js

import recipeImg from "../assets/images/Recipe.png";
import genaiImg from "../assets/images/Genai.png";
import blogImg from "../assets/images/Blog.png";

export const mainProjects = [
  {
    id: 1,
    title: "Recipe Hunt",
    description: "AI-powered recipe discovery with image scanning.",
    image: recipeImg,
    link: "https://recipehunt.vercel.app/",
  },
  {
    id: 2,
    title: "GenAI Resume",
    description: "Generate ATS-friendly resumes using GenAI.",
    image: genaiImg,
    link: "https://genai-resume.vercel.app/",
  },
  {
    id: 3,
    title: "Personal Blog",
    description: "Minimal blog built with modern React stack.",
    image: blogImg,
    link: "https://personal-blog-self-six.vercel.app/",
  },
];
