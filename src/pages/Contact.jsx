import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from 'lucide-react';

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { AspectRatio } from "../../components/ui/aspect-ratio";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // This would be replaced with actual form submission logic
    alert('Form submitted! In a real application, this would send your message to our team.');
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter lg:text-6xl relative overflow-hidden text-center">
            <span className="animate-slide-up block" style={{ animationDelay: "100ms" }}>Get in</span> 
            <span className="animate-slide-up block" style={{ animationDelay: "300ms" }}>
              <span className="relative inline-block">
                <span className="text-primary relative z-10">Touch</span>
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
            We'd love to hear from you. Fill out the form below or contact us directly using the information provided.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section container px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="relative inline-block">
            <h2 className="section-title relative inline-block">
              Contact Us
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
            We'd love to discuss your project and answer any questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden animate-on-scroll">
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 rounded-full transition-transform duration-500 group-hover:scale-[3] opacity-0 group-hover:opacity-100"></div>
              <CardHeader className="pb-2 relative z-10">
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="name">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="rounded-md focus:border-primary focus:ring-primary" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="email">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="rounded-md focus:border-primary focus:ring-primary" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="phone">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      placeholder="+1 (123) 456-7890" 
                      className="rounded-md focus:border-primary focus:ring-primary" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="service">
                      Service Interested In
                    </label>
                    <Select>
                      <SelectTrigger id="service" className="rounded-md focus:border-primary focus:ring-primary">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-development">Mobile App Development</SelectItem>
                        <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                        <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                        <SelectItem value="consulting">IT Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="message">
                    Your Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide details about your project or inquiry..." 
                    className="rounded-md min-h-[150px] resize-none focus:border-primary focus:ring-primary" 
                  />
                </div>
                
                <Button 
                  className="w-full md:w-auto rounded-full px-8 bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300" 
                  type="submit"
                  onClick={handleSubmit}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Submit Inquiry
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden animate-on-scroll">
              <div className="absolute -right-10 -top-10 w-20 h-20 bg-primary/5 rounded-full transition-transform duration-500 group-hover:scale-[5] opacity-0 group-hover:opacity-100"></div>
              <CardHeader className="pb-2 relative z-10">
                <CardTitle className="group-hover:text-primary transition-colors duration-300">Contact Information</CardTitle>
                <CardDescription>
                  You can reach us directly through the following channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="flex items-start gap-4 group/item hover:bg-muted/50 p-2 rounded-lg transition-colors">
                  <div className="p-2 bg-primary/10 rounded-full group-hover/item:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-1">Our Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Anthem Infotech Private Limited<br />
                      Sector 22, Gurgaon, Haryana<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group/item hover:bg-muted/50 p-2 rounded-lg transition-colors">
                  <div className="p-2 bg-primary/10 rounded-full group-hover/item:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-1">Email Us</h3>
                    <a 
                      href="mailto:info@antheminfotech.com" 
                      className="text-sm text-primary hover:underline"
                    >
                      info@antheminfotech.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group/item hover:bg-muted/50 p-2 rounded-lg transition-colors">
                  <div className="p-2 bg-primary/10 rounded-full group-hover/item:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-1">Call Us</h3>
                    <a 
                      href="tel:+1234567890" 
                      className="text-sm text-primary hover:underline"
                    >
                      +91 (Phone number)
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group/item hover:bg-muted/50 p-2 rounded-lg transition-colors">
                  <div className="p-2 bg-primary/10 rounded-full group-hover/item:bg-primary/20 transition-colors">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-1">Business Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden animate-on-scroll">
              <AspectRatio ratio={4/3}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56518.391594855065!2d77.03492267748038!3d28.46698458222309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c734c83079%3A0xd02467abbc565e31!2sSector%2022%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1716206043051!5m2!1sen!2sin" 
                  width="600" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover"
                  title="Office Location"
                ></iframe>
              </AspectRatio>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our services and processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What services does Anthem Infotech offer?",
                answer: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, IT consulting, and cybersecurity solutions tailored to meet your business needs."
              },
              {
                question: "How long does it typically take to complete a project?",
                answer: "Project timelines vary depending on scope and complexity. A simple website might take 3-4 weeks, while complex applications can take several months. We provide detailed timelines during the project planning phase."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, we offer various maintenance and support packages to ensure your digital solutions continue to perform optimally. Our support team is available to address any issues or implement updates as needed."
              },
              {
                question: "How do I access the Anthem Infotech management portal?",
                answer: "Our management portal is available at management.antheminfotech.com. It's accessible to our team members and clients with authorized credentials. If you need access, please contact your project manager or our support team."
              },
              {
                question: "How do you ensure the security of digital solutions?",
                answer: "Security is a top priority for us. We implement industry best practices, regular security audits, encryption, secure coding practices, and compliance with relevant regulations to protect your digital assets."
              },
              {
                question: "What is your pricing structure?",
                answer: "Our pricing is project-based and depends on the scope, complexity, and requirements of your project. We provide detailed quotes after an initial consultation to understand your specific needs."
              },
              {
                question: "How do you handle project communication?",
                answer: "We believe in transparent, regular communication throughout the project lifecycle. We use project management tools, scheduled update meetings, and dedicated project managers to ensure you're always informed about progress."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Start Your Digital Journey?</h2>
            <p className="text-primary-foreground/90 text-lg">
              Contact us today to discuss your project and how we can help you achieve your digital goals.
            </p>
            <Button size="lg" variant="secondary" className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl" onClick={() => document.getElementById('name').focus()}>
              <Mail className="mr-2 h-5 w-5" />
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 