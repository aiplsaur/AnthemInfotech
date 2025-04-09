import { Link } from 'react-router-dom';
import { Code, Zap, Cloud, Database, Users, CheckCircle, ArrowRight, Check, ArrowRightIcon } from 'lucide-react';

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "We build custom, responsive websites that are fast, secure, and optimized for conversion, from corporate sites to complex web applications.",
      features: [
        "Responsive design for all devices",
        "Performance optimized code",
        "SEO-friendly architecture",
        "Custom CMS integration",
        "E-commerce capabilities"
      ],
      icon: "💻"
    },
    {
      title: "Mobile App Development",
      description: "We create intuitive, high-performance native and cross-platform mobile applications that engage users and drive business growth.",
      features: [
        "iOS and Android development",
        "Cross-platform solutions",
        "UI/UX focused design",
        "Offline functionality",
        "App Store optimization"
      ],
      icon: "📱"
    },
    {
      title: "Digital Marketing",
      description: "We drive targeted traffic and generate qualified leads through comprehensive digital marketing strategies tailored to your business goals.",
      features: [
        "Search engine optimization (SEO)",
        "Pay-per-click advertising (PPC)",
        "Social media marketing",
        "Content marketing",
        "Email marketing campaigns"
      ],
      icon: "📈"
    },
    {
      title: "UI/UX Design",
      description: "We create intuitive, engaging, and user-centered designs that enhance user satisfaction and improve conversion rates.",
      features: [
        "User research and personas",
        "Information architecture",
        "Wireframing and prototyping",
        "Interaction design",
        "Usability testing"
      ],
      icon: "🎨"
    },
    {
      title: "IT Consulting",
      description: "We provide strategic technology guidance to optimize your operations, reduce costs, and accelerate digital transformation.",
      features: [
        "Technology assessment",
        "Digital transformation strategy",
        "IT infrastructure planning",
        "System integration",
        "Technology roadmapping"
      ],
      icon: "📊"
    },
    {
      title: "Cybersecurity",
      description: "We protect your business with comprehensive security solutions that safeguard your data, systems, and customers.",
      features: [
        "Security assessment and auditing",
        "Penetration testing",
        "Security monitoring",
        "Compliance management",
        "Security training and awareness"
      ],
      icon: "🔒"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements through in-depth consultation."
    },
    {
      number: "02",
      title: "Strategy & Solution Design",
      description: "Our team develops a comprehensive strategy and technical blueprint tailored to your specific needs and objectives."
    },
    {
      number: "03",
      title: "Development & Implementation",
      description: "We bring your solution to life using agile methodology with regular updates and feedback integration."
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your solution is robust, secure, and delivers an exceptional user experience."
    },
    {
      number: "05",
      title: "Deployment & Launch",
      description: "We carefully manage the deployment process to ensure a smooth and successful launch of your solution."
    },
    {
      number: "06",
      title: "Support & Optimization",
      description: "Our relationship continues with ongoing support, monitoring, and optimization to ensure long-term success."
    }
  ];

  const technologies = {
    frontend: ["React", "Angular", "Vue.js", "Next.js", "TailwindCSS", "TypeScript"],
    backend: ["Node.js", "Python", "Java", "PHP", ".NET", "Ruby on Rails"],
    mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
    database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "AWS DynamoDB"],
    cloud: ["AWS", "Google Cloud", "Microsoft Azure", "Digital Ocean", "Heroku"],
    tools: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"]
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter lg:text-6xl relative overflow-hidden text-center">
            <span className="animate-slide-up block" style={{ animationDelay: "100ms" }}>Our</span> 
            <span className="animate-slide-up block" style={{ animationDelay: "300ms" }}>
              <span className="relative inline-block">
                <span className="text-primary relative z-10">Services</span>
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
            We provide end-to-end digital solutions that help businesses thrive in the digital age.
            From custom web and mobile applications to digital marketing and IT consulting.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section container px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card border-none h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll relative overflow-hidden" 
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute -right-10 -top-10 w-20 h-20 bg-primary/5 rounded-full transition-transform duration-500 group-hover:scale-[5]"></div>
              <CardHeader className="pb-2 relative z-10">
                <div className="mb-4 p-4 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <div className="text-4xl transform transition-transform duration-500 group-hover:rotate-12">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow relative z-10">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button 
                  variant="outline" 
                  className="w-full mt-4 group rounded-full hover:bg-primary/5 transition-all duration-300" 
                  asChild
                >
                  <Link to="/contact" className="flex items-center justify-center">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              We follow a systematic approach to ensure successful project delivery and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary/10 text-primary font-bold text-4xl py-2 px-4 rounded-bl-lg">
                  {step.number}
                </div>
                <CardHeader className="pb-2 pt-12">
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Technologies We Use</h2>
          <p className="section-subtitle">
            We leverage modern technologies and tools to build scalable, efficient, and future-proof solutions
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 overflow-hidden rounded-full border-2 border-primary/20 p-1">
            <TabsTrigger value="frontend" className="rounded-full">Frontend</TabsTrigger>
            <TabsTrigger value="backend" className="rounded-full">Backend</TabsTrigger>
            <TabsTrigger value="mobile" className="rounded-full">Mobile</TabsTrigger>
            <TabsTrigger value="database" className="rounded-full">Database</TabsTrigger>
            <TabsTrigger value="cloud" className="rounded-full">Cloud</TabsTrigger>
            <TabsTrigger value="tools" className="rounded-full">DevOps</TabsTrigger>
          </TabsList>
          
          {Object.entries(technologies).map(([category, techs]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {techs.map((tech, index) => (
                  <div 
                    key={index} 
                    className="bg-muted rounded-lg p-4 text-center hover:bg-primary/5 transition-colors"
                  >
                    <p className="font-medium">{tech}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Business?</h2>
            <p className="text-primary-foreground/90 text-lg">
              Contact us today to discuss your project requirements and discover how our services can help you achieve your business goals.
            </p>
            <Button size="lg" variant="secondary" className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 