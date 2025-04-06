import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "w-full py-4 transition-all duration-300",
        scrolled ? "sticky-nav" : "absolute top-0 left-0 bg-transparent z-50"
      )}
    >
      <div className="section-container flex items-center justify-between">
        <a
          href="#"
          className="font-display text-2xl tracking-tight text-foreground"
        >
          Alexandra Ray
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#works"
            className="text-foreground/70 hover:text-foreground text-sm font-medium transition"
          >
            WORKS
          </a>
          <a
            href="#about"
            className="text-foreground/70 hover:text-foreground text-sm font-medium transition"
          >
            ABOUT
          </a>
          <a
            href="#exhibitions"
            className="text-foreground/70 hover:text-foreground text-sm font-medium transition"
          >
            EXHIBITIONS
          </a>
          <Button asChild variant="outline" className="rounded-full">
            <a href="#contact">CONTACT</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <a
            href="#works"
            className="text-2xl font-display hover:text-accent transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Works
          </a>
          <a
            href="#about"
            className="text-2xl font-display hover:text-accent transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#exhibitions"
            className="text-2xl font-display hover:text-accent transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Exhibitions
          </a>
          <a
            href="#contact"
            className="text-2xl font-display hover:text-accent transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
