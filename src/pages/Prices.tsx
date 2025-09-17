import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, Wrench, Zap } from "lucide-react";
import heroWorkshop from "@/assets/hero-workshop.jpg";
import FadeInUp from "@/components/animations/FadeInUp";
import SEOHead from "@/components/seo/SEOHead";

const Prices = () => {
  const brands = [
    {
      name: "Hyundai",
      description: "Pålitelige marine motorer med avansert teknologi",
      icon: <Wrench className="h-8 w-8 text-accent" />,
      link: "#hyundai"
    },
    {
      name: "TD Power", 
      description: "Robuste støpejern båtmotorer uten for mye elektronikk",
      icon: <Zap className="h-8 w-8 text-accent" />,
      link: "#td-power"
    }
  ];

  return (
    <div className="bg-zinc-50 text-slate-900">
      <SEOHead
        title="Priser"
        description="Transparente priser på båtmotorer og anleggsmaskiner. Se våre konkurransedyktige priser for TD Power og Hyundai SeasAll motorer."
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/prices.jpg"
            alt="Telemark Trade prisliste"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        </div>
        <FadeInUp delay={0.2} className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <FadeInUp delay={0.4}>
            <span className="text-[0.7rem] uppercase tracking-[0.5em] text-accent mb-4 block">
              Prisliste
            </span>
          </FadeInUp>
          <FadeInUp delay={0.6}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              TRANSPARENTE PRISER
            </h1>
          </FadeInUp>
        </FadeInUp>
       </section>

       {/* Hyundai Section */}
       <section id="hyundai" className="border-b border-zinc-200 bg-white">
         <div className="container mx-auto px-4 py-28 lg:px-10">
          <div className="text-center mb-16">
             <span className="text-[0.7rem] uppercase tracking-[0.5em] text-accent">Hyundai</span>
             <h2 className="text-3xl font-semibold sm:text-4xl mt-4">
               Hyundai 2022 Prisliste
            </h2>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
               Pålitelige marine motorer med avansert teknologi
            </p>
          </div>

           <div className="max-w-4xl mx-auto">
             {/* Blue Banner Header */}
             <div className="bg-primary text-primary-foreground py-6 px-8 rounded-t-3xl">
               <h3 className="text-3xl font-bold text-center">Hyundai 2022</h3>
             </div>

             {/* Price List Content */}
             <div className="bg-white border border-t-0 border-zinc-200 rounded-b-3xl p-8">
               {/* R200 Series */}
               <div className="mb-8">
                 <h4 className="text-xl font-bold text-slate-900 mb-4">R200 2.2 ltr, 200 hp v/3800 rpm, 430 Nm v/2000 rpm 280kg</h4>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">R200PNOK:</span>
                       <span className="text-slate-600">Engine prepared for gear</span>
                     </div>
                     <span className="font-semibold text-slate-900">249,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">R200PNOK:</span>
                       <span className="text-slate-600">Engine with ZF45A</span>
                     </div>
                     <span className="font-semibold text-slate-900">274,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">R200PNOK:</span>
                       <span className="text-slate-600">Engine with Alpha & Bravo/Volvo adapter</span>
                     </div>
                     <span className="font-semibold text-slate-900">254,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">R200SNOK:</span>
                       <span className="text-slate-600">Motor with Bravo 1X drive</span>
                     </div>
                     <span className="font-semibold text-slate-900">399,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">R200SKr.:</span>
                       <span className="text-slate-600">Engine with Bravo 2X drive</span>
                     </div>
                     <span className="font-semibold text-slate-900">403,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">R200SNOK:</span>
                       <span className="text-slate-600">Engine with Bravo 3X drive</span>
                     </div>
                     <span className="font-semibold text-slate-900">409,900,-</span>
                   </div>
                 </div>
               </div>

               {/* S270 Series */}
               <div className="mb-8">
                 <h4 className="text-xl font-bold text-slate-900 mb-4">S270 3.0 ltr, 270 hp v/3800 rpm, 565 Nm v/2000 rpm 334kg</h4>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">S270PNOK:</span>
                       <span className="text-slate-600">Engine prepared for gear</span>
                     </div>
                     <span className="font-semibold text-slate-900">269,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">S270PNOK:</span>
                       <span className="text-slate-600">Engine with ZF68A</span>
                     </div>
                     <span className="font-semibold text-slate-900">299,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">S270PNOK:</span>
                       <span className="text-slate-600">Engine with Alpha & Bravo/Volvo adapter</span>
                     </div>
                     <span className="font-semibold text-slate-900">274,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">S270SNOK:</span>
                       <span className="text-slate-600">Motor with Bravo 1X drive</span>
                     </div>
                     <span className="font-semibold text-slate-900">429,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">S270SNOK:</span>
                       <span className="text-slate-600">Engine with Bravo 2X drive</span>
                     </div>
                     <span className="font-semibold text-slate-900">434,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">S270SNOK:</span>
                       <span className="text-slate-600">Engine with Bravo 3X drive</span>
                     </div>
                     <span className="font-semibold text-slate-900">439,900,-</span>
                   </div>
                 </div>
               </div>

               {/* G350 Series */}
               <div className="mb-8">
                 <h4 className="text-xl font-bold text-slate-900 mb-4">G350 6.8ltr. 350 hp at 2800 rpm, 1180 Nm at 1600 rpm 686kg</h4>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center py-2">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">G350NOK:</span>
                       <span className="text-slate-600">Engine prepared for gear</span>
                     </div>
                     <span className="font-semibold text-slate-900">449,900,-</span>
                   </div>
                 </div>
               </div>

               {/* H380 Series */}
               <div className="mb-8">
                 <h4 className="text-xl font-bold text-slate-900 mb-4">H380 10.7 ltr, 380 hp v/1800 rpm, 1667 Nm v/1100 rpm 1060kg</h4>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center py-2">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">H380NOK:</span>
                       <span className="text-slate-600">Engine prepared for gear</span>
                     </div>
                     <span className="font-semibold text-slate-900">489,900,-</span>
                   </div>
                 </div>
               </div>

               {/* L500-700 Series */}
               <div className="mb-8">
                 <h4 className="text-xl font-bold text-slate-900 mb-4">L500-700 12.7 ltr, 500-700 hp v/1800-2300 rpm, 2275 Nm v/1300 rpm 1310kg</h4>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">L500NOK:</span>
                       <span className="text-slate-600">Engine prepared for gear, 500 hp</span>
                     </div>
                     <span className="font-semibold text-slate-900">519,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                     <div className="flex flex-col " >
                       <span className="font-semibold text-slate-900">L600NOK:</span>
                       <span className="text-slate-600">Engine prepared for gear, 600 hp</span>
                     </div>
                     <span className="font-semibold text-slate-900">529,900,-</span>
                   </div>
                   <div className="flex justify-between items-center py-2">
                     <div className="flex flex-col ">
                       <span className="font-semibold text-slate-900">L700NOK:</span>
                       <span className="text-slate-600">Engine prepared for gear, 700 hp</span>
                     </div>
                     <span className="font-semibold text-slate-900">549,900,-</span>
                   </div>
                 </div>
               </div>
                  </div>
          </div>
        </div>
      </section>

        {/* TD Power Section */}
        <section id="td-power" className="border-b border-zinc-200 bg-zinc-50">
          <div className="container mx-auto px-4 py-28 lg:px-10">
          <div className="text-center mb-16">
              <span className="text-[0.7rem] uppercase tracking-[0.5em] text-accent">TD Power</span>
              <h2 className="text-3xl font-semibold sm:text-4xl mt-4">
                TD Power 2022 Prisliste
            </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
                Robuste støpejern båtmotorer uten for mye elektronikk
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Blue Banner Header */}
              <div className="bg-primary text-primary-foreground py-6 px-8 rounded-t-3xl">
                <h3 className="text-3xl font-bold text-center">TD Power 2022</h3>
              </div>

              {/* Price List Content */}
              <div className="bg-white border border-t-0 border-zinc-200 rounded-b-3xl p-8">
                {/* Important Notice */}
                <div className="mb-8 p-4 bg-accent/10 border-l-4 border-accent rounded-r-lg">
                  <p className="text-sm text-slate-700">
                    Alle priser inkluderer MVA for komplett motor med girkasse, instrumenter og kabling. 
                    Priser er gyldige til 31.12.2022. Priser kan endres uten varsel.
            </p>
          </div>

                {/* Engines Section */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Motorer</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">TDME 327-3M78 CR PRM 90Kr.:</span>
                        <span className="text-slate-600">3 cyl diesel Common Rail 27 hp</span>
                      </div>
                      <span className="font-semibold text-slate-900">74,900,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">TDME 332-385 PRM 90Kr.:</span>
                        <span className="text-slate-600">3 cyl diesel 32 hp</span>
                      </div>
                      <span className="font-semibold text-slate-900">74,900,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">TDME 446-485 PRM 125Kr.:</span>
                        <span className="text-slate-600">4 cyl diesel 46 hp</span>
                      </div>
                      <span className="font-semibold text-slate-900">84,900,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">TDME 95-4B2 CR PRM 280NOK:</span>
                        <span className="text-slate-600">4 cyl common rail 95 hp</span>
                      </div>
                      <span className="font-semibold text-slate-900">149,900,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">TDME 110-4B2 CR PRM 280Kr.:</span>
                        <span className="text-slate-600">4 cyl common rail 110 hp</span>
                      </div>
                      <span className="font-semibold text-slate-900">159,900,-</span>
                    </div>
                  </div>
                </div>

                {/* PRM/ZF Gears Section */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">PRM/ZF Girkasser</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">PRM 90NOK:</span>
                      </div>
                      <span className="font-semibold text-slate-900">19,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">PRM 125NOK:</span>
                      </div>
                      <span className="font-semibold text-slate-900">26,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">PRM 150NOK:</span>
                      </div>
                      <span className="font-semibold text-slate-900">34,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">PRM 280Kr.:</span>
                      </div>
                      <span className="font-semibold text-slate-900">44,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">ZF 25Kr.:</span>
                      </div>
                      <span className="font-semibold text-slate-900">36,000,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">ZF 45 AKr.:</span>
                      </div>
                      <span className="font-semibold text-slate-900">49,000,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">ZF 68 AKr.:</span>
                      </div>
                      <span className="font-semibold text-slate-900">58,000,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Andre ZF girkasser</span>
                        <span className="text-slate-600">Pris på forespørsel</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accessories Section */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Tilbehør</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Demperplate fra Kr.:</span>
                      </div>
                      <span className="font-semibold text-slate-900">2,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">SAE 4 flens (svinghjulshus) Kr.:</span>
                      </div>
                      <span className="font-semibold text-slate-900">2,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Klemflens fra Kr.:</span>
                      </div>
                      <span className="font-semibold text-slate-900">2,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Fleksibel kobling Kr.:</span>
                      </div>
                      <span className="font-semibold text-slate-900">890,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Motor labs DKK:</span>
                      </div>
                      <span className="font-semibold text-slate-900">475,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Oljekjøler liten Kr.:</span>
                      </div>
                      <span className="font-semibold text-slate-900">2,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Oljekjøler stor Kr.:</span>
                      </div>
                      <span className="font-semibold text-slate-900">3,490,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Diesel filter med vannseparator Kr.:</span>
                      </div>
                      <span className="font-semibold text-slate-900">5,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Vannfilter, messing Kr.:</span>
                      </div>
                      <span className="font-semibold text-slate-900">5,990,-</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">Kraftoverføring ledd Kr.:</span>
                      </div>
                      <span className="font-semibold text-slate-900">6,990,-</span>
                    </div>
                  </div>
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
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-400">Klar når du trenger oss</p>
            <h2 className="mt-8 text-3xl font-semibold text-white sm:text-4xl">La oss finne løsningen sammen.</h2>
            <p className="mt-6 text-base text-zinc-300 sm:text-lg">
              Ring eller send kravspesifikasjonen. Vi møter deg med forslag, deler og 
              mannskap som kjenner både båten og havna.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="/kontakt">Snakk med Telemark</a>
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

export default Prices;