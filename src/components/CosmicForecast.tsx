import { motion } from "motion/react";
import { Sparkles, Moon, Sun, Stars } from "lucide-react";

const forecastItems = [
  {
    title: "The Year of Expansion",
    description: "At twenty, your horizon isn't just distant—it's infinite. This year, the stars align for bold movements, career breakthroughs, and artistic evolution.",
    icon: Sun,
  },
  {
    title: "Emotional Gravity",
    description: "Expect a deepening of the bonds that matter. Your orbit is pulling in the right energy, grounding you in wisdom and quiet power.",
    icon: Moon,
  },
  {
    title: "Creative Supernova",
    description: "Your voice is becoming a frequency that others can't help but tune into. Pure Esuama energy will be at an all-time high.",
    icon: Sparkles,
  }
];

export default function CosmicForecast() {
  return (
    <section className="py-32 md:py-60 relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 md:mb-40 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-8"
            >
               <Stars size={20} className="text-violet-500" />
               <span className="text-violet-400 font-mono text-[10px] uppercase tracking-[0.8em]">Sidereal Reading</span>
               <Stars size={20} className="text-violet-500" />
            </motion.div>
            <h2 className="text-5xl md:text-9xl font-serif text-white tracking-tighter italic">The Stellar <br /> <span className="text-violet-400 font-extralight">Forecast.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {forecastItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative p-8 sm:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 bg-violet-600/10 blur-[60px] rounded-full group-hover:bg-violet-600/20 transition-colors" />
                
                <div className="mb-10 text-violet-400">
                  <Icon size={40} />
                </div>
                
                <h3 className="text-2xl font-serif text-white mb-6 italic">{item.title}</h3>
                <p className="text-violet-200/40 font-light leading-relaxed">
                  {item.description}
                </p>
                
                <div className="mt-12 h-[1px] w-0 bg-violet-500/30 group-hover:w-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-40 text-center"
        >
          <p className="text-violet-300/20 font-serif text-2xl italic">"The constellations are simply waiting for you to lead."</p>
        </motion.div>
      </div>
    </section>
  );
}
