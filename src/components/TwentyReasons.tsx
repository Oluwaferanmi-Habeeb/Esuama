import { motion } from "motion/react";

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
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-12"
        >
          <div>
            <div className="h-px w-24 bg-violet-500 mb-12 mx-auto md:mx-0" />
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif font-light text-white leading-none">
              Things I Love <br />
              <span className="italic text-violet-400 font-medium">About You.</span>
            </h2>
          </div>
          <p className="text-violet-300/60 text-sm md:text-right uppercase tracking-[0.3em] max-w-[200px] mx-auto md:mx-0 leading-loose">
            A personal exhaustive list for my yamski
          </p>
        </motion.div>

        <div className="flex flex-col">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-t border-white/5 py-8 md:py-12 transition-all duration-500 hover:bg-white/[0.02]"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 px-6">
                <span className="text-5xl md:text-7xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-violet-500/80 to-transparent italic w-24 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-2xl md:text-4xl font-serif text-white/50 group-hover:text-white leading-tight transition-colors duration-500 max-w-3xl">
                  {reason}
                </p>
              </div>
              
              {/* Hover sweep line */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-violet-500/50 group-hover:w-full transition-all duration-1000 ease-in-out" />
            </motion.div>
          ))}
          <div className="border-t border-white/5 w-full" />
        </div>
      </div>
    </section>
  );
}
