import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

type Artwork = {
  id: number;
  title: string;
  year: string;
  medium: string;
  thumbnail: string;
  category: string;
};

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Ethereal Flow",
    year: "2023",
    medium: "Bronze, Steel",
    thumbnail:
      "https://images.unsplash.com/photo-1638186824584-6d6710bd4c82?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sculpture",
  },
  {
    id: 2,
    title: "Digital Erosion",
    year: "2022",
    medium: "Digital Print, Acrylic",
    thumbnail:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2045&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Mixed Media",
  },
  {
    id: 3,
    title: "Fragmented Reality",
    year: "2021",
    medium: "Marble, LED",
    thumbnail:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Installation",
  },
  {
    id: 4,
    title: "Biomimetic Form",
    year: "2023",
    medium: "3D Print, Resin",
    thumbnail:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sculpture",
  },
  {
    id: 5,
    title: "Temporal Shift",
    year: "2022",
    medium: "Video Projection, Sound",
    thumbnail:
      "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Digital",
  },
  {
    id: 6,
    title: "Organic Algorithm",
    year: "2021",
    medium: "Wood, Copper",
    thumbnail:
      "https://images.unsplash.com/photo-1620503374956-c942862f0372?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sculpture",
  },
];

const categories = [
  "All",
  "Sculpture",
  "Mixed Media",
  "Installation",
  "Digital",
];

export function Artworks() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArtworks =
    activeCategory === "All"
      ? artworks
      : artworks.filter((artwork) => artwork.category === activeCategory);

  return (
    <section id="works" className="py-24">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-sm font-mono text-muted-foreground mb-3 uppercase tracking-wider">
              Featured Works
            </h2>
            <h3 className="text-4xl md:text-5xl font-display">
              Recent Creations
            </h3>
          </div>

          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className="rounded-full text-xs"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="artwork-grid">
          {filteredArtworks.map((artwork) => (
            <motion.div
              key={artwork.id}
              className="artwork-grid-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: artwork.id * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <a
                href={`#artwork-${artwork.id}`}
                className="artwork-item block group"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
                  <img
                    src={artwork.thumbnail}
                    alt={artwork.title}
                    className="artwork-image w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-display">
                          {artwork.title}
                        </h4>
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0" />
                      </div>
                      <p className="text-sm text-white/70 mt-1">
                        {artwork.year} — {artwork.medium}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href="#all-works">
              View All Works
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
