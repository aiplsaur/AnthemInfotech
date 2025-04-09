import { Link } from 'react-router-dom';
import { CheckCircle, Trophy, Users, Calendar, Target, Code, Globe, Award, ThumbsUp, Heart, Zap } from 'lucide-react';

import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import { Separator } from "../../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter lg:text-6xl relative overflow-hidden">
              <span className="animate-slide-up block" style={{ animationDelay: "100ms" }}>About</span> 
              <span className="animate-slide-up block" style={{ animationDelay: "300ms" }}>
                <span className="relative inline-block">
                  <span className="text-primary relative z-10">Anthem Infotech</span>
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
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "700ms" }}>
              Your trusted digital partner delivering innovative solutions that drive growth and transformation.
            </p>
            <p className="text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "900ms" }}>
              Founded in 2013, Anthem Infotech has evolved into a premier digital solutions provider serving clients across various industries. We specialize in custom software development, digital marketing, and technology consulting, helping businesses leverage the power of digital to achieve their goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "1100ms" }}>
              <Button className="rounded-full px-8 shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300" asChild>
                <Link to="/contact">Work With Us</Link>
              </Button>
              <Button variant="outline" className="rounded-full px-8 hover:bg-primary/5 transition-all duration-300" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <AspectRatio ratio={4/3} className="bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Anthem Infotech Team" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-muted mt-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              From humble beginnings to a leading digital solutions provider
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  year: "2013",
                  title: "Founded",
                  description: "Anthem Infotech was established with a vision to provide innovative digital solutions to businesses of all sizes.",
                  icon: <Trophy className="h-8 w-8" />,
                  color: "bg-blue-500"
                },
                {
                  year: "2015",
                  title: "Service Expansion",
                  description: "Expanded our service offerings to include digital marketing and UI/UX design alongside software development.",
                  icon: <Users className="h-8 w-8" />,
                  color: "bg-green-500"
                },
                {
                  year: "2017",
                  title: "Team Growth",
                  description: "Significant team expansion with specialists in various technology domains joining our growing company.",
                  icon: <Code className="h-8 w-8" />,
                  color: "bg-purple-500"
                },
                {
                  year: "2019",
                  title: "Digital Transformation Focus",
                  description: "Launched specialized digital transformation services to help businesses adapt to the rapidly changing digital landscape.",
                  icon: <Globe className="h-8 w-8" />,
                  color: "bg-orange-500"
                },
                {
                  year: "2022",
                  title: "Technology Innovation",
                  description: "Introduced AI and machine learning capabilities to our service portfolio, delivering cutting-edge solutions to our clients.",
                  icon: <Zap className="h-8 w-8" />,
                  color: "bg-red-500"
                },
                {
                  year: "2024",
                  title: "Global Expansion",
                  description: "Expanded our operations to new international markets, establishing a stronger global presence and serving clients worldwide.",
                  icon: <Globe className="h-8 w-8" />,
                  color: "bg-indigo-500"
                }
              ].map((milestone, index) => (
                <div key={index} className="group">
                  <Card className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className={`${milestone.color} h-2 w-full`}></div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`${milestone.color} p-3 rounded-full text-white`}>
                          {milestone.icon}
                        </div>
                        <span className="font-bold text-2xl text-primary">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section container px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="relative inline-block">
            <h2 className="section-title relative inline-block">
              Our Core Values
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
            The principles that guide our approach to business and client relationships
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description: "We embrace new technologies and approaches to deliver forward-thinking solutions that address complex business challenges.",
              icon: <Code className="h-8 w-8" />,
              color: "from-blue-500 to-blue-600"
            },
            {
              title: "Excellence",
              description: "We strive for the highest standards in everything we do, from code quality to client service and project delivery.",
              icon: <Trophy className="h-8 w-8" />,
              color: "from-green-500 to-green-600"
            },
            {
              title: "Client-Centric",
              description: "We prioritize our clients' needs and goals, developing strong partnerships based on trust and mutual success.",
              icon: <Heart className="h-8 w-8" />,
              color: "from-purple-500 to-purple-600"
            },
            {
              title: "Integrity",
              description: "We build trust through honest communication, transparency, and ethical business practices in all our interactions.",
              icon: <CheckCircle className="h-8 w-8" />,
              color: "from-orange-500 to-orange-600"
            },
            {
              title: "Adaptability",
              description: "We embrace change and continuously evolve our capabilities to stay ahead in a rapidly evolving digital landscape.",
              icon: <Target className="h-8 w-8" />,
              color: "from-red-500 to-red-600"
            },
            {
              title: "Quality",
              description: "We are committed to delivering high-quality solutions that meet or exceed our clients' expectations and requirements.",
              icon: <Award className="h-8 w-8" />,
              color: "from-indigo-500 to-indigo-600"
            }
          ].map((value, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" style={{ background: `linear-gradient(to bottom right, ${value.color.split(' ')[1]}, ${value.color.split(' ')[3]})` }}></div>
              <Card className="relative border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full bg-background">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-muted py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the talented professionals who make Anthem Infotech successful
            </p>
          </div>
          
          <Tabs defaultValue="leadership" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-1 sm:grid-cols-3 mb-12 overflow-hidden rounded-full border-2 border-primary/20 p-1">
              <TabsTrigger value="leadership" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">Leadership</TabsTrigger>
              <TabsTrigger value="tech" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">Development</TabsTrigger>
              <TabsTrigger value="design" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">Design & Support</TabsTrigger>
            </TabsList>
            
            <TabsContent value="leadership" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Hemant Gupta",
                    position: "CEO & Founder",
                    bio: "Leading Anthem Infotech for 14+ years with a passion for digital innovation. Birthday: December 27th",
                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400"
                  },
                  {
                    name: "Diljeet Singh Jamwal",
                    position: "Project Manager",
                    bio: "With Anthem Infotech for 12 years. Birthday: April 12th, Anniversary: October 10th",
                    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400"
                  },
                  {
                    name: "Virender Kumar",
                    position: "Senior Manager",
                    bio: "A 6-year veteran at Anthem Infotech. Birthday: November 22nd",
                    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400"
                  }
                ].map((member, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group animate-on-scroll" style={{ transitionDelay: `${index * 150}ms` }}>
                    <div className="relative">
                      <AspectRatio ratio={1/1} className="bg-muted">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary font-medium text-sm mb-3">{member.position}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                      <div className="flex justify-start mt-4 space-x-3">
                        <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                          </svg>
                        </Button>
                        <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                          </svg>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tech" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Kapil Dev",
                    position: "Senior Developer",
                    bio: "With Anthem Infotech for 6 years. Birthday: October 3rd, Work Anniversary: August 12th",
                    image: "https://images.unsplash.com/photo-1580518337843-f959e992563b?auto=format&fit=crop&w=400"
                  },
                  {
                    name: "Sandeep",
                    position: "Developer",
                    bio: "With Anthem Infotech for 2 years as of January 2nd. Birthday: November 7th",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400"
                  },
                  {
                    name: "Saurabh Yadav",
                    position: "Web Developer",
                    bio: "Joined Anthem Infotech on March 18, 2023. Birthday: May 15th",
                    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=400"
                  }
                ].map((member, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group animate-on-scroll" style={{ transitionDelay: `${index * 150}ms` }}>
                    <div className="relative">
                      <AspectRatio ratio={1/1} className="bg-muted">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary font-medium text-sm mb-3">{member.position}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                      <div className="flex justify-start mt-4 space-x-3">
                        <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                          </svg>
                        </Button>
                        <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                          </svg>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="design" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Nandani Kumari",
                    position: "UX/UI Lead",
                    bio: "Joined in September 2023. Birthday: January 4th",
                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400"
                  },
                  {
                    name: "Kavita Jakhar",
                    position: "UI Designer",
                    bio: "Joined April 14, 2023. Birthday: May 21st",
                    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400"
                  },
                  {
                    name: "Komal Jangra",
                    position: "UX Designer",
                    bio: "Joined May 11, 2023. Birthday: August 13th",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400"
                  }
                ].map((member, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group animate-on-scroll" style={{ transitionDelay: `${index * 150}ms` }}>
                    <div className="relative">
                      <AspectRatio ratio={1/1} className="bg-muted">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary font-medium text-sm mb-3">{member.position}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                      <div className="flex justify-start mt-4 space-x-3">
                        <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                          </svg>
                        </Button>
                        <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                          </svg>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-12">
            <Button asChild className="rounded-full px-8 shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300">
              <a href="http://management.antheminfotech.com/our-team" target="_blank" rel="noopener noreferrer">
                View All Team Members
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {[
            { value: "15+", label: "Team Members", icon: <Users className="h-10 w-10 mx-auto mb-4 text-primary" /> },
            { value: "200+", label: "Projects Delivered", icon: <CheckCircle className="h-10 w-10 mx-auto mb-4 text-primary" /> },
            { value: "6+", label: "Countries Served", icon: <Globe className="h-10 w-10 mx-auto mb-4 text-primary" /> },
            { value: "10+", label: "Years of Experience", icon: <Trophy className="h-10 w-10 mx-auto mb-4 text-primary" /> }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-accent/20 hover:bg-primary/10 transition-all hover:shadow-md hover:-translate-y-1 duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-1 text-primary">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Photos */}
      <section className="section container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Life at Anthem Infotech</h2>
          <p className="section-subtitle">
            Glimpses of our collaborative work environment and team celebrations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
            <AspectRatio ratio={4/3} className="bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Team working together" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </AspectRatio>
            <div className="p-4 bg-background">
              <h3 className="font-medium">Collaborative Work Environment</h3>
              <p className="text-sm text-muted-foreground">Our open workspace encourages communication and teamwork</p>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
            <AspectRatio ratio={4/3} className="bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Team celebration" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </AspectRatio>
            <div className="p-4 bg-background">
              <h3 className="font-medium">Team Celebrations</h3>
              <p className="text-sm text-muted-foreground">We celebrate milestones, birthdays, and achievements together</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-lg">
          <AspectRatio ratio={21/9} className="bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" 
              alt="Anthem Infotech Team" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </AspectRatio>
          <div className="p-6 bg-background text-center">
            <h3 className="text-xl font-medium">The Anthem Infotech Family</h3>
            <p className="text-muted-foreground mb-4">Our diverse team brings together talent from various backgrounds to deliver exceptional solutions</p>
            <Button variant="outline" className="rounded-full" asChild>
              <a href="http://management.antheminfotech.com/our-team" target="_blank" rel="noopener noreferrer">
                Visit Team Portal
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20 mt-12">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Digital Presence?</h2>
            <p className="text-primary-foreground/90 text-lg">
              Partner with us to leverage our expertise and innovative solutions for your business success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" variant="secondary" className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl" asChild>
                <Link to="/contact">Get Your Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 