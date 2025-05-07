import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-20 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my development skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* InventoryVista Project */}
          <Card className="overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/20 hover:shadow-lg animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src="/lovable-uploads/0ba6db3f-6500-4233-ae18-886f343dd0a5.png"
                alt="InventoryVista Dashboard" 
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">InventoryVista</CardTitle>
              <CardDescription>Inventory Management System</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A comprehensive inventory management system designed to streamline stock tracking, 
                order processing, and inventory analytics. InventoryVista features a user-friendly 
                dashboard with real-time updates on product levels, active orders, and supplier information.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">React</span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">Node.js</span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">MongoDB</span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">Chart.js</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="default" className="w-full gap-2 group" asChild>
                <a href="https://inventoryvista.vercel.app/" target="_blank" rel="noopener noreferrer">
                  View Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* MindfulMe Project */}
          <Card className="overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/20 hover:shadow-lg animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src="/lovable-uploads/62b69714-3bd5-47ce-8448-fc8e98e50849.png"
                alt="MindfulMe Dashboard" 
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">MindfulMe</CardTitle>
              <CardDescription>Mental Health Wellness App</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                MindfulMe is a comprehensive mental health wellness application designed to help 
                users track their mood, practice mindfulness through guided breathing exercises, 
                journal their thoughts, and engage in supportive conversations. The app provides 
                personalized insights based on mood trends and wellness activities.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">React</span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">Firebase</span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">TensorFlow.js</span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">Recharts</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="default" className="w-full gap-2 group" asChild>
                <a href="https://mindful-me-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
                  View Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
