import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export default function CoreMemories({ onBack }: { onBack: () => void }) {
  const memories = [
    {
      id: 1,
      date: "THE MAGIC NIGHT",
      title: "When Everything Changed",
      desc: "The moment our eyes met, I knew you were going to be someone incredibly special to me.",
      media: "/memories/vid_magic_night.mp4",
      isVideo: true
    },
    {
      id: 2,
      date: "GOLDEN HOUR",
      title: "Lost But Together",
      desc: "Getting hopelessly lost but not caring because I was lost with you.",
      media: "/memories/vid_golden.mp4",
      isVideo: true
    },
    {
      id: 3,
      date: "LATE NIGHTS",
      title: "Talking Until Dawn",
      desc: "Sharing our deepest dreams while the rest of the world was asleep.",
      media: "/memories/vid1.mp4",
      isVideo: true
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 relative overflow-hidden">
      <button 
        onClick={onBack}
        className="fixed top-6 left-6 p-3 glass-dark rounded-full text-violet-400 hover:text-white transition-colors z-50 border border-white/10"
      >
        <ArrowLeft size={24} />
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-6xl md:text-8xl font-serif text-white mb-24 italic font-black -tracking-wider">THE MEMORIES</h2>

        <div className="relative space-y-32 pb-20">
          {memories.map((memory, index) => (
            <motion.div 
              key={memory.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full group"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                <div className={`w-full md:w-[60%] aspect-video rounded-[2rem] overflow-hidden relative shadow-[0_0_50px_rgba(139,92,246,0.15)] ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                  >
                    <source src={memory.media} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-bg/80 via-transparent to-transparent opacity-80" />
                </div>
                
                <div className={`w-full md:w-[40%] flex flex-col justify-center ${index % 2 !== 0 ? 'md:text-right' : 'text-left'}`}>
                  <span className="text-violet-500 font-sans uppercase tracking-[0.5em] text-xs mb-4 font-bold">{memory.date}</span>
                  <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 italic">{memory.title}</h3>
                  <p className="text-violet-100/60 leading-loose text-lg font-light">{memory.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Background Ambience */}
      <div className="fixed top-[30%] left-[20%] w-[50vw] h-[50vw] bg-violet-600/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
    </div>
  );
}
