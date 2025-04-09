import { Link } from 'react-router-dom';
import { Users, Award, Clock, Calendar, MapPin, Linkedin, Twitter, Mail } from 'lucide-react';

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export default function Team() {
  // Real team members data from Anthem Infotech management portal
  const teamMembers = [
    // Leadership
    {
      id: 1,
      name: "Hemant Gupta",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      department: "Leadership",
      bio: "Leading Anthem Infotech with a passion for digital innovation since April 26, 2009. Over 14 years of experience delivering cutting-edge solutions.",
      expertise: ["Business Strategy", "Digital Transformation", "Team Leadership"],
      education: "MBA, Technology Management",
      joined: "April 2009",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "hemant@antheminfotech.com"
      },
      occasions: [
        { type: "Birthday", date: "December 27" },
        { type: "Work Anniversary", date: "April 26" },
        { type: "Marriage Anniversary", date: "April 23" }
      ]
    },
    {
      id: 2,
      name: "Diljeet Singh Jamwal",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=800&q=80",
      department: "Leadership",
      bio: "With Anthem Infotech for 12 years, Diljeet leads our technology strategy and innovation efforts, ensuring we remain at the cutting edge.",
      expertise: ["Software Architecture", "Cloud Infrastructure", "Technical Strategy"],
      education: "MS in Computer Science",
      joined: "June 2011",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "diljeet@antheminfotech.com"
      },
      occasions: [
        { type: "Birthday", date: "April 12" },
        { type: "Work Anniversary", date: "June 5" },
        { type: "Marriage Anniversary", date: "October 10" }
      ]
    },
    {
      id: 3,
      name: "Virender Kumar",
      role: "Senior Manager",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
      department: "Leadership",
      bio: "A 6-year veteran at Anthem Infotech, Virender oversees project delivery and client relationships, ensuring high-quality solutions.",
      expertise: ["Project Management", "Client Relations", "Team Leadership"],
      education: "MBA, Project Management",
      joined: "January 2017",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "virender@antheminfotech.com"
      },
      occasions: [
        { type: "Birthday", date: "November 22" },
        { type: "Work Anniversary", date: "January 11" }
      ]
    },
    
    // Development
    {
      id: 4,
      name: "Kapil Dev",
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1580518337843-f959e992563b?auto=format&fit=crop&w=800&q=80",
      department: "Development",
      bio: "With Anthem Infotech for 6 years, Kapil leads development and promotes best practices across our development teams.",
      expertise: ["Full-stack Development", "React", "Node.js", "AWS"],
      education: "B.Tech in Computer Science",
      joined: "August 2017",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "kapil@antheminfotech.com"
      },
      occasions: [
        { type: "Birthday", date: "October 3" },
        { type: "Work Anniversary", date: "August 12" },
        { type: "Marriage Anniversary", date: "September 3" }
      ]
    },
    {
      id: 5,
      name: "Sandeep",
      role: "Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      department: "Development",
      bio: "With Anthem Infotech for 2 years, Sandeep specializes in creating scalable backend systems and database architecture.",
      expertise: ["Backend Development", "Database Design", "API Integration"],
      education: "B.Tech in Information Technology",
      joined: "January 2022",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sandeep@antheminfotech.com"
      },
      occasions: [
        { type: "Birthday", date: "November 7" },
        { type: "Work Anniversary", date: "January 2" }
      ]
    },
    {
      id: 6,
      name: "Saurabh Yadav",
      role: "Web Developer",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=800&q=80",
      department: "Development",
      bio: "Joined Anthem Infotech in March 2023, Saurabh creates responsive and user-friendly web applications with modern frameworks.",
      expertise: ["React", "Frontend Development", "UI/UX Implementation"],
      education: "B.Tech in Computer Science",
      joined: "March 2023",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "saurabh@antheminfotech.com"
      },
      occasions: [
        { type: "Birthday", date: "May 15" },
        { type: "Work Anniversary", date: "March 18" }
      ]
    },
    {
      id: 7,
      name: "Neeraj Singh Rajput",
      role: "Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      department: "Development",
      bio: "With Anthem Infotech since May 2023, Neeraj focuses on building scalable software solutions and innovative features.",
      expertise: ["JavaScript", "React", "Node.js", "Database Design"],
      education: "B.Tech in Computer Science",
      joined: "May 2023",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "neeraj@antheminfotech.com"
      },
      occasions: [
        { type: "Birthday", date: "December 1" },
        { type: "Work Anniversary", date: "May 13" }
      ]
    },
    
    // Design & Support
    {
      id: 8,
      name: "Nandani Kumari",
      role: "UX/UI Lead",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      department: "Design",
      bio: "Joined Anthem Infotech in September 2023, Nandani creates intuitive user experiences and beautiful interfaces for our clients.",
      expertise: ["User Experience", "Interface Design", "Wireframing", "Usability Testing"],
      education: "Bachelor's in Design",
      joined: "September 2023",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "nandani@antheminfotech.com"
      },
      occasions: [
        { type: "Birthday", date: "January 4" },
        { type: "Work Anniversary", date: "September 24" }
      ]
    },
    {
      id: 9,
      name: "Kavita Jakhar",
      role: "UI Designer",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
      department: "Design",
      bio: "Joined Anthem Infotech in April 2023, Kavita brings creative design solutions and visual excellence to our projects.",
      expertise: ["Visual Design", "UI Components", "Brand Identity", "Prototyping"],
      education: "Bachelor's in Graphic Design",
      joined: "April 2023",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "kavita@antheminfotech.com"
      },
      occasions: [
        { type: "Birthday", date: "May 21" },
        { type: "Work Anniversary", date: "April 14" }
      ]
    },
    {
      id: 10,
      name: "Komal Jangra",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      department: "Design",
      bio: "Joined Anthem Infotech in May 2023, Komal specializes in user research and creating seamless experiences for our products.",
      expertise: ["User Research", "Information Architecture", "Interaction Design"],
      education: "Master's in Design",
      joined: "May 2023",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "komal@antheminfotech.com"
      },
      occasions: [
        { type: "Birthday", date: "August 13" },
        { type: "Work Anniversary", date: "May 11" }
      ]
    },
    {
      id: 11,
      name: "Priyanshi Mahajan",
      role: "QA Specialist",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=800&q=80",
      department: "Support",
      bio: "With Anthem Infotech since February 2023, Priyanshi ensures our products meet the highest quality standards.",
      expertise: ["Quality Assurance", "Testing Automation", "User Acceptance Testing"],
      education: "B.Tech in Information Technology",
      joined: "February 2023",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "priyanshi@antheminfotech.info"
      },
      occasions: [
        { type: "Birthday", date: "July 1" },
        { type: "Work Anniversary", date: "February 5" }
      ]
    },
    {
      id: 12,
      name: "Jaisika Dhiman",
      role: "Support Specialist",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      department: "Support",
      bio: "Joined Anthem Infotech in September 2023, Jaisika provides excellent customer support and technical assistance.",
      expertise: ["Technical Support", "Customer Service", "Problem Resolution"],
      education: "Bachelor's in Computer Applications",
      joined: "September 2023",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "jaisika@antheminfotech.com"
      },
      occasions: [
        { type: "Birthday", date: "June 12" },
        { type: "Work Anniversary", date: "September 24" }
      ]
    }
  ];

  // Group team members by department
  const leadership = teamMembers.filter(member => member.department === "Leadership");
  const development = teamMembers.filter(member => member.department === "Development");
  const designAndSupport = teamMembers.filter(member => 
    member.department === "Design" || member.department === "Support"
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter lg:text-6xl relative overflow-hidden text-center">
            <span className="animate-slide-up block" style={{ animationDelay: "100ms" }}>Meet Our</span> 
            <span className="animate-slide-up block" style={{ animationDelay: "300ms" }}>
              <span className="relative inline-block">
                <span className="text-primary relative z-10">Team</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 rounded-full transform -skew-x-12 animate-width" style={{ animationDelay: "800ms" }}></span>
              </span>
            </span>
            <div className="absolute -top-2 -left-4 w-16 h-16 text-primary/10 animate-ping-slow opacity-70">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9986 17.1771 21.7079 15.5857 19.9 15.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C17.7699 3.58137 19.0662 5.17225 19.0662 7C19.0662 8.82775 17.7699 10.4186 16 10.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center animate-fade-up" style={{ animationDelay: "700ms" }}>
            Meet the talented individuals behind our success. Our diverse team brings together expertise, creativity, and passion to deliver exceptional solutions for our clients.
          </p>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="bg-muted/30 py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Collaborative Spirit</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork and open communication, fostering an environment where ideas flow freely and innovation thrives.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence in Delivery</h3>
              <p className="text-muted-foreground">
                Our commitment to quality is unwavering. We hold ourselves to the highest standards in every project we undertake.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Technology evolves rapidly, and so do we. We're dedicated to staying ahead of the curve with ongoing education and skill development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="container px-4 md:px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Talented Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team is our greatest asset. Each member brings unique skills and perspectives that contribute to our collective success.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              All
            </TabsTrigger>
            <TabsTrigger value="leadership" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Leadership
            </TabsTrigger>
            <TabsTrigger value="development" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Development
            </TabsTrigger>
            <TabsTrigger value="design" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Design & Support
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="leadership" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="development" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {development.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="design" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {designAndSupport.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <Button asChild className="rounded-full px-8 shadow-lg">
            <a href="http://management.antheminfotech.com/our-team" target="_blank" rel="noopener noreferrer">
              Visit Team Portal
            </a>
          </Button>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="container px-4 md:px-6 py-24">
        <div className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're always looking for talented individuals who are passionate about technology and innovation. Explore our current openings and become part of our journey.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button size="lg" className="rounded-full px-8 shadow-lg" asChild>
                <Link to="/careers">View Open Positions</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 shadow-lg" asChild>
                <Link to="/contact">Contact Our Recruitment Team</Link>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

// Team Member Card Component
function TeamMemberCard({ member }) {
  return (
    <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
      <div className="relative">
        <AspectRatio ratio={3/4} className="bg-muted">
          <img 
            src={member.image} 
            alt={member.name} 
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex gap-2 mb-4">
              {member.social.linkedin && (
                <a href={member.social.linkedin} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                  <Linkedin size={16} />
                </a>
              )}
              {member.social.twitter && (
                <a href={member.social.twitter} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                  <Twitter size={16} />
                </a>
              )}
              {member.social.email && (
                <a href={`mailto:${member.social.email}`} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                  <Mail size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
        <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
        
        <div className="space-y-3 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              {member.department}
            </Badge>
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1 text-primary/70" />
              <span>Joined {member.joined}</span>
            </div>
          </div>
          
          {member.occasions && member.occasions.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {member.occasions.map((occasion, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {occasion.type}: {occasion.date}
                </Badge>
              ))}
            </div>
          )}
        </div>
        
        <p className="text-sm line-clamp-3 mb-4">{member.bio}</p>
        
        <div className="pt-4 border-t border-border">
          <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Expertise</h4>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill, index) => (
              <Badge key={index} variant="secondary" className="bg-muted text-xs">
                {skill}
              </Badge>
            ))}
          </div>

        </div>
      </CardContent>
    </Card>
  );
} 