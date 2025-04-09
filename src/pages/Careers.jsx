import { Link } from 'react-router-dom';
import { ArrowRight, BriefcaseIcon, Users, Clock, Laptop, Calendar, Globe, Coffee, MapPin } from 'lucide-react';

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export default function Careers() {
  // Sample job listings
  const jobOpenings = [
    {
      id: 1,
      title: "Senior React Developer",
      department: "Development",
      location: "Gurgaon, Haryana (Hybrid)",
      type: "Full-time",
      experience: "3-5 years",
      description: "We're looking for a Senior React Developer to join our team who is passionate about building exceptional user interfaces and has extensive experience with React and modern JavaScript.",
      responsibilities: [
        "Develop new user-facing features using React.js and related technologies",
        "Build reusable components and libraries for future use",
        "Translate designs and wireframes into high-quality code",
        "Optimize components for maximum performance",
        "Collaborate with other team members and stakeholders"
      ],
      requirements: [
        "3-5 years of experience with React.js and modern JavaScript",
        "Proficient understanding of web markup, including HTML5 and CSS3",
        "Experience with popular React workflows (Redux, React Router)",
        "Familiarity with RESTful APIs and modern authorization mechanisms",
        "Understanding of server-side rendering and its benefits"
      ]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Gurgaon, Haryana (On-site)",
      type: "Full-time",
      experience: "2-4 years",
      description: "We are seeking a talented UI/UX Designer to create amazing user experiences for our clients. The ideal candidate will have a strong portfolio showcasing their design skills and ability to solve complex user problems.",
      responsibilities: [
        "Create user-centered designs by understanding business requirements and user feedback",
        "Design wireframes, mockups, and prototypes for web and mobile applications",
        "Conduct user research and usability testing",
        "Collaborate with development teams to implement designs",
        "Stay up-to-date with the latest design trends and tools"
      ],
      requirements: [
        "2-4 years of experience in UI/UX design",
        "Proficiency in design tools such as Figma, Adobe XD, or Sketch",
        "Strong portfolio demonstrating UI/UX projects",
        "Understanding of user research methodologies",
        "Knowledge of design systems and component libraries"
      ]
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "2-5 years",
      description: "We're looking for a Digital Marketing Specialist to develop and implement effective marketing strategies across digital channels. The ideal candidate will have experience in SEO, content marketing, and social media management.",
      responsibilities: [
        "Develop and execute digital marketing campaigns across various channels",
        "Manage and optimize SEO strategies to improve organic search rankings",
        "Create and curate engaging content for social media and blogs",
        "Analyze campaign performance and provide detailed reports",
        "Stay updated with the latest digital marketing trends"
      ],
      requirements: [
        "2-5 years of experience in digital marketing",
        "Proficiency in SEO, SEM, and content marketing",
        "Experience with analytics tools like Google Analytics",
        "Knowledge of major social media platforms and best practices",
        "Excellent written and verbal communication skills"
      ]
    }
  ];

  // Company benefits
  const benefits = [
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options to help you maintain a healthy balance."
    },
    {
      icon: <Laptop className="h-8 w-8 text-primary" />,
      title: "Latest Technology",
      description: "Access to cutting-edge tools and technologies to help you do your best work."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaborative Environment",
      description: "Work with talented professionals in a supportive and collaborative atmosphere."
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Paid Time Off",
      description: "Generous vacation policy, plus sick leave and holidays to recharge."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Learning Opportunities",
      description: "Continuous learning through workshops, courses, and conference attendance."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Growth & Development",
      description: "Clear career paths and mentorship to help you reach your professional goals."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter lg:text-6xl relative overflow-hidden text-center">
            <span className="animate-slide-up block" style={{ animationDelay: "100ms" }}>Join Our</span> 
            <span className="animate-slide-up block" style={{ animationDelay: "300ms" }}>
              <span className="relative inline-block">
                <span className="text-primary relative z-10">Team</span>
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
            Build your career with Anthem Infotech and be part of a team that's passionate about innovation and excellence.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section bg-muted">
        <div className="container px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="relative inline-block">
              <h2 className="section-title relative inline-block">
                Why Work With Us
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
              </h2>
              <div className="absolute -right-8 -top-8 w-16 h-16 text-primary/20 animate-spin-slow hidden md:block">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <p className="section-subtitle mt-6 text-lg opacity-0 animate-fadeIn" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              Discover the benefits of being part of the Anthem Infotech family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="card border-none h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll relative overflow-hidden" 
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute -right-10 -top-10 w-20 h-20 bg-primary/5 rounded-full transition-transform duration-500 group-hover:scale-[5]"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6 p-4 bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <div className="transform transition-transform duration-500 group-hover:rotate-12">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Anthem */}
      <section className="section container px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="relative inline-block">
            <h2 className="section-title relative inline-block">
              Life at Anthem Infotech
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
            </h2>
          </div>
          <p className="section-subtitle mt-6 text-lg opacity-0 animate-fadeIn" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            Get a glimpse of our vibrant work culture and environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <AspectRatio ratio={16/9} className="bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" 
                alt="Team collaboration" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </AspectRatio>
            <div className="p-6 bg-background">
              <h3 className="text-xl font-medium mb-2">Collaborative Environment</h3>
              <p className="text-muted-foreground">We believe in the power of teamwork and creativity. Our collaborative workspace fosters innovation and camaraderie.</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <AspectRatio ratio={16/9} className="bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Team event" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </AspectRatio>
            <div className="p-6 bg-background">
              <h3 className="text-xl font-medium mb-2">Team Events & Celebrations</h3>
              <p className="text-muted-foreground">We regularly host team-building activities, celebrate achievements, and create opportunities for our team to bond outside of work.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="rounded-full px-8 shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300" asChild>
            <a href="http://management.antheminfotech.com/our-team" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <span>Visit Our Team Portal</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section bg-muted">
        <div className="container px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="relative inline-block">
              <h2 className="section-title relative inline-block">
                Current Openings
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
              </h2>
            </div>
            <p className="section-subtitle mt-6 text-lg opacity-0 animate-fadeIn" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              Explore our current job opportunities and find your perfect role
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {jobOpenings.map((job, index) => (
              <Card 
                key={job.id} 
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-on-scroll relative overflow-hidden"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 rounded-full transition-transform duration-500 group-hover:scale-[3] opacity-0 group-hover:opacity-100"></div>
                <CardHeader className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{job.title}</CardTitle>
                      <CardDescription className="text-base">{job.department}</CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                        <MapPin className="h-3 w-3 mr-1" /> {job.location}
                      </Badge>
                      <Badge variant="outline" className="bg-muted/50 hover:bg-muted">
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="bg-muted/50 hover:bg-muted">
                        {job.experience}
                      </Badge>
                    </div>
                  </div>
                  <Separator className="my-2" />
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6">{job.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-lg mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((requirement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                            <span>{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button 
                    className="rounded-full px-8 shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300" 
                    asChild
                  >
                    <Link to="/contact" className="flex items-center gap-2">
                      <span>Apply Now</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section container px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="relative inline-block">
            <h2 className="section-title relative inline-block">
              Our Hiring Process
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
            </h2>
          </div>
          <p className="section-subtitle mt-6 text-lg opacity-0 animate-fadeIn" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            A transparent look at our recruitment process from application to onboarding
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full hidden md:block"></div>
          
          {[
            {
              step: "01",
              title: "Application Submission",
              description: "Submit your application through our website or email with your resume and cover letter."
            },
            {
              step: "02",
              title: "Initial Screening",
              description: "Our HR team reviews applications and selects candidates for the first round of interviews."
            },
            {
              step: "03",
              title: "Technical Assessment",
              description: "Depending on the role, candidates may be given a technical assessment or task to evaluate their skills."
            },
            {
              step: "04",
              title: "Interview Rounds",
              description: "Selected candidates participate in multiple interview rounds with team members and leadership."
            },
            {
              step: "05",
              title: "Offer & Negotiations",
              description: "Successful candidates receive an offer letter with compensation details and other terms."
            },
            {
              step: "06",
              title: "Onboarding",
              description: "Once you accept the offer, our HR team guides you through the onboarding process to help you settle in."
            }
          ].map((step, index) => (
            <div key={index} className={`relative mb-16 ${index % 2 === 0 ? 'md:ml-auto md:pl-16 md:pr-0' : 'md:mr-auto md:pr-16 md:pl-0'} w-full md:w-1/2`}>
              <div className="absolute top-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold z-10 shadow-lg">
                {step.step}
              </div>
              
              <Card className="border-none shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 hover:border-primary/20 duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Join Our Team?</h2>
            <p className="text-primary-foreground/90 text-lg">
              Explore our current openings or submit your resume for future opportunities. We're always looking for talented individuals to join our growing team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl" asChild>
                <Link to="/contact">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-white text-white hover:bg-white/10" asChild>
                <a href="mailto:careers@antheminfotech.com">Email Your Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 