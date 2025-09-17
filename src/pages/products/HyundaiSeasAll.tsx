import HeroSection from "@/components/sections/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Cpu, Volume2, Leaf } from "lucide-react";
import heroMarineEngines from "@/assets/hero-marine-engines.jpg";

const HyundaiSeasAll = () => {
  const specifications = [
    { label: "Effekt", value: "4 - 250 HK" },
    { label: "Teknologi", value: "4-takt SOHC" },
    { label: "Starttype", value: "Elektrisk" },
    { label: "Garanti", value: "5 år" },
  ];

  const features = [
    {
      icon: <Cpu className="h-8 w-8 text-accent" />,
      title: "Avansert Teknologi",
      description: "Moderne 4-takt teknologi for optimal ytelse"
    },
    {
      icon: <Volume2 className="h-8 w-8 text-accent" />,
      title: "Lav Støy",
      description: "Ekstra lyddemping for komfortabel kjøring"
    },
    {
      icon: <Leaf className="h-8 w-8 text-accent" />,
      title: "Miljøvennlig",
      description: "Lavt utslipp og høy drivstoffeffektivitet"
    }
  ];

  return (
    <div>
      <HeroSection
        backgroundImage={heroMarineEngines}
        title="Hyundai SeasAll"
        subtitle="INNOVATIV TEKNOLOGI"
        description="Opplev neste generasjon marine motorer med Hyundais fremragende ingeniørkunst og pålitelighet."
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
                Innovativ Serie
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Hyundais marine utmerkethet
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Hyundai SeasAll kombinerer årtiers bilindustrierfaring med 
                spesialisert marine teknologi. Resultatet er motorer som 
                leverer enestående ytelse, pålitelighet og drivstoffeffektivitet.
              </p>
              <div className="space-y-4">
                {[
                  "Avansert 4-takt teknologi med lav vibrasjon",
                  "Intelligent startassistent for alle forhold", 
                  "Miljøvennlig design med lave utslipp",
                  "5 års garanti og omfattende servicenettverk"
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
              Hyundai SeasAll fordeler
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovativ teknologi møter marine ekspertise
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
              Få mer informasjon om Hyundai SeasAll
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HyundaiSeasAll;