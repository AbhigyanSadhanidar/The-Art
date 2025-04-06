import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Instagram, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");

    // Here you would typically send the form data to a server
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-sm font-mono text-muted-foreground mb-3 uppercase tracking-wider">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-display mb-6">Contact</h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              Interested in my work or potential collaborations? Send me a
              message and I'll get back to you as soon as possible.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-accent mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:contact@alexandraray.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    contact@alexandraray.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div>
                  <h4 className="font-medium">Studio</h4>
                  <address className="text-muted-foreground not-italic">
                    Kunstquartier Bethanien
                    <br />
                    Mariannenplatz 2<br />
                    10997 Berlin, Germany
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="w-5 h-5 text-accent mt-1" />
                <div>
                  <h4 className="font-medium">Instagram</h4>
                  <a
                    href="https://instagram.com/alexandra_ray_art"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    @alexandra_ray_art
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-background rounded-lg p-6 shadow-sm"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  rows={5}
                  required
                  className="w-full"
                />
              </div>

              <Button type="submit" className="w-full">
                {submitted ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
