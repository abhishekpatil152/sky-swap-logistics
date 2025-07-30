import { Button } from "@/components/ui/button";
import { ArrowLeft, Tractor, Plane, Shield, Camera, Building, Truck, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const applications = [
  {
    icon: Tractor,
    title: "Agricultural Technology",
    description: "Precision agriculture at its finest",
    details: [
      "Autonomous crop spraying with precision targeting",
      "Real-time field monitoring and health assessment",
      "Automated pest detection and treatment",
      "Yield optimization through AI-driven analytics",
      "Reduced chemical usage and environmental impact"
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Plane,
    title: "Air Taxi & Passenger Transport",
    description: "The future of urban mobility",
    details: [
      "Autonomous passenger transport in urban areas",
      "Traffic-free aerial corridors for faster travel",
      "Electric propulsion for zero-emission flights",
      "Advanced safety systems and emergency protocols",
      "Integration with smart city infrastructure"
    ],
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Shield,
    title: "Defense & Security",
    description: "Advanced surveillance and tactical operations",
    details: [
      "Border patrol and perimeter monitoring",
      "Search and rescue operations in hostile environments",
      "Real-time intelligence gathering and reconnaissance",
      "Tactical support for ground operations",
      "Counter-drone defensive systems"
    ],
    color: "from-slate-500 to-slate-700",
    bgColor: "bg-slate-50"
  },
  {
    icon: Camera,
    title: "Survey & Mapping",
    description: "High-precision aerial data collection",
    details: [
      "3D terrain mapping and topographical surveys",
      "Infrastructure inspection and maintenance",
      "Environmental monitoring and conservation",
      "Construction site progress tracking",
      "Archaeological site documentation"
    ],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Building,
    title: "Construction & Infrastructure",
    description: "Smart construction and monitoring solutions",
    details: [
      "Automated construction material delivery",
      "Real-time progress monitoring and reporting",
      "Safety compliance and hazard detection",
      "Quality control through aerial inspection",
      "Remote site accessibility and documentation"
    ],
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description: "Next-generation package delivery systems",
    details: [
      "Last-mile delivery for e-commerce and retail",
      "Medical supply delivery to remote areas",
      "Emergency supply drops during disasters",
      "Warehouse automation and inventory management",
      "Cross-docking and distribution optimization"
    ],
    color: "from-amber-500 to-yellow-600",
    bgColor: "bg-amber-50"
  },
  {
    icon: Heart,
    title: "Healthcare & Emergency",
    description: "Life-saving medical applications",
    details: [
      "Emergency medical supply delivery",
      "Blood and organ transport for hospitals",
      "Remote patient monitoring in rural areas",
      "Disaster response and evacuation support",
      "Telemedicine equipment deployment"
    ],
    color: "from-red-500 to-pink-600",
    bgColor: "bg-red-50"
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Smart grid and infrastructure monitoring",
    details: [
      "Power line inspection and maintenance",
      "Solar panel cleaning and efficiency monitoring",
      "Wind turbine inspection and repair",
      "Pipeline monitoring and leak detection",
      "Smart grid optimization and fault detection"
    ],
    color: "from-yellow-500 to-amber-600",
    bgColor: "bg-yellow-50"
  }
];

const Applications = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-primary">Skybolt Applications</h1>
            <Button asChild>
              <Link to="/">Join Waitlist</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Transforming Industries
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                Across Every Sector
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              From precision agriculture to urban air mobility, our autonomous drone technology is revolutionizing how industries operate, deliver, and innovate.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {applications.map((app, index) => (
              <div 
                key={index}
                className={`p-8 rounded-3xl ${app.bgColor} hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${app.color} flex items-center justify-center`}>
                    <app.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{app.title}</h3>
                    <p className="text-muted-foreground">{app.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {app.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${app.color} mt-2 flex-shrink-0`} />
                      <p className="text-foreground/80 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the growing list of forward-thinking companies leveraging Skybolt's autonomous drone technology to revolutionize their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Schedule a Consultation
              </Button>
              <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Applications;