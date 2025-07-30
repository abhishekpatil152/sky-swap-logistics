import HeroSection from "@/components/HeroSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import VideoDemo from "@/components/VideoDemo";
import CTASection from "@/components/CTASection";
import BlogSection from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TestimonialSlider />
      <VideoDemo />
      <CTASection />
      <BlogSection />
    </div>
  );
};

export default Index;
