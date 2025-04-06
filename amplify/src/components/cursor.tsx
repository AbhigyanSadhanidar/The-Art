import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") !== null ||
          target.closest("button") !== null
      );
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x,
          y: position.y,
          scale: clicked ? 0.6 : isPointer ? 1.5 : 1,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          mass: 0.3,
          stiffness: 200,
          damping: 20,
          opacity: { duration: 0.2 },
        }}
        initial={{ opacity: 0 }}
      >
        <div
          className={`w-6 h-6 rounded-full bg-white ${
            clicked ? "scale-75" : ""
          }`}
        />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-[9998]"
        animate={{
          x: position.x,
          y: position.y,
          scale: isPointer ? 0 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.6,
          stiffness: 100,
          damping: 25,
          opacity: { duration: 0.2 },
        }}
        initial={{ opacity: 0 }}
      >
        <div className="w-10 h-10 rounded-full border border-accent/70 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </>
  );
}
