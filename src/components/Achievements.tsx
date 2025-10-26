import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Sparkles, Zap, TrendingUp } from "lucide-react";

const achievements = [
  {
    icon: Sparkles,
    title: "Modernized Global CSS Architecture",
    subtitle: "Impactful Refactor - Recognized by CEO",
    description: "Refactored 7,100+ lines of SCSS and introduced CSS Custom Properties, reducing stylesheet size by 60% and cutting build time by 27 seconds.",
    impact: "This contribution was publicly appreciated by the Product Manager & CEO, and rewarded with company gift cards for outstanding impact.",
    metrics: [
      { label: "Stylesheet Size Reduced", value: "60%" },
      { label: "Build Time Improved", value: "27s" },
      { label: "Lines Refactored", value: "7,100+" },
    ],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Zap,
    title: "Reusable Component System",
    subtitle: "Performance + Scalability",
    description: "Engineered a reusable UI library of 16 table components and 9 tile components with Lazy Loading, improving performance by 20% and enabling UI reuse across 25+ screens.",
    impact: "This component system dramatically sped up future development cycles and became the foundation for all new features across the ATS platform and Career Portal.",
    metrics: [
      { label: "Performance Boost", value: "20%" },
      { label: "UI Screens Powered", value: "25+" },
      { label: "Components Created", value: "25" },
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
];

export const Achievements = () => {
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
          <div className="inline-flex items-center gap-2 mb-6">
            <Award className="text-primary" size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Key Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized contributions that delivered measurable impact at CrescoWorks LLP
          </p>
        </motion.div>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-card rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-card">
                <div className="p-8 sm:p-12">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${achievement.gradient} rounded-xl flex-shrink-0`}>
                      <achievement.icon className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-accent font-medium flex items-center gap-2">
                        <TrendingUp size={16} />
                        {achievement.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-4 mb-8">
                    <p className="text-lg text-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                      <p className="text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-primary">Impact:</span> {achievement.impact}
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    {achievement.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="bg-gradient-to-br from-background to-background/50 border border-border rounded-xl p-6 text-center"
                      >
                        <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
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
