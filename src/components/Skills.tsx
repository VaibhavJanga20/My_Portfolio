
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openCategory, setOpenCategory] = useState<string | undefined>("frontend");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0");
          animateProgressBars();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateProgressBars = () => {
    const progressBars = document.querySelectorAll("[data-progress]");
    progressBars.forEach((bar) => {
      const level = bar.getAttribute("data-progress");
      if (bar instanceof HTMLElement) {
        setTimeout(() => {
          bar.style.width = `${level}%`;
        }, 300);
      }
    });
  };

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML5/CSS3", level: 95 },
      ],
    },
    {
      title: "Backend Development",
      description: "Building robust and scalable server-side applications",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "Python/Django", level: 80 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      title: "Database & DevOps",
      description: "Managing data and deployment infrastructure",
      skills: [
        { name: "MongoDB", level: 82 },
        { name: "PostgreSQL", level: 78 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 72 },
      ],
    },
    {
      title: "Machine Learning & AI",
      description: "Building intelligent systems and data-driven solutions",
      skills: [
        { name: "TensorFlow", level: 78 },
        { name: "PyTorch", level: 75 },
        { name: "Computer Vision", level: 72 },
        { name: "NLP", level: 68 },
        { name: "Data Analysis", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Showcasing my technical expertise and proficiency in various technologies and domains.
          </p>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl">Technical Skills</CardTitle>
              <CardDescription>
                Comprehensive breakdown of my technical abilities and competencies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion
                type="single"
                collapsible
                value={openCategory}
                onValueChange={setOpenCategory}
              >
                {skillCategories.map((category, index) => (
                  <AccordionItem key={index} value={category.title.toLowerCase().replace(/\s/g, "-")}>
                    <AccordionTrigger className="text-lg font-semibold">
                      {category.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <div className="space-y-4">
                        {category.skills.map((skill, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">{skill.name}</span>
                              <span>{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-1000 ease-out"
                                style={{ width: "0%" }}
                                data-progress={skill.level}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Professional Experience</CardTitle>
                <CardDescription>
                  Key areas of expertise and industry experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Web Application Development",
                    "Machine Learning & AI",
                    "Cloud Architecture",
                    "Database Design",
                    "Mobile App Development",
                    "UI/UX Design",
                    "API Development",
                    "DevOps & CI/CD"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Technology Stack</CardTitle>
                <CardDescription>
                  Modern technologies I work with
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    "React", "Node.js", "TypeScript", "Python",
                    "TensorFlow", "PostgreSQL", "MongoDB", "Docker",
                    "AWS", "Next.js", "GraphQL", "Tailwind CSS"
                  ].map((tech, i) => (
                    <div 
                      key={i}
                      className="bg-secondary/50 rounded-lg p-3 text-center hover:bg-primary/20 hover:scale-105 transition-all"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
