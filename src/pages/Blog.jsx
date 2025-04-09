import { Link } from 'react-router-dom';
import { ArrowRight, Search, Calendar, User, Tag, Clock, BookOpen } from 'lucide-react';

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export default function Blog() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Top Web Development Trends to Watch in 2024",
      excerpt: "Stay ahead of the curve with the latest web development technologies and methodologies that are shaping the digital landscape in 2024.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Hemant Gupta",
      date: "June 15, 2024",
      readTime: "8 min read",
      category: "Web Development",
      tags: ["React", "JavaScript", "Web Trends"]
    },
    {
      id: 2,
      title: "How AI is Transforming Digital Marketing Strategies",
      excerpt: "Discover how artificial intelligence is revolutionizing digital marketing campaigns and helping businesses achieve better ROI and customer engagement.",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Diljeet Singh",
      date: "May 28, 2024",
      readTime: "6 min read",
      category: "Digital Marketing",
      tags: ["AI", "Marketing", "Data Analytics"]
    },
    {
      id: 3,
      title: "Building Secure Mobile Applications: Best Practices",
      excerpt: "Learn essential security best practices to protect your mobile applications from common vulnerabilities and ensure user data remains safe.",
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Kapil Dev",
      date: "April 12, 2024",
      readTime: "10 min read",
      category: "Mobile Development",
      tags: ["Mobile Security", "App Development", "Cybersecurity"]
    },
    {
      id: 4,
      title: "The Impact of 5G on IoT Applications",
      excerpt: "Explore how 5G technology is enabling a new generation of IoT applications with unprecedented speed and connectivity capabilities.",
      image: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Sandeep",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Technology",
      tags: ["5G", "IoT", "Connectivity"]
    },
    {
      id: 5,
      title: "Effective UX Research Methods for Product Design",
      excerpt: "Discover proven UX research techniques that can help you create user-centered products that truly meet your customers' needs.",
      image: "https://images.unsplash.com/photo-1507578088759-200e4b0890c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Saurabh Yadav",
      date: "February 18, 2024",
      readTime: "9 min read",
      category: "UI/UX Design",
      tags: ["UX Research", "Product Design", "User Testing"]
    },
    {
      id: 6,
      title: "Cloud Migration Strategies for Enterprise Applications",
      excerpt: "Learn step-by-step approaches to successfully migrate your enterprise applications to the cloud while minimizing risks and downtime.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Neeraj Singh Rajput",
      date: "January 24, 2024",
      readTime: "12 min read",
      category: "Cloud Computing",
      tags: ["Cloud Migration", "Enterprise", "AWS"]
    }
  ];

  // Categories for filtering
  const categories = [
    "All", 
    "Web Development", 
    "Digital Marketing", 
    "Mobile Development", 
    "UI/UX Design", 
    "Cloud Computing", 
    "Technology"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter lg:text-6xl relative overflow-hidden text-center">
            <span className="animate-slide-up block" style={{ animationDelay: "100ms" }}>Anthem</span> 
            <span className="animate-slide-up block" style={{ animationDelay: "300ms" }}>
              <span className="relative inline-block">
                <span className="text-primary relative z-10">Blog</span>
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
            Insights, trends, and expert perspectives on technology, digital marketing, and business transformation.
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="section container px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-12">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="rounded-full pl-12 pr-4 py-6 border-primary/20 focus:border-primary"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              </div>
            </div>

            <Tabs defaultValue="All" className="w-full mb-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 overflow-auto p-1 rounded-lg bg-muted">
                {categories.map((category, index) => (
                  <TabsTrigger 
                    key={index} 
                    value={category}
                    className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-white text-sm px-3"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Featured Post */}
            <div className="mb-16 animate-on-scroll">
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <AspectRatio ratio={21/9} className="bg-muted">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title} 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                </AspectRatio>
                <CardContent className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                      {blogPosts[0].category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-3xl mb-4 leading-tight">{blogPosts[0].title}</CardTitle>
                  <CardDescription className="text-base mb-6">{blogPosts[0].excerpt}</CardDescription>
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      <span className="text-sm">{blogPosts[0].author}</span>
                    </div>
                    <Button variant="ghost" className="rounded-full p-0 h-auto text-primary hover:text-primary-dark hover:bg-transparent group" asChild>
                      <Link to={`/blog/${blogPosts[0].id}`} className="flex items-center gap-1">
                        <span className="relative after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-[2px] after:w-0 group-hover:after:w-full after:transition-all after:duration-300">Read more</span>
                        <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <Card 
                  key={post.id} 
                  className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-on-scroll"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <AspectRatio ratio={16/9} className="bg-muted">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                  </AspectRatio>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 line-clamp-2 h-14">{post.title}</CardTitle>
                    <CardDescription className="text-sm mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                    <div className="flex justify-between items-center gap-2 mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="ghost" className="rounded-full p-0 h-auto text-primary hover:text-primary-dark hover:bg-transparent group" asChild>
                        <Link to={`/blog/${post.id}`} className="flex items-center gap-1">
                          <span className="sr-only">Read more</span>
                          <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-16">
              <div className="flex items-center gap-2">
                <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center" disabled>
                  <ArrowRight className="h-4 w-4 transform rotate-180" />
                </Button>
                <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center bg-primary text-white">1</Button>
                <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center">2</Button>
                <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center">3</Button>
                <span className="mx-2">...</span>
                <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center">10</Button>
                <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-24">
              {/* Categories */}
              <Card className="border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {categories.filter(cat => cat !== "All").map((category, index) => (
                      <li key={index}>
                        <Link 
                          to="#" 
                          className="flex items-center justify-between p-2 hover:bg-muted rounded-md transition-colors"
                        >
                          <span>{category}</span>
                          <Badge variant="outline" className="bg-muted/50 text-xs">
                            {Math.floor(Math.random() * 10) + 1}
                          </Badge>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card className="border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg">Popular Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map((post, index) => (
                      <li key={index} className="flex gap-3">
                        <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <Link to={`/blog/${post.id}`} className="font-medium hover:text-primary transition-colors line-clamp-2 text-sm">
                            {post.title}
                          </Link>
                          <div className="flex items-center mt-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card className="border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg">Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-muted/50 hover:bg-muted cursor-pointer">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-none shadow-xl bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-lg">Subscribe to Newsletter</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Get the latest articles and insights delivered to your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="bg-white/20 border-white/20 text-white placeholder:text-white/70 focus:border-white"
                    />
                    <Button className="w-full bg-white text-primary hover:bg-white/90">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Have a Project in Mind?</h2>
            <p className="text-primary-foreground/90 text-lg">
              Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
            </p>
            <Button size="lg" variant="secondary" className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 