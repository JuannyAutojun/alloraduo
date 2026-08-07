import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitLead } from "@/lib/submit-lead.functions";
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  ChevronDown,
  Instagram,
  Landmark,
  LineChart,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";
import logoAsset from "@/assets/allora-duo-logo-horizontal.png.asset.json";
import footerLogoAsset from "@/assets/logo-oficial-2.png.asset.json";
import heroAsset from "@/assets/hero-office.jpg.asset.json";
import aboutAsset from "@/assets/about-conceptual.jpg.asset.json";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Counter, Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const NAV = [
  { label: "Nossas Soluções", href: "#solucoes" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "FAQ", href: "#faq" },
];

const SOLUTIONS = [
  {
    icon: UserRound,
    title: "Crédito Pessoa Física",
    tag: "PF",
    desc: "Viabilize projetos e conquistas pessoais com as melhores taxas do mercado em Crédito Imobiliário, Home Equity e Veículos.",
  },
  {
    icon: Building2,
    title: "Crédito Pessoa Jurídica",
    tag: "PJ",
    desc: "Capital de giro estratégico, linhas para expansão e reestruturação financeira de empresas.",
  },
  {
    icon: Landmark,
    title: "Crédito para Condomínios",
    tag: "Condo",
    desc: "Financiamento inteligente para obras, reformas e modernizações sem rateio pesado.",
  },
  {
    icon: LineChart,
    title: "Consultoria de Investimentos",
    tag: "Wealth",
    desc: "Planejamento de patrimônio, inteligência financeira e alocação estratégica para o seu futuro.",
  },
  {
    icon: ShieldCheck,
    title: "Consórcio e Seguro de Vida Resgatável",
    tag: "Proteção",
    desc: "Planejamento de aquisição via consórcio e proteção patrimonial com seguro de vida resgatável.",
  },
];

const FAQ = {
  pf: [
    {
      q: "Por que contratar crédito para PF com a Allora Duo em vez do meu banco?",
      a: "Comparando opções entre dezenas de parceiros do mercado, encontramos taxas substancialmente menores e prazos mais longos do que os empréstimos pessoais ou pré-aprovados dos grandes bancos.",
    },
    {
      q: "Posso continuar utilizando meu imóvel ou veículo se os colocar como garantia de um empréstimo?",
      a: "Sim, o bem permanece sob sua posse e uso normal. A garantia serve apenas para obter taxas drasticamente menores e parcelas que caibam no seu orçamento.",
    },
    {
      q: "É possível aprovar crédito para pessoa física mesmo com restrição no nome?",
      a: "Sim. Em operações de crédito com garantia (imóvel ou veículo), a análise é mais flexível e a existência de restrições cadastrais não impede automaticamente a aprovação do seu contrato.",
    },
    {
      q: "O valor do crédito obtido precisa ter uma destinação específica?",
      a: "Não. Nas modalidades com garantia, o uso do recurso é 100% livre. Você pode utilizar o dinheiro para quitar dívidas, investir em novos projetos, viajar ou realizar reformas sem precisar comprovar a destinação.",
    },
    {
      q: "Como saber qual é a melhor linha de crédito para o meu momento financeiro?",
      a: "Nossa equipe analisa seu perfil, prazo e necessidade para comparar propostas entre os principais bancos parceiros, indicando a opção com o menor custo efetivo total.",
    },
  ],
  condominios: [
    {
      q: "É obrigatória a aprovação em assembleia para contratar o crédito?",
      a: "Sim. A aprovação em assembleia é um requisito legal. Nossa equipe jurídica orienta o síndico e a administradora sobre todo o rito necessário para garantir a segurança da contratação.",
    },
    {
      q: "Quais são as garantias exigidas do condomínio?",
      a: "Na maioria das operações, a própria receita das taxas condominiais serve como garantia. Raramente é necessária a alienação de bens do condomínio ou o aval pessoal do síndico.",
    },
    {
      q: "Para quais finalidades o crédito de condomínio pode ser utilizado?",
      a: "O uso é livre. O recurso pode financiar obras estruturais, reformas, modernização de elevadores, implantação de energia solar ou cobrir furos de caixa causados por inadimplência.",
    },
  ],
  pj: [
    {
      q: "Quais tipos de garantias são aceitas no crédito empresarial?",
      a: "Aval dos sócios, recebíveis de cartões, duplicatas, além de garantias reais (imóveis e veículos) para linhas de longo prazo com taxas reduzidas.",
    },
    {
      q: "Preciso ter conta em um banco específico para conseguir o crédito?",
      a: "Não. Como atuamos integrados com as maiores instituições do mercado, buscamos a melhor taxa independentemente do banco onde sua empresa mantém conta hoje.",
    },
    {
      q: "Quanto tempo demora para o crédito empresarial ser aprovado e liberado?",
      a: "O prazo varia conforme a modalidade e as garantias. Linhas de capital de giro costumam ser liberadas em poucos dias úteis após o envio completo da documentação e aprovação cadastral.",
    },
  ],
  invest: [
    {
      q: "Como funciona a segurança dos investimentos recomendados?",
      a: "Nós não custodiamos o seu dinheiro. Seus recursos permanecem em contas de sua titularidade nas maiores e mais seguras plataformas de investimentos e instituições financeiras do país.",
    },
    {
      q: "Como funciona o atendimento e a montagem da carteira de investimentos?",
      a: "Analisamos seus objetivos, prazo de aplicação e perfil de risco para estruturar uma estratégia personalizada e diversificada, buscando maximizar a rentabilidade com total segurança e transparência.",
    },
  ],
  consorcio: [
    {
      q: "Vale a pena fazer um consórcio em vez de um financiamento?",
      a: "Sim, para quem pode se planejar. O consórcio é muito mais econômico por não cobrar juros, apenas taxa de administração. Na Allora Duo, estruturamos estratégias personalizadas de lances para acelerar sua contemplação.",
    },
    {
      q: "Como aumentar minhas chances de ser contemplado no consórcio?",
      a: "Através de planejamento estratégico. Nós analisamos seu perfil para selecionar o grupo ideal e estruturar a melhor estratégia de lances, aumentando consideravelmente suas chances de contemplação no prazo desejado.",
    },
  ],
} as const;

type FaqTab = keyof typeof FAQ;

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={"logodocabecalho.png"}
      alt="Allora Duo — Crédito & Investimentos"
      className={className}
    />
  );
}

function FooterLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={"logodofim.png"}
      alt="Allora Duo — Crédito & Investimentos"
      className={className}
    />
  );
}

function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/30">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:px-10">
          <a href="#top" className="flex min-w-0 items-center">
            <Logo className="h-10 w-auto sm:h-11" />
          </a>
          <nav className="hidden justify-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <a
              href="#simulador"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-gold-soft"
            >
              Falar com Consultor <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <button
            aria-label="Abrir menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-border/60 bg-background/95 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-gold"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#simulador"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Falar com Consultor <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <HeroSection />

      {/* QUEM SOMOS */}
      <section id="quem-somos" className="border-t border-border/60 bg-ink-soft/30">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <Reveal className="relative" y={20}>
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-gold/30" aria-hidden />
            <img
              src={"foto4.jpg"}
              alt="Parceria e consultoria financeira Allora Duo"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs uppercase tracking-[0.25em] text-gold">Quem Somos</span>
            <h2 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
              A força de <span className="gold-gradient-text">três décadas</span> no mercado bancário.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Somos duas empreendedoras do ramo bancário com 30 anos de experiência em Bolsa de Valores, crédito, investimentos e gestão financeira com ênfase no planejamento financeiro e sucessório.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Proximidade física e atendimento presencial em toda a Grande Florianópolis.",
                "Consultoria desburocratizada, com processos ágeis e transparentes.",
                "Assessoria taylor-made — cada solução desenhada para o seu cenário.",
              ].map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-3 text-muted-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{t}</span>
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section id="solucoes" className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-gold">Nossas Soluções</span>
              <h2 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Estratégia financeira para cada perfil.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Do crédito pessoal à consultoria patrimonial — atuamos como ponte inteligente entre você e as maiores instituições do país.
            </p>
          </Reveal>
          <SolutionsCarousel />
        </div>
      </section>

      {/* SIMULADOR */}
      <SimuladorSection />

      {/* FAQ */}
      <FaqSection />

      {/* FOOTER / CONTATO */}
      <FooterSection />
    </div>
  );
}

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "6%"]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden surface-noise">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-10 lg:pt-24">
        <div>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Soluções financeiras <span className="gold-gradient-text">inteligentes</span> para o seu futuro e o do seu negócio.
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Crédito estratégico e assessoria de investimentos sob medida para pessoas, empresas e condomínios.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#solucoes"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-gold-soft"
            >
              Conheça nossas soluções <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#consultoria"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-gold hover:text-gold"
            >
              Saber mais
            </a>
          </motion.div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { n: 30, suffix: "", s: "anos de mercado" },
              { n: 35, suffix: "+", s: "instituições parceiras" },
              { n: 100, suffix: "%", s: "assessoria sob medida" },
            ].map((s, i) => (
              <motion.div
                key={s.s}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <dt className="font-display text-3xl text-gold sm:text-4xl">
                  <Counter to={s.n} suffix={s.suffix} />
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.s}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-gold/25 via-transparent to-bronze/25 blur-2xl" aria-hidden />
          <motion.div style={{ y: imgY }} className="relative overflow-hidden rounded-2xl border border-gold/40 gold-border-glow">
            <img
              src={"foto3.jpg"}
              alt="Atendimento consultivo Allora Duo"
              width={1200}
              height={1504}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" aria-hidden />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-gold/30 bg-background/70 px-4 py-3 backdrop-blur-md">
              <div>
                <p className="text-sm font-semibold text-foreground">Consultoria sênior</p>
                <p className="text-xs text-muted-foreground">Crédito · Investimentos · Consórcios · Seguro de Vida</p>
              </div>
              <span className="rounded-full border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-widest text-gold">
                Allora Duo
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SimuladorSection() {
  const [step, setStep] = useState<1 | 2>(1);
  const [need, setNeed] = useState<string>("");
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ nome?: string; email?: string; telefone?: string }>({});
  const [showErrors, setShowErrors] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const submit = useServerFn(submitLead);

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const phoneDigits = (v: string) => v.replace(/\D/g, "");
  const computeErrors = (f: typeof form) => {
    const e: { nome?: string; email?: string; telefone?: string } = {};
    if (f.nome.trim().length < 2) e.nome = "Informe seu nome completo.";
    if (!emailRe.test(f.email.trim()))
      e.email = "E-mail inválido. Use o formato nome@email.com.";
    const d = phoneDigits(f.telefone);
    if (d.length !== 10 && d.length !== 11)
      e.telefone = "Telefone inválido. Informe DDD + número, ex.: (00) 90000-0000.";
    return e;
  };

  const updateField = (key: keyof typeof form, v: string) => {
    const next = { ...form, [key]: v };
    setForm(next);
    if (showErrors) setErrors(computeErrors(next));
  };

  const canAdvance = need.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    const found = computeErrors(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setShowErrors(true);
      const first = (["nome", "email", "telefone"] as const).find((k) => found[k]);
      if (first) {
        document.getElementById(`campo-${first}`)?.focus();
      }
      return;
    }
    setShowErrors(false);
    setSubmitting(true);
    try {
      await submit({
        data: {
          interesse: need,
          nome: form.nome.trim(),
          email: form.email.trim(),
          telefone: form.telefone.trim(),
        },
      });
      setSubmitted(true);
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Não foi possível enviar. Tente novamente.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="simulador" className="border-t border-border/60 bg-ink-soft/40 surface-noise">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-10">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-gold">Simulação rápida</span>
          <h2 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Dois passos até falar com um <span className="gold-gradient-text">consultor sênior</span>.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Preencha o formulário — entramos em contato em horário comercial com uma análise personalizada, sem custo e sem compromisso.
          </p>
          <div className="mt-8 flex items-center gap-3">
            {[1, 2].map((n) => (
              <div key={n} className="flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold ${
                    step >= n
                      ? "border-gold bg-gold text-primary-foreground"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {n}
                </div>
                {n === 1 && <span className="h-px w-10 bg-border" />}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative rounded-2xl border border-gold/30 bg-card p-6 gold-border-glow sm:p-9" delay={0.15} y={24}>
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl text-foreground">Recebemos sua solicitação.</h3>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                Um consultor Allora Duo entrará em contato em breve pelo canal informado.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {step === 1 && (
                <div className="space-y-5">
                  <label className="block text-sm font-medium text-foreground">
                    O que você precisa hoje?
                  </label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Crédito Pessoa Física",
                      "Crédito Pessoa Jurídica",
                      "Crédito Condomínio",
                      "Consultoria de Investimentos",
                      "Consórcio e Seguro de Vida Resgatável",
                      "Outros",
                    ].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setNeed(opt)}
                        className={`rounded-xl border px-4 py-4 text-left text-sm transition ${
                          need === opt
                            ? "border-gold bg-gold/10 text-foreground"
                            : "border-border text-muted-foreground hover:border-gold/60 hover:text-foreground"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    disabled={!canAdvance}
                    onClick={() => setStep(2)}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Continuar <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="rounded-lg border border-border bg-background/50 px-4 py-3 text-xs text-muted-foreground">
                    Interesse: <span className="text-gold">{need}</span>
                  </div>
                  <Field id="campo-nome" label="Nome completo" value={form.nome} onChange={(v) => updateField("nome", v)} placeholder="Como devemos te chamar?" error={showErrors ? errors.nome : undefined} />
                  <Field id="campo-email" label="E-mail" type="email" value={form.email} onChange={(v) => updateField("email", v)} placeholder="nome@email.com" error={showErrors ? errors.email : undefined} inputMode="email" autoComplete="email" />
                  <Field id="campo-telefone" label="Telefone / WhatsApp" value={form.telefone} onChange={(v) => updateField("telefone", v)} placeholder="(00) 90000-0000" error={showErrors ? errors.telefone : undefined} inputMode="tel" autoComplete="tel" />
                  {showErrors && Object.keys(errors).length > 0 && (
                    <p className="rounded-lg border border-alert/50 bg-alert/10 px-3 py-2 text-xs text-alert">
                      Revise os campos destacados para continuar.
                    </p>
                  )}
                  {serverError && (
                    <p className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                      {serverError}
                    </p>
                  )}
                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground"
                    >
                      Voltar
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {submitting ? "Enviando..." : "Falar com Consultor Allora Duo"} <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  inputMode,
  autoComplete,
}: {
  id?: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  inputMode?: "text" | "email" | "tel" | "numeric";
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error && id ? `${id}-erro` : undefined}
        className={`mt-2 w-full rounded-lg border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 ${
          error
            ? "border-alert ring-1 ring-alert/40 focus:border-alert focus:ring-alert/40"
            : "border-border focus:border-gold focus:ring-gold/30"
        }`}
      />
      {error && (
        <span id={id ? `${id}-erro` : undefined} className="mt-1 block text-xs text-alert">
          {error}
        </span>
      )}
    </label>
  );
}

function FaqSection() {
  const [tab, setTab] = useState<FaqTab>("pf");
  const [open, setOpen] = useState<string | null>(null);
  const tabs: { id: FaqTab; label: string }[] = [
    { id: "pf", label: "Crédito PF" },
    { id: "pj", label: "Crédito PJ" },
    { id: "condominios", label: "Crédito Condomínios" },
    { id: "invest", label: "Consultoria de Investimentos" },
    { id: "consorcio", label: "Consórcio" },
  ];

  return (
    <section id="faq" className="border-t border-border/60">
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-10">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-gold">FAQ</span>
          <h2 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Perguntas frequentes.
          </h2>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2 rounded-full border border-border bg-card p-1.5" delay={0.1}>
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTab(t.id);
                setOpen(null);
              }}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition sm:text-sm ${
                tab === t.id
                  ? "bg-gold text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQ[tab].map((item, i) => {
            const id = `${tab}-${i}`;
            const isOpen = open === id;
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-xl border transition ${
                  isOpen ? "border-gold/50 bg-card" : "border-border bg-card/60"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-foreground sm:text-lg">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SolutionsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.firstElementChild?.firstElementChild as HTMLElement | null;
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative mt-14 flex items-start gap-4 sm:items-center">
      <button
        type="button"
        aria-label="Ver soluções anteriores"
        onClick={() => scrollBy(-1)}
        aria-hidden={atStart}
        tabIndex={atStart ? -1 : 0}
        className={`relative z-10 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition duration-200 hover:border-gold hover:text-gold sm:inline-flex ${
          atStart ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      <div
        ref={scrollerRef}
        onScroll={updateArrows}
        className="flex-1 px-1 pb-4 pt-6 sm:overflow-x-auto sm:overflow-y-hidden sm:scroll-smooth sm:[scrollbar-color:var(--color-muted-foreground)_transparent]"
      >
        <StaggerGroup className="flex flex-col gap-5 pt-1 sm:flex-row sm:snap-x sm:snap-mandatory">
          {SOLUTIONS.map(({ icon: Icon, title, tag, desc }) => (
            <StaggerItem
              key={title}
              className="group relative flex w-full shrink-0 flex-col rounded-2xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-gold hover:gold-border-glow sm:w-[320px] sm:snap-start"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold transition group-hover:bg-gold/15">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {tag}
                </span>
              </div>
              <h3 className="mt-6 text-xl text-foreground">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <a
                href="#simulador"
                className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-gold transition group-hover:gap-3"
              >
                Simular agora <ArrowRight className="h-4 w-4" />
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <button
        type="button"
        aria-label="Ver próximas soluções"
        onClick={() => scrollBy(1)}
        aria-hidden={atEnd}
        tabIndex={atEnd ? -1 : 0}
        className={`relative z-10 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition duration-200 hover:border-gold hover:text-gold sm:inline-flex ${
          atEnd ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function FooterSection() {
  return (
    <footer id="contato" className="border-t border-border/60 bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <FooterLogo className="h-12 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Crédito estratégico e assessoria de investimentos sob medida, atuando onde você estiver, e presencialmente na Grande Florianópolis com atendimento consultivo e desburocratizado.
            </p>
            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="text-xs uppercase tracking-widest text-gold">Horário</span>
                <br />
                Segunda a sexta · 9h às 17h
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=alloraduo@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-2 text-sm text-gold transition hover:bg-gold hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4" />
                  alloraduo@gmail.com
                </a>
                <a
                  href="https://www.instagram.com/alloraduo.com.br?igsh=MTV0YWs3aHd5dDluNQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-2 text-sm text-gold transition hover:bg-gold hover:text-primary-foreground"
                >
                  <Instagram className="h-4 w-4" />
                  @alloraduo.com.br
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Navegação</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition hover:text-gold">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Fale conosco</h4>
            <div className="mt-5 space-y-3">
              <a
                href="https://wa.me/5548996856122?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20cr%C3%A9dito%20da%20Allora%20Duo."
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 rounded-xl border border-gold/40 bg-gold/5 px-4 py-4 transition hover:bg-gold hover:text-primary-foreground"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-gold group-hover:text-primary-foreground" />
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary-foreground">
                      Consultoria de Crédito
                    </p>
                    <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/80">
                      +55 48 99685-6122
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-gold group-hover:text-primary-foreground" />
              </a>
              <a
                id="consultoria"
                href="https://wa.me/5548992122522?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20de%20investimentos%20com%20a%20Allora%20Duo."
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 rounded-xl border border-gold/40 bg-gold/5 px-4 py-4 transition hover:bg-gold hover:text-primary-foreground"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-gold group-hover:text-primary-foreground" />
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary-foreground">
                      Consultoria de Investimentos
                    </p>
                    <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/80">
                      +55 48 99212-2522
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-gold group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Allora Duo · Crédito & Investimentos</p>
          <p>Florianópolis · Santa Catarina · Brasil</p>
        </div>
      </div>
    </footer>
  );
}