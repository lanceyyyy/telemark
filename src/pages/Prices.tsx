import HeroSection from "@/components/sections/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calculator, CreditCard, Users } from "lucide-react";
import heroWorkshop from "@/assets/hero-workshop.jpg";

const Prices = () => {
  const pricingOptions = [
    {
      title: "Kontantpriser",
      description: "Beste priser ved kontant betaling",
      icon: <Calculator className="h-8 w-8 text-accent" />,
      benefits: [
        "Opptil 5% rabatt ved kontant betaling",
        "Ingen skjulte kostnader eller gebyrer",
        "Rask levering og installasjon",
        "Full garanti inkludert"
      ]
    },
    {
      title: "Finansieringsordninger", 
      description: "Fleksible betalingsløsninger",
      icon: <CreditCard className="h-8 w-8 text-accent" />,
      benefits: [
        "Lav rente på finansiering",
        "Fleksible nedbetalingsordninger",
        "Ingen etableringsgebyr",
        "Rask behandling av søknader"
      ]
    },
    {
      title: "Bedriftskunder",
      description: "Spesialpriser for bedrifter",
      icon: <Users className="h-8 w-8 text-accent" />,
      benefits: [
        "Bedriftsrabatter på store ordre",
        "30 dagers betalingsfrist",
        "Rammeavtaler tilgjengelig",
        "Dedikert kundeansvarlig"
      ]
    }
  ];

  const servicePackages = [
    {
      name: "Basis Service",
      price: "Fra 1,500 kr",
      features: [
        "Årlig service og vedlikehold",
        "Grunnleggende inspeksjon",
        "Oljeskift og filter",
        "Enkel feilsøking"
      ]
    },
    {
      name: "Premium Service",
      price: "Fra 2,500 kr", 
      features: [
        "Omfattende inspeksjon",
        "Alle væsker og filtre",
        "Detaljert rapport",
        "Prioritert support",
        "10% rabatt på deler"
      ]
    },
    {
      name: "Proff Service",
      price: "Fra 4,000 kr",
      features: [
        "Komplett service pakke",
        "Avansert diagnostikk",
        "Forebyggende vedlikehold",
        "24/7 support",
        "15% rabatt på deler",
        "Gratis utrykning"
      ]
    }
  ];

  return (
    <div>
      <HeroSection
        backgroundImage={heroWorkshop}
        title="Priser & Finansiering"
        subtitle="TRANSPARENTE PRISER"
        description="Vi tilbyr konkurransedyktige priser og fleksible finansieringsordninger for alle våre produkter."
        primaryCTA={{
          text: "Be om tilbud",
          link: "/kontakt"
        }}
        secondaryCTA={{
          text: "Ring for priser",
          link: "tel:+4735952500"
        }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Betalingsalternativer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vi tilbyr flere måter å betale på, tilpasset dine behov
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {option.icon}
                  </div>
                  <CardTitle className="text-2xl">{option.title}</CardTitle>
                  <CardDescription className="text-base">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6 text-left">
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Service Pakker
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hold utstyret ditt i topptilstand med våre servicepakker
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <Card key={index} className={`text-center ${index === 1 ? 'ring-2 ring-accent' : ''}`}>
                <CardHeader>
                  {index === 1 && (
                    <Badge variant="default" className="w-fit mx-auto mb-2">
                      Mest populær
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {pkg.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={index === 1 ? "default" : "outline"} 
                    className="w-full"
                  >
                    Velg pakke
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Trenger du et tilbud?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontakt oss i dag for et skreddersydd tilbud tilpasset dine behov
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8"
              >
                Send forespørsel
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 border-white text-white hover:bg-white hover:text-primary"
              >
                Ring oss: +47 35 95 25 00
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prices;