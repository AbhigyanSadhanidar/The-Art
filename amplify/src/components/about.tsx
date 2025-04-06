import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1508216310976-c518eb21c878?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Alexandra Ray in studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-accent text-white p-4 md:p-6 rounded-lg">
                <p className="text-sm md:text-base font-mono">Est. 2018</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-sm font-mono text-muted-foreground mb-3 uppercase tracking-wider">
              About the Artist
            </h2>
            <h3 className="text-4xl md:text-5xl font-display mb-6">
              Alexandra Ray
            </h3>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                I explore the intersection of traditional sculpture and digital
                fabrication, creating works that challenge our perception of
                physicality in an increasingly digital world.
              </p>
              <p className="text-muted-foreground mb-4">
                Based in Berlin, my practice draws from both classical
                sculptural techniques and contemporary digital processes. Each
                piece begins as a digital sketch, evolves through algorithmic
                manipulation, and culminates in physical form through 3D
                printing and hand-finishing techniques.
              </p>
              <p className="text-muted-foreground">
                My work has been exhibited internationally, including at the
                Venice Biennale, MoMA PS1, and the Tate Modern. I'm currently an
                artist-in-residence at the ZKM Center for Art and Media in
                Karlsruhe.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="bg-background rounded-full px-4 py-1 text-sm font-mono">
                MFA RISD 2015
              </div>
              <div className="bg-background rounded-full px-4 py-1 text-sm font-mono">
                DAAD Fellow 2018
              </div>
              <div className="bg-background rounded-full px-4 py-1 text-sm font-mono">
                ZKM Resident 2023
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
