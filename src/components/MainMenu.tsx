import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

type MenuProps = {
  onSelect: (section: string) => void;
};

export default function MainMenu({ onSelect }: MenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems = [
    { id: "make-a-wish", title: "THE WISH", media: "/memories/muse.jpeg" },
    { id: "core-memories", title: "THE MEMORIES", media: "/memories/vid_magic_night.mp4", isVideo: true },
    { id: "words-for-you", title: "THE WORDS", media: "/memories/img1.jpeg" },
    { id: "our-photos", title: "THE GALLERY", media: "/memories/img2.jpeg" },
    { id: "twenty-reasons", title: "THE REASONS", media: "/memories/vid_golden.mp4", isVideo: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="min-h-screen w-full relative flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            key={hoveredIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            {menuItems[hoveredIndex].isVideo ? (
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src={menuItems[hoveredIndex].media} type="video/mp4" />
              </video>
            ) : (
              <img src={menuItems[hoveredIndex].media} className="w-full h-full object-cover" alt="" />
            )}
            <div className="absolute inset-0 bg-cosmic-bg/80 mix-blend-multiply" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full px-6 flex flex-col items-center gap-2 md:gap-4 mt-20">
        <p className="text-violet-400 font-sans tracking-[0.5em] text-xs md:text-sm uppercase mb-8">Select a Chapter</p>
        
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={() => onSelect(item.id)}
            className="relative cursor-pointer group w-full text-center py-2"
          >
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-black italic text-transparent text-stroke-1 text-stroke-white group-hover:text-white transition-all duration-500 ease-out z-10 relative">
              {item.title}
            </h1>
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[120%] h-px bg-violet-500/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out z-0 origin-center"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
