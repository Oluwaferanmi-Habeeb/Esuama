import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export default function CoreMemories({ onBack }: { onBack: () => void }) {
  // Replace these with real memories and videos/photos from your images folder
  const memories = [
    {
      id: 1,
      date: "The First Day",
      title: "When Everything Changed",
      desc: "The moment our eyes met, I knew you were going to be someone incredibly special to me.",
      media: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      date: "Our First Trip",
      title: "Lost But Together",
      desc: "Getting hopelessly lost but not caring because I was lost with you.",
      media: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      date: "Late Nights",
      title: "Talking Until Dawn",
      desc: "Sharing our deepest dreams while the rest of the world was asleep.",
      media: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=600"
    }
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
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-serif text-white text-center mb-16 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">Core Memories</h2>

        <div className="relative border-l-2 border-violet-500/30 ml-4 md:ml-8 space-y-20 pb-20">
          {memories.map((memory, index) => (
            <motion.div 
              key={memory.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 md:pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-violet-500 ring-4 ring-cosmic-bg shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

              <div className="glass-dark p-6 md:p-8 rounded-3xl overflow-hidden group border border-white/5 hover:border-violet-500/30 transition-colors">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden relative">
                    <img 
                      src={memory.media} 
                      alt={memory.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-violet-500/20 mix-blend-overlay" />
                  </div>
                  
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <span className="text-violet-400 font-sans uppercase tracking-widest text-xs mb-2 font-bold">{memory.date}</span>
                    <h3 className="text-2xl font-serif text-white mb-4 italic">{memory.title}</h3>
                    <p className="text-violet-100/70 leading-relaxed">{memory.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Background Ambience */}
      <div className="fixed top-[30%] left-[20%] w-[30vw] h-[30vw] bg-violet-600/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
    </div>
  );
}
