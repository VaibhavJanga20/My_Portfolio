import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-16 opacity-0 transition-opacity duration-1000"
    >
      <div className="w-full px-6 md:px-12 xl:px-32">
        <div className="text-center md:text-left">
          <p className="text-primary text-lg md:text-xl mb-4 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            Hello, my name is
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 animate-slide-in-left"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-gradient">Vaibhav Janga</span>
          </h1>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium mb-6 animate-slide-in-left"
            style={{ animationDelay: "0.6s" }}
          >
            Fullstack Developer & ML Engineer
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-5xl mb-10 animate-slide-in-left"
            style={{ animationDelay: "0.8s" }}
          >
            I build exceptional digital experiences and intelligent systems. Specializing in fullstack development and
            machine learning, I turn complex problems into elegant, scalable solutions.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 animate-slide-in-left" style={{ animationDelay: "1s" }}>
            <Button size="lg" variant="default" asChild>
              <a href="#skills">View My Skills</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>

      {!isMobile && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;
