import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Cloud, Zap, Users, CheckCircle, Monitor, Search, ShieldCheck } from 'lucide-react';

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";
import { AspectRatio } from "../../components/ui/aspect-ratio";

export default function Home() {
  // Add reveal animation on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-section container px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter lg:text-6xl relative overflow-hidden">
                <span className="animate-slide-up block" style={{ animationDelay: "100ms" }}>Innovative</span> 
                <span className="animate-slide-up block" style={{ animationDelay: "300ms" }}>
                  Digital <span className="relative inline-block">
                    <span className="text-primary relative z-10">Solutions</span>
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 rounded-full transform -skew-x-12 animate-width" style={{ animationDelay: "800ms" }}></span>
                  </span>
                </span>
                <span className="animate-slide-up block" style={{ animationDelay: "500ms" }}>for Modern Businesses</span>
                <div className="absolute -top-2 -left-4 w-16 h-16 text-primary/10 animate-ping-slow opacity-70">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 18.5L9.5 12.5L13.5 16.5L22 6.92" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 7H22V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 text-primary/10 animate-pulse opacity-70">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "700ms" }}>
                We craft cutting-edge digital experiences that transform businesses and drive growth, from custom software development to comprehensive digital marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "900ms" }}>
                <Button className="rounded-full px-8 shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" className="rounded-full px-8 hover:bg-primary/5 transition-all duration-300" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <AspectRatio ratio={16/9} className="bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" 
                  alt="Digital Solutions" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </AspectRatio>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section bg-muted mt-12 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <div className="inline-block relative">
                <h2 className="section-title relative mb-4 inline-block">
                  Our Services
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
                </h2>
                <div className="absolute -top-8 -right-8 w-16 h-16 text-primary/20 animate-spin-slow hidden md:block">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="section-subtitle mt-6 text-lg opacity-0 animate-fadeIn" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
                Comprehensive solutions designed to elevate your digital presence and business operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Web Development",
                  description: "Custom websites and web applications tailored to your business requirements, built with modern frameworks and responsive design.",
                  icon: <Code className="h-10 w-10 text-primary" />,
                  link: "/services#web",
                  delay: "100ms"
                },
                {
                  title: "Mobile App Development",
                  description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
                  icon: <Zap className="h-10 w-10 text-primary" />,
                  link: "/services#mobile",
                  delay: "200ms"
                },
                {
                  title: "Digital Marketing",
                  description: "Strategic digital marketing services including SEO, content marketing, social media management, and paid advertising.",
                  icon: <Search className="h-10 w-10 text-primary" />,
                  link: "/services#digital-marketing",
                  delay: "300ms"
                },
                {
                  title: "UI/UX Design",
                  description: "User-centered design services that create intuitive, engaging interfaces and seamless user experiences.",
                  icon: <Monitor className="h-10 w-10 text-primary" />,
                  link: "/services#design",
                  delay: "400ms"
                },
                {
                  title: "IT Consulting",
                  description: "Strategic technology consulting to help you make informed business decisions and implement effective IT solutions.",
                  icon: <Users className="h-10 w-10 text-primary" />,
                  link: "/services#consulting",
                  delay: "500ms"
                },
                {
                  title: "Cybersecurity",
                  description: "Comprehensive security assessments, implementation, and monitoring to protect your digital assets and data.",
                  icon: <ShieldCheck className="h-10 w-10 text-primary" />,
                  link: "/services#security",
                  delay: "600ms"
                }
              ].map((service, index) => (
                <Card 
                  key={index} 
                  className="card border-none h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll relative overflow-hidden" 
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -right-10 -top-10 w-20 h-20 bg-primary/5 rounded-full transition-transform duration-500 group-hover:scale-[5]"></div>
                  <CardHeader className="pb-2 relative z-10">
                    <div className="mb-4 p-4 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                      <div className="transform transition-transform duration-500 group-hover:rotate-12">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="relative z-10">
                    <Link 
                      to={service.link} 
                      className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-3 transition-all duration-300 hover:text-primary-600"
                    >
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-[2px] after:w-0 group-hover:after:w-full after:transition-all after:duration-300">Learn more</span>
                      <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section container px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-on-scroll">
              <div className="relative inline-block">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl relative z-10">
                  Why Choose Anthem Infotech
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
                </h2>
                <div className="absolute -left-8 -top-8 w-16 h-16 text-primary/10 animate-ping-slow opacity-70">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="text-muted-foreground text-lg">
                We deliver tailored digital solutions with a client-centric approach that prioritizes your business goals and delivers measurable results.
              </p>
              <div className="space-y-6">
                {[
                  { 
                    title: "Experienced Team", 
                    description: "Our team of certified professionals brings years of expertise in diverse technologies and industries.",
                    delay: "100ms" 
                  },
                  { 
                    title: "Custom Solutions", 
                    description: "We develop tailor-made solutions designed specifically to address your unique business challenges.",
                    delay: "200ms" 
                  },
                  { 
                    title: "Cutting-edge Technology", 
                    description: "We leverage the latest technologies and frameworks to build future-proof digital solutions.",
                    delay: "300ms" 
                  },
                  { 
                    title: "Result-Oriented Approach", 
                    description: "Our focus is on delivering measurable outcomes that contribute to your business growth.",
                    delay: "400ms" 
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 p-5 bg-accent hover:bg-accent/70 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-x-1 hover:translate-y-1 group animate-on-scroll border-l-4 border-transparent hover:border-primary" 
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-lg group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl transform hover:rotate-1 transition-transform duration-500 animate-on-scroll relative">
              <div className="absolute inset-0 bg-primary/30 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <div className="text-white text-center p-6 transform scale-90 hover:scale-100 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">Join Our Team</h3>
                  <p className="mb-4">Discover exciting career opportunities at Anthem Infotech</p>
                  <Button variant="outline" size="sm" className="bg-white/20 border-white text-white hover:bg-white/30">
                    <Link to="/careers">View Careers</Link>
                  </Button>
                </div>
              </div>
              <AspectRatio ratio={4/3} className="bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Team meeting" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </AspectRatio>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section bg-muted mt-8 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <div className="inline-block relative">
                <h2 className="section-title relative mb-4 inline-block">
                  Success Stories
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
                </h2>
                <div className="absolute -top-8 -right-8 w-16 h-16 text-primary/10 animate-pulse hidden md:block">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 16L14.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="section-subtitle mt-6 text-lg opacity-0 animate-fadeIn" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
                See how we've helped businesses transform their digital presence and operations
              </p>
            </div>
            
            <Tabs defaultValue="ecommerce" className="w-full animate-on-scroll" style={{ transitionDelay: "200ms" }}>
              <TabsList className="w-full max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-3 mb-10 overflow-hidden rounded-full border-2 border-primary/20 p-1 bg-background/50 backdrop-blur-sm shadow-inner">
                <TabsTrigger value="ecommerce" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white relative overflow-hidden group transition-all duration-300">
                  <span className="relative z-10">E-Commerce</span>
                  <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left group-data-[state=active]:hidden"></span>
                </TabsTrigger>
                <TabsTrigger value="healthcare" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white relative overflow-hidden group transition-all duration-300">
                  <span className="relative z-10">Healthcare</span>
                  <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left group-data-[state=active]:hidden"></span>
                </TabsTrigger>
                <TabsTrigger value="fintech" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white relative overflow-hidden group transition-all duration-300">
                  <span className="relative z-10">Fintech</span>
                  <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left group-data-[state=active]:hidden"></span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="ecommerce" className="space-y-6 animate-fadeIn" style={{ animationDuration: "0.5s" }}>
                <Card className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Premium Fashion Retailer</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <p className="leading-relaxed">
                          We developed a comprehensive e-commerce platform for a premium fashion retailer, resulting in a <span className="font-semibold text-primary">75% increase in online sales</span> and improved customer engagement.
                        </p>
                        <ul className="space-y-3">
                          {[
                            "Responsive design with seamless mobile experience",
                            "Integrated inventory management system",
                            "Personalized product recommendations"
                          ].map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 animate-on-scroll" style={{ transitionDelay: `${index * 100 + 300}ms` }}>
                              <div className="bg-primary/10 p-1 rounded-full mt-1 group-hover:bg-primary/20 transition-colors duration-300">
                                <CheckCircle className="h-4 w-4 text-primary" />
                              </div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" className="rounded-full px-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 mt-4" asChild>
                          <Link to="/portfolio" className="inline-flex items-center gap-2">
                            View Case Study
                            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </Button>
                      </div>
                      <div className="rounded-xl overflow-hidden shadow-md transform group-hover:scale-[1.02] transition-all duration-700">
                        <AspectRatio ratio={16/9} className="bg-muted">
                          <img 
                            src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="E-commerce platform" 
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="healthcare" className="space-y-6 animate-fadeIn" style={{ animationDuration: "0.5s" }}>
                <Card className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Healthcare Provider Network</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <p className="leading-relaxed">
                          We built a secure patient management system for a network of healthcare providers, improving operational efficiency by <span className="font-semibold text-primary">40%</span> and enhancing patient experience.
                        </p>
                        <ul className="space-y-3">
                          {[
                            "HIPAA-compliant data management",
                            "Integrated appointment scheduling system",
                            "Secure patient portal with telehealth capabilities"
                          ].map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 animate-on-scroll" style={{ transitionDelay: `${index * 100 + 300}ms` }}>
                              <div className="bg-primary/10 p-1 rounded-full mt-1 group-hover:bg-primary/20 transition-colors duration-300">
                                <CheckCircle className="h-4 w-4 text-primary" />
                              </div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" className="rounded-full px-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 mt-4" asChild>
                          <Link to="/portfolio" className="inline-flex items-center gap-2">
                            View Case Study
                            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </Button>
                      </div>
                      <div className="rounded-xl overflow-hidden shadow-md transform group-hover:scale-[1.02] transition-all duration-700">
                        <AspectRatio ratio={16/9} className="bg-muted">
                          <img 
                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                            alt="Healthcare system" 
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="fintech" className="space-y-6 animate-fadeIn" style={{ animationDuration: "0.5s" }}>
                <Card className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Financial Services App</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <p className="leading-relaxed">
                          We developed a mobile banking application for a fintech startup, helping them acquire over <span className="font-semibold text-primary">50,000 users</span> within the first six months of launch.
                        </p>
                        <ul className="space-y-3">
                          {[
                            "Secure transaction processing with multi-factor authentication",
                            "Real-time financial insights dashboard",
                            "Seamless integration with banking APIs"
                          ].map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 animate-on-scroll" style={{ transitionDelay: `${index * 100 + 300}ms` }}>
                              <div className="bg-primary/10 p-1 rounded-full mt-1 group-hover:bg-primary/20 transition-colors duration-300">
                                <CheckCircle className="h-4 w-4 text-primary" />
                              </div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" className="rounded-full px-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 mt-4" asChild>
                          <Link to="/portfolio" className="inline-flex items-center gap-2">
                            View Case Study
                            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </Button>
                      </div>
                      <div className="rounded-xl overflow-hidden shadow-md transform group-hover:scale-[1.02] transition-all duration-700">
                        <AspectRatio ratio={16/9} className="bg-muted">
                          <img 
                            src="https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="Fintech application" 
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16">
              <div className="md:max-w-lg space-y-4 text-center md:text-left mb-10 md:mb-0">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-primary text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Client Testimonials
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  What Our <span className="relative inline-block">
                    <span className="text-primary relative z-10">Clients</span>
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 rounded-full transform -skew-x-12"></span>
                  </span> Say
                </h2>
                <p className="text-lg text-muted-foreground md:pr-10">
                  Trusted by businesses across industries, our solutions deliver measurable results that drive growth and success.
                </p>
                <div className="flex justify-center md:justify-start space-x-2 pt-4">
                  {[0, 1, 2].map((index) => (
                    <button 
                      key={index} 
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === 0 ? 'bg-primary w-6' : 'bg-primary/30 hover:bg-primary/60'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="inline-flex">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 group" 
                  asChild
                >
                  <Link to="/testimonials" className="inline-flex items-center gap-2">
                    View All Testimonials
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <Carousel className="w-full animate-on-scroll">
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  {
                    quote: "Anthem Infotech transformed our online presence with a beautiful, functional website that perfectly represents our brand. Their team was responsive, professional, and delivered beyond our expectations.",
                    author: "Raj Patel",
                    position: "CEO, Global Retail Solutions",
                    image: "https://randomuser.me/api/portraits/men/42.jpg",
                    rating: 5,
                    project: "E-commerce Website Redesign",
                    company: "Global Retail Solutions",
                    logo: "https://dummyimage.com/120x40/4a4a4a/ffffff&text=Global+Retail"
                  },
                  {
                    quote: "Working with Anthem Infotech was a game-changer for our healthcare practice. Their patient management system streamlined our operations and significantly improved our patient experience.",
                    author: "Dr. Amelia Chen",
                    position: "Director, Wellness Medical Group",
                    image: "https://randomuser.me/api/portraits/women/32.jpg",
                    rating: 5,
                    project: "Healthcare Management Platform",
                    company: "Wellness Medical Group",
                    logo: "https://dummyimage.com/120x40/4a4a4a/ffffff&text=Wellness+Medical"
                  },
                  {
                    quote: "The digital marketing campaign developed by Anthem Infotech resulted in a 200% increase in qualified leads within just three months. Their data-driven approach and creativity set them apart.",
                    author: "Marcus Johnson",
                    position: "Marketing Director, Tech Innovations Inc.",
                    image: "https://randomuser.me/api/portraits/men/24.jpg",
                    rating: 5,
                    project: "Digital Marketing Campaign",
                    company: "Tech Innovations Inc.",
                    logo: "https://dummyimage.com/120x40/4a4a4a/ffffff&text=Tech+Innovations"
                  }
                ].map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="h-full">
                      <Card className="border-none shadow-lg group h-full overflow-hidden bg-background/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500">
                        <CardHeader className="pb-4 border-b border-muted">
                          <div className="flex justify-between items-center mb-2">
                            <div className="h-8 w-auto">
                              <img src={testimonial.logo} alt={testimonial.company} className="h-full w-auto" />
                            </div>
                            <div className="flex space-x-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                              ))}
                            </div>
                          </div>
                          <div className="text-xs font-medium text-primary/70 uppercase tracking-wider">{testimonial.project}</div>
                        </CardHeader>
                        
                        <CardContent className="pt-6 flex-grow">
                          <blockquote className="text-base md:text-lg italic leading-relaxed relative z-10 mb-6">
                            <span className="absolute -top-3 -left-1 text-4xl text-primary/10 leading-none">"</span>
                            {testimonial.quote}
                          </blockquote>
                        </CardContent>
                        
                        <CardFooter className="pt-0 border-t border-muted flex items-center gap-4">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.author}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div>
                            <div className="font-semibold">{testimonial.author}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="hidden md:flex items-center justify-end gap-2 mt-8">
                <CarouselPrevious className="relative inset-0 translate-y-0 hover:bg-primary hover:text-white transition-colors duration-300 h-8 w-8" />
                <CarouselNext className="relative inset-0 translate-y-0 hover:bg-primary hover:text-white transition-colors duration-300 h-8 w-8" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-20 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl animate-float"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-8">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Get Started Today
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  Ready to <span className="relative inline-block">
                    Transform
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/60 rounded-full"></span>
                  </span> Your Digital Presence?
                </h2>
                
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                  Join the hundreds of businesses who have elevated their digital footprint with our innovative solutions tailored to drive growth and success.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1 group" asChild>
                    <Link to="/contact" className="flex items-center gap-2">
                      <span>Get Your Free Consultation</span>
                      <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                  
                  <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1 group" asChild>
                    <Link to="/portfolio" className="flex items-center gap-2">
                      <span>Explore Our Work</span>
                      <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
                
                <div className="flex flex-wrap justify-center gap-8 pt-12 items-center">
                  <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span className="text-white/90">Trusted by 100+ businesses</span>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="text-white/90">Quick 24-hour response time</span>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-white/90">9.8/10 client satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}