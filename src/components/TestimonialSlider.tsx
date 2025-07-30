import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "The autonomous battery swap feature is revolutionary. Our delivery efficiency increased by 300%.",
    author: "Rajesh Sharma",
    role: "Logistics Director, AgriTech Solutions",
    avatar: "👨‍💼"
  },
  {
    quote: "Skybolt's AI fleet management gives us insights we never had before. Game-changing technology.",
    author: "Priya Patel",
    role: "Farm Operations Manager",
    avatar: "👩‍🌾"
  },
  {
    quote: "The precision and reliability of these drones is unmatched. Perfect for our remote farming operations.",
    author: "Dr. Amit Kumar",
    role: "Agricultural Research Institute",
    avatar: "👨‍🔬"
  },
  {
    quote: "Finally, a drone solution that understands the real challenges of rural logistics in India.",
    author: "Meera Singh",
    role: "Rural Development NGO",
    avatar: "👩‍💼"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trusted by Innovators
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from early adopters who are already transforming their operations with Skybolt
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-card shadow-soft p-8 lg:p-12">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            <div className="relative z-10 text-center animate-fade-in" key={currentIndex}>
              <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="text-4xl">{testimonials[currentIndex].avatar}</div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full hover:shadow-soft"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-110' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full hover:shadow-soft"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;