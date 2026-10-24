import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  CalendarX2, ListChecks, HelpCircle, UserX, BatteryLow, Map,
  ClipboardCheck, Dumbbell, LineChart, Play, Check, Menu, X, MessageCircle,
  LayoutGrid, Target, Clock, TrendingUp, Repeat, BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { site, plans, testimonials, coach, faqs } from "@/config/site";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";
import heroPoster from "@/assets/hero-poster.jpg";
import gymCta from "@/assets/gym-cta.jpg";
import athlete from "@/assets/athlete.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FORJA — Método de Musculação e Transformação Física" },
      { name: "description", content: "Um método estruturado de treino de musculação, com orientação e um plano de evolução adaptado ao teu nível." },
      { property: "og:title", content: "FORJA — Constrói um físico forte" },
      { property: "og:description", content: "Método estruturado de musculação com planos para diferentes níveis de experiência." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function openLink(url: string, label: string) {
  if (!url) {
    toast.info(`${label} ainda não está configurado.`, { description: "Este link será adicionado em breve." });
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

const nav = [
  { href: "#metodo", label: "Método" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#testemunhos", label: "Testemunhos" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

function Logo() {
  return (
    <a href="#topo" className="flex items-center gap-2" aria-label={site.brand.name}>
      <span className="grid size-9 place-items-center rounded-md bg-gradient-primary font-display text-xl text-primary-foreground">
        {site.brand.name[0]}
      </span>
      <span className="font-display text-2xl tracking-wide">{site.brand.name}</span>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "glass" : ""}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden px-5 sm:inline-flex">
            <a href="#planos">Começar agora</a>
          </Button>
          <Button variant="glass" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border px-5 pb-6 lg:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground">
              {n.label}
            </a>
          ))}
          <Button asChild variant="hero" size="lg" className="mt-3 w-full">
            <a href="#planos" onClick={() => setOpen(false)}>Começar agora</a>
          </Button>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    if (m.matches) ref.current?.pause();
  }, []);
  return (
    <section id="topo" className="relative flex min-h-[100svh] items-end overflow-hidden md:items-center">
      <div className="absolute inset-0 -z-10">
        {reduced ? (
          <img src={heroPoster} alt="" className="h-full w-full object-cover" />
        ) : (
          <video ref={ref} className="h-full w-full object-cover" src={heroVideo.url} poster={heroPoster}
            autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
        )}
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-fade-bottom" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-20 pt-32 md:grid-cols-[1fr_auto] md:px-8">
        <div className="max-w-2xl animate-fade-up">
          <p className="eyebrow flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary" /> Treino • Disciplina • Evolução
          </p>
          <h1 className="mt-5 text-6xl sm:text-7xl lg:text-8xl">
            Constrói um físico forte. <span className="text-primary">Transforma</span> a tua disciplina.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Descobre um método estruturado de treino de musculação, com orientação e um plano de evolução adaptado ao teu nível.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl"><a href="#planos">Quero começar a minha transformação</a></Button>
            <Button asChild variant="glass" size="xl"><a href="#como-funciona"><Play className="fill-current" /> Ver como funciona</a></Button>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">Planos para diferentes níveis de experiência.</p>
        </div>
        <div className="hidden flex-col justify-end gap-8 self-end md:flex">
          {[["Treino estruturado", "Por grupos musculares"], ["Progressão", "Adaptada ao teu nível"]].map(([a, b]) => (
            <div key={a}>
              <div className="mb-2 h-0.5 w-8 bg-primary" />
              <p className="font-semibold">{a}</p>
              <p className="text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-5xl md:text-6xl">{title}</h2>
      {sub && <p className="mt-5 text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}

const problems = [
  { icon: CalendarX2, t: "Falta de consistência", d: "Treinos que começam bem e perdem ritmo." },
  { icon: ListChecks, t: "Rotina desorganizada", d: "Dificuldade em estruturar a semana." },
  { icon: HelpCircle, t: "Dúvidas nos exercícios", d: "Incerteza sobre o que executar e como." },
  { icon: UserX, t: "Sem acompanhamento", d: "Ninguém para orientar os ajustes." },
  { icon: BatteryLow, t: "Motivação instável", d: "Difícil manter o foco ao longo do tempo." },
  { icon: Map, t: "Sem plano estruturado", d: "Treinar sem saber para onde vais." },
];

function Problem() {
  return (
    <section className="relative px-5 py-24 md:px-8 md:py-32">
      <SectionHead eyebrow="O desafio" title={<>Estás a treinar, mas sentes que <span className="text-primary">podias evoluir mais?</span></>} />
      <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map(({ icon: I, t, d }) => (
          <div key={t} className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
            <I className="size-7 text-primary" aria-hidden />
            <h3 className="mt-4 font-sans text-lg font-bold">{t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-14 max-w-2xl text-center text-xl font-medium">
        Treinar com intenção é diferente de simplesmente aparecer no ginásio. <span className="text-primary-glow">O primeiro passo é ter um plano que faça sentido para ti.</span>
      </p>
    </section>
  );
}

const includes = [
  "Organização semanal dos treinos", "Exercícios por grupos musculares", "Orientações de execução",
  "Progressão adequada ao teu nível", "Recomendações gerais de recuperação",
  "Orientações gerais de alimentação*", "Estratégias para criar consistência", "Acompanhamento (consoante o plano)",
];
const steps = [
  { n: "01", icon: ClipboardCheck, t: "Avalia", d: "Identifica o teu nível atual, os teus objetivos e a tua disponibilidade." },
  { n: "02", icon: Dumbbell, t: "Treina", d: "Segue uma rotina organizada, com exercícios e orientações adequados ao teu nível." },
  { n: "03", icon: LineChart, t: "Acompanha", d: "Regista a tua evolução e ajusta o plano de acordo com o progresso." },
];

function Method() {
  return (
    <section id="metodo" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="absolute -left-40 top-20 size-[600px] bg-red-glow" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <img src={athlete} alt="Atleta a preparar um levantamento com barra num ginásio escuro" loading="lazy" width={1024} height={1280}
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-card" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border" />
        </div>
        <div>
          <p className="eyebrow">O método</p>
          <h2 className="mt-4 text-5xl md:text-6xl">Um plano. Uma rotina. <span className="text-primary">Um caminho para evoluir.</span></h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {includes.map((i) => (
              <li key={i} className="flex gap-3 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{i}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">*Não substitui acompanhamento nutricional individual.</p>
        </div>
      </div>
      <div id="como-funciona-passos" className="relative mx-auto mt-20 grid max-w-7xl gap-5 md:grid-cols-3">
        {steps.map(({ n, icon: I, t, d }) => (
          <div key={n} className="relative overflow-hidden rounded-xl border border-border bg-card p-8">
            <span className="absolute -right-2 -top-6 font-display text-9xl text-foreground/5">{n}</span>
            <I className="size-8 text-primary" />
            <p className="mt-5 font-display text-xl text-primary-glow">{n}</p>
            <h3 className="text-4xl">{t}</h3>
            <p className="mt-3 text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function VSL() {
  const [playing, setPlaying] = useState(false);
  const { fileUrl, embedUrl, posterUrl, description } = site.vsl;
  const configured = Boolean(fileUrl || embedUrl);
  const start = () => {
    if (!configured) {
      toast.info("O vídeo de apresentação será adicionado em breve.");
      return;
    }
    setPlaying(true);
  };
  return (
    <section id="como-funciona" className="px-5 py-24 md:px-8 md:py-32">
      <SectionHead eyebrow="Como funciona" title={<>Antes de escolher o teu plano, <span className="text-primary">vê como funciona o método.</span></>}
        sub="Conhece a abordagem, compreende o processo e descobre qual das opções faz mais sentido para ti." />
      <div className="mx-auto mt-12 max-w-5xl">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card shadow-glow">
          {playing && fileUrl ? (
            <video src={fileUrl} controls autoPlay playsInline className="h-full w-full" />
          ) : playing && embedUrl ? (
            <iframe src={embedUrl} title="Vídeo de apresentação" className="h-full w-full" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          ) : (
            <button onClick={start} className="group absolute inset-0 h-full w-full" aria-label="Reproduzir vídeo de apresentação">
              <img src={posterUrl || heroPoster} alt="" className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <span className="absolute inset-0 bg-background/40" />
              <span className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-primary shadow-glow transition-transform group-hover:scale-110">
                <Play className="ml-1 size-9 fill-current text-primary-foreground" />
              </span>
              {!configured && <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">Vídeo em breve</span>}
            </button>
          )}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">{description}</p>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="hero" size="xl"><a href="#planos">Quero conhecer os planos</a></Button>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: LayoutGrid, t: "Mais organização nos treinos" },
  { icon: Target, t: "Clareza sobre o que fazer em cada sessão" },
  { icon: Clock, t: "Rotina adaptada à tua experiência e disponibilidade" },
  { icon: TrendingUp, t: "Orientação para acompanhar o progresso" },
  { icon: Repeat, t: "Maior consistência na prática" },
  { icon: BookOpen, t: "Compreensão dos princípios da musculação" },
];

function Benefits() {
  return (
    <section id="beneficios" className="border-y border-border bg-card/40 px-5 py-24 md:px-8 md:py-32">
      <SectionHead eyebrow="Benefícios" title={<>O que podes desenvolver com uma <span className="text-primary">rotina bem estruturada</span></>} />
      <div className="mx-auto mt-14 grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon: I, t }) => (
          <div key={t} className="flex items-start gap-4 bg-background p-8 transition-colors hover:bg-accent">
            <I className="size-6 shrink-0 text-primary" />
            <p className="font-semibold">{t}</p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-xl text-center text-xs text-muted-foreground">A evolução depende de vários fatores individuais. Não são garantidos resultados específicos.</p>
    </section>
  );
}

function Plans() {
  return (
    <section id="planos" className="relative px-5 py-24 md:px-8 md:py-32">
      <SectionHead eyebrow="Planos" title={<>Escolhe o plano <span className="text-primary">certo para ti</span></>} sub="Compara as opções e escolhe a que melhor se adapta aos teus objetivos." />
      <div className="mx-auto mt-14 grid max-w-6xl items-stretch gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <article key={p.id} className={`relative flex flex-col rounded-2xl border p-8 ${p.featured ? "border-primary bg-accent shadow-glow lg:-translate-y-4" : "border-border bg-card"}`}>
            {p.featured && <span className="absolute -top-3 left-8 rounded-full bg-gradient-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">Em destaque</span>}
            <h3 className="text-4xl">{p.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.forWho}</p>
            <div className="mt-6 min-h-16">
              {p.price ? (
                <div className="flex items-baseline gap-2">
                  {p.previousPrice && <span className="text-muted-foreground line-through">{p.currency}{p.previousPrice}</span>}
                  <span className="font-display text-6xl">{p.currency}{p.price}</span>
                  {p.billing && <span className="text-sm text-muted-foreground">{p.billing}</span>}
                </div>
              ) : (
                <p className="font-display text-3xl text-muted-foreground">Preço em breve</p>
              )}
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {p.features.map((f) => <li key={f} className="flex gap-3 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{f}</li>)}
            </ul>
            {(p.duration || p.access || p.guarantee) && (
              <div className="mt-6 space-y-1 border-t border-border pt-4 text-xs text-muted-foreground">
                {p.duration && <p>Duração: {p.duration}</p>}
                {p.access && <p>Acesso: {p.access}</p>}
                {p.guarantee && <p>Garantia: {p.guarantee}</p>}
              </div>
            )}
            <Button variant={p.featured ? "hero" : "glass"} size="xl" className="mt-8 w-full" onClick={() => openLink(p.checkoutUrl, `O checkout do plano ${p.name}`)}>
              Escolher plano {p.name}
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testemunhos" className="border-y border-border bg-card/40 px-5 py-24 md:px-8 md:py-32">
      <SectionHead eyebrow="Testemunhos" title={<>Experiências reais. Percursos diferentes. <span className="text-primary">Compromisso com a evolução.</span></>} />
      {testimonials.length === 0 ? (
        <p className="mx-auto mt-12 max-w-md rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground">
          Esta área será atualizada em breve com experiências reais de quem segue o método.
        </p>
      ) : (
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-background p-6">
              {t.videoUrl && <video src={t.videoUrl} controls preload="none" className="mb-4 aspect-video w-full rounded-lg" />}
              <blockquote className="text-sm leading-relaxed">“{t.text}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                {t.photoUrl && <img src={t.photoUrl} alt={t.name} className="size-10 rounded-full object-cover" loading="lazy" />}
                <div><p className="font-semibold">{t.name}</p>{t.period && <p className="text-xs text-muted-foreground">{t.period}</p>}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}

function Coach() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[2fr_3fr]">
        <div className="grid aspect-[4/5] place-items-center overflow-hidden rounded-2xl border border-border bg-card">
          {coach.photoUrl ? <img src={coach.photoUrl} alt={coach.name} className="h-full w-full object-cover" loading="lazy" />
            : <span className="text-sm text-muted-foreground">Fotografia do treinador</span>}
        </div>
        <div>
          <p className="eyebrow">O treinador</p>
          <h2 className="mt-4 text-5xl md:text-6xl">Quem está por trás <span className="text-primary">do método?</span></h2>
          {coach.name && <p className="mt-4 text-2xl font-bold">{coach.name}</p>}
          <p className="mt-5 text-lg text-muted-foreground">
            Um bom plano deve ser compreensível, estruturado e compatível com a realidade de quem o segue. Conhece a abordagem por trás deste programa e percebe como ela pode encaixar nos teus objetivos.
          </p>
          {coach.philosophy && <p className="mt-4">{coach.philosophy}</p>}
          {coach.experience && <p className="mt-4 text-muted-foreground">{coach.experience}</p>}
          {[...coach.specialties, ...coach.certifications].length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {[...coach.specialties, ...coach.certifications].map((s) => <span key={s} className="rounded-full border border-border px-3 py-1 text-xs">{s}</span>)}
            </div>
          )}
          {coach.message && <p className="mt-6 border-l-2 border-primary pl-4 italic">{coach.message}</p>}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="px-5 py-24 md:px-8 md:py-32">
      <SectionHead eyebrow="FAQ" title={<>Perguntas <span className="text-primary">frequentes</span></>} />
      <Accordion type="single" collapsible className="mx-auto mt-12 max-w-3xl">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`f${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold hover:text-primary-glow">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-5 py-28 md:px-8 md:py-40">
      <img src={gymCta} alt="" loading="lazy" width={1600} height={912} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-background/70" />
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-6xl md:text-7xl">A tua próxima etapa começa com <span className="text-primary">uma decisão.</span></h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Não precisas de ter tudo resolvido para começar a organizar os teus treinos. Conhece o método, compara os planos e escolhe a opção adequada aos teus objetivos.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="hero" size="xl"><a href="#planos">Ver os planos disponíveis</a></Button>
          <Button variant="glass" size="xl" onClick={() => openLink(site.contactUrl, "O contacto")}><MessageCircle /> Falar com a equipa</Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-5 pb-28 pt-10 md:px-8 md:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <Logo />
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {site.brand.name}. Os resultados variam de pessoa para pessoa.</p>
      </div>
    </footer>
  );
}

function MobileBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className={`fixed inset-x-0 bottom-0 z-40 flex gap-2 p-3 glass transition-transform md:hidden ${show ? "translate-y-0" : "translate-y-full"}`}>
      <Button asChild variant="hero" size="lg" className="flex-1"><a href="#planos">Ver planos</a></Button>
      <Button variant="glass" size="icon" className="size-10" aria-label="Falar com a equipa" onClick={() => openLink(site.contactUrl, "O contacto")}><MessageCircle /></Button>
    </div>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Method />
        <VSL />
        <Benefits />
        <Plans />
        <Testimonials />
        <Coach />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
