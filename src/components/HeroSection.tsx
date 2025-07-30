import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";
import Drone3D from "./Drone3D";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight">
                Redefining
                <span className="block text-gradient animate-glow">
                  Drone Delivery
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl font-light">
                From autonomous battery-swapping drones to AI-powered fleet management — we're building the future of logistics.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Join Our Waitlist
              </Button>
              <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 justify-center lg:justify-start text-muted-foreground animate-fade-in-up">
              <div className="text-center group hover-scale">
                <div className="text-2xl font-bold text-gradient font-display">500+</div>
                <div className="text-sm">Test Flights</div>
              </div>
              <div className="w-px h-8 bg-primary/30" />
              <div className="text-center group hover-scale">
                <div className="text-2xl font-bold text-gradient font-display">50+</div>
                <div className="text-sm">Partner Farms</div>
              </div>
              <div className="w-px h-8 bg-primary/30" />
              <div className="text-center group hover-scale">
                <div className="text-2xl font-bold text-gradient font-display">99.8%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* 3D Drone Animation */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20" />
            <div className="relative z-10 w-full h-auto rounded-3xl shadow-glow overflow-hidden glass-morphism">
              <Drone3D />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary/70 animate-pulse-slow" />
      </div>
    </section>
  );
};

export default HeroSection;