import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
}

const HeroSection = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  description, 
  primaryCTA, 
  secondaryCTA 
}: HeroSectionProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <p className="text-accent font-medium text-lg tracking-wide uppercase">
              {subtitle}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {title}
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-4 text-lg font-semibold"
            >
              <Link to={primaryCTA.link} className="flex items-center space-x-2">
                <span>{primaryCTA.text}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            {secondaryCTA && (
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              >
                <Link to={secondaryCTA.link} className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>{secondaryCTA.text}</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/60"></div>
          <div className="animate-bounce">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
              <path d="M2 2L10 10L18 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;