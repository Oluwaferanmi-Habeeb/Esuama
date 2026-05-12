import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export default function TwentyReasons({ onBack }: { onBack: () => void }) {
  const reasons = [
    "The way your eyes light up when you talk about what you love.",
    "Your incredibly kind heart that cares for everyone.",
    "How you make even the most boring tasks feel like an adventure.",
    "Your laugh, which is literally my favorite sound in the world.",
    "The way you always know exactly how to comfort me.",
    "Your intelligence and the fascinating way your mind works.",
    "How beautiful you look, even when you've just woken up.",
    "Your resilience and strength in everything you do.",
    "The cute faces you make when you're concentrating.",
    "How supportive you are of my dreams and goals.",
    "The way you hold my hand like you never want to let go.",
    "Your sense of style and how you carry yourself.",
    "How we can talk for hours and never run out of things to say.",
    "The way you listen—truly listen—when someone speaks.",
    "Your terrible but adorable jokes.",
    "How you make me want to be a better person every single day.",
    "The quiet moments we share that feel louder than words.",
    "Your passion and drive.",
    "How perfectly you fit in my arms.",
    "Simply because you are you. There is no one else like you."
  ];

  return (
    <div className="min-h-screen py-20 px-6 relative">
      <button 
        onClick={onBack}
        className="fixed top-6 left-6 p-3 glass-dark rounded-full text-violet-400 hover:text-white transition-colors z-50 border border-white/10"
      >
        <ArrowLeft size={24} />
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-serif text-white text-center mb-16 italic drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
          20 Things I Love <br/><span className="text-violet-400">About You</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="glass-dark p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:border-violet-500/30 transition-colors"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-serif font-black italic group-hover:opacity-20 transition-opacity text-violet-400">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-violet-100 leading-relaxed relative z-10 text-lg">
                {reason}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Background Ambience */}
      <div className="fixed top-[20%] left-[10%] w-[40vw] h-[40vw] bg-violet-600/10 blur-[150px] rounded-full animate-pulse -z-10 pointer-events-none" />
      <div className="fixed bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-indigo-600/10 blur-[130px] rounded-full animate-pulse -z-10 pointer-events-none" />
    </div>
  );
}
