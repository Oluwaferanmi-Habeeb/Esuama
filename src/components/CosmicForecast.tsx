import { motion } from "motion/react";
import { Sparkles, Heart, Star, Sun } from "lucide-react";

const forecastItems = [
  {
    title: "Endless Happiness",
    description: "At twenty, your whole life is ahead of you. I hope this year brings you so much joy, bold new adventures, and everything you've ever dreamed of.",
    icon: Sun,
  },
  {
    title: "Deeper Connection",
    description: "I look forward to growing even closer to you. I want to continue being your safe space and your biggest supporter through it all.",
    icon: Heart,
  },
  {
    title: "Shining Bright",
    description: "You have a light that makes everyone around you better. Keep shining, keep being yourself, because you are absolutely perfect.",
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
               <Star size={16} className="text-violet-500 fill-violet-500" />
               <span className="text-violet-400 font-mono text-[10px] uppercase tracking-[0.8em]">Looking Forward</span>
               <Star size={16} className="text-violet-500 fill-violet-500" />
            </motion.div>
            <h2 className="text-5xl md:text-9xl font-serif text-white tracking-tighter italic">My Wishes <br /> <span className="text-violet-400 font-extralight">For You.</span></h2>
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
                <p className="text-violet-200/60 font-light leading-relaxed">
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
          <p className="text-violet-300/40 font-serif text-2xl italic">"I can't wait to see what this year holds for you."</p>
        </motion.div>
      </div>
    </section>
  );
}
