import { Play, Battery, Cpu, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardImage from "@/assets/dashboard-demo.jpg";

const features = [
  {
    icon: Battery,
    title: "Auto Battery Swap",
    description: "Seamless battery replacement for continuous operations"
  },
  {
    icon: Cpu,
    title: "AI Fleet Management",
    description: "Intelligent routing and real-time optimization"
  },
  {
    icon: MapPin,
    title: "Precision Delivery",
    description: "GPS-accurate drops with weather adaptation"
  }
];

const VideoDemo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            See Skybolt in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch our autonomous drones perform seamless deliveries with intelligent battery management
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video/Demo Section */}
          <div className="relative group animate-fade-in">
            <div className="relative overflow-hidden rounded-3xl shadow-hover">
              <img 
                src={dashboardImage} 
                alt="AI Dashboard Demo"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-tech-dark/20 group-hover:bg-tech-dark/10 transition-all duration-300" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="rounded-full w-20 h-20 bg-primary/90 hover:bg-primary hover:scale-110 transition-all duration-300 shadow-hover"
                >
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </Button>
              </div>
            </div>
            
            {/* Demo Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 rounded-2xl bg-gradient-card">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Operation</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gradient-card">
                <div className="text-2xl font-bold text-success-green">5km</div>
                <div className="text-sm text-muted-foreground">Range</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gradient-card">
                <div className="text-2xl font-bold text-accent">2kg</div>
                <div className="text-sm text-muted-foreground">Payload</div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Revolutionary Technology Stack
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our drones combine cutting-edge hardware with intelligent software to deliver unmatched performance in the field.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-card hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg" className="w-full lg:w-auto">
              Request Full Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;