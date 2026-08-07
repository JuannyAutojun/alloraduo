import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { N as isRedirect, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as object, l as string, s as _enum } from "../_libs/@lovable.dev/mcp-js+[...].mjs";
import { i as getServerFnById, n as createServerFn, r as TSS_SERVER_FUNCTION } from "./server-eFa7Azw5.mjs";
import { a as MessageCircle, c as Landmark, d as ChartLine, f as Building2, i as ShieldCheck, l as Instagram, m as ArrowLeft, n as UserRound, o as Menu, p as ArrowRight, r as Sparkles, s as Mail, t as X, u as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as useMotionValue, c as AnimatePresence, i as useTransform, n as useReducedMotion, o as useScroll, r as useSpring, s as motion, t as useInView } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BqRi6ZUP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var leadSchema = object({
	interesse: _enum([
		"Crédito Pessoa Física",
		"Crédito Pessoa Jurídica",
		"Crédito Condomínio",
		"Consultoria de Investimentos",
		"Consórcio e Seguro de Vida Resgatável",
		"Outros"
	]),
	nome: string().trim().min(2, "Informe seu nome").max(120),
	email: string().trim().toLowerCase().email("E-mail inválido").max(180),
	telefone: string().trim().max(30).refine((v) => {
		const digits = v.replace(/\D/g, "");
		return digits.length === 10 || digits.length === 11;
	}, "Telefone inválido (use DDD + número)")
});
var submitLead = createServerFn({ method: "POST" }).inputValidator((input) => leadSchema.parse(input)).handler(createSsrRpc("32dd116fce5baa1c2a2add9ceafbee696638e020376cdaef2ca7375ef40c522c"));
function Reveal({ children, className, delay = 0, y = 16, as = "div" }) {
	const reduce = useReducedMotion();
	const Comp = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className,
		initial: reduce ? false : {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "0px 0px -80px 0px"
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
var stagger = {
	hidden: {},
	show: { transition: {
		staggerChildren: .09,
		delayChildren: .05
	} }
};
var staggerItem = {
	hidden: {
		opacity: 0,
		y: 16
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function StaggerGroup({ children, className }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		variants: stagger,
		initial: reduce ? false : "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "0px 0px -80px 0px"
		},
		children
	});
}
function StaggerItem({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		variants: staggerItem,
		children
	});
}
function Counter({ to, suffix = "", prefix = "", duration = 1.6 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "0px 0px -60px 0px"
	});
	const reduce = useReducedMotion();
	const mv = useMotionValue(0);
	const spring = useSpring(mv, {
		duration: duration * 1e3,
		bounce: 0
	});
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		if (reduce) {
			if (ref.current) ref.current.textContent = `${prefix}${to}${suffix}`;
			return;
		}
		mv.set(to);
		return spring.on("change", (v) => {
			if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
		});
	}, [
		inView,
		to,
		prefix,
		suffix,
		mv,
		spring,
		reduce
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [
			prefix,
			"0",
			suffix
		]
	});
}
var NAV = [
	{
		label: "Nossas Soluções",
		href: "#solucoes"
	},
	{
		label: "Quem Somos",
		href: "#quem-somos"
	},
	{
		label: "FAQ",
		href: "#faq"
	}
];
var SOLUTIONS = [
	{
		icon: UserRound,
		title: "Crédito Pessoa Física",
		tag: "PF",
		desc: "Viabilize projetos e conquistas pessoais com as melhores taxas do mercado em Crédito Imobiliário, Home Equity e Veículos."
	},
	{
		icon: Building2,
		title: "Crédito Pessoa Jurídica",
		tag: "PJ",
		desc: "Capital de giro estratégico, linhas para expansão e reestruturação financeira de empresas."
	},
	{
		icon: Landmark,
		title: "Crédito para Condomínios",
		tag: "Condo",
		desc: "Financiamento inteligente para obras, reformas e modernizações sem rateio pesado."
	},
	{
		icon: ChartLine,
		title: "Consultoria de Investimentos",
		tag: "Wealth",
		desc: "Planejamento de patrimônio, inteligência financeira e alocação estratégica para o seu futuro."
	},
	{
		icon: ShieldCheck,
		title: "Consórcio e Seguro de Vida Resgatável",
		tag: "Proteção",
		desc: "Planejamento de aquisição via consórcio e proteção patrimonial com seguro de vida resgatável."
	}
];
var FAQ = {
	pf: [
		{
			q: "Por que contratar crédito para PF com a Allora Duo em vez do meu banco?",
			a: "Comparando opções entre dezenas de parceiros do mercado, encontramos taxas substancialmente menores e prazos mais longos do que os empréstimos pessoais ou pré-aprovados dos grandes bancos."
		},
		{
			q: "Posso continuar utilizando meu imóvel ou veículo se os colocar como garantia de um empréstimo?",
			a: "Sim, o bem permanece sob sua posse e uso normal. A garantia serve apenas para obter taxas drasticamente menores e parcelas que caibam no seu orçamento."
		},
		{
			q: "É possível aprovar crédito para pessoa física mesmo com restrição no nome?",
			a: "Sim. Em operações de crédito com garantia (imóvel ou veículo), a análise é mais flexível e a existência de restrições cadastrais não impede automaticamente a aprovação do seu contrato."
		},
		{
			q: "O valor do crédito obtido precisa ter uma destinação específica?",
			a: "Não. Nas modalidades com garantia, o uso do recurso é 100% livre. Você pode utilizar o dinheiro para quitar dívidas, investir em novos projetos, viajar ou realizar reformas sem precisar comprovar a destinação."
		},
		{
			q: "Como saber qual é a melhor linha de crédito para o meu momento financeiro?",
			a: "Nossa equipe analisa seu perfil, prazo e necessidade para comparar propostas entre os principais bancos parceiros, indicando a opção com o menor custo efetivo total."
		}
	],
	condominios: [
		{
			q: "É obrigatória a aprovação em assembleia para contratar o crédito?",
			a: "Sim. A aprovação em assembleia é um requisito legal. Nossa equipe jurídica orienta o síndico e a administradora sobre todo o rito necessário para garantir a segurança da contratação."
		},
		{
			q: "Quais são as garantias exigidas do condomínio?",
			a: "Na maioria das operações, a própria receita das taxas condominiais serve como garantia. Raramente é necessária a alienação de bens do condomínio ou o aval pessoal do síndico."
		},
		{
			q: "Para quais finalidades o crédito de condomínio pode ser utilizado?",
			a: "O uso é livre. O recurso pode financiar obras estruturais, reformas, modernização de elevadores, implantação de energia solar ou cobrir furos de caixa causados por inadimplência."
		}
	],
	pj: [
		{
			q: "Quais tipos de garantias são aceitas no crédito empresarial?",
			a: "Aval dos sócios, recebíveis de cartões, duplicatas, além de garantias reais (imóveis e veículos) para linhas de longo prazo com taxas reduzidas."
		},
		{
			q: "Preciso ter conta em um banco específico para conseguir o crédito?",
			a: "Não. Como atuamos integrados com as maiores instituições do mercado, buscamos a melhor taxa independentemente do banco onde sua empresa mantém conta hoje."
		},
		{
			q: "Quanto tempo demora para o crédito empresarial ser aprovado e liberado?",
			a: "O prazo varia conforme a modalidade e as garantias. Linhas de capital de giro costumam ser liberadas em poucos dias úteis após o envio completo da documentação e aprovação cadastral."
		}
	],
	invest: [{
		q: "Como funciona a segurança dos investimentos recomendados?",
		a: "Nós não custodiamos o seu dinheiro. Seus recursos permanecem em contas de sua titularidade nas maiores e mais seguras plataformas de investimentos e instituições financeiras do país."
	}, {
		q: "Como funciona o atendimento e a montagem da carteira de investimentos?",
		a: "Analisamos seus objetivos, prazo de aplicação e perfil de risco para estruturar uma estratégia personalizada e diversificada, buscando maximizar a rentabilidade com total segurança e transparência."
	}],
	consorcio: [{
		q: "Vale a pena fazer um consórcio em vez de um financiamento?",
		a: "Sim, para quem pode se planejar. O consórcio é muito mais econômico por não cobrar juros, apenas taxa de administração. Na Allora Duo, estruturamos estratégias personalizadas de lances para acelerar sua contemplação."
	}, {
		q: "Como aumentar minhas chances de ser contemplado no consórcio?",
		a: "Através de planejamento estratégico. Nós analisamos seu perfil para selecionar o grupo ideal e estruturar a melhor estratégia de lances, aumentando consideravelmente suas chances de contemplação no prazo desejado."
	}]
};
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "logodocabecalho.png",
		alt: "Allora Duo — Crédito & Investimentos",
		className
	});
}
function FooterLogo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "logodofim.png",
		alt: "Allora Duo — Crédito & Investimentos",
		className
	});
}
function LandingPage() {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground selection:bg-gold/30",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							className: "flex min-w-0 items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-10 w-auto sm:h-11" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden justify-center gap-8 lg:flex",
							children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: n.href,
								className: "text-sm font-medium text-muted-foreground transition-colors hover:text-gold",
								children: n.label
							}, n.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#simulador",
								className: "inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-gold-soft",
								children: ["Falar com Consultor ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Abrir menu",
							onClick: () => setMobileOpen((v) => !v),
							className: "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden",
							children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border/60 bg-background/95 lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6",
						children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: n.href,
							onClick: () => setMobileOpen(false),
							className: "rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-gold",
							children: n.label
						}, n.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#simulador",
							className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-primary-foreground",
							children: ["Falar com Consultor ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "quem-somos",
				className: "border-t border-border/60 bg-ink-soft/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "relative",
						y: 20,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -left-4 -top-4 h-full w-full rounded-2xl border border-gold/30",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "foto4.jpg",
							alt: "Parceria e consultoria financeira Allora Duo",
							width: 1024,
							height: 1280,
							loading: "lazy",
							className: "relative rounded-2xl object-cover"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: .1,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.25em] text-gold",
								children: "Quem Somos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl",
								children: [
									"A força de ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gold-gradient-text",
										children: "três décadas"
									}),
									" no mercado bancário."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-lg leading-relaxed text-muted-foreground",
								children: "Somos duas empreendedoras do ramo bancário com 30 anos de experiência em Bolsa de Valores, crédito, investimentos e gestão financeira com ênfase no planejamento financeiro e sucessório."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 space-y-4",
								children: [
									"Proximidade física e atendimento presencial em toda a Grande Florianópolis.",
									"Consultoria desburocratizada, com processos ágeis e transparentes.",
									"Assessoria taylor-made — cada solução desenhada para o seu cenário."
								].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
									initial: {
										opacity: 0,
										x: -10
									},
									whileInView: {
										opacity: 1,
										x: 0
									},
									viewport: {
										once: true,
										margin: "0px 0px -60px 0px"
									},
									transition: {
										duration: .6,
										delay: .2 + i * .08,
										ease: [
											.22,
											1,
											.36,
											1
										]
									},
									className: "flex gap-3 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
								}, t))
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "solucoes",
				className: "border-t border-border/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.25em] text-gold",
								children: "Nossas Soluções"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl",
								children: "Estratégia financeira para cada perfil."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-sm text-muted-foreground",
							children: "Do crédito pessoal à consultoria patrimonial — atuamos como ponte inteligente entre você e as maiores instituições do país."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionsCarousel, {})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimuladorSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterSection, {})
		]
	});
}
function HeroSection() {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "6%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		ref,
		className: "relative overflow-hidden surface-noise",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-10 lg:pt-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
					initial: reduce ? false : {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						delay: .1,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "mt-6 text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl",
					children: [
						"Soluções financeiras ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gold-gradient-text",
							children: "inteligentes"
						}),
						" para o seu futuro e o do seu negócio."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: reduce ? false : {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .25,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
					children: "Crédito estratégico e assessoria de investimentos sob medida para pessoas, empresas e condomínios."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: reduce ? false : {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .4,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#solucoes",
						className: "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-gold-soft",
						children: ["Conheça nossas soluções ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#consultoria",
						className: "inline-flex items-center gap-2 rounded-full border border-foreground/30 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-gold hover:text-gold",
						children: "Saber mais"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8",
					children: [
						{
							n: 30,
							suffix: "",
							s: "anos de mercado"
						},
						{
							n: 35,
							suffix: "+",
							s: "instituições parceiras"
						},
						{
							n: 100,
							suffix: "%",
							s: "assessoria sob medida"
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: reduce ? false : {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .6 + i * .1,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display text-3xl text-gold sm:text-4xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: s.n,
								suffix: s.suffix
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground",
							children: s.s
						})]
					}, s.s))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: reduce ? false : {
					opacity: 0,
					y: 30,
					scale: .98
				},
				animate: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				transition: {
					duration: 1,
					delay: .2,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -inset-4 rounded-2xl bg-gradient-to-br from-gold/25 via-transparent to-bronze/25 blur-2xl",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { y: imgY },
					className: "relative overflow-hidden rounded-2xl border border-gold/40 gold-border-glow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "foto3.jpg",
							alt: "Atendimento consultivo Allora Duo",
							width: 1200,
							height: 1504,
							className: "h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-gold/30 bg-background/70 px-4 py-3 backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-foreground",
								children: "Consultoria sênior"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Crédito · Investimentos · Consórcios · Seguro de Vida"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-widest text-gold",
								children: "Allora Duo"
							})]
						})
					]
				})]
			})]
		})
	});
}
function SimuladorSection() {
	const [step, setStep] = (0, import_react.useState)(1);
	const [need, setNeed] = (0, import_react.useState)("");
	const [form, setForm] = (0, import_react.useState)({
		nome: "",
		email: "",
		telefone: ""
	});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [showErrors, setShowErrors] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [serverError, setServerError] = (0, import_react.useState)(null);
	const submit = useServerFn(submitLead);
	const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
	const phoneDigits = (v) => v.replace(/\D/g, "");
	const computeErrors = (f) => {
		const e = {};
		if (f.nome.trim().length < 2) e.nome = "Informe seu nome completo.";
		if (!emailRe.test(f.email.trim())) e.email = "E-mail inválido. Use o formato nome@email.com.";
		const d = phoneDigits(f.telefone);
		if (d.length !== 10 && d.length !== 11) e.telefone = "Telefone inválido. Informe DDD + número, ex.: (00) 90000-0000.";
		return e;
	};
	const updateField = (key, v) => {
		const next = {
			...form,
			[key]: v
		};
		setForm(next);
		if (showErrors) setErrors(computeErrors(next));
	};
	const canAdvance = need.length > 0;
	const handleSubmit = async (e) => {
		e.preventDefault();
		setServerError(null);
		const found = computeErrors(form);
		setErrors(found);
		if (Object.keys(found).length > 0) {
			setShowErrors(true);
			const first = [
				"nome",
				"email",
				"telefone"
			].find((k) => found[k]);
			if (first) document.getElementById(`campo-${first}`)?.focus();
			return;
		}
		setShowErrors(false);
		setSubmitting(true);
		try {
			await submit({ data: {
				interesse: need,
				nome: form.nome.trim(),
				email: form.email.trim(),
				telefone: form.telefone.trim()
			} });
			setSubmitted(true);
		} catch (err) {
			setServerError(err instanceof Error ? err.message : "Não foi possível enviar. Tente novamente.");
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "simulador",
		className: "border-t border-border/60 bg-ink-soft/40 surface-noise",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.25em] text-gold",
					children: "Simulação rápida"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl",
					children: [
						"Dois passos até falar com um ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gold-gradient-text",
							children: "consultor sênior"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground",
					children: "Preencha o formulário — entramos em contato em horário comercial com uma análise personalizada, sem custo e sem compromisso."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex items-center gap-3",
					children: [1, 2].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold ${step >= n ? "border-gold bg-gold text-primary-foreground" : "border-border text-muted-foreground"}`,
							children: n
						}), n === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-border" })]
					}, n))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "relative rounded-2xl border border-gold/30 bg-card p-6 gold-border-glow sm:p-9",
				delay: .15,
				y: 24,
				children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center py-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-2xl text-foreground",
							children: "Recebemos sua solicitação."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-sm text-sm text-muted-foreground",
							children: "Um consultor Allora Duo entrará em contato em breve pelo canal informado."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					noValidate: true,
					className: "space-y-6",
					children: [step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-foreground",
								children: "O que você precisa hoje?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [
									"Crédito Pessoa Física",
									"Crédito Pessoa Jurídica",
									"Crédito Condomínio",
									"Consultoria de Investimentos",
									"Consórcio e Seguro de Vida Resgatável",
									"Outros"
								].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setNeed(opt),
									className: `rounded-xl border px-4 py-4 text-left text-sm transition ${need === opt ? "border-gold bg-gold/10 text-foreground" : "border-border text-muted-foreground hover:border-gold/60 hover:text-foreground"}`,
									children: opt
								}, opt))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: !canAdvance,
								onClick: () => setStep(2),
								className: "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-40",
								children: ["Continuar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					}), step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-border bg-background/50 px-4 py-3 text-xs text-muted-foreground",
								children: ["Interesse: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: need
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "campo-nome",
								label: "Nome completo",
								value: form.nome,
								onChange: (v) => updateField("nome", v),
								placeholder: "Como devemos te chamar?",
								error: showErrors ? errors.nome : void 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "campo-email",
								label: "E-mail",
								type: "email",
								value: form.email,
								onChange: (v) => updateField("email", v),
								placeholder: "nome@email.com",
								error: showErrors ? errors.email : void 0,
								inputMode: "email",
								autoComplete: "email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "campo-telefone",
								label: "Telefone / WhatsApp",
								value: form.telefone,
								onChange: (v) => updateField("telefone", v),
								placeholder: "(00) 90000-0000",
								error: showErrors ? errors.telefone : void 0,
								inputMode: "tel",
								autoComplete: "tel"
							}),
							showErrors && Object.keys(errors).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-lg border border-alert/50 bg-alert/10 px-3 py-2 text-xs text-alert",
								children: "Revise os campos destacados para continuar."
							}),
							serverError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive",
								children: serverError
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 pt-2 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setStep(1),
									className: "rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground",
									children: "Voltar"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: submitting,
									className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-40",
									children: [
										submitting ? "Enviando..." : "Falar com Consultor Allora Duo",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									]
								})]
							})
						]
					})]
				})
			})]
		})
	});
}
function Field({ id, label, value, onChange, placeholder, type = "text", error, inputMode, autoComplete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs uppercase tracking-widest text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id,
				type,
				value,
				onChange: (e) => onChange(e.target.value),
				placeholder,
				inputMode,
				autoComplete,
				"aria-invalid": !!error,
				"aria-describedby": error && id ? `${id}-erro` : void 0,
				className: `mt-2 w-full rounded-lg border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 ${error ? "border-alert ring-1 ring-alert/40 focus:border-alert focus:ring-alert/40" : "border-border focus:border-gold focus:ring-gold/30"}`
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				id: id ? `${id}-erro` : void 0,
				className: "mt-1 block text-xs text-alert",
				children: error
			})
		]
	});
}
function FaqSection() {
	const [tab, setTab] = (0, import_react.useState)("pf");
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "border-t border-border/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.25em] text-gold",
						children: "FAQ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl",
						children: "Perguntas frequentes."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-10 flex flex-wrap justify-center gap-2 rounded-full border border-border bg-card p-1.5",
					delay: .1,
					children: [
						{
							id: "pf",
							label: "Crédito PF"
						},
						{
							id: "pj",
							label: "Crédito PJ"
						},
						{
							id: "condominios",
							label: "Crédito Condomínios"
						},
						{
							id: "invest",
							label: "Consultoria de Investimentos"
						},
						{
							id: "consorcio",
							label: "Consórcio"
						}
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setTab(t.id);
							setOpen(null);
						},
						className: `rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition sm:text-sm ${tab === t.id ? "bg-gold text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
						children: t.label
					}, t.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-3",
					children: FAQ[tab].map((item, i) => {
						const id = `${tab}-${i}`;
						const isOpen = open === id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .5,
								delay: i * .08,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: `rounded-xl border transition ${isOpen ? "border-gold/50 bg-card" : "border-border bg-card/60"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpen(isOpen ? null : id),
								className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base font-medium text-foreground sm:text-lg",
									children: item.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}` })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								initial: false,
								children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										height: 0,
										opacity: 0
									},
									animate: {
										height: "auto",
										opacity: 1
									},
									exit: {
										height: 0,
										opacity: 0
									},
									transition: {
										duration: .35,
										ease: [
											.22,
											1,
											.36,
											1
										]
									},
									className: "overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "px-6 pb-6 pt-0 text-sm leading-relaxed text-muted-foreground sm:text-base",
										children: item.a
									})
								}, "content")
							})]
						}, id);
					})
				})
			]
		})
	});
}
function SolutionsCarousel() {
	const scrollerRef = (0, import_react.useRef)(null);
	const [atStart, setAtStart] = (0, import_react.useState)(true);
	const [atEnd, setAtEnd] = (0, import_react.useState)(false);
	const updateArrows = () => {
		const el = scrollerRef.current;
		if (!el) return;
		setAtStart(el.scrollLeft <= 8);
		setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
	};
	(0, import_react.useEffect)(() => {
		updateArrows();
		window.addEventListener("resize", updateArrows);
		return () => window.removeEventListener("resize", updateArrows);
	}, []);
	const scrollBy = (dir) => {
		const el = scrollerRef.current;
		if (!el) return;
		const card = el.firstElementChild?.firstElementChild;
		const amount = card ? card.offsetWidth + 20 : el.clientWidth * .8;
		el.scrollBy({
			left: dir * amount,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mt-14 flex items-start gap-4 sm:items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Ver soluções anteriores",
				onClick: () => scrollBy(-1),
				"aria-hidden": atStart,
				tabIndex: atStart ? -1 : 0,
				className: `relative z-10 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition duration-200 hover:border-gold hover:text-gold sm:inline-flex ${atStart ? "pointer-events-none opacity-0" : "opacity-100"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollerRef,
				onScroll: updateArrows,
				className: "flex-1 px-1 pb-4 pt-6 sm:overflow-x-auto sm:overflow-y-hidden sm:scroll-smooth sm:[scrollbar-color:var(--color-muted-foreground)_transparent]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerGroup, {
					className: "flex flex-col gap-5 pt-1 sm:flex-row sm:snap-x sm:snap-mandatory",
					children: SOLUTIONS.map(({ icon: Icon, title, tag, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
						className: "group relative flex w-full shrink-0 flex-col rounded-2xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-gold hover:gold-border-glow sm:w-[320px] sm:snap-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold transition group-hover:bg-gold/15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
									children: tag
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-xl text-foreground",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
								children: desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#simulador",
								className: "mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-gold transition group-hover:gap-3",
								children: ["Simular agora ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					}, title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Ver próximas soluções",
				onClick: () => scrollBy(1),
				"aria-hidden": atEnd,
				tabIndex: atEnd ? -1 : 0,
				className: `relative z-10 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition duration-200 hover:border-gold hover:text-gold sm:inline-flex ${atEnd ? "pointer-events-none opacity-0" : "opacity-100"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
			})
		]
	});
}
function FooterSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		id: "contato",
		className: "border-t border-border/60 bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLogo, { className: "h-12 w-auto" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: "Crédito estratégico e assessoria de investimentos sob medida, atuando onde você estiver, e presencialmente na Grande Florianópolis com atendimento consultivo e desburocratizado."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-widest text-gold",
									children: "Horário"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Segunda a sexta · 9h às 17h"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://mail.google.com/mail/?view=cm&to=alloraduo@gmail.com",
									target: "_blank",
									rel: "noreferrer",
									className: "group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-2 text-sm text-gold transition hover:bg-gold hover:text-primary-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), "alloraduo@gmail.com"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://www.instagram.com/alloraduo.com.br?igsh=MTV0YWs3aHd5dDluNQ==",
									target: "_blank",
									rel: "noreferrer",
									className: "group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-2 text-sm text-gold transition hover:bg-gold hover:text-primary-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), "@alloraduo.com.br"]
								})]
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs uppercase tracking-[0.25em] text-gold",
						children: "Navegação"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3 text-sm text-muted-foreground",
						children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: n.href,
							className: "transition hover:text-gold",
							children: n.label
						}) }, n.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs uppercase tracking-[0.25em] text-gold",
						children: "Fale conosco"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/5548996856122?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20cr%C3%A9dito%20da%20Allora%20Duo.",
							target: "_blank",
							rel: "noreferrer",
							className: "group flex items-center justify-between gap-3 rounded-xl border border-gold/40 bg-gold/5 px-4 py-4 transition hover:bg-gold hover:text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5 text-gold group-hover:text-primary-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-foreground group-hover:text-primary-foreground",
									children: "Consultoria de Crédito"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground group-hover:text-primary-foreground/80",
									children: "+55 48 99685-6122"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-gold group-hover:text-primary-foreground" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							id: "consultoria",
							href: "https://wa.me/5548992122522?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20de%20investimentos%20com%20a%20Allora%20Duo.",
							target: "_blank",
							rel: "noreferrer",
							className: "group flex items-center justify-between gap-3 rounded-xl border border-gold/40 bg-gold/5 px-4 py-4 transition hover:bg-gold hover:text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5 text-gold group-hover:text-primary-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-foreground group-hover:text-primary-foreground",
									children: "Consultoria de Investimentos"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground group-hover:text-primary-foreground/80",
									children: "+55 48 99212-2522"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-gold group-hover:text-primary-foreground" })]
						})]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Allora Duo · Crédito & Investimentos"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Florianópolis · Santa Catarina · Brasil" })]
			})]
		})
	});
}
//#endregion
export { LandingPage as component };
