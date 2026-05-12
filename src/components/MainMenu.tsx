import { motion } from "motion/react";
import { CalendarHeart, Flower2, Mail, Image as ImageIcon, Sparkles } from "lucide-react";

type MenuProps = {
  onSelect: (section: string) => void;
};

export default function MainMenu({ onSelect }: MenuProps) {
  const menuItems = [
    { id: "make-a-wish", title: "Make a Wish", icon: <CalendarHeart size={32} />, delay: 0.1 },
    { id: "core-memories", title: "Core Memories", icon: <Flower2 size={32} />, delay: 0.2 },
    { id: "words-for-you", title: "Words for You", icon: <Mail size={32} />, delay: 0.3 },
    { id: "our-photos", title: "Our Photos", icon: <ImageIcon size={32} />, delay: 0.4 },
    { id: "twenty-reasons", title: "20 Reasons", icon: <Sparkles size={32} />, delay: 0.5 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.5 } }}
      className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10 py-20"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-3xl md:text-5xl font-serif text-white mb-12 text-center"
      >
        Pick what you want to see first <span className="inline-block animate-bounce text-violet-400">✨</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: item.delay, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(item.id)}
            className="glass-dark p-6 rounded-3xl flex items-center gap-6 group hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-violet-500/30"
          >
            <div className="w-16 h-16 rounded-full bg-violet-900/30 flex items-center justify-center text-violet-400 group-hover:bg-violet-800/50 transition-colors border border-violet-500/20">
              {item.icon}
            </div>
            <div className="text-left">
              <h3 className="font-serif text-2xl text-white/90 group-hover:text-violet-300 transition-colors">{item.title}</h3>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
