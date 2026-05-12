import { motion } from "motion/react";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function MakeAWish({ onBack }: { onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 relative"
    >
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 p-3 glass-dark rounded-full text-violet-400 hover:text-white transition-colors z-50 border border-white/10"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Floating Sparkles Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ 
              opacity: [0, 1, 0],
              y: "-10vh",
              x: Math.random() * 200 - 100
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            className="absolute text-violet-300/50"
            style={{ left: `${Math.random() * 100}%` }}
          >
            <Sparkles size={16 + Math.random() * 24} />
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="relative glass-dark p-12 rounded-[3rem] text-center max-w-lg w-full cosmic-glow overflow-hidden group border border-violet-500/20"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/40 via-transparent to-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-violet-400 uppercase tracking-[0.5em] text-sm font-semibold mb-4"
        >
          Happy Birthday
        </motion.p>
        
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="text-6xl md:text-8xl font-serif text-white mb-8"
        >
          Make a <br/>
          <span className="italic text-gradient-purple">Wish</span>
        </motion.h1>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent mb-8"
        />

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-violet-100/80 font-sans leading-relaxed"
        >
          Close your eyes, blow out the candles in your heart, and know that my biggest wish already came true when I met you.
        </motion.p>

      </motion.div>
    </motion.div>
  );
}
