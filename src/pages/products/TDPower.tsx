import HeroSection from "@/components/sections/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Wrench, Shield, Zap } from "lucide-react";
import heroMarineEngines from "@/assets/hero-marine-engines.jpg";

const TDPower = () => {
  const specifications = [
    { label: "Effekt", value: "2.5 - 300 HK" },
    { label: "Drivstoff", value: "Bensin / Diesel" },
    { label: "Starttype", value: "Elektrisk / Manuell" },
    { label: "Garanti", value: "3 år" },
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Høy Ytelse",
      description: "Optimal effekt og pålitelighet i alle forhold"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Lang Garanti", 
      description: "3 års garanti på alle TD Power motorer"
    },
    {
      icon: <Wrench className="h-8 w-8 text-accent" />,
      title: "Enkel Service",
      description: "Lett tilgjengelige servicepunkter og deler"
    }
  ];

  return (
    <div>
      <HeroSection
        backgroundImage={heroMarineEngines}
        title="TD Power"
        subtitle="PREMIUM BÅTMOTORER"
        description="Opplev kraften og påliteligheten til TD Power marine motorer - designet for norske farvann."
        primaryCTA={{
          text: "Be om tilbud",
          link: "/kontakt"
        }}
        secondaryCTA={{
          text: "Ring oss",
          link: "tel:+4735952500"
        }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Premium Serie
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Kvalitet som varer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                TD Power representerer det beste innen marine motorteknologi. 
                Med over 20 års erfaring i norske farvann, leverer vi motorer 
                som tåler vårt tøffe klima og krevende forhold.
              </p>
              <div className="space-y-4">
                {[
                  "Testet og godkjent for norske forhold",
                  "Omfattende servicenettverk i hele Norge", 
                  "Konkurransedyktige priser og finansieringsordninger",
                  "24/7 teknisk support"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tekniske Spesifikasjoner</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {specifications.map((spec, index) => (
                      <div key={index} className="space-y-1">
                        <dt className="text-sm font-medium text-muted-foreground">
                          {spec.label}
                        </dt>
                        <dd className="text-base font-semibold text-foreground">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Hvorfor velge TD Power?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Våre motorer er bygget for å prestere i norske farvann
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-8">
              Kontakt oss for mer informasjon
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TDPower;