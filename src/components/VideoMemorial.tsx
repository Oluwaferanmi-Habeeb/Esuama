import { motion } from "motion/react";
import { Play, Heart, Film } from "lucide-react";
import { useState, useRef } from "react";

const videoMoments = [
  {
    id: 1,
    title: "Our First Magical Night",
    src: "/memories/vid_magic_night.mp4",
    caption: "The night when the world fell away and it was just us."
  },
  {
    id: 2,
    title: "Golden Moments",
    src: "/memories/vid_golden.mp4",
    caption: "The way you laugh makes the whole world brighter."
  },
  {
    id: 3,
    title: "Beautiful Days",
    src: "/memories/vid3.mp4",
    caption: "Every second with you is a memory I'll cherish forever."
  },
  {
    id: 4,
    title: "Magic in the Air",
    src: "/memories/vid4.mp4",
    caption: "Our story is my absolute favorite."
  },
  {
    id: 5,
    title: "Forever Us",
    src: "/memories/vid5.mp4",
    caption: "To many more years of magic."
  }
];

export default function VideoMemorial() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const togglePlay = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      if (playingId === id) {
        video.pause();
        setPlayingId(null);
      } else {
        // Pause others if any are playing
        (Object.values(videoRefs.current) as (HTMLVideoElement | null)[]).forEach(v => {
          if (v) v.pause();
        });
        video.play();
        setPlayingId(id);
      }
    }
  };

  return (
    <section className="py-32 md:py-60 relative z-10 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 md:mb-40 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 backdrop-blur-sm mb-8 md:mb-12"
            >
              <Film size={14} className="text-violet-400" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-violet-300">Video Memories</span>
            </motion.div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white italic tracking-tight leading-none">Our Favorite <br /> <span className="text-violet-400 font-extralight italic">Moments.</span></h2>
        </div>

        <div className="space-y-32 md:space-y-64">
          {videoMoments.map((moment, index) => (
            <div key={moment.id} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`md:col-span-8 ${index % 2 !== 0 ? 'md:order-last' : ''}`}
              >
                <div 
                  className="relative group cursor-pointer overflow-hidden rounded-[2rem] bg-slate-900/50 aspect-[4/5] md:aspect-video shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/5"
                  onClick={() => togglePlay(moment.id)}
                >
                  <video 
                    ref={el => videoRefs.current[moment.id] = el}
                    src={moment.src} 
                    className={`w-full h-full object-contain transition-all duration-1000 ${playingId === moment.id ? 'grayscale-0 scale-100' : 'grayscale-[60%] opacity-40 scale-105'}`}
                    loop
                    muted={playingId !== moment.id}
                    playsInline
                    preload="metadata"
                  />
                  
                  <div className={`absolute inset-0 bg-cosmic-bg/40 transition-opacity duration-700 ${playingId === moment.id ? 'opacity-0' : 'opacity-100'}`} />
                  
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {playingId !== moment.id && (
                      <div className="h-20 w-20 sm:h-28 sm:w-28 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white transition-all transform group-hover:scale-110 group-hover:bg-violet-500/10 group-hover:border-violet-500/20">
                        <Play size={24} fill="white" className="sm:ml-1" />
                      </div>
                    )}
                  </div>

                  <div className="absolute top-8 left-8 flex items-center gap-4">
                     <span className="h-px w-8 bg-violet-500/50" />
                     <span className="text-white/80 font-mono text-[9px] uppercase tracking-[0.4em]">Memory 0{index + 1}</span>
                  </div>

                  {/* Film Grain Texture layer for that movie feel */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className={`md:col-span-4 ${index % 2 !== 0 ? 'text-right md:pr-12' : 'md:pl-12'}`}
              >
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif text-white mb-6 md:mb-8 italic">{moment.title}</h3>
                  <p className="text-violet-200/60 font-light text-base sm:text-lg italic leading-relaxed mb-6 md:mb-8">
                    "{moment.caption}"
                  </p>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className={`flex ${index % 2 !== 0 ? 'justify-end' : 'justify-start'}`}
                  >
                     <Heart size={20} className="text-violet-400 fill-violet-400" />
                  </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
