import { motion, AnimatePresence } from "motion/react";
import { Heart, X, Mail } from "lucide-react";
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
          <Mail className="text-violet-400 w-10 h-10" />
        </div>
        <h2 className="text-3xl font-serif font-medium text-white italic tracking-wide">A letter for you...</h2>
        <p className="mt-4 text-violet-300 font-sans text-xs uppercase tracking-[0.3em] opacity-60">tap to open</p>
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
                  <p className="mb-10 text-violet-400 font-bold not-italic font-sans text-sm tracking-[0.5em] uppercase border-b border-violet-500/20 pb-4 inline-block">For Esuama</p>
                  <p className="mb-8 font-extralight tracking-tight">
                    My Dearest yamski,
                  </p>
                  <p className="mb-8 font-extralight tracking-tight text-violet-200">
                    Before I met you, I didn't truly understand what it meant to feel completely at home with another person. You are my safe space, my biggest adventure, and my favorite part of every single day.
                  </p>
                  <p className="mb-8 font-extralight tracking-tight">
                    Looking back at these twenty years—and the beautiful distance we've bridged between Accra and Lagos—I am struck by how lucky I am. Out of everyone in the world, I get to love you. Every time you smile, it feels like the sun is shining just for me.
                  </p>
                  <p className="mb-8 font-extralight tracking-tight text-violet-200">
                    You are so incredibly graceful, strong, and beautiful. Happy Birthday, Esuama. I can't wait to spend countless more birthdays celebrating exactly how wonderful you are.
                  </p>
                  <div className="mt-16 flex flex-col items-end">
                    <span className="text-violet-400 font-mono text-[10px] uppercase tracking-widest mb-2">With all my love</span>
                    <p className="text-4xl mt-0 font-black text-white uppercase tracking-tighter">— Always Yours.</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 blur-[100px] rounded-full -z-0" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full -z-0" />
              <Heart className="absolute bottom-10 right-10 text-violet-500/10 w-32 h-32 -z-0 fill-violet-500/10" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
