import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Code2, ShoppingCart, Tv, Globe, Briefcase, ListTodo } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "CrescoWorks ATS Platform",
    category: "Professional Work | Jan 2023 - Present",
    problem: "Recruitment teams needed an automated system to manage applicants across multiple stages with role-based access, customizable workflows, and high-performance UI components for enterprise-scale operations.",
    solution: "Developed and maintained core modules for the ATS platform, integrating REST APIs for real-time applicant tracking, recruiter workflows, and admin dashboards. Designed 16 reusable table-view and 9 tile-view Angular components with Lazy Loading. Built enterprise-level multi-step application forms using Angular Reactive Forms with strong validation and error handling. Implemented Role-Based Access Control (RBAC) for secure, role-specific access. Modernized Global CSS Architecture by refactoring 7,100+ lines of SCSS with CSS Custom Properties.",
    impact: "Improved runtime performance by 20% and enabled code reuse across 25+ UI screens. Reduced stylesheet size by 60% and cut build time by 27 seconds. Collaborated with backend and QA teams to optimize bundle size and reduce API latency, improving UI performance by 15%. This CSS refactoring contribution was publicly appreciated by the Product Manager & CEO and rewarded with company gift cards.",
    tech: ["Angular", "TypeScript", "Angular Material", "REST API", "SCSS", "CSS Custom Properties", "Lazy Loading", "Reactive Forms", "RBAC"],
    gradient: "from-blue-600 to-indigo-600",
    icon: Briefcase,
    github: null,
    live: null,
  },
  {
    id: 2,
    title: "Career Portal",
    category: "Professional Work | Jan 2023 - Present",
    problem: "Job seekers and recruiters needed a unified platform to efficiently search jobs, apply for positions, post openings, and track candidates throughout the hiring process with optimal performance and search visibility.",
    solution: "Developed a Career Portal enabling job seekers to search and apply for jobs, and recruiters to post openings, manage applications, and track candidates. Integrated responsive UI with Angular and Material Design for seamless mobile and desktop experience. Leveraged the reusable component library (16 table-view and 9 tile-view components) built for the ATS platform.",
    impact: "Implemented SEO enhancements (meta tags, optimized page titles, and descriptions), resulting in a 10% increase in organic visibility and search ranking. Improved application performance using lazy loading and pagination, ensuring a smooth and faster user experience. Worked in an Agile Scrum environment with continuous feature delivery for production deployments.",
    tech: ["Angular", "TypeScript", "Angular Material", "SEO", "Lazy Loading", "Pagination", "Agile Scrum"],
    gradient: "from-indigo-600 to-purple-600",
    icon: Briefcase,
    github: null,
    live: null,
  },
  {
    id: 3,
    title: "To-Do Task Management App",
    category: "Personal Project (UI Based)",
    problem: "Teams needed a comprehensive task manager to assign, track, and manage daily tasks with multiple views and status tracking.",
    solution: "Built a task manager similar to Microsoft To-Do with CRUD operations, filters, and status updates (Pending, In Progress, Completed). Implemented both table and Kanban views with a responsive UI using Angular Material and SCSS.",
    impact: "Created an intuitive task management solution with dual view modes, enabling teams to visualize and manage tasks efficiently.",
    tech: ["Angular", "TypeScript", "HTML", "SCSS", "Angular Material"],
    gradient: "from-purple-600 to-pink-600",
    icon: ListTodo,
    github: "https://github.com/SUNKUMARM/-To-Do-Task-Management-App",
    live: "https://sunkumar-task-management-app.netlify.app/",
  },
  {
    id: 4,
    title: "Netflix Clone",
    category: "Full-Stack Application",
    problem: "Users needed a personalized streaming platform with authentication and favorites functionality.",
    solution: "Implemented user registration and login using Firebase Auth for personalized experiences. Integrated TMDb API to fetch movies and TV shows with search functionality. Added favorites feature stored in Firebase database.",
    impact: "Created a fully functional streaming platform clone with user authentication, search capabilities, and personalized favorites lists.",
    tech: ["React", "Firebase", "TMDb API", "HTML", "CSS", "JavaScript"],
    gradient: "from-red-500 to-rose-500",
    icon: Tv,
    github: "https://github.com/SUNKUMARM/Netflix-clone",
    live: null,
  },
  {
    id: 5,
    title: "E-Commerce Website",
    category: "React Application",
    problem: "Needed a comprehensive e-commerce platform with product filtering and cart management.",
    solution: "Built using React with hooks, Context API, Redux, and React Router. Implemented filtering by gender and category, shopping cart with add/remove functionality, and styled with Styled Components for a friendly user experience.",
    impact: "Delivered a feature-rich e-commerce platform with advanced state management and intuitive shopping experience.",
    tech: ["React", "Redux", "React Router", "Styled Components", "JavaScript"],
    gradient: "from-blue-500 to-cyan-500",
    icon: ShoppingCart,
    github: "https://github.com/SUNKUMARM/E-Commerce",
    live: "https://ecommerce-sunkumar.netlify.app/",
  },
  {
    id: 6,
    title: "Frenzo.io Website Clone",
    category: "Front-End Development",
    problem: "Recreate an interactive, responsive website showcasing modern web technologies.",
    solution: "Developed with React featuring an interactive design, fully responsive layout that adapts to all devices, and incorporated the latest web technologies with engaging courses and dynamic features.",
    impact: "Successfully cloned a professional website demonstrating proficiency in modern front-end development and responsive design principles.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    gradient: "from-purple-500 to-pink-500",
    icon: Globe,
    github: "https://github.com/SUNKUMARM/Frenzo-clone",
    live: "https://frenzo-sunkumar.netlify.app/",
  },
  {
    id: 7,
    title: "Portfolio 2.0",
    category: "Personal Project",
    problem: "Needed a modern, visually striking portfolio that stands out with advanced animations and premium user experience to showcase professional work and skills.",
    solution: "Developed Portfolio 2.0, a modern and responsive personal website with smooth scroll animations, reusable UI components, and mobile-first layouts. Implemented clean visual hierarchy, consistent theme, and interactive micro-animations for a premium feel.",
    impact: "Created an enhanced portfolio experience with cursor particle effects, framer-motion animations, and glass morphism design that provides a professional and engaging showcase of projects and skills.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite","AI Assitance"],
    gradient: "from-cyan-500 to-blue-500",
    icon: Code2,
    github: null,
    live: null,
  },
  {
    id: 8,
    title: "Portfolio Website",
    category: "Personal Project",
    problem: "Needed a professional platform to showcase skills, projects, and background.",
    solution: "Created a comprehensive portfolio featuring personal introduction, downloadable resume, detailed project insights with challenges and solutions, and professional contact information including email and LinkedIn.",
    impact: "Established a professional online presence with user-friendly design and detailed project documentation.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    gradient: "from-indigo-500 to-purple-500",
    icon: Code2,
    github: "https://github.com/SUNKUMARM/portfolio",
    live: "https://sunkumar.netlify.app/",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-hero"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Projects & Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional work and personal projects showcasing my frontend development journey
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-card rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-card">
                <div className="p-8 sm:p-12">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                          <project.icon className="text-white" size={24} />
                        </div>
                        <span className="text-sm text-accent font-medium">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    </div>
                    {(project.github || project.live) && (
                      <div className="flex gap-2">
                        {project.github && (
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-primary/50 hover:border-primary hover:bg-primary/10"
                            onClick={() => window.open(project.github, "_blank")}
                            aria-label="View on GitHub"
                          >
                            <Code2 size={20} />
                          </Button>
                        )}
                        {project.live && (
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-secondary/50 hover:border-secondary hover:bg-secondary/10"
                            onClick={() => window.open(project.live, "_blank")}
                            aria-label="View live site"
                          >
                            <ArrowUpRight size={20} />
                          </Button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Case Study Structure */}
                  <div className="grid md:grid-cols-1 gap-8 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-destructive mb-3 uppercase tracking-wider">
                        Challenge
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
                        Solution
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                        Outcome
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
