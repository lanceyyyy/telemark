import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroMarineEngines from "@/assets/hero-marine-engines.jpg";
import FadeInUp from "@/components/animations/FadeInUp";
import FadeInLeft from "@/components/animations/FadeInLeft";
import FadeInRight from "@/components/animations/FadeInRight";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScaleIn from "@/components/animations/ScaleIn";

const TDPower = () => {

  return (
    <div className="bg-zinc-50 text-slate-900">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/hero/td-power.jpg"
          alt="TD Power båtmotorer"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/20 to-slate-900/50" />
        <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply" aria-hidden />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
        <div className="container relative mx-auto grid min-h-[50vh] gap-16 px-4 pb-20 pt-40 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:px-10">
          <FadeInLeft delay={0.2} className="space-y-10 text-slate-100">
            <FadeInUp delay={0.4}>
              <span className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-200/90">
                TD POWER
              </span>
            </FadeInUp>
            <FadeInUp delay={0.6}>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
                Premium båtmotorer for norske farvann.
              </h1>
            </FadeInUp>
          </FadeInLeft>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 py-28 lg:px-10">
          <div className="lg:grid lg:grid-cols-[auto,1fr] lg:items-start lg:gap-20">
            <FadeInLeft delay={0.2} className="hidden lg:flex flex-col items-center">
              <span className="rotate-90 text-[0.65rem] uppercase tracking-[0.6em] text-zinc-400">TD Power</span>
              <div className="mt-20 h-64 w-px bg-gradient-to-b from-zinc-400 via-zinc-300/40 to-transparent" />
            </FadeInLeft>
            <div className="space-y-12">
              <FadeInUp delay={0.4}>
                <div className="max-w-3xl">
                  <FadeInUp delay={0.6}>
                    <span className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-500">Pålitelige motorer</span>
                  </FadeInUp>
                  <FadeInUp delay={0.8}>
                    <h2 className="text-3xl font-semibold sm:text-4xl mt-4">Pålitelige og trygge båtmotorer</h2>
                  </FadeInUp>
                  <FadeInUp delay={1.0}>
                    <p className="mt-6 text-base text-slate-600 sm:text-lg">
                      TD Power er tilgjengelig fra 27 til 700 hestekrefter. Motorene produseres i Kina av en av 
                      Kinas største produsenter og er robuste støpejern båtmotorer uten for mye elektronikk. 
                      Dette gjør dem svært pålitelige og trygge motorer.
                    </p>
                  </FadeInUp>
                  <FadeInUp delay={1.2}>
                    <p className="mt-4 text-base text-slate-600 sm:text-lg">
                      Telemark Trade AS har levert flere hundre motorer til det norske markedet siden 2002. 
                      Vi opprettholder fullt reservedelslager og gir to års garanti.
                    </p>
                  </FadeInUp>
                  <FadeInUp delay={1.4}>
                    <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                      <p className="text-base font-medium text-slate-800">
                        Kort sagt: God kvalitet til beste priser på markedet.
                      </p>
                    </div>
                  </FadeInUp>
                </div>
              </FadeInUp>

              <FadeInRight delay={0.6}>
                <div className="mt-12">
                  <div className="relative isolate overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                    <img
                      src="/td.jpg"
                      alt="TD Power båtmotor i bruk"
                      className="aspect-[3/1] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-800/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 space-y-2 text-zinc-100">
                      <p className="text-xs uppercase tracking-[0.45em] text-amber-200/90">TD Power i aksjon</p>
                      <p className="max-w-sm text-sm text-zinc-100/90">
                        Pålitelige støpejern motorer som leverer kraft når du trenger det mest.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInRight>

            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="container mx-auto px-4 py-28 lg:px-10">
          <FadeInUp delay={0.2} className="text-center mb-16">
            <FadeInUp delay={0.4}>
              <span className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-500">Produktgalleri</span>
            </FadeInUp>
            <FadeInUp delay={0.6}>
              <h2 className="text-3xl font-semibold sm:text-4xl mt-4">
                TD Power motorer i aksjon
              </h2>
            </FadeInUp>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {Array.from({ length: 6 }, (_, index) => (
              <StaggerItem key={index}>
                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <img
                    src={`/td-motor/${index + 1}.jpg`}
                    alt={`TD Power motor ${index + 1}`}
                    className="aspect-square w-full object-contain transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs font-medium">TD Power {index + 1}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">TD Motor leveres i følgende modeller:</h3>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-3 md:grid-rows-2">
                {[
                  { name: "TDME 320-3M78, 20 HP", link: "https://www.telemark-trade.no/uploads/QKxheUEW/TDME-3M78-20new1-hk.pdf" },
                  { name: "TDME 332-385, 32 HP", link: "https://www.telemark-trade.no/uploads/hVmt8uhk/TDME-380385PRM.pdf" },
                  { name: "TDME 446-485, 46 HP", link: "https://www.telemark-trade.no/uploads/l56aI5oX/TDME-485PRM.pdf" },
                  { name: "TDME 95-4B2CR, 95 HP", link: "https://www.telemark-trade.no/uploads/xkMnyFK7/TDME-4B2.pdf" },
                  { name: "TDME 110-4B2CR, 110 HP", link: "https://www.telemark-trade.no/uploads/xkMnyFK7/TDME-4B21.pdf" }
                ].map((model, index) => (
                  <a
                    key={index}
                    href={model.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 rounded-lg border border-zinc-200 hover:border-amber-300 hover:bg-amber-50 transition-all group ${index === 3 ? 'md:col-start-1' : index === 4 ? 'md:col-start-2' : ''}`}
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

export default TDPower;