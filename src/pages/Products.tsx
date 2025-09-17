import HeroSection from "@/components/sections/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroWorkshop from "@/assets/hero-workshop.jpg";

const Products = () => {
  const productCategories = [
    {
      title: "TD Power",
      description: "Høykvalitets båtmotorer med utmerket ytelse og pålitelighet.",
      image: "/placeholder.svg",
      link: "/produkter/td-power",
      features: ["Miljøvennlig teknologi", "Lang levetid", "Enkel vedlikehold"]
    },
    {
      title: "Hyundai SeasAll",
      description: "Premium marine motorer fra Hyundai med innovativ teknologi.",
      image: "/placeholder.svg", 
      link: "/produkter/hyundai-seasall",
      features: ["Avansert teknologi", "Lav støy", "Høy effektivitet"]
    },
    {
      title: "Aquamot",
      description: "Pålitelige og kostnadseffektive marine motorløsninger.",
      image: "/placeholder.svg",
      link: "/produkter/aquamot", 
      features: ["Konkurransedyktige priser", "God service", "Bred produktserie"]
    }
  ];

  return (
    <div>
      <HeroSection
        backgroundImage={heroWorkshop}
        title="Våre Produkter"
        subtitle="KVALITET & PÅLITELIGHET"
        description="Oppdage vårt omfattende utvalg av båtmotorer, anleggsmaskiner og tilbehør fra ledende produsenter."
        primaryCTA={{
          text: "Se alle produkter",
          link: "#products"
        }}
        secondaryCTA={{
          text: "Kontakt oss",
          link: "/kontakt"
        }}
      />

      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Marine Motorer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vi tilbyr et bredt spekter av høykvalitets marine motorer fra anerkjente produsenter
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
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
    </div>
  );
};

export default Products;