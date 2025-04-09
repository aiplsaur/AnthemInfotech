import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="font-bold text-xl md:text-2xl flex items-center">
              <span className="text-primary mr-1">Anthem</span> Infotech
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Innovative digital solutions for businesses of all sizes. Your trusted technology partner for growth and success in the digital landscape since 2013.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" asChild className="h-10 w-10 rounded-full hover:text-primary hover:bg-primary/10">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="h-10 w-10 rounded-full hover:text-primary hover:bg-primary/10">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="h-10 w-10 rounded-full hover:text-primary hover:bg-primary/10">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="h-10 w-10 rounded-full hover:text-primary hover:bg-primary/10">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Anthem Infotech Private Limited<br />
                  Sector 22, Gurgaon, Haryana<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 (Phone number)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@antheminfotech.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@antheminfotech.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6">Newsletter</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Subscribe to our newsletter to get updates on our latest services and offers.
            </p>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="rounded-full pr-12 border-primary/20 focus-visible:ring-primary" 
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className="absolute right-1 top-1 h-8 w-8 rounded-full"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground/80">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border">
          <div className="md:col-span-2">
            <h4 className="font-medium mb-4">Our Services</h4>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Web Development
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Mobile App Development
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                UI/UX Design
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Digital Marketing
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cloud Solutions
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                IT Consulting
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <a href="http://management.antheminfotech.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Management Portal
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anthem Infotech Private Limited. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70">
            Powered by Anthem Infotech Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
} 