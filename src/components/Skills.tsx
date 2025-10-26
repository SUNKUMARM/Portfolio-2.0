import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  "Languages": [
    "JavaScript", "TypeScript", "C++", "HTML5", "CSS3"
  ],
  "Frontend Frameworks": [
    "Angular (V15+)", "React.js", "Angular Material",
  ],
  "Styling & Design": [
    "SCSS", "Tailwind CSS", "Styled Components", "Responsive Design", "CSS Custom Properties (design tokens)"
  ],
  "State & Architecture": [
    "REST APIs", "RxJS", "JSON", "Redux", "React Hooks", "Reactive Forms", "Modular Architecture"
  ],
  "Core Competencies": [
    "Responsive UI Design", "Performance Optimization", "Lazy Loading", "Change Detection"
  ],
  "Version Control": [
    "Git", "GitHub",
  ],
  "Testing": [
    "Jasmine", "Karma",
  ],
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <strong className="text-foreground">2 years of professional experience</strong> building responsive and scalable web applications with modern technologies
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.08 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-card rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 shadow-card h-full">
                <h3 className="text-lg font-semibold mb-4 text-accent">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-muted/50 text-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
