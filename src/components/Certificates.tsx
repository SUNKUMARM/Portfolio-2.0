import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "JavaScript (Intermediate)",
    provider: "HackerRank",
    credentialId: "3E39CF7131D7",
    url: "https://www.hackerrank.com/certificates/3e39cf7131d7",
  },
  {
    title: "Angular (Basic)",
    provider: "HackerRank",
    credentialId: "95C1E4845C94",
    url: "https://www.hackerrank.com/certificates/95c1e4845c94",
  },
  {
    title: " Frontend Developer (React)",
    provider: "HackerRank",
    credentialId: "5E9D95D71DE7",
    url: "https://www.hackerrank.com/certificates/5e9d95d71de7",
  },
  {
    title: "JavaScript (Basic)",
    provider: "HackerRank",
    credentialId: "72865796A76C",
    url: "https://www.hackerrank.com/certificates/72865796a76c",
  },
  {
    title: "Problem Solving (Basic)",
    provider: "HackerRank",
    credentialId: "2E848181AE53",
    url: "https://www.hackerrank.com/certificates/2e848181ae53",
  },
];

export const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Certificates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications validating technical expertise
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-card rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 shadow-card h-full flex flex-col">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Award className="text-primary" size={28} />
                </div>

                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{cert.provider}</p>
                <p className="text-xs text-muted-foreground mb-4">
                  ID: {cert.credentialId}
                </p>

                <div className="mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/50 hover:border-primary hover:bg-primary/10"
                    onClick={() => window.open(cert.url, "_blank")}
                  >
                    View Certificate
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
