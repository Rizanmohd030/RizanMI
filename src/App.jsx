import { useState } from "react";
import Home from "./pages/Home";
import { Analytics } from "@vercel/analytics/react";
import Intro from "./components/Intro";

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <Intro onComplete={() => setIntroComplete(true)} />
      <Home introComplete={introComplete} />
      <Analytics />
    </>
  );
}

export default App;
