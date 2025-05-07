import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0");
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* --- Image Section --- */}
          <div
            className="animate-slide-in-left"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <div className="relative">
              <div className="rounded-lg overflow-hidden border-2 border-primary/40 p-2">
                <div className="w-full rounded-lg overflow-hidden bg-gradient-to-br from-secondary to-muted flex justify-center items-center">
                  <img
                    src="/lovable-uploads/991950ec-c9c8-46a5-b47b-3c89825d8e02.png"
                    alt="Vaibhav Janga"
                    className="max-w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 border-4 border-primary/20 rounded-lg"></div>
            </div>
          </div>

          {/* --- Text Section --- */}
          <div
            className="animate-slide-in-right"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            <h3 className="text-2xl font-bold mb-4">
              A passionate <span className="text-primary">developer</span> and{" "}
              <span className="text-primary">ML enthusiast</span>
            </h3>

            <p className="text-muted-foreground mb-6">
              Hello! I'm Vaibhav Janga, an undergraduate student at SRM University pursuing
              BTech in Computer Science with a Specialization in Software Engineering. I'm
              passionate about building software solutions and exploring the world of
              Artificial Intelligence and Machine Learning.
            </p>

            <p className="text-muted-foreground mb-6">
              My academic journey has equipped me with strong fundamentals in various
              programming languages, data structures, algorithms, and software development
              methodologies. I enjoy tackling complex problems and turning them into elegant
              solutions through code.
            </p>

            <p className="text-muted-foreground mb-8">
              When I'm not coding, you can find me exploring the latest advancements in AI
              and ML, contributing to projects, or expanding my knowledge through online
              courses and certifications.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="default" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>

              <Button variant="outline" asChild>
                <a href="/VaibhavJanga_Resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
