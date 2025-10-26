import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-hero"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch!
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you have an idea for a project or just want to chat, feel free to shoot me an email!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group mb-12"
          >
            <div className="absolute inset-0 bg-gradient-card rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-12 hover:border-primary/50 transition-all duration-300 shadow-card">
              <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <a
                  href="mailto:sunkumar.mayilvel@gmail.com"
                  className="flex flex-col items-center gap-3 group/item hover:scale-105 transition-transform"
                >
                  <div className="p-4 bg-primary/10 rounded-full group-hover/item:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={32} />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                    sunkumar.mayilvel@gmail.com
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/sunkumar-m-41298b286/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 group/item hover:scale-105 transition-transform"
                >
                  <div className="p-4 bg-secondary/10 rounded-full group-hover/item:bg-secondary/20 transition-colors">
                    <MessageSquare className="text-secondary" size={32} />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                    LinkedIn Profile
                  </span>
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg text-muted-foreground font-medium">
                  Phone: <span className="text-foreground">+91-9786297723</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-glow"
              onClick={() => window.open("mailto:sunkumar.mayilvel@gmail.com")}
            >
              Say Hello
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
