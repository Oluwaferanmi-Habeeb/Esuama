import { motion } from "motion/react";
import { Camera, Sparkles } from "lucide-react";

const photos = [
  { url: "/memories/img1.jpeg", caption: "The Way You Shine", variant: "tall" },
  { url: "/memories/img2.jpeg", caption: "Moments of Pure Grace", variant: "wide" },
  { url: "/memories/img6.jpeg", caption: "In Your Element", variant: "square" },
  { url: "/memories/img4.jpeg", caption: "Sweetest Memories", variant: "tall" },
  { url: "/memories/muse.jpeg", caption: "Forever My Muse", variant: "wide" },
];

export default function PhotoGallery() {
  return (
    <section className="py-24 md:py-60 relative z-10 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 md:mb-40 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="h-px w-12 bg-violet-500" />
               <span className="text-violet-400 font-mono text-[10px] uppercase tracking-[0.6em]">Scrapbook No. 01</span>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-[10rem] font-serif font-light text-white leading-[0.85] tracking-tighter">
              Beautiful <br />
              <span className="italic text-violet-400 font-extralight">Moments.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:text-right"
          >
            <p className="text-violet-300/60 text-lg font-light leading-relaxed max-w-xs mb-6">
              Every picture here tells a piece of our story, and they are all my favorite.
            </p>
            <div className="flex md:justify-end gap-2 text-violet-500">
               <Sparkles size={20} />
               <Sparkles size={16} className="opacity-50" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-8 md:gap-12 md:min-h-[1200px]">
          {/* Item 1 - Tall */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 md:row-span-2 relative group"
          >
            <div className="absolute -top-6 -left-6 sm:-top-12 sm:-left-12 text-white/5 font-serif text-8xl sm:text-[15rem] pointer-events-none select-none">01</div>
            <div className="relative aspect-[3/4] md:aspect-auto md:h-full overflow-hidden rounded-sm bg-violet-900/10">
              <img src={photos[0].url} className="w-full h-full object-cover object-top grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105" alt="Gallery" />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-8 left-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <p className="text-white font-serif text-2xl italic">{photos[0].caption}</p>
                <span className="text-[10px] text-violet-400 uppercase tracking-widest mt-2 block">Captured on 35mm Digital</span>
              </div>
            </div>
          </motion.div>

          {/* Item 2 - Wide */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-7 relative group"
          >
             <div className="relative aspect-video overflow-hidden rounded-sm bg-violet-900/10">
              <img src={photos[1].url} className="w-full h-full object-cover object-[center_20%] grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 group-hover:rotate-1" alt="Gallery" />
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                 <p className="text-white font-serif text-xl italic drop-shadow-md">{photos[1].caption}</p>
              </div>
            </div>
          </motion.div>

          {/* Item 3 - Square/Small */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-3 relative group self-center"
          >
             <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 p-4 bg-white/5 backdrop-blur-sm">
                <img src={photos[2].url} className="w-full h-full object-cover object-top rounded-full" alt="Gallery" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-cosmic-bg/60 rounded-full">
                  <span className="text-[10px] text-white uppercase tracking-widest">Enlarge</span>
                </div>
             </div>
             <p className="text-center mt-6 text-violet-300/40 font-mono text-[9px] uppercase tracking-widest italic">{photos[2].caption}</p>
          </motion.div>

          {/* Item 4 - Tall/Med */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-4 relative group"
          >
             <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-violet-900/10 transform md:rotate-2 group-hover:rotate-0 transition-transform duration-700">
               <img src={photos[3].url} className="w-full h-full object-cover object-center grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000" alt="Gallery" />
               <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                  <Camera size={16} />
               </div>
             </div>
             <div className="mt-8">
               <p className="text-white font-serif text-lg italic underline underline-offset-8 decoration-violet-500/30">{photos[3].caption}</p>
             </div>
          </motion.div>

          {/* Full Width Footer Item Alternative or extra space */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-12 mt-20 text-center"
          >
             <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/20 to-transparent mb-12" />
             <p className="font-serif text-3xl text-violet-200/40 italic">"Some moments exist as silent poetry."</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
