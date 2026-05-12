import { motion } from "motion/react";
import { Gift, Sparkles } from "lucide-react";
import { useState } from "react";

export default function EntryBouquet({ onOpen }: { onOpen: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleTap = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 1.5 } }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-transparent z-[100] px-6"
    >
      {/* Floating Stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh", x: Math.random() * 100 - 50, opacity: 0, rotate: 0 }}
          animate={{
            y: "-10vh",
            x: Math.random() * 100 - 50,
            opacity: [0, 0.8, 0],
            rotate: 360,
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute text-violet-400/50 pointer-events-none"
          style={{ left: `${20 + i * 10}%` }}
        >
          <Sparkles fill="currentColor" size={24 + Math.random() * 24} />
        </motion.div>
      ))}

      <motion.div
        animate={
          isOpening
            ? { scale: [1, 1.2, 0], rotate: [0, -10, 10, 0], opacity: [1, 1, 0] }
            : { y: [0, -10, 0] }
        }
        transition={
          isOpening
            ? { duration: 1.5, ease: "easeInOut" }
            : { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }
        onClick={handleTap}
        className="relative cursor-pointer group flex flex-col items-center"
      >
        <div className="absolute inset-0 bg-violet-500/20 blur-3xl rounded-full scale-150 group-hover:scale-175 transition-transform duration-500" />
        
        <div className="relative w-48 h-48 md:w-64 md:h-64 glass-dark rounded-3xl flex items-center justify-center cosmic-glow mb-8 group-hover:bg-white/5 transition-colors border border-violet-500/30">
          <Gift size={80} className="text-violet-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" strokeWidth={1.5} />
        </div>

        <motion.div
          animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-2 font-medium italic">A Gift For You ✨</h1>
          <p className="text-violet-300/80 font-sans tracking-widest uppercase text-sm animate-pulse">Tap to open</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
