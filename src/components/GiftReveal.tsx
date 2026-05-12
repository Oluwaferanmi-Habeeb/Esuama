import { motion, AnimatePresence } from "motion/react";
import { Gift, Sparkles, PartyPopper, Stars, Star } from "lucide-react";
import { useState } from "react";

export default function GiftReveal() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <section className="py-32 relative z-10 px-6 text-center">
      <div className="max-w-md mx-auto">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="text-4xl font-serif text-white mb-4">A Gift from the Sky</h2>
          <p className="text-violet-300 text-sm italic opacity-70">Tap the cosmic box to unlock a surprise</p>
        </motion.div>

        <div className="relative h-80 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isOpened ? (
              <motion.div
                key="closed"
                initial={{ scale: 0.8 }}
                animate={{ 
                  scale: 1,
                  rotate: [0, -1, 1, -1, 0],
                  y: [0, -15, 0]
                }}
                transition={{
                  scale: { duration: 0.5 },
                  rotate: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1, rotate: 0 }}
                onClick={() => setIsOpened(true)}
                className="cursor-pointer p-12 rounded-[2.5rem] bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-900 shadow-[0_0_80px_rgba(139,92,246,0.4)] relative group border border-white/20"
                id="gift-box"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-violet-400 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl border-4 border-[#030014] group-hover:scale-125 transition-transform">
                   <Gift className="text-indigo-950" size={24} />
                </div>
                <div className="w-32 h-32 flex items-center justify-center text-white/50">
                   <Stars className="animate-pulse w-16 h-16" />
                </div>
                <div className="absolute bottom-6 left-0 right-0 text-white font-bold text-[10px] uppercase tracking-[0.5em] opacity-40">
                  Open Cosmos
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="opened"
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-black/60 backdrop-blur-3xl p-12 rounded-[3rem] w-full border border-white/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 -z-10" />
                
                {/* Explosion Particles */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{ 
                      x: (Math.random() - 0.5) * 600, 
                      y: (Math.random() - 0.5) * 600, 
                      opacity: 0,
                      scale: 0.5
                    }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 -z-10"
                  >
                    <Star size={12} className="text-violet-400 fill-violet-400" />
                  </motion.div>
                ))}

                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  className="bg-violet-500/20 p-6 rounded-full inline-block mb-6 shadow-inner"
                >
                  <PartyPopper className="text-violet-400 w-12 h-12" />
                </motion.div>
                
                <h3 className="text-3xl font-serif text-white mb-4">Universal Love!</h3>
                <p className="text-slate-400 italic text-lg leading-relaxed mb-6">
                  You are my moon, my stars, and my entire sky. Happy 20th!
                </p>
                <p className="text-violet-400 text-sm font-bold tracking-widest uppercase">Check your room later tonight... ✨</p>
                
                <motion.div 
                   animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 2] }}
                   transition={{ repeat: Infinity, duration: 4 }}
                   className="absolute top-0 right-0 text-violet-500/10 -z-10"
                >
                  <Sparkles size={200} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
