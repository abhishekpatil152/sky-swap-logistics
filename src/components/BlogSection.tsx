import { Calendar, ArrowRight, Award, Zap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const updates = [
  {
    icon: Award,
    category: "Milestone",
    title: "Skybolt Completes First Fully Autonomous Delivery Trial in Maharashtra",
    excerpt: "Successfully delivered medical supplies to remote villages with 99.8% accuracy rate across 50+ test flights.",
    date: "December 15, 2024",
    readTime: "3 min read",
    badge: "Latest"
  },
  {
    icon: Zap,
    category: "Technology",
    title: "Revolutionary Battery Swap System Reduces Downtime by 95%",
    excerpt: "Our new automated battery replacement technology enables continuous 24/7 operations without human intervention.",
    date: "December 10, 2024",
    readTime: "5 min read",
    badge: null
  },
  {
    icon: MapPin,
    category: "Expansion",
    title: "Partnership with AgriTech Collective Expands Reach to 500+ Farms",
    excerpt: "Strategic collaboration brings autonomous drone delivery to agricultural communities across three states.",
    date: "December 5, 2024",
    readTime: "4 min read",
    badge: null
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Latest Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our progress, milestones, and the latest developments in autonomous drone technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {updates.map((update, index) => (
            <article 
              key={index}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {update.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-success-green text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {update.badge}
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <update.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                    {update.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {update.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {update.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {update.date}
                  </div>
                  <span>{update.readTime}</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-primary/10 transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <Button variant="outline" size="lg">
            View All Updates
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;