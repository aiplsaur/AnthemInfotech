import { Link } from 'react-router-dom';
import { Shield, Clock } from 'lucide-react';

import { Button } from "../../components/ui/button";

export default function PrivacyPolicy() {
  // Last updated date
  const lastUpdated = "June 15, 2024";

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section container px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter lg:text-5xl relative overflow-hidden text-center">
            <span className="animate-slide-up block" style={{ animationDelay: "100ms" }}>Privacy</span> 
            <span className="animate-slide-up block" style={{ animationDelay: "300ms" }}>
              <span className="relative inline-block">
                <span className="text-primary relative z-10">Policy</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 rounded-full transform -skew-x-12 animate-width" style={{ animationDelay: "800ms" }}></span>
              </span>
            </span>
            <div className="absolute -top-2 -left-4 w-16 h-16 text-primary/10 animate-ping-slow opacity-70">
              <Shield className="w-full h-full" />
            </div>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="container px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-muted/20 rounded-lg p-4 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Last Updated: {lastUpdated}</span>
            </div>
            <Button variant="outline" size="sm" className="text-xs" asChild>
              <a href="#" onClick={() => window.print()}>Print Policy</a>
            </Button>
          </div>

          <div className="space-y-8 text-muted-foreground leading-relaxed policy-content">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p>
                Anthem Infotech ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website antheminfotech.com (the "Site") or use our services.
              </p>
              <p className="mt-2">
                Please read this Privacy Policy carefully. By accessing or using our Site and services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our Site or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p>
                We collect several types of information from and about users of our Site and services, including:
              </p>
              <ul className="list-disc list-inside mt-2 ml-6 space-y-2">
                <li>
                  <span className="font-medium text-foreground">Personal Information:</span> Name, email address, postal address, phone number, or any other information that can be used to identify you when you fill out contact forms, subscribe to newsletters, register for events, or otherwise interact with our Site.
                </li>
                <li>
                  <span className="font-medium text-foreground">Usage Information:</span> Information about your connection to our Site, including your IP address, browser type, operating system, referring URLs, access times, and pages viewed.
                </li>
                <li>
                  <span className="font-medium text-foreground">Device Information:</span> Information about the device you use to access our Site, including hardware model, operating system and version, unique device identifiers, and mobile network information.
                </li>
                <li>
                  <span className="font-medium text-foreground">Cookies and Similar Technologies:</span> We use cookies, web beacons, and similar technologies to collect information about your browsing behavior and improve your experience on our Site.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p>
                We may use the information we collect from you for various purposes, including to:
              </p>
              <ul className="list-disc list-inside mt-2 ml-6 space-y-2">
                <li>Provide, maintain, and improve our Site and services</li>
                <li>Process and fulfill your requests, such as responding to inquiries or providing quotations</li>
                <li>Send you administrative information, such as updates, security alerts, and support messages</li>
                <li>Send you marketing communications about our products, services, events, and promotions, when permitted by law</li>
                <li>Personalize your experience on our Site and deliver content relevant to your interests</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our Site to improve functionality</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Comply with legal obligations and protect our rights and interests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing and Disclosure</h2>
              <p>
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside mt-2 ml-6 space-y-2">
                <li>
                  <span className="font-medium text-foreground">With Service Providers:</span> We may share your information with third-party vendors, service providers, contractors, or agents who perform services on our behalf.
                </li>
                <li>
                  <span className="font-medium text-foreground">Business Transfers:</span> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                </li>
                <li>
                  <span className="font-medium text-foreground">Legal Compliance:</span> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
                </li>
                <li>
                  <span className="font-medium text-foreground">Protection of Rights:</span> We may disclose your information to protect the rights, property, or safety of Anthem Infotech, our users, or others.
                </li>
                <li>
                  <span className="font-medium text-foreground">With Your Consent:</span> We may share your information with third parties when you have given us your consent to do so.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities over time and across different websites. Cookies are small text files that are stored on your device when you visit a website.
              </p>
              <p className="mt-2">
                You can control cookies through your browser settings and other tools. However, if you block certain cookies, you may not be able to use some features of our Site or services.
              </p>
              <p className="mt-2">
                We use the following types of cookies:
              </p>
              <ul className="list-disc list-inside mt-2 ml-6 space-y-2">
                <li>
                  <span className="font-medium text-foreground">Essential Cookies:</span> These are necessary for the Site to function properly and cannot be turned off in our systems.
                </li>
                <li>
                  <span className="font-medium text-foreground">Performance and Analytics Cookies:</span> These help us understand how visitors interact with our Site by collecting and reporting information anonymously.
                </li>
                <li>
                  <span className="font-medium text-foreground">Functionality Cookies:</span> These enable enhanced functionality and personalization, such as remembering your preferences.
                </li>
                <li>
                  <span className="font-medium text-foreground">Targeting Cookies:</span> These may be set through our Site by our advertising partners to build a profile of your interests and show you relevant ads on other sites.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information. These may include:
              </p>
              <ul className="list-disc list-inside mt-2 ml-6 space-y-2">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to rectify or update your personal information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to the processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw your consent</li>
                <li>The right to lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us using the contact information provided below. Please note that we may ask you to verify your identity before responding to such requests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              <p className="mt-2">
                You are responsible for maintaining the confidentiality of any password and account information, and for controlling access to your email communications from us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Links</h2>
              <p>
                Our Site may contain links to third-party websites, services, or content that are not owned or controlled by Anthem Infotech. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              <p className="mt-2">
                We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
              <p>
                Our Site is not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us, and we will delete such information from our systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              <p className="mt-2">
                Your continued use of our Site after we post any modifications to the Privacy Policy will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 bg-muted/30 p-6 rounded-lg">
                <p className="font-medium text-foreground">Anthem Infotech</p>
                <p>123 Tech Park, Sector 5</p>
                <p>Noida, Uttar Pradesh 201301</p>
                <p>India</p>
                <p className="mt-2">Email: <a href="mailto:privacy@antheminfotech.com" className="text-primary hover:underline">privacy@antheminfotech.com</a></p>
                <p>Phone: +91-120-4567890</p>
              </div>
            </section>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Anthem Infotech. All rights reserved.
            </p>
            <div className="flex gap-4 justify-center mt-4">
              <Link to="/terms" className="text-sm text-primary hover:underline">Terms of Service</Link>
              <Link to="/cookies" className="text-sm text-primary hover:underline">Cookies Policy</Link>
              <Link to="/contact" className="text-sm text-primary hover:underline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 