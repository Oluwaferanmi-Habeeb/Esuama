import { motion, AnimatePresence, useScroll } from "motion/react";
import { Heart, Stars, Sparkle, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import SparklingStars from "./components/SparklingStars";
import RomanticLetter from "./components/RomanticLetter";
import MemoryTimeline from "./components/MemoryTimeline";
import PhotoGallery from "./components/PhotoGallery";
import TwentyReasons from "./components/TwentyReasons";
import VideoMemorial from "./components/VideoMemorial";
import CosmicForecast from "./components/CosmicForecast";

function IntroOverlay({ onStart }: { onStart: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 2, ease: "easeInOut" } }}
      className="fixed inset-0 z-[1000] bg-cosmic-bg flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-violet-600/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-indigo-600/20 blur-[130px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-8"
        >
          <span className="text-violet-400 font-sans text-xs uppercase tracking-[0.8em] mb-4 block">Inviting You To</span>
          <h1 className="text-6xl md:text-8xl font-serif text-white italic tracking-tighter leading-none">
            Celebrate <br /> <span className="text-violet-200">Esuama.</span>
          </h1>
          <p className="mt-8 text-violet-500/60 font-mono text-[10px] uppercase tracking-[0.5em]">#anAccraLagoslovestory</p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="group relative px-12 py-5 rounded-full overflow-hidden"
        >
          <div className="absolute inset-0 bg-violet-500/20 group-hover:bg-violet-500/40 transition-colors backdrop-blur-md border border-white/10" />
          <span className="relative text-white font-sans text-sm uppercase tracking-[0.3em] font-bold flex items-center gap-4">
            Open Your Gift <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>
      </div>
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </motion.div>
  );
}

export default function App() {
  const [started, setStarted] = useState(false);
  const { scrollYProgress } = useScroll();

  const handleStart = () => {
    setStarted(true);
  };

  useEffect(() => {
    if (started) {
      window.scrollTo(0, 0);
    }
  }, [started]);

  return (
    <main className="relative min-h-screen bg-cosmic-bg selection:bg-violet-500/30 selection:text-white">
      {/* Background Audio - Triggers on user interaction */}
      {started && (
        <iframe 
          width="0" 
          height="0" 
          src="https://www.youtube.com/embed/gs9Ard7ql6s?autoplay=1&loop=1&playlist=gs9Ard7ql6s&controls=0&mute=0" 
          title="Asake My Heart" 
          allow="autoplay" 
          className="fixed top-0 left-0 w-0 h-0 opacity-0 pointer-events-none"
        />
      )}

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-violet-500 origin-left z-[2000]"
        style={{ scaleX: scrollYProgress }}
      />
      <AnimatePresence>
        {!started && <IntroOverlay onStart={handleStart} />}
      </AnimatePresence>

      {started && (
        <>
          <SparklingStars />
          
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 3 }}
               className="absolute inset-0 z-0"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cosmic-bg via-transparent to-cosmic-bg z-10" />
              <img 
                src="https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=2000" 
                alt="Galaxy Background"
                className="w-full h-full object-cover opacity-30 scale-100 animate-slow-pan"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex items-center justify-center gap-3 mb-10"
              >
                <Sparkle className="text-violet-400 animate-spin-slow" size={16} />
                <span className="font-sans text-xs uppercase tracking-[0.6em] font-bold text-violet-300">Happy Birthday Esuama (aka Adaeze)</span>
                <Sparkle className="text-violet-400 animate-spin-slow" size={16} />
              </motion.div>

              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl sm:text-8xl md:text-[14rem] font-serif text-white tracking-tighter leading-[0.8] mb-12 drop-shadow-[0_0_50px_rgba(139,92,246,0.3)]"
              >
                <span className="block italic font-extralight text-2xl sm:text-3xl md:text-5xl text-violet-400/60 mb-6 sm:mb-8 tracking-normal">Twenty Years of</span>
                <span className="relative">
                   <span className="text-gradient-purple font-black">Esuama</span>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 2.5, duration: 2 }}
                    className="absolute -bottom-4 left-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"
                  />
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 2 }}
                className="flex flex-col items-center gap-6"
              >
                <p className="text-violet-200/60 max-w-xl italic text-xl md:text-3xl leading-relaxed font-light">
                  "For my yamski, the only star that matters in my universe."
                </p>
                <motion.div 
                   animate={{ y: [0, 20, 0], opacity: [0.2, 0.8, 0.2] }}
                   transition={{ repeat: Infinity, duration: 4 }}
                   className="mt-20"
                >
                  <div className="w-px h-32 bg-gradient-to-b from-violet-500 via-violet-500/20 to-transparent" />
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Main Content */}
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto overflow-hidden">
              <RomanticLetter />
              <PhotoGallery />
              <VideoMemorial />
              <TwentyReasons />
              <MemoryTimeline />
            </div>

            {/* Closing */}
            <footer className="py-60 text-center relative overflow-hidden bg-black/40">
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent pointer-events-none" />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-12 relative z-10"
              >
                <div className="flex gap-8">
                   <Heart className="text-violet-500 fill-violet-500/20 animate-pulse" size={48} />
                   <Stars className="text-white animate-spin-slow" size={48} />
                   <Heart className="text-violet-500 fill-violet-500/20 animate-pulse" size={48} />
                </div>
                <p className="font-serif text-4xl sm:text-6xl md:text-8xl text-white italic leading-tight">I love you so much <br /> yamski.</p>
                <div className="flex flex-col gap-6">
                  <p className="text-violet-500 font-mono text-sm uppercase tracking-[0.5em] font-black">#anAccraLagoslovestory</p>
                  <div className="flex flex-col gap-4">
                    <p className="text-violet-400 font-sans text-xs uppercase tracking-[0.8em] font-black">Forever Yours</p>
                    <p className="text-white/5 font-mono text-[10px] uppercase tracking-[0.3em]">Pure Esuama Collection</p>
                  </div>
                </div>
              </motion.div>
            </footer>
          </div>
          
          {/* Global Ambient Glows */}
          <div className="fixed top-[20%] left-[10%] w-[70vw] h-[70vw] bg-violet-600/5 blur-[200px] rounded-full pointer-events-none -z-0 mix-blend-screen" />
          <div className="fixed bottom-[10%] right-[30%] w-[50vw] h-[50vw] bg-indigo-600/5 blur-[180px] rounded-full pointer-events-none -z-0 mix-blend-screen" />
          
          {/* Film Grain Texture Layer */}
          <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </>
      )}
    </main>
  );
}

