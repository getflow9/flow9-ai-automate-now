import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/4d708035-cdef-4f3a-bda1-32120b63b06a.png" 
                alt="Flow9 Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Flow9
              </span>
            </div>
            <Button 
              onClick={() => navigate("/")}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">& Conditions</span>
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p className="text-sm text-gray-400">
              <strong>Last Updated:</strong> October 30, 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
              <p>
                These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") 
                and Flow9 ("Company," "we," "us," or "our") concerning your access to and use of our services, website, applications, 
                and any related products or services (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these Terms, 
                you may not access or use our Services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Description of Services</h2>
              <p>
                Flow9 provides AI-powered automation solutions, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Workflow automation using n8n, Make, and Dify platforms</li>
                <li>Custom software development and SaaS solutions</li>
                <li>Shopify AI plugins and integrations</li>
                <li>Mobile application development</li>
                <li>Business process optimization and AI consulting</li>
                <li>Integration with third-party platforms including Facebook</li>
              </ul>
              <p className="mt-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, with or without notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. Account Registration and Security</h2>
              
              <h3 className="text-xl font-semibold text-white">3.1 Account Creation</h3>
              <p>
                To access certain features of our Services, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Immediately notify us of any unauthorized use</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-4">3.2 Account Eligibility</h3>
              <p>
                You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you 
                meet this age requirement and have the legal capacity to enter into these Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. User Obligations and Prohibited Conduct</h2>
              <p>When using our Services, you agree NOT to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Use the Services for any illegal or unauthorized purpose</li>
                <li>Transmit any malicious code, viruses, or harmful components</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the integrity or performance of our Services</li>
                <li>Collect or harvest any information from other users without consent</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Use automated systems to access the Services without authorization</li>
                <li>Reverse engineer, decompile, or disassemble any part of our Services</li>
                <li>Remove, obscure, or alter any proprietary notices on our Services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-white">5.1 Our Intellectual Property</h3>
              <p>
                All content, features, and functionality of our Services, including but not limited to text, graphics, logos, 
                icons, images, audio clips, software, and code, are the exclusive property of Flow9 and are protected by 
                international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4">5.2 Your Content</h3>
              <p>
                You retain all rights to any content, data, or information you submit through our Services ("User Content"). 
                By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, 
                modify, adapt, publish, and display such content solely for the purpose of providing and improving our Services.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4">5.3 Feedback</h3>
              <p>
                Any feedback, suggestions, or ideas you provide to us regarding our Services become our property, and we may 
                use them without any obligation to you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-white">6.1 Fees and Charges</h3>
              <p>
                Certain aspects of our Services may be provided for a fee. You agree to pay all applicable fees as described 
                when you purchase or subscribe to such Services. All fees are non-refundable unless otherwise specified.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4">6.2 Billing and Payment</h3>
              <p>
                Payment must be made through the payment methods we specify. You authorize us to charge your chosen payment 
                method for all fees incurred. If automatic billing fails, we reserve the right to suspend or terminate your access.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4">6.3 Price Changes</h3>
              <p>
                We reserve the right to change our fees at any time. We will provide reasonable notice of any fee changes, 
                and such changes will not affect existing subscriptions until renewal.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">7. Facebook Platform Integration</h2>
              <p>
                If you connect our Services with Facebook, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Comply with Facebook's Platform Terms and Policies</li>
                <li>Understand that we access only the permissions you explicitly grant</li>
                <li>Acknowledge that you can revoke permissions at any time through Facebook settings</li>
                <li>Accept that Facebook integration features may change based on Facebook's policies</li>
              </ul>
              <p className="mt-4">
                We are not responsible for any changes, interruptions, or terminations of Facebook's services that may affect 
                our integration features.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">8. Service Level and Availability</h2>
              <p>
                While we strive to provide reliable and uninterrupted Services, we do not guarantee that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Our Services will be available at all times without interruption</li>
                <li>All errors or defects will be corrected immediately</li>
                <li>Our Services will be free from security vulnerabilities</li>
                <li>Results obtained from our Services will be accurate or reliable</li>
              </ul>
              <p className="mt-4">
                We reserve the right to perform scheduled maintenance, upgrades, and improvements, which may temporarily 
                affect service availability.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">9. Disclaimer of Warranties</h2>
              <p>
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
                INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
                NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
              </p>
              <p className="mt-4">
                We do not warrant that our Services will meet your requirements or that they will be uninterrupted, timely, 
                secure, or error-free. You use our Services at your own risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">10. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, FLOW9 AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE 
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO 
                LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your access to or use of (or inability to access or use) our Services</li>
                <li>Any conduct or content of any third party on the Services</li>
                <li>Any content obtained from the Services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p className="mt-4">
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU HAVE PAID TO US IN THE TWELVE (12) MONTHS 
                PRECEDING THE EVENT GIVING RISE TO THE LIABILITY, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">11. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Flow9 and its officers, directors, employees, and agents from 
                and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising 
                out of or in any way connected with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your access to or use of our Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any User Content you submit or transmit through our Services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">12. Termination</h2>
              
              <h3 className="text-xl font-semibold text-white">12.1 Termination by You</h3>
              <p>
                You may stop using our Services at any time. If you have a paid subscription, you may cancel it according to 
                the cancellation terms provided at the time of purchase.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4">12.2 Termination by Us</h3>
              <p>
                We may suspend or terminate your access to our Services immediately, without prior notice or liability, for any 
                reason, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Breach of these Terms</li>
                <li>Request by law enforcement or government agencies</li>
                <li>Unexpected technical issues or security concerns</li>
                <li>Extended periods of inactivity</li>
                <li>Engagement in fraudulent or illegal activities</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-4">12.3 Effect of Termination</h3>
              <p>
                Upon termination, your right to use our Services will immediately cease. All provisions of these Terms that by 
                their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, 
                and limitations of liability.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">13. Privacy and Data Protection</h2>
              <p>
                Your use of our Services is also governed by our Privacy Policy, which is incorporated into these Terms by 
                reference. Please review our <button onClick={() => navigate("/privacy")} className="text-blue-400 hover:underline">
                Privacy Policy</button> to understand how we collect, use, and protect your information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">14. Third-Party Services and Links</h2>
              <p>
                Our Services may contain links to third-party websites, applications, or services that are not owned or 
                controlled by Flow9. We are not responsible for the content, privacy policies, or practices of any third-party 
                services. You acknowledge and agree that we shall not be liable for any damage or loss caused by your use of 
                any third-party services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">15. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-white">15.1 Informal Resolution</h3>
              <p>
                If you have any dispute with us, you agree to first contact us and attempt to resolve the dispute informally. 
                Contact us at <a href="mailto:hello@getflow9.com" className="text-blue-400 hover:underline">hello@getflow9.com</a>.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4">15.2 Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Flow9 
                operates, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4">15.3 Arbitration</h3>
              <p>
                Any dispute arising from these Terms or our Services shall be resolved through binding arbitration in accordance 
                with the rules of the applicable arbitration authority, rather than in court, except that you may assert claims 
                in small claims court if your claims qualify.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">16. Modifications to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If we make material 
                changes, we will provide notice through our Services or by other means. Your continued use of our Services after 
                such modifications constitutes your acceptance of the updated Terms.
              </p>
              <p className="mt-4">
                We encourage you to review these Terms periodically. The "Last Updated" date at the top of this page indicates 
                when these Terms were last revised.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">17. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such 
                unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole. Such provisions 
                shall be deleted without affecting the remaining provisions herein.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">18. Waiver</h2>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. 
                No waiver of any provision of these Terms shall be deemed a further or continuing waiver of such provision or 
                any other provision.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">19. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy and any other legal notices published by us on our Services, 
                constitute the entire agreement between you and Flow9 concerning the use of our Services and supersede all 
                prior agreements and understandings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">20. Contact Information</h2>
              <p>
                If you have any questions, concerns, or feedback about these Terms or our Services, please contact us:
              </p>
              <div className="bg-gray-800 p-6 rounded-lg mt-4 space-y-2">
                <p><strong>Flow9</strong></p>
                <p>Email: <a href="mailto:hello@getflow9.com" className="text-blue-400 hover:underline">hello@getflow9.com</a></p>
                <p>WhatsApp: <a href="https://wa.me/8801616022669" className="text-blue-400 hover:underline">+880 161 602 2669</a></p>
                <p>Website: <a href="https://getflow9.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">getflow9.com</a></p>
              </div>
            </section>

            <section className="space-y-4 mt-8 bg-gray-800/50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white">Acknowledgment</h2>
              <p>
                BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND CONDITIONS, UNDERSTAND THEM, AND 
                AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE OUR SERVICES.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/4d708035-cdef-4f3a-bda1-32120b63b06a.png" 
                alt="Flow9 Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Flow9
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => navigate("/")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => navigate("/privacy")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigate("/terms")}
                className="text-blue-400"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Flow9. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;

