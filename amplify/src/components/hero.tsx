import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        titleRef.current &&
        subtitleRef.current &&
        circleRef.current &&
        containerRef.current
      ) {
        const scrollY = window.scrollY;
        const speed = 0.5;
        const opacity = Math.max(1 - scrollY / 700, 0);

        titleRef.current.style.transform = `translateY(${scrollY * speed}px)`;
        subtitleRef.current.style.transform = `translateY(${
          scrollY * speed * 0.7
        }px)`;
        circleRef.current.style.transform = `rotate(${
          scrollY * 0.1
        }deg) scale(${1 + scrollY * 0.001})`;
        containerRef.current.style.opacity = `${opacity}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      <motion.div
        className="z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-display tracking-tight"
        >
          Shaping <span className="text-outline">Perception</span>
        </h1>
        <div ref={subtitleRef} className="mt-8 mb-10">
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-balance text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Contemporary sculptor exploring the intersection of organic forms
            and digital fabrication
          </motion.p>
        </div>
        <motion.a
          href="#works"
          className="inline-block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col items-center group">
            <span className="text-sm font-mono uppercase tracking-widest mb-2">
              Explore
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="w-5 h-5 transition" />
            </motion.div>
          </div>
        </motion.a>
      </motion.div>

      <motion.div
        ref={circleRef}
        className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] border border-accent/10 rounded-full"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] border border-accent/5 rounded-full"
        initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
        animate={{ opacity: 0.7, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      />

      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-5" />
    </div>
  );
}
