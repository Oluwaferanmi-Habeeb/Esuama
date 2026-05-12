import { motion, useScroll, useTransform } from "motion/react";
import { Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface StarItemProps {
  key?: any;
  star: {
    id: number;
    left: string;
    top: string;
    delay: number;
    duration: number;
    size: number;
    speed: number;
  };
  scrollY: any;
}

function StarItem({ star, scrollY }: StarItemProps) {
  const y = useTransform(scrollY, [0, 5000], [0, -500 * star.speed]);
  
  return (
    <motion.div
      style={{ left: star.left, top: star.top, y }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 0.4, 0],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: star.duration,
        repeat: Infinity,
        delay: star.delay,
        ease: "easeInOut",
      }}
      className="absolute text-violet-300/30"
    >
      <Star size={star.size} fill="currentColor" />
    </motion.div>
  );
}

export default function SparklingStars() {
  const [stars, setStars] = useState<{ id: number; left: string; top: string; delay: number; duration: number; size: number; speed: number }[]>([]);
  const [shootingStars, setShootingStars] = useState<{ id: number; top: string; left: string; delay: number }[]>([]);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const newStars = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 1 + Math.random() * 3,
      speed: 0.1 + Math.random() * 0.3, // For parallax
    }));
    setStars(newStars);

    const newShootingStars = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 50}%`,
      left: `${Math.random() * 80}%`,
      delay: Math.random() * 20,
    }));
    setShootingStars(newShootingStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <StarItem key={star.id} star={star} scrollY={scrollY} />
      ))}

      {shootingStars.map((ss) => (
        <motion.div
          key={`ss-${ss.id}`}
          initial={{ x: -100, y: -100, opacity: 0 }}
          animate={{ 
            x: [0, 400], 
            y: [0, 400], 
            opacity: [0, 1, 0] 
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: ss.delay,
            repeatDelay: 10 + Math.random() * 20,
            ease: "easeOut"
          }}
          style={{ top: ss.top, left: ss.left }}
          className="absolute h-[1px] w-[100px] bg-gradient-to-r from-white to-transparent rotate-45"
        />
      ))}
      
      {/* Dynamic Aurora Blurs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-violet-900/30 blur-[150px] rounded-full" 
      />
      <motion.div 
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] bg-indigo-900/20 blur-[180px] rounded-full" 
      />
    </div>
  );
}
