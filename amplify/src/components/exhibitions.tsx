import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Exhibition = {
  id: number;
  title: string;
  venue: string;
  location: string;
  date: string;
  link: string;
  highlight?: boolean;
};

const exhibitions: Exhibition[] = [
  {
    id: 1,
    title: "Digital Materiality",
    venue: "ZKM Center for Art and Media",
    location: "Karlsruhe, Germany",
    date: "June - September 2023",
    link: "#",
    highlight: true,
  },
  {
    id: 2,
    title: "Biomimetic Forms",
    venue: "MoMA PS1",
    location: "New York, USA",
    date: "March - May 2023",
    link: "#",
  },
  {
    id: 3,
    title: "Intangible Tactility",
    venue: "Tate Modern",
    location: "London, UK",
    date: "October - December 2022",
    link: "#",
    highlight: true,
  },
  {
    id: 4,
    title: "Virtual Sculptures",
    venue: "Ars Electronica Center",
    location: "Linz, Austria",
    date: "August - October 2022",
    link: "#",
  },
  {
    id: 5,
    title: "Material Research",
    venue: "Venice Biennale",
    location: "Venice, Italy",
    date: "April - November 2021",
    link: "#",
    highlight: true,
  },
];

export function Exhibitions() {
  return (
    <section id="exhibitions" className="py-24">
      <div className="section-container">
        <h2 className="text-sm font-mono text-muted-foreground mb-3 uppercase tracking-wider">
          Past & Upcoming
        </h2>
        <h3 className="text-4xl md:text-5xl font-display mb-12">Exhibitions</h3>

        <div className="grid gap-4">
          {exhibitions.map((exhibition, index) => (
            <motion.div
              key={exhibition.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <a
                href={exhibition.link}
                className={`block px-6 py-5 rounded-lg group transition-all duration-300 ${
                  exhibition.highlight
                    ? "bg-accent/5 hover:bg-accent/10"
                    : "hover:bg-secondary"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <div className="md:col-span-2">
                    <p className="text-sm font-mono">{exhibition.date}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h4 className="text-xl font-display">{exhibition.title}</h4>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-muted-foreground">
                      {exhibition.venue}, {exhibition.location}
                    </p>
                  </div>
                  <div className="md:col-span-1 flex justify-end items-center">
                    <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
