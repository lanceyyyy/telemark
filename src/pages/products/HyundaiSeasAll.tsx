import { Button } from "@/components/ui/button";
import { CheckCircle, Cpu, Volume2, Leaf, Wrench, Shield, X } from "lucide-react";
import heroMarineEngines from "@/assets/hero-marine-engines.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const HyundaiSeasAll = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const advantages = [
    {
      icon: <Wrench className="h-6 w-6 text-amber-600" />,
      title: "Enkel installasjon",
      description: "Kompakte dimensjoner gjør det enkelt å installere"
    },
    {
      icon: <Cpu className="h-6 w-6 text-amber-600" />,
      title: "Tilgjengelig service",
      description: "Alle servicepunkter er lett tilgjengelige fra toppen"
    },
    {
      icon: <Shield className="h-6 w-6 text-amber-600" />,
      title: "Robust elektronikk",
      description: "All elektronikk er montert i en robust elektrisk boks"
    },
    {
      icon: <Leaf className="h-6 w-6 text-amber-600" />,
      title: "Vannkjøling",
      description: "Veltilpasset vannkjøling med varmeveksler"
    },
    {
      icon: <Volume2 className="h-6 w-6 text-amber-600" />,
      title: "Miljøkrav",
      description: "Oppfyller alle utslippskrav, inkludert US EPA Tier 3"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero/seasall.jpg"
            alt="Hyundai SeasAll marine engines"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <span className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-400 mb-4 block">
            Hyundai SeasAll
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            INNOVATIV TEKNOLOGI
          </h1>
         
        </div>
      </section>

      {/* Main Content Section */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 py-28 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-500">Pålitelige motorer</span>
              <h2 className="text-3xl font-semibold sm:text-4xl mt-4">Pålitelige, høytpresterende motorer</h2>
              <p className="mt-6 text-base text-slate-600 sm:text-lg">
                Hyundai SeasAll marine motorer gir kraftig akselerasjon fra lave turtall og gjennom hele turtallsområdet, 
                noe som gir utmerket kjørekomfort.
              </p>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">
                Variabel geometri turbo (VGT) og Common Rail drivstoffinjeksjon (CRDi) gir maksimalt dreiemoment 
                over det meste av motorens turtallsområde.
              </p>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">
                Hyundai SeasAll har lav vekt og kraftig dreiemoment fra lave turtall. Dette resulterer i lav 
                planing terskel og lavt drivstofforbruk. Lavt støynivå gjør det mulig å snakke og høre på musikk 
                uten problemer under kjøring.
              </p>
              <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                <p className="text-base font-medium text-slate-800">
                  For maksimal operasjonspålitelighet har motoren sitt eget diagnostikk- og overvåkingssystem. 
                  De er NMEA2000 og CAN bus J1939 kompatible.
                </p>
              </div>
            </div>

            <div>
              <div className="relative isolate overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                <img
                  src="/seasall/image.jpg"
                  alt="Hyundai SeasAll motor i bruk"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-800/30 to-transparent" />
                <div className="absolute bottom-6 left-6 space-y-2 text-zinc-100">
                  <p className="text-xs uppercase tracking-[0.45em] text-amber-200/90">Hyundai SeasAll i aksjon</p>
                  <p className="max-w-sm text-sm text-zinc-100/90">
                    Kraftige marine motorer med avansert teknologi og høy ytelse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engine Gallery Carousel Section */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="container mx-auto px-4 py-28 lg:px-10">
          <div className="text-center mb-16">
            <span className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-500">Produktgalleri</span>
            <h2 className="text-3xl font-semibold sm:text-4xl mt-4">
              Hyundai SeasAll motorer i aksjon
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
              Se våre pålitelige marine motorer i bruk
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Array.from({ length: 10 }, (_, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md cursor-pointer"
                onClick={() => setLightboxImage(`/seasall/${index + 1}.jpg`)}
              >
                <img
                  src={`/seasall/${index + 1}.jpg`}
                  alt={`Hyundai SeasAll motor ${index + 1}`}
                  className="aspect-square w-full object-contain transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Specifications Section */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 py-28 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Hyundai SeasAll leveres i følgende modeller:</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { name: "200 HP", link: "https://www.telemark-trade.no/uploads/gUcqKdAk/20191101_R200-Tech-sheet_2019.pdf" },
                  { name: "270 HP", link: "https://www.telemark-trade.no/uploads/3ww6Wq1G/20191101_S270-Tech-sheet_2019.pdf" },
                  { name: "270 HP utenbordsmotor", link: "https://www.telemark-trade.no/uploads/y5IsHKk4/20191115_S30-OB-Tech-sheet.pdf" },
                  { name: "350 HP", link: "https://www.telemark-trade.no/uploads/BbwwNdKG/20200409_G350-techsheet.pdf" },
                  { name: "380 HP", link: "https://www.telemark-trade.no/uploads/KJqwBn5x/20191101_H380-Tech-sheet_2019.pdf" },
                  { name: "500 HP", link: "https://www.telemark-trade.no/uploads/jl7XXR1f/20191101_L500-Tech-sheet_2019.pdf" },
                  { name: "600 HP", link: "https://www.telemark-trade.no/uploads/xRUJYYft/20191101_L600-Tech-sheet_2019.pdf" },
                  { name: "700 HP", link: "https://www.telemark-trade.no/uploads/WA5zS8JG/20191101_L700-Tech-sheet_2019.pdf" },
                  { name: "Samlebrosjyre", link: "https://www.telemark-trade.no/uploads/CNldXIL5/Samlebrosjyre-Hyundai.pdf" }
                ].map((model, index) => (
                  <a
                    key={index}
                    href={model.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg border border-zinc-200 hover:border-amber-300 hover:bg-amber-50 transition-all group"
                  >
                    <span className="font-medium text-slate-900 group-hover:text-amber-700">{model.name}</span>
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <img
              src={lightboxImage}
              alt="Hyundai SeasAll motor"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

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

export default HyundaiSeasAll;