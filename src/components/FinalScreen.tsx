import { motion } from "motion/react";
import { Stars, ArrowLeft } from "lucide-react";

export default function FinalScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-transparent">
      
      {/* Floating Stars Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", x: Math.random() * 100 - 50, opacity: 0, scale: Math.random() * 0.5 + 0.5 }}
            animate={{
              y: "-10vh",
              x: Math.random() * 200 - 100,
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute text-violet-400"
            style={{ left: `${Math.random() * 100}%` }}
          >
            <Stars fill="currentColor" size={32} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="relative z-10 text-center max-w-xl mx-auto glass-dark p-12 rounded-[3rem] cosmic-glow border border-violet-500/20"
      >
        <motion.div
           animate={{ scale: [1, 1.1, 1] }}
           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
           className="inline-block mb-8 text-violet-400"
        >
          <Stars fill="currentColor" size={64} />
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 italic">
          Beyond the moons <br/> & the stars
        </h2>
        <p className="text-xl md:text-2xl text-violet-100/80 font-sans mb-10 leading-relaxed font-light">
          I hope this made you smile today, tomorrow, and forever. ✨
        </p>

        <button 
          onClick={onBack}
          className="px-8 py-3 glass-dark hover:bg-violet-900/50 transition-colors rounded-full text-violet-300 font-medium flex items-center gap-2 mx-auto border border-violet-500/30"
        >
          <ArrowLeft size={18} /> Back to Start
        </button>
      </motion.div>
    </div>
  );
}
