import { Link } from 'react-router-dom';
import { FileText, Clock } from 'lucide-react';

import { Button } from "../../components/ui/button";

export default function TermsOfService() {
  // Last updated date
  const lastUpdated = "June 15, 2024";

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section container px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter lg:text-5xl relative overflow-hidden text-center">
            <span className="animate-slide-up block" style={{ animationDelay: "100ms" }}>Terms of</span> 
            <span className="animate-slide-up block" style={{ animationDelay: "300ms" }}>
              <span className="relative inline-block">
                <span className="text-primary relative z-10">Service</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 rounded-full transform -skew-x-12 animate-width" style={{ animationDelay: "800ms" }}></span>
              </span>
            </span>
            <div className="absolute -top-2 -left-4 w-16 h-16 text-primary/10 animate-ping-slow opacity-70">
              <FileText className="w-full h-full" />
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
              <a href="#" onClick={() => window.print()}>Print Terms</a>
            </Button>
          </div>

          <div className="space-y-8 text-muted-foreground leading-relaxed terms-content">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p>
                Welcome to Anthem Infotech ("Company", "we", "our", "us"). These Terms of Service ("Terms") govern your use of our website located at antheminfotech.com (the "Site") and the services, features, content, and applications offered by Anthem Infotech (collectively with the Site, the "Services").
              </p>
              <p className="mt-2">
                Please read these Terms carefully before using our Services. By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not access or use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Use of Services</h2>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Eligibility</h3>
              <p>
                You must be at least 18 years of age to use our Services. By using our Services, you represent and warrant that you meet this requirement and that you have the legal authority to accept these Terms.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Account Registration</h3>
              <p>
                Some of our Services may require you to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
              <p className="mt-2">
                You are responsible for safeguarding the password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Acceptable Use</h3>
              <p>
                You agree not to use our Services to:
              </p>
              <ul className="list-disc list-inside mt-2 ml-6 space-y-2">
                <li>Violate any applicable law, regulation, or these Terms</li>
                <li>Infringe the rights of any third party, including intellectual property rights</li>
                <li>Upload, transmit, or distribute any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
                <li>Upload, transmit, or distribute any viruses, malware, or other malicious code</li>
                <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
                <li>Attempt to gain unauthorized access to the Services or other accounts, computer systems, or networks</li>
                <li>Engage in any activity that could damage, disable, overburden, or impair the functioning of the Services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property Rights</h2>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Our Intellectual Property</h3>
              <p>
                The Services and their original content, features, and functionality are owned by Anthem Infotech and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="mt-2">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services, except as follows:
              </p>
              <ul className="list-disc list-inside mt-2 ml-6 space-y-2">
                <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
                <li>You may store files that are automatically cached by your web browser for display enhancement purposes</li>
                <li>You may print or download one copy of a reasonable number of pages of the Site for your own personal, non-commercial use and not for further reproduction, publication, or distribution</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Your Content</h3>
              <p>
                You retain all rights to any content you submit, post, or display on or through the Services. By submitting, posting, or displaying content on or through the Services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute such content in any and all media or distribution methods.
              </p>
              <p className="mt-2">
                You represent and warrant that you own or have the necessary rights to the content you submit and that the content does not infringe the rights of any third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
              <p>
                Our Services may contain links to third-party websites or services that are not owned or controlled by Anthem Infotech. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              <p className="mt-2">
                You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
              <p>
                We may terminate or suspend your access to all or any part of the Services at any time, with or without cause, with or without notice, effective immediately. If you wish to terminate your account, you may simply discontinue using the Services or contact us to request account deletion.
              </p>
              <p className="mt-2">
                All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer of Warranties</h2>
              <p>
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="mt-2">
                WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL ANTHEM INFOTECH, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc list-inside mt-2 ml-6 space-y-2">
                <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES</li>
                <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES</li>
                <li>ANY CONTENT OBTAINED FROM THE SERVICES</li>
                <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
              </ul>
              <p className="mt-2">
                WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Anthem Infotech, its directors, employees, partners, agents, suppliers, and affiliates, from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with:
              </p>
              <ul className="list-disc list-inside mt-2 ml-6 space-y-2">
                <li>Your access to or use of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of a third party</li>
                <li>Your content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
              <p className="mt-2">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Dispute Resolution</h2>
              <p>
                Any disputes arising out of or relating to these Terms or the Services shall be resolved through final and binding arbitration in accordance with the Indian Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in Delhi, India, in the English language by a single arbitrator.
              </p>
              <p className="mt-2">
                You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action. If for any reason a claim proceeds in court rather than in arbitration, you and Anthem Infotech waive any right to a jury trial.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on the Site and updating the "Last Updated" date at the top of these Terms.
              </p>
              <p className="mt-2">
                Your continued use of the Services after any such changes constitutes your acceptance of the new Terms. If you do not agree to the new Terms, you must stop using the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 bg-muted/30 p-6 rounded-lg">
                <p className="font-medium text-foreground">Anthem Infotech</p>
                <p>123 Tech Park, Sector 5</p>
                <p>Noida, Uttar Pradesh 201301</p>
                <p>India</p>
                <p className="mt-2">Email: <a href="mailto:legal@antheminfotech.com" className="text-primary hover:underline">legal@antheminfotech.com</a></p>
                <p>Phone: +91-120-4567890</p>
              </div>
            </section>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Anthem Infotech. All rights reserved.
            </p>
            <div className="flex gap-4 justify-center mt-4">
              <Link to="/privacy-policy" className="text-sm text-primary hover:underline">Privacy Policy</Link>
              <Link to="/cookies" className="text-sm text-primary hover:underline">Cookies Policy</Link>
              <Link to="/contact" className="text-sm text-primary hover:underline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 