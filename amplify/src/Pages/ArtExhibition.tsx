import { useEffect } from "react";
import Cursor from "@/components/cursor";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Artworks } from "@/components/artwork";
import { About } from "@/components/about";
import { Exhibitions } from "@/components/exhibitions";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { motion, useScroll, useSpring } from "framer-motion";

const ArtExhibition = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href")!);
        target?.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />
      <Cursor />
      <Navbar />
      <Hero />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Artworks />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Exhibitions />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Contact />
      </motion.div>

      <Footer />
    </div>
  );
};

export default ArtExhibition;
