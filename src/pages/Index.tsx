
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Zap, Code, Smartphone, ShoppingCart, MessageCircle, CheckCircle, Star, Users, Target, TrendingUp } from "lucide-react";

const Index = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/8801616022669?text=Hi Shipu, I'm interested in Flow9's AI automation services. Can we discuss my project?", "_blank");
  };

  const handleEmailContact = () => {
    window.location.href = "mailto:hello@getflow9.com?subject=Inquiry about AI Automation Services";
  };

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
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact on WhatsApp
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30">
            AI-Powered Automation Experts
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              AI Automation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Flow9 specializes in building custom AI-powered automation solutions using n8n, Make, and Dify. 
            We help SMBs and Shopify merchants boost efficiency and leverage cutting-edge AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleWhatsAppContact}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleEmailContact}
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">99%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI automation solutions tailored for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">AI Automation with n8n/Make/Dify</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Custom workflow automation solutions that integrate with your existing tools and processes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Shopify AI Plugins</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Smart plugins that enhance your Shopify store with AI-powered features and automation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Custom Software & SaaS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Tailored software solutions and SaaS platforms built with modern technologies and AI integration.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Mobile App Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Native and cross-platform mobile applications with AI capabilities and seamless user experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-yellow-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Process Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Analyze and optimize your business processes with AI-driven insights and automation strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-pink-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">AI Strategy Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Strategic guidance on implementing AI solutions that align with your business goals and ROI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Flow9</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Expert Team</h3>
              <p className="text-gray-300">Experienced developers and AI specialists</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Proven Results</h3>
              <p className="text-gray-300">Track record of successful implementations</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Fast Delivery</h3>
              <p className="text-gray-300">Quick turnaround without compromising quality</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">24/7 Support</h3>
              <p className="text-gray-300">Continuous support and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Success Stories</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Flow9 transformed our e-commerce operations with their AI automation. Our order processing time reduced by 70%."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">JD</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">John Doe</p>
                    <p className="text-gray-400 text-sm">CEO, TechStore</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "The Shopify plugin they developed increased our conversion rate by 40%. Excellent work and support!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">SM</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Sarah Miller</p>
                    <p className="text-gray-400 text-sm">Founder, Fashion Hub</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Professional, reliable, and innovative. Flow9 delivered exactly what we needed for our automation project."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">MJ</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Mike Johnson</p>
                    <p className="text-gray-400 text-sm">CTO, StartupCo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Automate</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how Flow9 can help you implement AI-powered automation solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp: +880 161 602 2669
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleEmailContact}
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg"
            >
              Send Email
            </Button>
          </div>
        </div>
      </section>

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
              <a href="https://getflow9.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                getflow9.com
              </a>
              <button 
                onClick={handleWhatsAppContact}
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                WhatsApp
              </button>
              <button 
                onClick={handleEmailContact}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Email
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Flow9. All rights reserved. Founded by Shipu - AI Automation Expert</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
