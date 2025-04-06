import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="font-display text-2xl mb-4">Alexandra Ray</div>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Contemporary artist exploring the intersection of organic forms
              and digital fabrication
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#works"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Works
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#exhibitions"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Exhibitions
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-medium mb-4">Exhibitions</h4>
            <a
              href="#"
              className="group flex items-start justify-between pb-3 mb-3 border-b"
            >
              <div>
                <p className="font-medium group-hover:text-accent transition-colors">
                  Digital Materiality
                </p>
                <p className="text-sm text-muted-foreground">ZKM Karlsruhe</p>
              </div>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-y-0 group-hover:-translate-y-1 translate-x-0 group-hover:translate-x-1 transition-all" />
            </a>
            <a
              href="#"
              className="group flex items-start justify-between pb-3 mb-3 border-b"
            >
              <div>
                <p className="font-medium group-hover:text-accent transition-colors">
                  Intangible Tactility
                </p>
                <p className="text-sm text-muted-foreground">Tate Modern</p>
              </div>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-y-0 group-hover:-translate-y-1 translate-x-0 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Alexandra Ray. All rights reserved.
          </div>
          <div className="flex gap-5 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Imprint
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
