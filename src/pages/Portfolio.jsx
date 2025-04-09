import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export default function Portfolio() {
  // Filter categories
  const categories = [
    "All",
    "Web Development",
    "Mobile",
    "Cloud",
    "Enterprise",
    "E-Commerce"
  ];

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Enterprise Resource Planning System",
      description: "A comprehensive ERP solution for a global manufacturing company, streamlining operations across 12 countries.",
      image: "https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?auto=format&fit=crop&w=800",
      category: "Enterprise",
      technologies: ["React", "Node.js", "MongoDB", "Docker"],
      client: "Global Manufacturing Inc.",
      year: "2023",
      link: "#"
    },
    {
      id: 2,
      title: "Healthcare Mobile Application",
      description: "A patient management app that allows users to schedule appointments, access medical records, and communicate with healthcare providers.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
      category: "Mobile",
      technologies: ["React Native", "Firebase", "Redux"],
      client: "MediCare Solutions",
      year: "2023",
      link: "#"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "A custom e-commerce solution for a luxury retail brand, resulting in a 45% increase in online sales.",
      image: "https://images.unsplash.com/photo-1571867424488-41322ee21a7d?auto=format&fit=crop&w=800",
      category: "E-Commerce",
      technologies: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
      client: "Luxury Brands Co.",
      year: "2022",
      link: "#"
    },
    {
      id: 4,
      title: "Cloud Migration Project",
      description: "Migrated a legacy system to a cloud-based infrastructure, reducing operational costs by 30% and improving system reliability.",
      image: "https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?auto=format&fit=crop&w=800",
      category: "Cloud",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      client: "Financial Services Ltd.",
      year: "2022",
      link: "#"
    },
    {
      id: 5,
      title: "Real Estate Listing Website",
      description: "A feature-rich property listing website with advanced search capabilities and virtual tour integration.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
      client: "Prime Properties",
      year: "2021",
      link: "#"
    },
    {
      id: 6,
      title: "Inventory Management System",
      description: "An inventory tracking system with real-time updates, barcode scanning, and predictive analytics.",
      image: "https://images.unsplash.com/photo-1563770557593-28096de60423?auto=format&fit=crop&w=800",
      category: "Enterprise",
      technologies: ["Vue.js", "Express", "MySQL", "Socket.io"],
      client: "Logistics Enterprises",
      year: "2021",
      link: "#"
    },
    {
      id: 7,
      title: "Food Delivery App",
      description: "A mobile application connecting local restaurants with customers, featuring real-time order tracking and payment processing.",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800",
      category: "Mobile",
      technologies: ["Flutter", "Firebase", "Google Maps", "Stripe"],
      client: "FoodConnect",
      year: "2022",
      link: "#"
    },
    {
      id: 8,
      title: "Corporate Intranet Portal",
      description: "A secure internal portal for employee communication, document sharing, and team collaboration.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
      category: "Web Development",
      technologies: ["SharePoint", "React", "Microsoft Graph API"],
      client: "Corporate Services Inc.",
      year: "2023",
      link: "#"
    },
    {
      id: 9,
      title: "Retail Analytics Dashboard",
      description: "An interactive dashboard providing real-time sales data, customer insights, and inventory analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
      category: "Enterprise",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      client: "Retail Chain Corp.",
      year: "2022",
      link: "#"
    }
  ];

  // Case studies
  const caseStudies = [
    {
      id: 1,
      title: "Manufacturing ERP Transformation",
      client: "Global Manufacturing Inc.",
      description: "How we helped a global manufacturing company streamline operations with a custom ERP solution.",
      challenge: "The client was struggling with disparate systems across 12 countries, leading to data inconsistencies, reporting delays, and operational inefficiencies.",
      solution: "We developed a comprehensive ERP solution that integrated all departments and provided real-time data access and reporting capabilities.",
      results: [
        "35% increase in operational efficiency",
        "50% reduction in reporting time",
        "Seamless integration across 17 departments",
        "Real-time visibility into global operations"
      ],
      image: "https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?auto=format&fit=crop&w=800",
      category: "Enterprise",
      technologies: ["React", "Node.js", "MongoDB", "Docker"]
    },
    {
      id: 2,
      title: "E-Commerce Revenue Growth",
      client: "Luxury Brands Co.",
      description: "How our custom e-commerce platform helped a luxury retailer increase online sales by 45%.",
      challenge: "The client's outdated e-commerce platform was limiting growth, provided poor user experience, and lacked personalization capabilities.",
      solution: "We built a modern e-commerce platform with personalized shopping experiences, AR product visualization, and an integrated loyalty program.",
      results: [
        "45% increase in online sales",
        "60% improvement in customer retention",
        "30% higher average order value",
        "75% reduction in cart abandonment rate"
      ],
      image: "https://images.unsplash.com/photo-1571867424488-41322ee21a7d?auto=format&fit=crop&w=800",
      category: "E-Commerce",
      technologies: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Healthcare App User Growth",
      client: "MediCare Solutions",
      description: "How we helped a healthcare provider grow their patient engagement with a mobile application.",
      challenge: "The client needed a secure, user-friendly mobile application to improve patient engagement and streamline administrative processes.",
      solution: "We developed a comprehensive healthcare app with appointment scheduling, medical records access, and secure provider communication.",
      results: [
        "400% increase in patient engagement",
        "70% reduction in appointment no-shows",
        "35% decrease in administrative workload",
        "95% patient satisfaction rating"
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
      category: "Mobile",
      technologies: ["React Native", "Firebase", "Redux"]
    }
  ];

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter lg:text-6xl relative overflow-hidden text-center">
            <span className="animate-slide-up block" style={{ animationDelay: "100ms" }}>Our</span> 
            <span className="animate-slide-up block" style={{ animationDelay: "300ms" }}>
              <span className="relative inline-block">
                <span className="text-primary relative z-10">Portfolio</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 rounded-full transform -skew-x-12 animate-width" style={{ animationDelay: "800ms" }}></span>
              </span>
            </span>
            <div className="absolute -top-2 -left-4 w-16 h-16 text-primary/10 animate-ping-slow opacity-70">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 18.5L9.5 12.5L13.5 16.5L22 6.92" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 7H22V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center animate-fade-up" style={{ animationDelay: "700ms" }}>
            Explore our recent projects and see how we've helped businesses achieve their digital transformation goals.
          </p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Featured Case Studies</h2>
            <p className="section-subtitle">
              Dive deeper into our success stories and see the impact of our solutions
            </p>
          </div>

          <Tabs defaultValue="case1" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-1 sm:grid-cols-3 mb-12 overflow-hidden rounded-full border-2 border-primary/20 p-1">
              {caseStudies.map((study, index) => (
                <TabsTrigger key={study.id} value={`case${study.id}`} className="rounded-full">{study.client}</TabsTrigger>
              ))}
            </TabsList>
            
            {caseStudies.map((study) => (
              <TabsContent key={study.id} value={`case${study.id}`} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div className="space-y-5">
                    <Badge variant="outline" className="mb-2 text-sm font-medium">{study.category}</Badge>
                    <h2 className="text-3xl font-bold">{study.title}</h2>
                    <p className="text-muted-foreground text-lg">{study.description}</p>
                  </div>
                  <AspectRatio ratio={16/9} className="bg-muted rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                  </AspectRatio>
                </div>
                
                <Card className="border-none shadow-md">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-4">
                        <h3 className="font-bold text-xl mb-3 text-primary">The Challenge</h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-bold text-xl mb-3 text-primary">Our Solution</h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-bold text-xl mb-3 text-primary">Results</h3>
                        <ul className="space-y-3">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-8 pt-6 border-t flex flex-wrap gap-3">
                      {study.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-sm font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <div className="text-center">
                  <Button className="rounded-full" asChild>
                    <Link to="/contact" className="inline-flex items-center gap-2">
                      Discuss a Similar Project
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section container px-4 md:px-6 py-16 md:py-24">
        <Tabs defaultValue="All" className="w-full max-w-4xl mx-auto mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 overflow-auto p-1 rounded-lg bg-muted">
            {categories.map((category, index) => (
              <TabsTrigger 
                key={index} 
                value={category}
                onClick={() => setSelectedCategory(category)}
                className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-white text-sm px-3"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="card border-none h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll relative overflow-hidden" 
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 rounded-full transition-transform duration-500 group-hover:scale-[3]"></div>
              <AspectRatio ratio={16/9} className="bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </AspectRatio>
              <CardHeader className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    {project.category}
                  </Badge>
                  <Badge variant="outline" className="bg-muted/50 hover:bg-muted">
                    {project.year}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Client:</span> {project.client}
                </div>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button 
                  variant="outline" 
                  className="w-full group rounded-full hover:bg-primary/5 transition-all duration-300"
                  asChild
                >
                  <Link to={project.link} className="flex items-center justify-center">
                    View Project 
                    <ExternalLink className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Build Your Next Project?</h2>
            <p className="text-primary-foreground/90 text-lg">
              Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
            </p>
            <Button size="lg" variant="secondary" className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl" asChild>
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 