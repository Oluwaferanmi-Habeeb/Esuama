import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import EntryBouquet from "./components/EntryBouquet";
import MainMenu from "./components/MainMenu";
import MakeAWish from "./components/MakeAWish";
import CoreMemories from "./components/CoreMemories";
import WordsForYou from "./components/WordsForYou";
import OurPhotos from "./components/OurPhotos";
import TwentyReasons from "./components/TwentyReasons";
import FinalScreen from "./components/FinalScreen";
import BackgroundMusic from "./components/BackgroundMusic";

type Screen = "entry" | "menu" | "make-a-wish" | "core-memories" | "words-for-you" | "our-photos" | "twenty-reasons" | "final";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("entry");

  // Optional: Auto scroll to top on screen change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentScreen]);

  return (
    <main className="relative min-h-screen bg-cosmic-bg selection:bg-violet-500/30 selection:text-white">
      <BackgroundMusic />
      
      <AnimatePresence mode="wait">
        {currentScreen === "entry" && (
          <EntryBouquet key="entry" onOpen={() => setCurrentScreen("menu")} />
        )}
        
        {currentScreen === "menu" && (
          <MainMenu key="menu" onSelect={(s) => setCurrentScreen(s as Screen)} />
        )}

        {currentScreen === "make-a-wish" && (
          <MakeAWish key="make-a-wish" onBack={() => setCurrentScreen("menu")} />
        )}

        {currentScreen === "core-memories" && (
          <CoreMemories key="core-memories" onBack={() => setCurrentScreen("menu")} />
        )}

        {currentScreen === "words-for-you" && (
          <WordsForYou key="words-for-you" onBack={() => setCurrentScreen("menu")} />
        )}

        {currentScreen === "our-photos" && (
          <OurPhotos key="our-photos" onBack={() => setCurrentScreen("menu")} />
        )}

        {currentScreen === "twenty-reasons" && (
          <TwentyReasons key="twenty-reasons" onBack={() => setCurrentScreen("menu")} />
        )}

        {currentScreen === "final" && (
          <FinalScreen key="final" onBack={() => setCurrentScreen("menu")} />
        )}
      </AnimatePresence>

      {/* Floating Final Screen Trigger */}
      {currentScreen === "menu" && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={() => setCurrentScreen("final")}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 text-violet-400/50 hover:text-violet-300 transition-colors text-sm font-sans tracking-widest uppercase z-50"
        >
          Finish
        </motion.button>
      )}

      {/* Film Grain Texture Layer */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}

