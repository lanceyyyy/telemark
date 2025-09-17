import HeroSection from "@/components/sections/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, Wrench, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroMarineEngines from "@/assets/hero-marine-engines.jpg";

const Index = () => {
  const features = [
    {
      icon: <Award className="h-12 w-12 text-accent" />,
      title: "20+ År Erfaring",
      description: "Langvarig erfaring som importør og forhandler av kvalitetsprodukter"
    },
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: "Ekspertråde",
      description: "Våre fagfolk hjelper deg finne den rette løsningen for dine behov"
    },
    {
      icon: <Wrench className="h-12 w-12 text-accent" />,
      title: "Komplett Service",
      description: "Fra salg til service - vi følger deg hele veien"
    }
  ];

  const productCategories = [
    {
      title: "Marine Motorer",
      description: "Høykvalitets båtmotorer fra ledende produsenter som TD Power, Hyundai SeasAll og Aquamot.",
      link: "/produkter",
      image: "/placeholder.svg"
    },
    {
      title: "Anleggsmaskiner", 
      description: "Kraftige og pålitelige Everun hjullastere for alle typer anleggsarbeid.",
      link: "/everun-hjullastere",
      image: "/placeholder.svg"
    },
    {
      title: "Service & Vedlikehold",
      description: "Profesjonell service og vedlikehold av alle våre produkter.",
      link: "/kontakt",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div>
      <HeroSection
        backgroundImage={heroMarineEngines}
        title="Telemark Trade AS"
        subtitle="NORGES MARINE EKSPERTER"
        description="Din pålitelige partner for båtmotorer, anleggsmaskiner og tilbehør. Kvalitet, service og erfaring siden 2000."
        primaryCTA={{
          text: "Utforsk produkter",
          link: "/produkter"
        }}
        secondaryCTA={{
          text: "Kontakt oss",
          link: "/kontakt"
        }}
      />

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Hvorfor velge Telemark Trade?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vi er Norges ledende importør og forhandler av marine motorer og anleggsmaskiner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Våre Produktområder
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oppdage vårt omfattende utvalg av kvalitetsprodukter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to={category.link} className="flex items-center justify-center space-x-2">
                      <span>Les mer</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Klar for å komme i gang?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontakt våre eksperter i dag for personlig rådgivning og tilbud
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                variant="secondary"
                className="px-8"
              >
                <Link to="/kontakt">
                  Be om tilbud
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="px-8 border-white text-white hover:bg-white hover:text-primary"
              >
                <a href="tel:+4735952500" className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+47 35 95 25 00</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
