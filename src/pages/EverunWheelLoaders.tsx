import HeroSection from "@/components/sections/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Truck, Zap, Shield, Wrench } from "lucide-react";
import heroConstruction from "@/assets/hero-construction.jpg";

const EverunWheelLoaders = () => {
  const models = [
    {
      name: "ER12",
      power: "55 HK",
      capacity: "1200 kg",
      features: ["Kompakt design", "Høy manøverdyktighet", "Lavt drivstofforbruk"]
    },
    {
      name: "ER16", 
      power: "75 HK",
      capacity: "1600 kg",
      features: ["Allsidig bruk", "Komfortabel hytte", "Kraftig hydraulikk"]
    },
    {
      name: "ER25",
      power: "95 HK", 
      capacity: "2500 kg",
      features: ["Tung kapasitet", "Avansert kontrollsystem", "Lav støy"]
    }
  ];

  const features = [
    {
      icon: <Truck className="h-8 w-8 text-accent" />,
      title: "Robust Konstruksjon",
      description: "Bygget for tøffe norske arbeidsforhold"
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Høy Produktivitet",
      description: "Effektive maskiner som øker arbeidstempo"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Sikkerhet Først",
      description: "Avanserte sikkerhetssystemer som standard"
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
        backgroundImage={heroConstruction}
        title="Everun Hjullastere"
        subtitle="KRAFTIGE ANLEGGSMASKINER"
        description="Opplev kraften og påliteligheten til Everun hjullastere - designet for norske arbeidsforhold."
        primaryCTA={{
          text: "Se modeller",
          link: "#models"
        }}
        secondaryCTA={{
          text: "Be om tilbud",
          link: "/kontakt"
        }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Anleggsmaskiner
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Kvalitet som leverer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Everun hjullastere er bygget for å takle de tøffeste arbeidsforholdene. 
                Med robust konstruksjon, høy ytelse og enkel drift, er disse maskinene 
                det perfekte valget for anlegg, jordbruk og industri.
              </p>
              <div className="space-y-4">
                {[
                  "Testet og godkjent for norske klimaforhold",
                  "Omfattende servicenettverk og reservedelsdekning",
                  "Konkurransedyktige priser og fleksible finansieringsordninger",
                  "Omfattende garanti og støtte"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Viktige Spesifikasjoner
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-muted-foreground">Effektområde</span>
                  <span className="font-semibold">55 - 95 HK</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-muted-foreground">Løftekapasitet</span>
                  <span className="font-semibold">1200 - 2500 kg</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-muted-foreground">Operasjonsvekt</span>
                  <span className="font-semibold">3500 - 7500 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Garanti</span>
                  <span className="font-semibold">2 år / 2000 timer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="models" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everun Modellserie
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Finn den perfekte hjullasteren for ditt behov
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mx-auto mb-2">
                    {model.name}
                  </Badge>
                  <CardTitle className="text-2xl">{model.power}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {model.capacity} løftekapasitet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Se spesifikasjoner
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Hvorfor velge Everun?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pålitelige maskiner bygget for å prestere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-8">
              Kontakt oss for demonstrasjon
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EverunWheelLoaders;