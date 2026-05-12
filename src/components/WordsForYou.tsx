import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export default function WordsForYou({ onBack }: { onBack: () => void }) {
  const paragraphs = [
    "To the girl who makes my world infinitely brighter,",
    "Before I met you, I didn't truly understand what it meant to feel completely at home with another person. You are my safe space, my biggest adventure, and my favorite part of every single day.",
    "Every time you smile, it feels like the sun is shining just for me. Your laugh is my favorite song, and your happiness is my greatest priority.",
    "On your special day, I just want to remind you how deeply loved you are. Not just by me, but by everyone lucky enough to know you. You have this magical way of making everything around you beautiful.",
    "Here's to celebrating you today, and loving you forever.",
    "Yours always, ✨"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative">
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 p-3 glass-dark rounded-full text-violet-400 hover:text-white transition-colors z-50 border border-white/10"
      >
        <ArrowLeft size={24} />
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full glass-dark p-10 md:p-16 rounded-[2rem] cosmic-glow relative overflow-hidden border border-violet-500/20"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-violet-600/20 rounded-full blur-[80px] transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-indigo-600/20 rounded-full blur-[80px] transform -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 space-y-6">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (i * 0.8), duration: 1 }}
              className={`text-violet-100/90 leading-relaxed md:text-lg ${i === 0 || i === paragraphs.length - 1 ? "script text-3xl md:text-4xl text-gradient-purple" : "font-serif"}`}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
