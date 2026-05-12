import { motion } from "motion/react";
import { Sparkles, Heart } from "lucide-react";

const reasons = [
  "You’re beautiful and smart as hell, your face alone can brighten any room.",
  "Your smile has a way of lighting up even my darkest days every single time.",
  "I love your laughter, I could honestly listen to it forever.",
  "You push me to be a better person even when I’m being stubborn about it.",
  "You’ve got incredible taste in music and always put me on to fire songs.",
  "You’re so kind and the way you prioritize your peace over popularity is inspiring.",
  "You understand me in ways no one else ever has.",
  "You’re passionate about the things you love and that energy is contagious.",
  "Even when things get hard my heart still chooses you every time.",
  "You’re strong even when you don’t realize it and soft at the same time.",
  "Your presence alone brings me peace and even silence with you feels meaningful.",
  "You make me smile on shitty days and turn ordinary moments into something special.",
  "I love your boobs and that nyash too not gonna lie 🫠",
  "You make the best fried rice it’s actually unbeatable.",
  "You’ve given me memories I’ll never forget and touched my life like no one else could.",
  "Your beautiful mind and the way you see the world inspire me daily.",
  "Loving you feels natural like it was always meant to be.",
  "You’re sexy, uniquely you and there’s literally no one else like you.",
  "You’ve shown me a kind of love I didn’t know I needed and you’ve become my happiness.",
  "I love you simply because you’re you — the person my heart yearns for every day."
];

export default function TwentyReasons() {
  return (
    <section className="py-40 relative z-10 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-32 text-left"
        >
          <div className="h-px w-24 bg-violet-500 mb-12" />
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif font-light text-white mb-8">
            Things I Like <br />
            <span className="italic text-violet-400">About Her.</span>
          </h2>
          <p className="text-violet-300/60 text-lg uppercase tracking-[0.3em]">A personal exhaustive list for my yamski</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-32">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group p-8 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors ${index % 2 !== 0 ? 'md:translate-y-24' : ''}`}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-5xl font-serif font-black text-violet-500/20 group-hover:text-violet-500/40 transition-colors uppercase italic select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Heart size={14} className="text-violet-500/0 group-hover:text-violet-500/60 transition-all transform group-hover:scale-125" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-serif text-white/80 group-hover:text-white leading-relaxed italic transition-colors">
                  "{reason}"
                </p>
                <div className="w-12 h-[1px] bg-violet-500/30 group-hover:w-full transition-all duration-700" />
              </div>
              
              {/* Subtle accent glow */}
              <div className="absolute inset-0 bg-violet-500/5 opacity-0 group-hover:opacity-100 blur-2xl rounded-2xl transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
