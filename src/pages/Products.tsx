import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroWorkshop from "@/assets/hero-workshop.jpg";
import FadeInUp from "@/components/animations/FadeInUp";
import FadeInLeft from "@/components/animations/FadeInLeft";
import FadeInRight from "@/components/animations/FadeInRight";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScaleIn from "@/components/animations/ScaleIn";
import SEOHead from "@/components/seo/SEOHead";
import { getServiceStructuredData } from "@/components/seo/StructuredData";

const Products = () => {
  const productCategories = [
    {
      title: "TD Power",
      description: "Høykvalitets motorer produsert av en av Kinas største produsenter. Tilgjengelig fra 21 til 400 hestekrefter.",
      image: "/services/td-power.jpg",
      link: "/produkter/td-power"
    },
    {
      title: "Hyundai SeasAll",
      description: "Kraftige marine motorer fra Hyundai med høy ytelse gjennom hele turtallsområdet. Leverer både på kvalitet og pris.",
      image: "/services/seasall.jpg",
      link: "/produkter/hyundai-seasall"
    },
    {
      title: "Aquamot",
      description: "Aquamot er den ledende produsenten av høykvalitets og bærekraftige elektriske båtmotorer og tilhørende komponenter som batterier og ladere.",
      image: "/services/aquamot.webp",
      link: "/produkter/aquamot"
    },
    {
      title: "Everun hjullastere",
      description: "Everun hjullastere er designet med sikkerhet, effektivitet, brukervennlighet, enkelt vedlikehold, produktivitet, ytelse, pålitelighet og komfort i tankene.",
      image: "/services/wheel.jpg",
      link: "/everun-hjullastere"
    }
  ];

  return (
    <div>
      <SEOHead
        title="Produkter"
        description="Utforsk vårt omfattende utvalg av båtmotorer, anleggsmaskiner og tilbehør. TD Power, Hyundai SeasAll, Aquamot og Everun hjullastere."
        structuredData={getServiceStructuredData("Marine Engine Sales and Service", "Vi leverer båtmotorer, elektriske motorer, hjullastere og anleggsmaskiner til kunder over hele Norge.")}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/products.jpg"
            alt="Verksted bakgrunn"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        </div>
        <FadeInUp delay={0.2} className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <FadeInUp delay={0.4}>
            <span className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-400 mb-4 block">
              Våre Produkter
            </span>
          </FadeInUp>
          <FadeInUp delay={0.6}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              KVALITET & PÅLITELIGHET
            </h1>
          </FadeInUp>
        </FadeInUp>
      </section>

      {/* Products Section */}
      <section id="products" className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 py-28 lg:px-10">
          <FadeInUp delay={0.2} className="text-center mb-16">
            <FadeInUp delay={0.4}>
              <span className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-500">Våre produkter</span>
            </FadeInUp>
            <FadeInUp delay={0.6}>
              <h2 className="text-3xl font-semibold sm:text-4xl mt-4">Marine Motorer & Anleggsmaskiner</h2>
            </FadeInUp>
            <FadeInUp delay={0.8}>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
                Vi tilbyr et bredt spekter av høykvalitets marine motorer og anleggsmaskiner fra anerkjente produsenter
              </p>
            </FadeInUp>
          </FadeInUp>

          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {productCategories.map((category, index) => (
              <StaggerItem key={index}>
                <div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-[2/1] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs font-medium uppercase tracking-[0.45em] text-amber-600">
                        {category.title.split(' ')[0]}
                      </span>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{category.title}</h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    <Link 
                      to={category.link} 
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
                    >
                      Les mer om {category.title.split(' ')[0]} →
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10"></div>
        
        <div className="container relative mx-auto px-4 py-24 lg:px-10">
          <FadeInUp delay={0.2} className="mx-auto max-w-3xl text-center">
            <FadeInUp delay={0.4}>
              <p className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-400">Klar når du trenger oss</p>
            </FadeInUp>
            <FadeInUp delay={0.6}>
              <h2 className="mt-8 text-3xl font-semibold text-white sm:text-4xl">La oss finne løsningen sammen.</h2>
            </FadeInUp>
            <FadeInUp delay={0.8}>
              <p className="mt-6 text-base text-zinc-300 sm:text-lg">
                Ring eller send kravspesifikasjonen. Vi møter deg med forslag, deler og 
                mannskap som kjenner både båten og havna.
              </p>
            </FadeInUp>
            <FadeInUp delay={1.0}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/kontakt">Snakk med Telemark</Link>
                </Button>
                <a
                  href="tel:90033402"
                  className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-300 transition hover:text-amber-400 hover:scale-105"
                >
                  900 33 402
                </a>
              </div>
            </FadeInUp>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
};

export default Products;