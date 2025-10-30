import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
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
            Privacy <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Policy</span>
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p className="text-sm text-gray-400">
              <strong>Last Updated:</strong> October 30, 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
              <p>
                Welcome to Flow9. We are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how Flow9 ("we," "us," or "our") collects, uses, discloses, and safeguards your information 
                when you use our services, website, and applications.
              </p>
              <p>
                By using our services, you consent to the data practices described in this policy. If you do not agree with our policies 
                and practices, please do not use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-white">2.1 Information You Provide</h3>
              <p>We may collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name, email address, and contact information</li>
                <li>Business information and company details</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-4">2.2 Automatically Collected Information</h3>
              <p>When you access our services, we may automatically collect:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, features used)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log data and analytics information</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-4">2.3 Facebook Platform Data</h3>
              <p>If you connect our services with Facebook, we may access:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Basic profile information (name, email, profile picture)</li>
                <li>Page data and insights (if you manage Facebook Pages)</li>
                <li>Information you explicitly grant us permission to access</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and send related information</li>
                <li>To send administrative information, updates, and security alerts</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To personalize your experience and deliver relevant content</li>
                <li>To monitor and analyze usage patterns and trends</li>
                <li>To detect, prevent, and address technical issues and security threats</li>
                <li>To comply with legal obligations and enforce our terms</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Information Sharing and Disclosure</h2>
              <p>We may share your information in the following situations:</p>
              
              <h3 className="text-xl font-semibold text-white">4.1 With Your Consent</h3>
              <p>We may share your information when you explicitly consent to such sharing.</p>

              <h3 className="text-xl font-semibold text-white mt-4">4.2 Service Providers</h3>
              <p>
                We may share information with third-party service providers who perform services on our behalf, 
                such as payment processing, data analysis, hosting, and customer service.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4">4.3 Business Transfers</h3>
              <p>
                In connection with any merger, sale of company assets, financing, or acquisition of all or a portion 
                of our business, your information may be transferred.
              </p>

              <h3 className="text-xl font-semibold text-white mt-4">4.4 Legal Requirements</h3>
              <p>
                We may disclose your information if required to do so by law or in response to valid requests by 
                public authorities (e.g., court orders, government agencies).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your information 
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we 
                strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in 
                this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer 
                need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">7. Your Rights and Choices</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request access to your personal information we hold</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where applicable</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at <a href="mailto:hello@getflow9.com" className="text-blue-400 hover:underline">hello@getflow9.com</a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">8. Facebook Platform Policy Compliance</h2>
              <p>
                Our application complies with Facebook's Platform Policies. We:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Only request permissions necessary for our app's functionality</li>
                <li>Use Facebook data solely for the purposes disclosed to you</li>
                <li>Do not sell or transfer Facebook data to third parties</li>
                <li>Delete Facebook data when you disconnect your account or upon request</li>
                <li>Comply with Facebook's data use restrictions and policies</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">9. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our services and hold certain information. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
                do not accept cookies, you may not be able to use some portions of our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">10. Third-Party Links</h2>
              <p>
                Our services may contain links to third-party websites or services that are not owned or controlled by Flow9. 
                We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy 
                policies of any third-party sites you visit.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">11. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
                information from children. If we become aware that we have collected personal information from a child 
                without parental consent, we will take steps to delete that information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">12. International Data Transfers</h2>
              <p>
                Your information may be transferred to and maintained on computers located outside of your state, province, 
                country, or other governmental jurisdiction where data protection laws may differ. We will take appropriate 
                steps to ensure that your information receives an adequate level of protection.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">13. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy 
                Policy periodically for any changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">14. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-gray-800 p-6 rounded-lg mt-4 space-y-2">
                <p><strong>Flow9</strong></p>
                <p>Email: <a href="mailto:hello@getflow9.com" className="text-blue-400 hover:underline">hello@getflow9.com</a></p>
                <p>WhatsApp: <a href="https://wa.me/8801616022669" className="text-blue-400 hover:underline">+880 161 602 2669</a></p>
                <p>Website: <a href="https://getflow9.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">getflow9.com</a></p>
              </div>
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
                className="text-blue-400"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigate("/terms")}
                className="text-gray-400 hover:text-white transition-colors"
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

export default Privacy;

