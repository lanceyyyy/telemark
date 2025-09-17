import { Button } from "@/components/ui/button";
import { CheckCircle, Truck, Zap, Shield, Wrench, Users, Cog } from "lucide-react";
import heroConstruction from "@/assets/hero-construction.jpg";
import { Link } from "react-router-dom";

const EverunWheelLoaders = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Kundedrevet design",
      description: "Designet med kundeinput på hvert trinn for å møte brukerens behov"
    },
    {
      icon: <Truck className="h-6 w-6 text-accent" />,
      title: "Allsidige størrelser",
      description: "Fra kompakte skid steer loadere til større, kraftigere varianter"
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Sikker og effektiv",
      description: "Høyt konkurransedyktige kjøretøy som gjør jobben trygt og effektivt"
    },
    {
      icon: <Cog className="h-6 w-6 text-accent" />,
      title: "Kinesisk kvalitet",
      description: "Importert og solgt av Telemark Trade fra Everun produsent"
    }
  ];

  return (
    <div className="bg-zinc-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero/everun.jpg"
            alt="Everun hjullastere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <span className="text-[0.7rem] uppercase tracking-[0.5em] text-accent mb-4 block">
            Everun
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            ALLSIDIGE HJULLASTERE
          </h1>
          
        </div>
      </section>

      {/* Main Content Section */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 py-28 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[0.7rem] uppercase tracking-[0.5em] text-accent">Hjullastere</span>
              <h2 className="text-3xl font-semibold sm:text-4xl mt-4">Kundedrevet design for alle behov</h2>
              <p className="mt-6 text-base text-slate-600 sm:text-lg">
                Everun hjullastere er designet med kundeinput på hvert trinn av designprosessen 
                for å møte brukerens ønsker og behov. Resultatet er en rekke høyt allsidige og 
                konkurransedyktige kjøretøy som gjør jobben trygt og effektivt.
              </p>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">
                Disse allsidige arbeidshestene kommer i ulike størrelser, fra kompakte skid steer 
                loadere til større, kraftigere varianter for krevende oppgaver.
              </p>
              <div className="mt-6 p-4 bg-accent/10 border-l-4 border-accent rounded-r-lg">
                <p className="text-base font-medium text-slate-800">
                  Telemark Trade importerer og selger hjullastere fra kinesiske produsenten Everun.
                </p>
              </div>
            </div>

            <div>
              <div className="relative isolate overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                <img
                  src="/services/wheel.jpg"
                  alt="Everun hjullastere i bruk"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-800/30 to-transparent" />
                <div className="absolute bottom-6 left-6 space-y-2 text-zinc-100">
                  <p className="text-xs uppercase tracking-[0.45em] text-accent/90">Everun i aksjon</p>
                  <p className="max-w-sm text-sm text-zinc-100/90">
                    Allsidige hjullastere designet med kundeinput for optimal ytelse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Models Section */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 py-28 lg:px-10">
          <div className="text-center mb-16">
            <span className="text-[0.7rem] uppercase tracking-[0.5em] text-accent">Modeller</span>
            <h2 className="text-3xl font-semibold sm:text-4xl mt-4">
              Everun hjullastere
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
              Utforsk vårt utvalg av Everun hjullastere i ulike størrelser og konfigurasjoner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "EVERUN ER 408-811",
                image: "/everun/ER-08-11.png",
                brochure: "/everun/ER408-811.pdf"
              },
              {
                name: "EVERUN ER 12",
                image: "/everun/ER-12-11.png", 
                brochure: "/everun/ER12.pdf"
              },
              {
                name: "EVERUN ER 416",
                image: "/everun/ER-16-11.png",
                brochure: "/everun/ER416CR.pdf"
              },
              {
                name: "EVERUN ER 25",
                image: "/everun/ER-25-11.png",
                brochure: "/everun/ER-25.pdf"
              },
              {
                name: "EVERUN ER 425",
                image: "/everun/tele1.png",
                brochure: "/everun/ER425.pdf"
              }
            ].map((model, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{model.name}</h3>
                  <Button asChild className="w-full bg-primary text-accent-foreground hover:bg-primary/90">
                    <a href={model.brochure} download>
                      Last ned brosjyre
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
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
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-400">Klar når du trenger oss</p>
            <h2 className="mt-8 text-3xl font-semibold text-white sm:text-4xl">La oss finne løsningen sammen.</h2>
            <p className="mt-6 text-base text-zinc-300 sm:text-lg">
              Ring eller send kravspesifikasjonen. Vi møter deg med forslag, deler og 
              mannskap som kjenner både båten og havna.
            </p>
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
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default EverunWheelLoaders;