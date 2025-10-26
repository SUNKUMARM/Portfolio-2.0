import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "2 Years Experience",
    description: "Professional frontend development at CrescoWorks LLP",
  },
  {
    icon: Code2,
    title: "Modern Stack",
    description: "Angular, TypeScript, React.js, and cutting-edge technologies",
  },
  {
    icon: Rocket,
    title: "Performance Focus",
    description: "Optimizing bundle size, lazy loading, and efficient architectures",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working with backend and QA teams for seamless delivery",
  },
];

export const About = () => {
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
          <h2 className="text-4xl sm:text-5xl pb-2 font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <p>
              Hello, I'm Sunkumar. I hold a Bachelor's degree in BSc Mathematics from Chikkana Government Arts and Science College, where I also pursued my Master's degree in MSc Mathematics with a CGPA of 8.0/10.
            </p>
            <p>
              After completing my Master's degree, I embarked on a career in education as an online tutor for 1.5 years at Focus Edumatics. During this time, I made the exciting decision to transition into the field of web development.
            </p>
            <p>
              <strong className="text-foreground">Currently, I'm working as a Frontend Angular Developer at CrescoWorks LLP</strong> (since January 2023), where I develop and maintain production-grade web applications. I specialize in Angular, TypeScript, and building responsive, scalable solutions including ATS platforms, career portals, and complex admin workflows.
            </p>
            <p>
              I'm skilled in developing reusable UI components, integrating REST APIs, implementing reactive forms, modular architecture, and optimizing performance in production environments. I'm consistently eager to learn and thrive on new challenges.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-card rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 shadow-card h-full">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <item.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
