import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MessageCircle, TrendingUp, Users, FileText, Clock, AlertCircle, Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * Design: Organic Craft - Artigianato Digitale (Complete Palette)
 * Typography: Montserrat (display) + League Spartan (body)
 * Colors: Forest green #197e1c primary, lime #b9db5f highlights, golden yellow #fcb41c accents,
 *         warm beige #ebe3d5 background, dark grey #656367 for text
 * Layout: Fluid organic shapes with asymmetric sections
 */

const WHATSAPP_NUMBER = '+39 351 844 0843';
const WHATSAPP_URL = 'https://wa.me/393518440843';
const WHATSAPP_MESSAGE = 'Ciao! Vorrei provare C0S per gestire i miei cantieri su WhatsApp.';
const WHATSAPP_LINK = `${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Hook per animazioni di scroll
function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  // Animazioni per sezioni
  const heroRef = useScrollAnimation();
  const problemRef = useScrollAnimation();
  const solutionRef = useScrollAnimation();
  const benefitsRef = useScrollAnimation();
  const faqRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663355725872/nCBXEYlQNNSJAWGI.png" 
              alt="C0S Logo" 
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Funzionalità</a>
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Vantaggi</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </nav>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <MessageCircle className="mr-2 h-4 w-4" />
              Contattaci
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
                   <div className="flex items-center gap-4 mb-8">
                <h1 className="text-5xl md:text-7xl font-bold font-display">
                  Da CaOS... a
                </h1>
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663355725872/nCBXEYlQNNSJAWGI.png" 
                  alt="C0S Logo" 
                  className="flex-shrink-0" style={{width: '120px', height: '80px'}}
                />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">
                <span className="text-accent">CantiereZeroStress</span>
              </h2>
              <p className="text-lg md:text-xl mb-8 text-foreground/80 max-w-xl leading-relaxed">
                Gestisci clienti, varianti, SAL e spese direttamente su WhatsApp. C0S organizza tutto in automatico e ti tutela quando serve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Prova C0S Gratis <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>

              <div className="space-y-3 text-foreground/70">
                <p className="font-semibold text-foreground">Meno discussioni.</p>
                <p className="font-semibold text-foreground">Più accordi.</p>
                <p className="font-semibold text-foreground">Zero burocrazia.</p>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663355725872/CDhlddhhqWKWmGEG.png"
                alt="C0S Hero Character"
                className="w-full max-w-md h-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">
            Come funziona C0S
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold font-display mb-8">
                Funziona dove lavori già: WhatsApp
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Non devi installare app complicate, imparare software o compilare moduli. Scrivi come sempre e C0S organizza per te.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: "🏗️", text: "Crea cantieri e clienti" },
                  { icon: "🔁", text: "Registra varianti" },
                  { icon: "📈", text: "SAL e avanzamenti" },
                  { icon: "🔔", text: "Promemoria e scadenze" },
                  { icon: "💸", text: "Spese globali o per cantiere" },
                  { icon: "📷", text: "Foto bolle e documenti letti automaticamente" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl mt-1">{item.icon}</span>
                    <p className="text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663355725872/XBTVkNYpkdkTawZu.png"
                  alt="C0S Demo - Come funziona"
                  className="w-full max-w-md rounded-2xl shadow-2xl cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* No Obligation Section */}
      <section id="features" className="py-20 md:py-32 bg-background">
        <div className="container">
          <motion.div
            ref={problemRef.ref}
            initial={{ opacity: 0, y: 30 }}
            animate={problemRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/CmnDP0qxUDHPH8UxCsUeVd/sandbox/cqMJzxlqkuKwOTUfWHV6Yo-img-1_1771058425000_na1fn_ZmxleGliaWxpdHktY2hvaWNlLXNlY3Rpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQ21uRFAwcXhVREhQSDhVeENzVWVWZC9zYW5kYm94L2NxTUp6eGxxa3VLd09UVWZXSVY2WW8taW1nLTFfMTc3MTA1ODQyNTAwMF9uYTFmbl9abXhsZUdsaWFXeHBkSGt0WTJodmFXTmxMWE5sWTNScGIyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GssfS4ts82we7wogSiZEvkNWB69S9e6KPoxcna1uRiwKw7udFZ7xDF2p9VpURp14AFsfCzUQjVrxzQNVlYcGDcFq51aTHQ34~AfOLd7pw1grxEwkrRdRmL~qwjCK2njwSHl7ZanEManbHEAX-8LuPA~7n1QxRrmqJbVvM3oP7gYjcNCHBMe1fDCfXz8spcvPuywTmefVbxU5ZRpIup-C4gdk9aGJqLMiT8sqE0mqDoijzRCiIM35JDt0sOR186R8mf~YWQKoZCl~XMacxMsxEEoZpUfXYkKW2-IXiB5O4sDrg419YJUqys~Z1uRzMSnj1J6UXha-c2zaATcgW9-9HQ__"
                alt="Flexibility and choice in data entry"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Registri solo quello che vuoi
              </h2>
              <div className="bg-secondary/20 border-2 border-secondary rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold font-display text-secondary mb-4">
                  Nessun obbligo. Solo supporto.
                </h3>
                <p className="text-lg text-foreground/80">
                  C0S è un assistente che lavora per te. NON è un gestionale che ti controlla. Sei tu a decidere: cosa salvare, quando farlo, quanto dettaglio inserire.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Flessibilità totale nel tuo workflow",
                  "Nessun obbligo di registrazione completa",
                  "Controllo totale dei tuoi dati",
                  "Supporto quando ne hai bisogno"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <motion.div
            ref={problemRef.ref}
            initial={{ opacity: 0, y: 30 }}
            animate={problemRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >           <div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-8">
                Il vero problema
              </h2>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Il lavoro non è il problema. <span className="font-bold text-foreground">Lo stress con il cliente sì.</span>
              </p>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border mb-8">
                <h3 className="font-bold font-display text-foreground mb-6">In cantiere succede ogni giorno:</h3>
                <ul className="space-y-3 text-foreground/80">
                  {[
                    '"Già che ci siamo cambiamo questo"',
                    '"Aggiungiamo anche quello"',
                    '"Non era nel preventivo"',
                    '"Non me l\'avevi detto"'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent font-bold text-xl">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-lg text-foreground/80">
                Telefonate, messaggi persi, PDF rifatti, discussioni a fine lavori. E il saldo diventa una battaglia.
              </p>
            </div>

            <div className="flex justify-center">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663355725872/ssJnwpPobzPZgCsn.png"
                alt="Client Discussion Problem"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* Solution Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <motion.div
          ref={solutionRef.ref}
          initial={{ opacity: 0, y: 30 }}
          animate={solutionRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="container"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">
            C0S semplifica il rapporto con il cliente
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "REGISTRATA", icon: "📝" },
              { title: "CONFERMATA", icon: "✅" },
              { title: "CONDIVISA", icon: "🔄" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold font-display">{item.title}</h3>
              </div>
            ))}
          </div>

          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Ogni decisione può essere registrata, confermata e condivisa. Così a fine lavori non ci sono sorprese. Solo accordi chiari.
          </p>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold font-display mb-8">Le varianti sono il momento più delicato.</h3>
            <p className="text-lg mb-8">C0S le rende semplici, direttamente su 📲 WhatsApp:</p>
            
            <div className="space-y-4">
              {[
                { step: "✅", text: "Mandi un messaggio o un audio 💬" },
                { step: "✅", text: "C0S crea automaticamente la variante 🔁" },
                { step: "✅", text: "Auto-approvi o invii al cliente per approvazione 👍" },
                { step: "✅", text: "Il totale si aggiorna subito 💰" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-lg">
                  <span className="text-2xl">{item.step}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-xl font-bold font-display mt-12">
              Tutto chiaro. Niente discussioni.
            </p>
          </div>
        </motion.div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-background">
        <motion.div
          ref={faqRef.ref}
          initial={{ opacity: 0, y: 30 }}
          animate={faqRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="container"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Domande Frequenti</h2>
            <div className="space-y-4">
              {[
                {
                  q: "C0S è gratuito?",
                  a: "Sì, C0S è completamente gratuito. Nessun costo nascosto, nessun obbligo."
                },
                {
                  q: "Funziona solo su WhatsApp?",
                  a: "Sì, C0S è progettato per funzionare direttamente su WhatsApp, dove già comunichi con i tuoi clienti."
                },
                {
                  q: "I miei dati sono al sicuro?",
                  a: "Assolutamente. Tutti i tuoi dati sono crittografati e protetti. Tu mantieni il controllo totale."
                },
                {
                  q: "Posso usarlo con più clienti?",
                  a: "Sì, puoi gestire illimitati clienti, cantieri e varianti con un unico account."
                }
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={faqRef.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-secondary/10 rounded-xl p-6 cursor-pointer hover:bg-secondary/20 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold font-display text-foreground">{faq.q}</h3>
                    <span className="text-2xl text-secondary">{expandedFaq === i ? '−' : '+'}</span>
                  </div>
                  {expandedFaq === i && (
                    <p className="mt-4 text-foreground/70 leading-relaxed">{faq.a}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Time Savings Section */}
      <section id="benefits" className="py-20 md:py-32 bg-background">
        <motion.div
          ref={benefitsRef.ref}
          initial={{ opacity: 0, y: 30 }}
          animate={benefitsRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="container"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-8">
                Meno telefonate. Meno spiegazioni. Più tempo per lavorare.
              </h2>
              
              <div className="space-y-8">
            <div className="bg-secondary/5 rounded-2xl p-8 shadow-sm border border-secondary/20">
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold font-display mb-2">Anche solo 30-60 minuti al giorno in meno significa:</h3>
                      <ul className="space-y-2 text-foreground/80">
                        <li className="flex items-center gap-2">
                          <span className="text-accent font-bold">→</span> 2-3 giornate al mese recuperate
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-accent font-bold">→</span> fino a un mese di lavoro all'anno
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/10 rounded-2xl p-8 border-2 border-secondary">
                  <p className="text-lg text-foreground font-semibold">
                    Tempo che oggi perdi in caos.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663355725872/FIrsCdlSmrYYqXOe.png"
                alt="Team collaboration"
                className="w-full rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">
            Pensato per piccole imprese edili
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold font-display mb-4 text-primary">Perfetto se:</h3>
              <ul className="space-y-3">
                {[
                  "Gestisci più cantieri contemporaneamente",
                  "Oggi lavori con WhatsApp, foto e chiamate",
                  "Vuoi ordine senza burocrazia"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/10 rounded-2xl p-8 border border-accent/30">
              <h3 className="text-xl font-bold font-display mb-4 text-accent">Vantaggi immediati:</h3>
              <ul className="space-y-3">
                {[
                  "Riduci stress e conflitti",
                  "Recupera tempo prezioso",
                  "Aumenta la chiarezza con i clienti"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-8">
            Vuoi provare C0S sul prossimo cantiere?
          </h2>
          <p className="text-lg text-foreground/80 mb-12">
            Inizia gratuitamente. Nessuna carta di credito richiesta. Supporto sempre disponibile.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <MessageCircle className="mr-2 h-5 w-5" />
                Scrivici su WhatsApp
              </Button>
            </a>
            <Button size="lg" variant="outline">
              Scopri i piani
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-primary/5">
        <div className="container max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">
            Domande frequenti
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "C0S è veramente gratuito?",
                a: "Sì, puoi iniziare gratuitamente. Offriamo piani a pagamento solo se vuoi funzionalità avanzate."
              },
              {
                q: "Quanto tempo ci vuole per iniziare?",
                a: "Pochi minuti. Basta aggiungere il numero di C0S su WhatsApp e iniziare a mandare messaggi."
              },
              {
                q: "I miei dati sono al sicuro?",
                a: "Sì, utilizziamo crittografia end-to-end e conformità GDPR. I tuoi dati rimangono tuoi."
              },
              {
                q: "Posso usarlo con più cantieri?",
                a: "Assolutamente. C0S è pensato per gestire più cantieri e clienti contemporaneamente."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors text-left"
                >
                  <h3 className="font-bold font-display text-lg">{item.q}</h3>
                  <span className="text-primary text-xl">
                    {expandedFaq === i ? "−" : "+"}
                  </span>
                </button>
                {expandedFaq === i && (
                  <div className="px-6 py-4 bg-primary/5 border-t border-border">
                    <p className="text-foreground/80">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663355725872/nCBXEYlQNNSJAWGI.png" 
                alt="C0S Logo" 
                className="h-8 w-auto mb-4 invert"
              />
              <p className="text-sm opacity-80">Gestione cantieri senza stress.</p>
            </div>

            <div>
              <h4 className="font-bold font-display mb-4">Prodotto</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition">Funzionalità</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Prezzi</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold font-display mb-4">Azienda</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition">Chi siamo</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Contatti</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Carriere</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold font-display mb-4">Legale</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition">Privacy</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Termini</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Cookie</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm opacity-80">
            <p>&copy; 2026 Casa Zero Stress. Tutti i diritti riservati.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-100 transition">Facebook</a>
              <a href="#" className="hover:opacity-100 transition">Instagram</a>
              <a href="#" className="hover:opacity-100 transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
