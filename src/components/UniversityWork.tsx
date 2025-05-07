import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

const UniversityWork: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("coding-badges");
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Updated data for coding badges based on the provided image
  const codingBadges = [
    { title: "Problem Solving", platform: "LeetCode", level: "3 stars", date: "2024", icon: "🏆" },
    { title: "C++", platform: "Coding Platforms", level: "5 stars", date: "2023", icon: "🔷" },
    { title: "Python", platform: "Coding Platforms", level: "5 stars", date: "2023", icon: "🐍" },
    { title: "C Language", platform: "Coding Platforms", level: "5 stars", date: "2022", icon: "🔰" }
  ];

  // Updated data for ELab projects with corresponding wheel images
  const elabProjects = [
    { 
      title: "Data Structures and Algorithms", 
      description: "Implemented fundamental data structures and algorithms with a focus on complexity analysis.", 
      technologies: ["Data Structures", "Algorithms", "Optimization"], 
      date: "2022",
      imagePath: "/lovable-uploads/2db22042-d17d-460b-87e8-8324f86be66c.png"
    },
    { 
      title: "Java Programming", 
      description: "Developed projects focused on object-oriented principles and Java applications.", 
      technologies: ["Java", "OOP", "GUI Development"], 
      date: "2023",
      imagePath: "/lovable-uploads/d724e36d-334c-49ef-bb83-762e0f23613f.png"
    },
    { 
      title: "C Programming", 
      description: "Developed applications using C programming with focus on memory management and efficiency.", 
      technologies: ["C", "Memory Management", "System Programming"], 
      date: "2021",
      imagePath: "/lovable-uploads/39247992-f2c7-4e98-8ad7-d88c4b16e3db.png"
    },
    { 
      title: "Design and Analysis of Algorithms", 
      description: "Implemented various algorithms and analyzed their efficiency and performance.", 
      technologies: ["Algorithm Design", "Complexity Analysis", "Problem Solving"], 
      date: "2023",
      imagePath: "/lovable-uploads/21171501-4ba1-41be-825b-66fc7865ac85.png"
    },
    { 
      title: "Object Oriented Programming", 
      description: "Built applications using object-oriented design principles and patterns.", 
      technologies: ["OOP", "Design Patterns", "Software Architecture"], 
      date: "2022",
      imagePath: "/lovable-uploads/207b1507-3424-4c6d-8280-a6b83353452f.png"
    },
    { 
      title: "Python Programming", 
      description: "Implemented Python programs focusing on data processing and algorithm implementation.", 
      technologies: ["Python", "Data Analysis", "Libraries"], 
      date: "2023",
      imagePath: "/lovable-uploads/13b9d5aa-a678-432e-b3b6-bdeade357b1e.png"
    }
  ];

  // Keep existing college courses data
  const collegeCourses = [
    { code: "CSE101", title: "INTRODUCTION TO COMPUTATIONAL BIOLOGY", grade: "A", year: "2021" },
    { code: "CHEM101", title: "CHEMISTRY", grade: "A", year: "2021" },
    { code: "MATH101", title: "CALCULUS AND LINEAR ALGEBRA", grade: "A", year: "2021" },
    { code: "MATH102", title: "ADVANCED CALCULUS AND COMPLEX ANALYSIS", grade: "A", year: "2021" },
    { code: "MATH103", title: "TRANSFORMS AND BOUNDARY VALUE PROBLEMS", grade: "A-", year: "2022" },
    { code: "CSE102", title: "PROGRAMMING FOR PROBLEM SOLVING", grade: "A+", year: "2021" },
    { code: "CSE103", title: "COMPUTER ORGANIZATION AND ARCHITECTURE", grade: "A", year: "2022" },
    { code: "EEE101", title: "ELECTRICAL AND ELECTRONICS ENGINEERING", grade: "B+", year: "2021" },
    { code: "MECH101", title: "BASIC CIVIL AND MECHANICAL WORKSHOP", grade: "A", year: "2021" },
    { code: "ENGR101", title: "ENGINEERING GRAPHICS AND DESIGN", grade: "A-", year: "2021" },
    { code: "PHIL101", title: "PHILOSOPHY OF ENGINEERING", grade: "A", year: "2022" },
    { code: "ENG101", title: "COMMUNICATIVE ENGLISH", grade: "A", year: "2021" },
    { code: "CSE201", title: "OBJECT ORIENTED DESIGN AND PROGRAMMING", grade: "A+", year: "2022" },
    { code: "CSE202", title: "DATA STRUCTURES AND ALGORITHMS", grade: "A", year: "2022" },
    { code: "CSE203", title: "OPERATING SYSTEMS", grade: "A", year: "2022" },
    { code: "CSE204", title: "ADVANCED PROGRAMMING PRACTICE", grade: "A-", year: "2023" },
    { code: "CSE205", title: "DESIGN AND ANALYSIS OF ALGORITHMS", grade: "A", year: "2023" },
    { code: "CSE206", title: "DATABASE MANAGEMENT SYSTEMS", grade: "A+", year: "2023" },
    { code: "CSE207", title: "ARTIFICIAL INTELLIGENCE", grade: "A+", year: "2023" },
    { code: "MATH201", title: "PROBABILITY AND QUEUEING THEORY", grade: "A-", year: "2023" },
    { code: "SOC101", title: "SOCIAL ENGINEERING", grade: "A", year: "2022" },
    { code: "CSE208", title: "PROGRAMMING IN JAVA", grade: "A+", year: "2023" }
  ];

  // Keep existing certifications data with updated links
  const certifications = [
    { 
      title: "Java Programming", 
      issuer: "NPTEL", 
      date: "2023", 
      credentialId: "NPTEL-JAVA-2023",
      link: "https://drive.google.com/file/d/18jJTa1F9QMmYleYyr-u59j3Ogzsm1PoT/view?usp=drive_link"
    },
    { 
      title: "Alteryx Designer Core", 
      issuer: "Alteryx", 
      date: "2023", 
      credentialId: "ALTERYX-CORE-2023",
      link: "https://drive.google.com/file/d/141QzhyY5KreJYeNkHFuQkT-9WT5zVi5N/view?usp=drive_link"
    },
    { 
      title: "Alteryx Foundational Micro Credential", 
      issuer: "Alteryx", 
      date: "2023", 
      credentialId: "ALTERYX-FOUND-2023",
      link: "https://drive.google.com/file/d/1uvv6eZAGao30p3j2Oe7Vr4TjVF3J5w6L/view?usp=drive_link"
    },
    { 
      title: "C++ Beginner", 
      issuer: "Udemy", 
      date: "2022", 
      credentialId: "UDEMY-CPP-BEG-2022",
      link: "https://drive.google.com/file/d/1gp9DzVSIYQKVZ7e12fWErqeVLcESOOOM/view?usp=drive_link"
    },
    { 
      title: "CSS, JAVA and PHP", 
      issuer: "Udemy", 
      date: "2022", 
      credentialId: "UDEMY-WEB-2022",
      link: "https://drive.google.com/file/d/1aBEmSurJ5WsWbxeQJWqZKVoCgHodwas-/view?usp=drive_link"
    },
    { 
      title: "C++ Advanced", 
      issuer: "Udemy", 
      date: "2022", 
      credentialId: "UDEMY-CPP-ADV-2022",
      link: "https://drive.google.com/file/d/1qtdEXJWLls775JKcC886GXRSP541SnwD/view?usp=drive_link"
    },
    { 
      title: "Database Management Systems", 
      issuer: "NPTEL", 
      date: "2023", 
      credentialId: "NPTEL-DBMS-2023",
      link: "https://drive.google.com/file/d/1qtdEXJWLls775JKcC886GXRSP541SnwD/view?usp=drive_link"
    }
  ];

  return (
    <section
      id="university-work"
      ref={sectionRef}
      className="py-20 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            University <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Showcasing my academic journey, achievements, and contributions at SRM University.
          </p>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <Tabs defaultValue="coding-badges" value={activeTab} onValueChange={setActiveTab} className="w-full animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex justify-center mb-8 overflow-x-auto py-2 scrollbar-none">
            <TabsList className={`grid ${isMobile ? 'grid-flow-col auto-cols-max gap-1' : 'grid-cols-4 gap-2'}`}>
              <TabsTrigger value="coding-badges" className="text-sm md:text-base px-3 whitespace-nowrap">Coding Badges</TabsTrigger>
              <TabsTrigger value="elab" className="text-sm md:text-base px-3 whitespace-nowrap">ELab</TabsTrigger>
              <TabsTrigger value="college-courses" className="text-sm md:text-base px-3 whitespace-nowrap">College Courses</TabsTrigger>
              <TabsTrigger value="certifications" className="text-sm md:text-base px-3 whitespace-nowrap">Certifications</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="coding-badges" className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {codingBadges.map((badge, index) => (
                <Card key={index} className="glass-card hover:scale-105 transition-transform duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{badge.title}</CardTitle>
                      <span className="text-2xl">{badge.icon}</span>
                    </div>
                    <CardDescription>{badge.platform}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary/20 text-primary-foreground">
                        {badge.level}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{badge.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <div className="max-w-lg">
                <AspectRatio ratio={16/5} className="bg-muted/20 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/09652eaf-3621-437d-adb6-4b4f9cf5835c.png" 
                    alt="Coding Badges" 
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="elab" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {elabProjects.map((project, index) => (
                <Card key={index} className="glass-card hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="w-full">
                      <AspectRatio ratio={1/1} className="bg-muted/20 rounded-lg overflow-hidden">
                        <img 
                          src={project.imagePath} 
                          alt={`${project.title} Wheel Diagram`} 
                          className="object-contain w-full h-full"
                        />
                      </AspectRatio>
                    </div>
                    <p className="text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="bg-secondary/50 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="college-courses" className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collegeCourses.map((course, index) => (
                <Card key={index} className="glass-card hover:scale-105 transition-transform duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base sm:text-lg md:text-xl">{course.title}</CardTitle>
                      <Badge className="bg-primary/20 text-primary-foreground">
                        {course.grade}
                      </Badge>
                    </div>
                    <CardDescription>{course.code}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Academic Year: {course.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="certifications" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="glass-card hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between flex-wrap gap-2">
                      <span className="text-sm text-muted-foreground">Issued: {cert.date}</span>
                      <span className="text-sm text-muted-foreground">ID: {cert.credentialId}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-2"
                      onClick={() => window.open(cert.link, "_blank")}
                    >
                      View Certificate
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default UniversityWork;
