import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, Battery, Zap, Wrench, Shield } from "lucide-react";
import heroMarineEngines from "@/assets/hero-marine-engines.jpg";
import { Link } from "react-router-dom";

const Aquamot = () => {
  const trendLineModels = [
    { model: "Trend 1.1", power: "1100W", gasoline: "3.5 hp", battery: "640Wh", charger: "Included" },
    { model: "Trend 1.6", power: "1600W", gasoline: "5.0 hp", battery: "640Wh", charger: "Included" },
    { model: "Trend 2.2", power: "2200W", gasoline: "6.5 hp", battery: "-", charger: "-" },
    { model: "Trend 4.3", power: "4300W", gasoline: "11 hp", battery: "-", charger: "-" },
    { model: "Trend 11.0", power: "11kW", gasoline: "28hp", battery: "-", charger: "-" },
    { model: "Trend 15", power: "15kW", gasoline: "35 hp", battery: "-", charger: "-" },
    { model: "Trend 20", power: "20kW", gasoline: "40hp", battery: "-", charger: "-" },
    { model: "Trend 25", power: "25kW", gasoline: "45 hp", battery: "-", charger: "-" }
  ];

  const additionalEquipment = [
    "Supplement for large battery 1280Wh Trend 1.1 and 1.6",
    "Extra battery Trend 1.1 and 1.6 (640Wh)",
    "Extra battery Trend 1.1 and 1.6 (1280Wh)",
    "Extra propeller Trend 1.1 and 1.6",
    "Long throttle arm",
    "Additional charger Trend 1.1 and 1.6"
  ];

  const batteryAdvantages = [
    "Superior lifespan (up to 950 cycles at 50% DOD)",
    "More power per cycle: up to 30% more power consumption",
    "Innovative silicone technology",
    "High temperature resistant up to 65°C",
    "Maximum performance through deep cycle technology",
    "High continuous emission rates",
    "Solid and leak-proof construction",
    "Safe and secure",
    "Completely maintenance-free",
    "Low self-discharge"
  ];

  const chargerAdvantages = [
    "Ultimate high-frequency technology",
    "Fully automatic, processor-controlled charging procedure",
    "Soft start function",
    "HFM types with integrated LCD display",
    "Configuration of the charging curves with DIP switches",
    "More security features",
    "Suitable for lead-acid, GEL and AGM batteries"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero/aquamot.jpg"
            alt="Aquamot electric marine motors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <span className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-400 mb-4 block">
            Aquamot
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            VERDI & PÅLITELIGHET
          </h1>
          
        </div>
      </section>

      {/* Main Content Section */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 py-28 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-500">Elektriske motorer</span>
              <h2 className="text-3xl font-semibold sm:text-4xl mt-4">Høy kvalitet, bærekraftig og trygg</h2>
              <p className="mt-6 text-base text-slate-600 sm:text-lg">
                Aquamot leverer høykvalitets elektriske marine motorer. Leter du etter en elektrisk båtmotor? 
                Velg Aquamot - her får du uovertruffen kraft og effektivitet som er like egnet for 
                fritidsbåting og kommersiell bruk.
              </p>
              <div className="mt-6">
                <a 
                  href="https://aquamot.at/en/produkte/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
                >
                  Besøk Aquamots nettside
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <div className="relative isolate overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                <img
                  src="/aquamot.jpg"
                  alt="Aquamot elektriske motorer i bruk"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-800/30 to-transparent" />
                <div className="absolute bottom-6 left-6 space-y-2 text-zinc-100">
                  <p className="text-xs uppercase tracking-[0.45em] text-amber-200/90">Aquamot i aksjon</p>
                  <p className="max-w-sm text-sm text-zinc-100/90">
                    Høy kvalitet, bærekraftig og trygg elektrisk båtmotor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="container mx-auto px-4 py-16 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Våre produktserier</h2>
            <p className="text-slate-600">Utforsk vårt omfattende utvalg av elektriske marine motorer og tilbehør</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Trend Line", href: "#trend-line", icon: <Zap className="h-6 w-6 text-amber-600" /> },
              { name: "Professional Line", href: "#professional-line", icon: <Wrench className="h-6 w-6 text-amber-600" /> },
              { name: "Batteries", href: "#batteries", icon: <Battery className="h-6 w-6 text-amber-600" /> },
              { name: "Chargers", href: "#chargers", icon: <Shield className="h-6 w-6 text-amber-600" /> }
                ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md text-center"
              >
                <div className="flex flex-col items-center space-y-3">
                  {item.icon}
                  <span className="font-medium text-slate-900 group-hover:text-amber-700">{item.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trend Line Section */}
      <section id="trend-line" className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 py-28 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-500">Trend Line</span>
              <h2 className="text-3xl font-semibold sm:text-4xl mt-4">De nye Trend modellene</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-6">
                De nye Trend modellene er motorer med banebrytende teknologi. De kan sammenlignes med 
                bensinmotorer fra 3,5 HK til 45 HK. De kan leveres som ren utenbordsmotor, utenbordsmotor 
                med styring og ekstern batteri og motor i undervannshus (POD).
              </p>
            </div>

            <div className="mb-12">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">Utbordsmotorer</h3>
                  <p className="text-slate-600">
                    Motorene er karakterisert av høy effektivitet og børsteløs motorteknologi. 
                    Dette reduserer vedlikehold til nesten null.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">Faste POD motorer</h3>
                  <p className="text-slate-600">
                    Motorene har ingen elektronikk i motorhuset under vann. Dette er for å forhindre 
                    korrosjon og feil som kan oppstå fra å ha elektroniske komponenter under vann.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="relative isolate overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                <img
                  src="/services/aquamot.webp"
                  alt="Aquamot Trend Line utbordsmotorer"
                  className="aspect-[3/1] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-800/30 to-transparent" />
                <div className="absolute bottom-6 left-6 space-y-2 text-zinc-100">
                  <p className="text-xs uppercase tracking-[0.45em] text-amber-200/90">Trend Line</p>
                  <p className="max-w-sm text-sm text-zinc-100/90">
                    Banebrytende teknologi for elektriske båtmotorer
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Prisliste Utbordsmotorer</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-200">
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Modell</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Effekt</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Bensin</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Batteri</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Lader</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trendLineModels.map((model, index) => (
                      <tr key={index} className="border-b border-zinc-100">
                        <td className="py-3 px-4 font-medium text-slate-900">{model.model}</td>
                        <td className="py-3 px-4 text-slate-600">{model.power}</td>
                        <td className="py-3 px-4 text-slate-600">{model.gasoline}</td>
                        <td className="py-3 px-4 text-slate-600">{model.battery}</td>
                        <td className="py-3 px-4 text-slate-600">{model.charger}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Tilleggsutstyr</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {additionalEquipment.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Prisliste POD (undervannshus)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200">
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Modell</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Effekt</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Bensin</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Batteri</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Lader</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-zinc-100">
                        <td className="py-3 px-4 font-medium text-slate-900">Trend 1.1</td>
                        <td className="py-3 px-4 text-slate-600">1100W</td>
                        <td className="py-3 px-4 text-slate-600">3.5 hp</td>
                        <td className="py-3 px-4 text-slate-600">640Wh</td>
                        <td className="py-3 px-4 text-slate-600">Included</td>
                      </tr>
                      <tr className="border-b border-zinc-100">
                        <td className="py-3 px-4 font-medium text-slate-900">Trend 1.6</td>
                        <td className="py-3 px-4 text-slate-600">1600W</td>
                        <td className="py-3 px-4 text-slate-600">5.0 hp</td>
                        <td className="py-3 px-4 text-slate-600">640Wh</td>
                        <td className="py-3 px-4 text-slate-600">Included</td>
                      </tr>
                      <tr className="border-b border-zinc-100">
                        <td className="py-3 px-4 font-medium text-slate-900">Trend 2.2</td>
                        <td className="py-3 px-4 text-slate-600">2200W</td>
                        <td className="py-3 px-4 text-slate-600">6.5 hp</td>
                        <td className="py-3 px-4 text-slate-600">-</td>
                        <td className="py-3 px-4 text-slate-600">-</td>
                      </tr>
                      <tr className="border-b border-zinc-100">
                        <td className="py-3 px-4 font-medium text-slate-900">Trend 4.3</td>
                        <td className="py-3 px-4 text-slate-600">4300W</td>
                        <td className="py-3 px-4 text-slate-600">11 hp</td>
                        <td className="py-3 px-4 text-slate-600">-</td>
                        <td className="py-3 px-4 text-slate-600">-</td>
                      </tr>
                      <tr className="border-b border-zinc-100">
                        <td className="py-3 px-4 font-medium text-slate-900">64,990,- Kr</td>
                        <td className="py-3 px-4 text-slate-600">11kW</td>
                        <td className="py-3 px-4 text-slate-600">28hp</td>
                        <td className="py-3 px-4 text-slate-600">-</td>
                        <td className="py-3 px-4 text-slate-600">-</td>
                      </tr>
                      <tr className="border-b border-zinc-100">
                        <td className="py-3 px-4 font-medium text-slate-900">Trend 15</td>
                        <td className="py-3 px-4 text-slate-600">15kW</td>
                        <td className="py-3 px-4 text-slate-600">35 hp</td>
                        <td className="py-3 px-4 text-slate-600">-</td>
                        <td className="py-3 px-4 text-slate-600">-</td>
                      </tr>
                      <tr className="border-b border-zinc-100">
                        <td className="py-3 px-4 font-medium text-slate-900">Trend 20</td>
                        <td className="py-3 px-4 text-slate-600">20kW</td>
                        <td className="py-3 px-4 text-slate-600">40hp</td>
                        <td className="py-3 px-4 text-slate-600">-</td>
                        <td className="py-3 px-4 text-slate-600">-</td>
                      </tr>
                      <tr className="border-b border-zinc-100">
                        <td className="py-3 px-4 font-medium text-slate-900">Trend 25</td>
                        <td className="py-3 px-4 text-slate-600">25kW</td>
                        <td className="py-3 px-4 text-slate-600">45 hp</td>
                        <td className="py-3 px-4 text-slate-600">-</td>
                        <td className="py-3 px-4 text-slate-600">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Tilleggsutstyr POD</h3>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Folding propeller</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Extra propellers fixed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Line Section */}
      <section id="professional-line" className="border-b border-zinc-200 bg-zinc-50">
        <div className="container mx-auto px-4 py-28 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-500">Professional Line</span>
              <h2 className="text-3xl font-semibold sm:text-4xl mt-4">Profesjonell kvalitet</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-6">
                Typisk er hus for elektriske motorer for båter laget av mindre solid plast eller er enkle 
                sveiste strukturer som ikke ofte er sjøvannsresistente.
              </p>
            </div>

            <div className="mb-12">
              <div className="relative isolate overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                <img
                  src="/services/aquamot.webp"
                  alt="Aquamot Professional Line motorer"
                  className="aspect-[3/1] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-800/30 to-transparent" />
                <div className="absolute bottom-6 left-6 space-y-2 text-zinc-100">
                  <p className="text-xs uppercase tracking-[0.45em] text-amber-200/90">Professional Line</p>
                  <p className="max-w-sm text-sm text-zinc-100/90">
                    Profesjonell kvalitet med aluminium konstruksjon
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <p className="text-base text-slate-700 mb-6">
                Alle hus i Aquamot Professional serien er støpt med permanent sjøvannsresistent aluminium 
                og er belagt med en 6-lags overflatebehandling.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">Utbordsmotorer</h3>
                  <p className="text-sm text-slate-600">Høy kvalitet og pålitelighet for profesjonell bruk</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">Innbordsmotorer</h3>
                  <p className="text-sm text-slate-600">Kompakt design for innbygging i båt</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">Faste POD motorer</h3>
                  <p className="text-sm text-slate-600">Stabil og effektiv løsning under vann</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">Styrbare POD motorer</h3>
                  <p className="text-sm text-slate-600">Maksimal manøvrerbarhet og kontroll</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Batteries Section */}
      <section id="batteries" className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 py-28 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-500">Batterier</span>
              <h2 className="text-3xl font-semibold sm:text-4xl mt-4">Høykvalitets batterier</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-6">
                Vi fører høykvalitets produkter fra markedsledende produsent Aquamot. 
                Aquamot Long-life Silicon AGM Deep-Cycle batteriet er et VRLA-batteri for 
                flere applikasjoner med høy kontinuerlig strøm.
              </p>
            </div>

            <div className="mb-12">
              <div className="relative isolate overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                <img
                  src="/services/aquamot.webp"
                  alt="Aquamot batterier og ladeløsninger"
                  className="aspect-[3/1] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-800/30 to-transparent" />
                <div className="absolute bottom-6 left-6 space-y-2 text-zinc-100">
                  <p className="text-xs uppercase tracking-[0.45em] text-amber-200/90">Batterier</p>
                  <p className="max-w-sm text-sm text-zinc-100/90">
                    Høykvalitets Long-life Silicon AGM Deep-Cycle batterier
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Hvilke fordeler har disse batteriene?</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {batteryAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{advantage}</span>
                      </div>
                    ))}
                  </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chargers Section */}
      <section id="chargers" className="border-b border-zinc-200 bg-zinc-50">
        <div className="container mx-auto px-4 py-28 lg:px-10">
          <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
              <span className="text-[0.7rem] uppercase tracking-[0.5em] text-amber-500">Ladere</span>
              <h2 className="text-3xl font-semibold sm:text-4xl mt-4">Trygge ladeløsninger</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-6">
                Ladere fra Aquamot er en trygg partner å ha om bord. Batteriene lades svært effektivt 
                og økonomisk ved hjelp av den nyeste høgfrekvente ladeteknologien.
            </p>
          </div>

            <div className="mb-12">
              <div className="relative isolate overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                <img
                  src="/services/aquamot.webp"
                  alt="Aquamot ladere og ladeløsninger"
                  className="aspect-[3/1] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-800/30 to-transparent" />
                <div className="absolute bottom-6 left-6 space-y-2 text-zinc-100">
                  <p className="text-xs uppercase tracking-[0.45em] text-amber-200/90">Ladere</p>
                  <p className="max-w-sm text-sm text-zinc-100/90">
                    Trygge og effektive ladeløsninger med høgfrekvent teknologi
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Fordeler med Aquamot lader</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {chargerAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{advantage}</span>
                  </div>
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

export default Aquamot;