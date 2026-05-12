import { motion, AnimatePresence } from "motion/react";
import { Disc, Volume2, Music } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  
// The track IDs: 
  const tracks = [
    "0f8H6Uv0gL9x9V6bF8G5pC", // Wizkid & Asake - MMS
    "4O96pXFsh6e7f4vQ4aZ9zY", // Asake - Active
    "3Z3vEAKA8bDbO3y9HWGZlu", // Daniel Caesar - Best Part
    "6llU95B00idCidMmiYclZp", // Kali Uchis - Telepatía
    "1m8n9QaypXyC5GZ17M88pQ"  // Daniel Caesar - Japanese Denim
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const nextTrack = () => setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  const prevTrack = () => setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);

  return (
    <div className="fixed top-8 right-8 z-[200]">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="bg-black/80 backdrop-blur-3xl p-4 rounded-[1.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/10 w-80 overflow-hidden"
          >
            <div className="flex justify-between items-center px-4 py-2 border-b border-white/5 mb-4">
              <div className="flex items-center gap-2">
                 <Music size={12} className="text-violet-400" />
                 <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-violet-400">The Soundtrack (Track {currentTrackIndex + 1})</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors"
              >
                <Volume2 size={14} />
              </button>
            </div>
            
            <div className="relative rounded-xl overflow-hidden bg-violet-900/10 mb-4">
              <iframe
                src={`https://open.spotify.com/embed/track/${tracks[currentTrackIndex]}?utm_source=generator&theme=0`}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="opacity-90"
              />
            </div>

            <div className="flex items-center justify-center gap-6 px-4 pb-2">
               <button onClick={prevTrack} className="text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Prev</button>
               <div className="h-1 w-1 rounded-full bg-violet-500/40" />
               <button onClick={nextTrack} className="text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Next</button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="h-16 w-16 bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center text-violet-400 border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.2)] group relative"
          >
            <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-ping opacity-20" />
            <Disc className="animate-spin-slow group-hover:text-white transition-colors" size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
