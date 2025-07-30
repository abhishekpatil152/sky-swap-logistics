import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Handshake, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const ctaOptions = [
  {
    icon: Users,
    title: "Join Our Waitlist",
    description: "Be the first to access Skybolt's revolutionary drone delivery platform",
    buttonText: "Join Waitlist",
    variant: "hero" as const,
    highlight: true
  },
  {
    icon: Handshake,
    title: "Collaborate With Us",
    description: "Partner with us to bring drone delivery to your region or industry",
    buttonText: "Partner Up",
    variant: "cta" as const,
    highlight: false
  }
];

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Be Part of the Future
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join the revolution in autonomous logistics. Whether you're a farmer, logistics company, or tech enthusiast, there's a place for you in the Skybolt ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ctaOptions.map((option, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl transition-all duration-300 hover:scale-105 animate-fade-in-up group ${
                option.highlight 
                  ? 'bg-white/20 border-2 border-white/30 shadow-hover' 
                  : 'bg-white/10 border border-white/20 hover:bg-white/15'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {option.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-success-green text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center space-y-6">
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                  option.highlight ? 'bg-white/30' : 'bg-white/20'
                }`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {option.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    {option.description}
                  </p>
                </div>
                
                <Button 
                  variant={option.variant} 
                  size="lg" 
                  className="w-full group-hover:scale-105 transition-transform duration-300"
                >
                  {option.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <p className="text-blue-200">
              Explore our applications across different industries
            </p>
            <Button variant="outline-hero" size="lg" asChild>
              <Link to="/applications" className="flex items-center gap-2">
                <Layers className="w-5 h-5" />
                View All Applications
              </Link>
            </Button>
          </div>
          <p className="text-blue-200/70 mb-4">
            Questions? We're here to help.
          </p>
          <Button variant="link" className="text-white underline-offset-4 hover:text-blue-200">
            Contact our team →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;