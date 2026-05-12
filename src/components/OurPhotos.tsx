import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function OurPhotos({ onBack }: { onBack: () => void }) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Replace with real photos.
  const photos = [
    { id: 1, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800", alt: "Us", rotation: -6 },
    { id: 2, src: "https://images.unsplash.com/photo-1518599904199-0ca897819ddb?auto=format&fit=crop&q=80&w=800", alt: "Us laughing", rotation: 4 },
    { id: 3, src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800", alt: "Date night", rotation: -3 },
    { id: 4, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800", alt: "Selfie", rotation: 8 },
    { id: 5, src: "https://images.unsplash.com/photo-1533038590840-1cbea27d92cc?auto=format&fit=crop&q=80&w=800", alt: "Travel", rotation: -8 },
  ];

  return (
    <div className="min-h-screen py-20 overflow-hidden relative">
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 p-3 glass-dark rounded-full text-violet-400 hover:text-white transition-colors z-50 border border-white/10"
      >
        <ArrowLeft size={24} />
      </button>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-serif text-white text-center mb-12 relative z-20 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]"
      >
        Beautiful <span className="text-violet-400 italic">Moments</span>
      </motion.h2>

      <div className="relative h-[70vh] w-full max-w-6xl mx-auto flex items-center justify-center">
        {photos.map((photo, i) => {
          const isExpanded = expandedId === photo.id;

          return (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, y: -100, rotate: 0 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotate: isExpanded ? 0 : photo.rotation,
                scale: isExpanded ? 1.5 : 1,
                zIndex: isExpanded ? 50 : i,
                x: isExpanded ? 0 : (i - 2) * 40,
              }}
              transition={{ 
                delay: i * 0.15,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              whileHover={!isExpanded ? { scale: 1.05, zIndex: 40 } : {}}
              onClick={() => setExpandedId(isExpanded ? null : photo.id)}
              className={`absolute cursor-pointer p-3 bg-white/5 backdrop-blur-md rounded-sm border border-white/10
                ${isExpanded ? 'max-w-md w-[90vw] md:w-auto' : 'w-48 md:w-64'}
              `}
              style={{
                boxShadow: isExpanded 
                  ? '0 0 100px rgba(139, 92, 246, 0.4)' 
                  : '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div className={`overflow-hidden relative ${isExpanded ? 'aspect-auto' : 'aspect-[3/4]'}`}>
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
                {!isExpanded && <div className="absolute inset-0 bg-violet-900/20 mix-blend-overlay" />}
              </div>
            </motion.div>
          );
        })}
      </div>

      {expandedId && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-cosmic-bg/80 backdrop-blur-md z-40"
          onClick={() => setExpandedId(null)}
        />
      )}
    </div>
  );
}
