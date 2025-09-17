import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroWorkshop from "@/assets/hero-workshop.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    subject: "Generell forespørsel"
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Takk for din henvendelse!",
      description: "Vi vil kontakte deg så snart som mulig.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      subject: "Generell forespørsel"
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Telefon",
      details: ["+47 35 95 25 00", "Hverdager 08:00-16:00"]
    },
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: "E-post", 
      details: ["post@telemark-trade.no", "Svar innen 24 timer"]
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Besøksadresse",
      details: ["Telemark Trade AS", "Telemark, Norge"]
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Åpningstider",
      details: ["Man-Fre: 08:00-16:00", "Lør: 10:00-14:00"]
    }
  ];

  return (
    <div>
      <HeroSection
        backgroundImage={heroWorkshop}
        title="Kontakt Oss"
        subtitle="VI ER HER FOR DEG"
        description="Ta kontakt med våre eksperter for råd, tilbud eller service. Vi hjelper deg gjerne!"
        primaryCTA={{
          text: "Ring oss nå",
          link: "tel:+4735952500"
        }}
        secondaryCTA={{
          text: "Send e-post",
          link: "mailto:post@telemark-trade.no"
        }}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Kom i kontakt
                </h2>
                <p className="text-muted-foreground mb-8">
                  Vårt erfarne team står klar til å hjelpe deg med alle spørsmål 
                  om våre produkter og tjenester.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send oss en melding</CardTitle>
                  <CardDescription>
                    Fyll ut skjemaet nedenfor så kontakter vi deg så snart som mulig.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Navn *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Ditt navn"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-post *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="din@epost.no"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+47 123 45 678"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Bedrift</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Bedriftsnavn (valgfritt)"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Emne</Label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="Generell forespørsel">Generell forespørsel</option>
                        <option value="Produktinformasjon">Produktinformasjon</option>
                        <option value="Tilbud">Be om tilbud</option>
                        <option value="Service">Service og vedlikehold</option>
                        <option value="Support">Teknisk support</option>
                        <option value="Annet">Annet</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Melding *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Skriv din melding her..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send melding
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Finn oss
            </h2>
            <p className="text-xl text-muted-foreground">
              Besøk oss på vårt hovedkontor i Telemark
            </p>
          </div>

          <div className="bg-muted rounded-lg overflow-hidden" style={{ height: "400px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000000!2d10.7522!3d59.2181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46411d8c3dd2a245%3A0xf6e3b43e2a3c0a1a!2sTelemark%2C%20Norway!5e0!3m2!1sen!2sno!4v1629810000000!5m2!1sen!2sno"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Telemark Trade AS lokasjon"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;