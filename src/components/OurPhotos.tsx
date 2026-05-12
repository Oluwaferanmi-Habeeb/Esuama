import { motion, useScroll, useTransform } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useRef } from "react";

export default function OurPhotos({ onBack }: { onBack: () => void }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const photos = [
    { src: "/memories/img1.jpeg", speed: 1 },
    { src: "/memories/img2.jpeg", speed: -1 },
    { src: "/memories/img3.jpeg", speed: 1.5 },
    { src: "/memories/img4.jpeg", speed: -1.5 },
    { src: "/memories/img5.jpeg", speed: 2 },
    { src: "/memories/img6.jpeg", speed: -2 },
    { src: "/memories/img7.jpeg", speed: 1 },
  ];

  // Split photos into three columns
  const col1 = photos.filter((_, i) => i % 3 === 0);
  const col2 = photos.filter((_, i) => i % 3 === 1);
  const col3 = photos.filter((_, i) => i % 3 === 2);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <div ref={containerRef} className="bg-cosmic-bg relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center pt-20">
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 p-3 glass-dark rounded-full text-violet-400 hover:text-white transition-colors z-50 border border-white/10"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="absolute inset-0 flex gap-4 p-4 md:gap-8 md:p-8 -rotate-[10deg] scale-125 md:scale-110 items-center justify-center opacity-60">
          <motion.div style={{ y: y1 }} className="flex flex-col gap-4 md:gap-8 w-1/3">
            {col1.map((p, i) => (
              <div key={i} className="w-full rounded-2xl overflow-hidden glass-dark border border-white/10">
                <img src={p.src} alt="" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" />
              </div>
            ))}
            {/* Duplicate for infinite feel */}
            {col1.map((p, i) => (
              <div key={`dup1-${i}`} className="w-full rounded-2xl overflow-hidden glass-dark border border-white/10">
                <img src={p.src} alt="" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" />
              </div>
            ))}
          </motion.div>
          
          <motion.div style={{ y: y2 }} className="flex flex-col gap-4 md:gap-8 w-1/3 -mt-[50vh]">
            {col2.map((p, i) => (
              <div key={i} className="w-full rounded-2xl overflow-hidden glass-dark border border-white/10">
                <img src={p.src} alt="" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" />
              </div>
            ))}
             {col2.map((p, i) => (
              <div key={`dup2-${i}`} className="w-full rounded-2xl overflow-hidden glass-dark border border-white/10">
                <img src={p.src} alt="" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" />
              </div>
            ))}
          </motion.div>

          <motion.div style={{ y: y3 }} className="flex flex-col gap-4 md:gap-8 w-1/3 hidden md:flex">
            {col3.map((p, i) => (
              <div key={i} className="w-full rounded-2xl overflow-hidden glass-dark border border-white/10">
                <img src={p.src} alt="" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" />
              </div>
            ))}
            {col3.map((p, i) => (
              <div key={`dup3-${i}`} className="w-full rounded-2xl overflow-hidden glass-dark border border-white/10">
                <img src={p.src} alt="" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" />
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10 glass-dark p-12 rounded-[3rem] border border-violet-500/30 cosmic-glow text-center"
        >
          <h2 className="text-6xl md:text-8xl font-serif text-white italic drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
            Our <br/><span className="text-gradient-purple font-black">Gallery</span>
          </h2>
          <p className="mt-6 text-violet-300 font-sans tracking-[0.3em] uppercase text-sm">Scroll Down</p>
        </motion.div>
      </div>
    </div>
  );
}
