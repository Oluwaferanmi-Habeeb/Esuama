import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X, Moon } from "lucide-react";
import { useState } from "react";

export default function RomanticLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-10 py-24 px-6 max-w-2xl mx-auto">
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer glass-dark p-12 rounded-3xl flex flex-col items-center justify-center text-center shadow-2xl border-white/10 cosmic-glow group"
      >
        <div className="bg-violet-500/20 p-6 rounded-full mb-6 group-hover:bg-violet-500/30 transition-colors">
          <Moon className="text-lavender-glow w-10 h-10" />
        </div>
        <h2 className="text-3xl font-serif font-medium text-white italic tracking-wide">A letter from the stars...</h2>
        <p className="mt-4 text-violet-300 font-sans text-xs uppercase tracking-[0.3em] opacity-60">reveal your message</p>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-cosmic-bg/80 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              className="bg-[#141122] p-8 md:p-16 rounded-[2rem] max-w-2xl w-full shadow-[0_0_100px_rgba(139,92,246,0.3)] relative border border-white/5 overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors z-10"
                id="close-letter"
              >
                <X size={28} />
              </button>

              <div className="font-serif text-slate-200 leading-relaxed text-xl md:text-2xl italic relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="mb-10 text-lavender-glow font-bold not-italic font-sans text-sm tracking-[0.5em] uppercase border-b border-violet-500/20 pb-4 inline-block">Militant Grace // Adaeze</p>
                  <p className="mb-8 font-extralight tracking-tight">
                    My Dearest yamski,
                  </p>
                  <p className="mb-8 font-extralight tracking-tight text-violet-200">
                    They say the universe is mostly empty space, but that’s only because they haven’t met you. You fill every void with a gravity that I can't—and don't want to—escape. 
                  </p>
                  <p className="mb-8 font-extralight tracking-tight">
                    Looking back at these twenty years—and the beautiful distance we've bridged between Accra and Lagos—I am struck by the sheer probability of us. Out of all the stars and all the systems, our orbits found each other. And honestly, yamski, it's the only alignment that has ever mattered.
                  </p>
                  <p className="mb-8 font-extralight tracking-tight text-violet-200">
                    You are a galaxy of contradictions: militant grace, quiet power, and a heart that beats with the rhythm of something ancient and beautiful. Happy Birthday, Esuama. May your 20th year be as limitless as the sky you own.
                  </p>
                  <div className="mt-16 flex flex-col items-end">
                    <span className="text-violet-400 font-mono text-[10px] uppercase tracking-widest mb-2">Authenticated by</span>
                    <p className="text-4xl mt-0 font-black text-white uppercase tracking-tighter">— Always Yours.</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 blur-[100px] rounded-full -z-0" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full -z-0" />
              <Sparkles className="absolute bottom-10 right-10 text-violet-500/20 w-32 h-32 -z-0" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
