import { motion } from "motion/react";
import { Calendar, Star, Heart, Camera } from "lucide-react";

const milestones = [
  {
    title: "The First Hello",
    description: "The moment everything changed and my world became a bit brighter.",
    icon: Star,
    color: "bg-amber-500/20 text-amber-400",
  },
  {
    title: "Our First Magical Night",
    description: "The stars aligned perfectly that night, and since then, I've known you were my true north.",
    icon: Heart,
    color: "bg-pink-500/20 text-pink-400",
  },
  {
    title: "Endless Adventures",
    description: "From trips to the park to late-night drives, every second counts.",
    icon: Camera,
    color: "bg-indigo-500/20 text-indigo-400",
  },
  {
    title: "The Best is Yet to Come",
    description: "I can't wait to see what else we build together in this new decade.",
    icon: Calendar,
    color: "bg-emerald-500/20 text-emerald-400",
  },
];

export default function MemoryTimeline() {
  return (
    <section className="py-40 relative z-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-8">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="max-w-xl relative"
          >
            <h2 className="text-5xl sm:text-7xl md:text-[10rem] font-serif font-black text-white/5 leading-none select-none absolute -top-12 sm:-top-20 -left-6 sm:-left-10">Epochs</h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight">
              A Timeline of <br />
              <span className="italic text-violet-400">Our Shared Light.</span>
            </h3>
          </motion.div>
          <div className="h-px flex-1 bg-violet-500/20 mb-6 hidden md:block" />
          <p className="text-violet-300/40 font-mono text-xs uppercase tracking-widest max-w-[200px] text-right">
            System Log: Significant Emotional Milestones
          </p>
        </div>

        <div className="space-y-24 md:space-y-40">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 md:gap-24 relative"
              >
                <div className="text-violet-500/20 md:text-violet-500/10 shrink-0">
                  <Icon size={60} className="md:w-20 md:h-20" strokeWidth={0.5} />
                </div>
                <div className="flex-1">
                  <h4 className="text-violet-400 font-serif text-xl italic mb-4 block underline decoration-violet-500/20 underline-offset-4">
                    {item.title}
                  </h4>
                  <p className="text-2xl sm:text-3xl md:text-5xl font-serif text-white/90 leading-tight mb-6">
                    {item.description}
                  </p>
                  <div className="h-px w-24 bg-gradient-to-r from-violet-500 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
