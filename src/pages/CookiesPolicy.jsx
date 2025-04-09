import { Link } from 'react-router-dom';
import { Cookie, Clock } from 'lucide-react';

import { Button } from "../../components/ui/button";

export default function CookiesPolicy() {
  // Last updated date
  const lastUpdated = "June 15, 2024";

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section container px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter lg:text-5xl relative overflow-hidden text-center">
            <span className="animate-slide-up block" style={{ animationDelay: "100ms" }}>Cookies</span> 
            <span className="animate-slide-up block" style={{ animationDelay: "300ms" }}>
              <span className="relative inline-block">
                <span className="text-primary relative z-10">Policy</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 rounded-full transform -skew-x-12 animate-width" style={{ animationDelay: "800ms" }}></span>
              </span>
            </span>
            <div className="absolute -top-2 -left-4 w-16 h-16 text-primary/10 animate-ping-slow opacity-70">
              <Cookie className="w-full h-full" />
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
                This Cookies Policy explains how Anthem Infotech ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our website at antheminfotech.com ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              <p className="mt-2">
                In some cases, we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p className="mt-2">
                Cookies set by the website owner (in this case, Anthem Infotech) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Why Do We Use Cookies?</h2>
              <p>
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This is described in more detail below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Types of Cookies We Use</h2>
              <p>
                The specific types of first- and third-party cookies served through our Website and the purposes they perform are described below:
              </p>
              <div className="mt-4 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Essential Cookies</h3>
                  <p>
                    These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas. These cookies cannot be turned off in our systems.
                  </p>
                  <div className="mt-3 bg-muted/20 p-4 rounded-lg">
                    <table className="w-full text-sm">
                      <thead>
                        <tr>
                          <th className="text-left py-2 px-3 font-medium">Name</th>
                          <th className="text-left py-2 px-3 font-medium">Provider</th>
                          <th className="text-left py-2 px-3 font-medium">Purpose</th>
                          <th className="text-left py-2 px-3 font-medium">Expiry</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-3 border-t border-border">JSESSIONID</td>
                          <td className="py-2 px-3 border-t border-border">antheminfotech.com</td>
                          <td className="py-2 px-3 border-t border-border">Preserves users states across page requests</td>
                          <td className="py-2 px-3 border-t border-border">Session</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 border-t border-border">auth_token</td>
                          <td className="py-2 px-3 border-t border-border">antheminfotech.com</td>
                          <td className="py-2 px-3 border-t border-border">Authentication related</td>
                          <td className="py-2 px-3 border-t border-border">1 year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Performance and Analytics Cookies</h3>
                  <p>
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                  </p>
                  <div className="mt-3 bg-muted/20 p-4 rounded-lg">
                    <table className="w-full text-sm">
                      <thead>
                        <tr>
                          <th className="text-left py-2 px-3 font-medium">Name</th>
                          <th className="text-left py-2 px-3 font-medium">Provider</th>
                          <th className="text-left py-2 px-3 font-medium">Purpose</th>
                          <th className="text-left py-2 px-3 font-medium">Expiry</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-3 border-t border-border">_ga</td>
                          <td className="py-2 px-3 border-t border-border">Google</td>
                          <td className="py-2 px-3 border-t border-border">Registers a unique ID used to generate statistical data</td>
                          <td className="py-2 px-3 border-t border-border">2 years</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 border-t border-border">_gid</td>
                          <td className="py-2 px-3 border-t border-border">Google</td>
                          <td className="py-2 px-3 border-t border-border">Registers a unique ID used to generate statistical data</td>
                          <td className="py-2 px-3 border-t border-border">24 hours</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 border-t border-border">_gat</td>
                          <td className="py-2 px-3 border-t border-border">Google</td>
                          <td className="py-2 px-3 border-t border-border">Used to throttle request rate</td>
                          <td className="py-2 px-3 border-t border-border">1 minute</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Functional Cookies</h3>
                  <p>
                    These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                  <div className="mt-3 bg-muted/20 p-4 rounded-lg">
                    <table className="w-full text-sm">
                      <thead>
                        <tr>
                          <th className="text-left py-2 px-3 font-medium">Name</th>
                          <th className="text-left py-2 px-3 font-medium">Provider</th>
                          <th className="text-left py-2 px-3 font-medium">Purpose</th>
                          <th className="text-left py-2 px-3 font-medium">Expiry</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-3 border-t border-border">user_preferences</td>
                          <td className="py-2 px-3 border-t border-border">antheminfotech.com</td>
                          <td className="py-2 px-3 border-t border-border">Stores user preferences (theme, etc.)</td>
                          <td className="py-2 px-3 border-t border-border">1 year</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 border-t border-border">language</td>
                          <td className="py-2 px-3 border-t border-border">antheminfotech.com</td>
                          <td className="py-2 px-3 border-t border-border">Stores language preferences</td>
                          <td className="py-2 px-3 border-t border-border">1 year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Targeting and Advertising Cookies</h3>
                  <p>
                    These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.
                  </p>
                  <div className="mt-3 bg-muted/20 p-4 rounded-lg">
                    <table className="w-full text-sm">
                      <thead>
                        <tr>
                          <th className="text-left py-2 px-3 font-medium">Name</th>
                          <th className="text-left py-2 px-3 font-medium">Provider</th>
                          <th className="text-left py-2 px-3 font-medium">Purpose</th>
                          <th className="text-left py-2 px-3 font-medium">Expiry</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-3 border-t border-border">_fbp</td>
                          <td className="py-2 px-3 border-t border-border">Facebook</td>
                          <td className="py-2 px-3 border-t border-border">Used by Facebook to deliver advertisements</td>
                          <td className="py-2 px-3 border-t border-border">3 months</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 border-t border-border">_gcl_au</td>
                          <td className="py-2 px-3 border-t border-border">Google</td>
                          <td className="py-2 px-3 border-t border-border">Used by Google AdSense for experimenting with advertisement efficiency</td>
                          <td className="py-2 px-3 border-t border-border">3 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How Can You Control Cookies?</h2>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
              </p>
              <p className="mt-2">
                The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.
              </p>
              <p className="mt-2">
                The specific steps to control cookies in different web browsers are provided below:
              </p>
              <ul className="list-disc list-inside mt-2 ml-6 space-y-2">
                <li>
                  <span className="font-medium text-foreground">Chrome:</span> Settings &gt; Privacy and security &gt; Cookies and other site data
                </li>
                <li>
                  <span className="font-medium text-foreground">Firefox:</span> Options &gt; Privacy & Security &gt; Cookies and Site Data
                </li>
                <li>
                  <span className="font-medium text-foreground">Safari:</span> Preferences &gt; Privacy &gt; Cookies and website data
                </li>
                <li>
                  <span className="font-medium text-foreground">Edge:</span> Settings &gt; Cookies and site permissions &gt; Cookies
                </li>
                <li>
                  <span className="font-medium text-foreground">Internet Explorer:</span> Tools &gt; Internet Options &gt; Privacy &gt; Advanced
                </li>
              </ul>
              <p className="mt-2">
                In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit:
              </p>
              <ul className="list-disc list-inside mt-2 ml-6 space-y-2">
                <li><a href="http://www.aboutads.info/choices/" className="text-primary hover:underline">Digital Advertising Alliance</a></li>
                <li><a href="https://youronlinechoices.eu/" className="text-primary hover:underline">European Interactive Digital Advertising Alliance</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">What About Other Tracking Technologies?</h2>
              <p>
                Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Website or opened an e-mail including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of e-mail marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Do You Use Flash Cookies or Local Shared Objects?</h2>
              <p>
                Websites may also use so-called "Flash Cookies" (also known as Local Shared Objects or "LSOs") to, among other things, collect and store information about your use of our services, fraud prevention, and for other site operations.
              </p>
              <p className="mt-2">
                If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html" className="text-primary hover:underline">Website Storage Settings Panel</a>. You can also control Flash Cookies by going to the <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html" className="text-primary hover:underline">Global Storage Settings Panel</a> and following the instructions.
              </p>
              <p className="mt-2">
                Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Do You Serve Targeted Advertising?</h2>
              <p>
                Third parties may serve cookies on your computer or mobile device to serve advertising through our Website. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. This can be accomplished by them using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details, or other details that directly identify you unless you choose to provide these.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How Often Will You Update This Cookie Policy?</h2>
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p className="mt-2">
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Where Can I Get Further Information?</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please contact us at:
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
              <Link to="/privacy-policy" className="text-sm text-primary hover:underline">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-primary hover:underline">Terms of Service</Link>
              <Link to="/contact" className="text-sm text-primary hover:underline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 