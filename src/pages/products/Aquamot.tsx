import HeroSection from "@/components/sections/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, DollarSign, Users, Wrench } from "lucide-react";
import heroMarineEngines from "@/assets/hero-marine-engines.jpg";

const Aquamot = () => {
  const specifications = [
    { label: "Effekt", value: "2.5 - 30 HK" },
    { label: "Drivstoff", value: "Bensin" },
    { label: "Starttype", value: "Manuell / Elektrisk" },
    { label: "Garanti", value: "2 år" },
  ];

  const features = [
    {
      icon: <DollarSign className="h-8 w-8 text-accent" />,
      title: "Konkurransedyktige Priser",
      description: "Beste verdi for pengene i markedet"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Eksepsjonell Service",
      description: "Personlig kundeservice og rask support"
    },
    {
      icon: <Wrench className="h-8 w-8 text-accent" />,
      title: "Enkel Vedlikehold",
      description: "Designet for enkelt vedlikehold og service"
    }
  ];

  return (
    <div>
      <HeroSection
        backgroundImage={heroMarineEngines}
        title="Aquamot"
        subtitle="VERDI & PÅLITELIGHET"
        description="Kvalitet til en overkommelig pris - Aquamot leverer pålitelige marine motorer for alle behov."
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
                Verdi Serie
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Smart valg for båteiere
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Aquamot tilbyr pålitelige marine motorer til konkurransedyktige priser. 
                Perfekt for fritidsbåter, fiskebåter og kommersielle applikasjoner 
                hvor kostnad og pålitelighet er viktig.
              </p>
              <div className="space-y-4">
                {[
                  "Utmerket pris-ytelse forhold",
                  "Enkel drift og vedlikehold", 
                  "Bred produktserie for alle behov",
                  "Rask levering og god kundeservice"
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
              Hvorfor velge Aquamot?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Optimal kombinasjon av pris, kvalitet og service
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
              Utforsk Aquamot produktserie
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aquamot;