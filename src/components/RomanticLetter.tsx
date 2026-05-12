import { motion, AnimatePresence } from "motion/react";
import { Heart, X, Mail } from "lucide-react";
import { useState } from "react";

export default function RomanticLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-10 py-32 px-6 max-w-4xl mx-auto">
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 p-16 md:p-24 flex flex-col items-center justify-center text-center group shadow-[0_40px_100px_rgba(139,92,246,0.1)] hover:shadow-[0_40px_100px_rgba(139,92,246,0.2)] transition-all duration-700"
      >
        <div className="absolute inset-0 bg-cosmic-bg/40 backdrop-blur-3xl -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 blur-[100px] rounded-full group-hover:bg-violet-500/20 transition-colors duration-700 pointer-events-none" />
        
        <div className="bg-white/5 border border-white/10 p-6 rounded-full mb-8 group-hover:scale-110 transition-transform duration-700 relative">
          <div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <Mail className="text-violet-300 w-12 h-12 relative z-10" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-serif font-light text-white italic tracking-tight mb-4">A letter for you...</h2>
        <div className="flex items-center gap-4 mt-8 opacity-60 group-hover:opacity-100 transition-opacity">
           <div className="h-[1px] w-8 bg-violet-400" />
           <p className="text-violet-300 font-sans text-[10px] uppercase tracking-[0.4em] font-bold">Tap to open</p>
           <div className="h-[1px] w-8 bg-violet-400" />
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-2xl"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0f0c1b] p-8 md:p-20 rounded-[2rem] max-w-3xl w-full shadow-[0_0_150px_rgba(139,92,246,0.15)] relative border border-white/10 overflow-y-auto max-h-[95vh] custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:scale-105 transition-all z-20"
                id="close-letter"
              >
                <X size={20} />
              </button>

              <div className="font-serif text-white/80 leading-relaxed text-xl md:text-3xl italic relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <div className="flex items-center gap-6 mb-16">
                     <span className="text-violet-400 font-sans text-xs tracking-[0.5em] uppercase font-bold">For Esuama</span>
                     <div className="h-[1px] flex-grow bg-gradient-to-r from-violet-500/50 to-transparent" />
                  </div>
                  
                  <p className="mb-10 font-light tracking-tight text-white">
                    My Dearest yamski,
                  </p>
                  <p className="mb-10 font-extralight tracking-tight text-white/60">
                    Before I met you, I didn't truly understand what it meant to feel completely at home with another person. You are my safe space, my biggest adventure, and my favorite part of every single day.
                  </p>
                  <p className="mb-10 font-extralight tracking-tight text-white/60">
                    Looking back at these twenty years—and the beautiful distance we've bridged between Accra and Lagos—I am struck by how lucky I am. Out of everyone in the world, I get to love you. Every time you smile, it feels like the sun is shining just for me.
                  </p>
                  <p className="mb-10 font-extralight tracking-tight text-white/60">
                    You are so incredibly graceful, strong, and beautiful. Happy Birthday, Esuama. I can't wait to spend countless more birthdays celebrating exactly how wonderful you are.
                  </p>
                  
                  <div className="mt-24 pt-12 border-t border-white/10 flex flex-col items-start md:items-end text-left md:text-right">
                    <span className="text-violet-400 font-mono text-[10px] uppercase tracking-widest mb-4">With all my love</span>
                    <p className="text-5xl md:text-6xl mt-0 font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 uppercase tracking-tighter italic">— Always Yours.</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-violet-500/5 via-transparent to-transparent pointer-events-none" />
              <Heart className="absolute bottom-12 left-12 text-violet-500/5 w-40 h-40 -z-0 fill-violet-500/5" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
