import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as createTanStackMcpHandler, i as createTanStackListToolsHandler, n as defineTool, o as createTanStackOAuthProtectedResourceMetadataHandler, r as createTanStackInvokeToolHandler, s as _enum, t as defineMcp } from "../_libs/@lovable.dev/mcp-js+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DD2ee9Xn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C45QVE8a.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Allora Duo — Crédito & Investimentos" },
			{
				name: "description",
				content: "Soluções financeiras inteligentes: crédito para pessoas, empresas e condomínios, e assessoria de investimentos sob medida."
			},
			{
				name: "author",
				content: "Allora Duo"
			},
			{
				property: "og:title",
				content: "Allora Duo — Crédito & Investimentos"
			},
			{
				property: "og:description",
				content: "Soluções financeiras inteligentes: crédito para pessoas, empresas e condomínios, e assessoria de investimentos sob medida."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Allora Duo — Crédito & Investimentos"
			},
			{
				name: "twitter:description",
				content: "Soluções financeiras inteligentes: crédito para pessoas, empresas e condomínios, e assessoria de investimentos sob medida."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/fnRcuAU8GccZObTaA4vzdWSFFED3/social-images/social-1784216896863-Ícone_2_(1).webp"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/fnRcuAU8GccZObTaA4vzdWSFFED3/social-images/social-1784216896863-Ícone_2_(1).webp"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter = () => import("./routes-BqRi6ZUP.mjs");
var Route$4 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var ABOUT = {
	name: "Allora Duo",
	tagline: "Soluções Financeiras Inteligentes para o seu Futuro e o do seu Negócio.",
	description: "Somos duas empreendedoras do ramo bancário com 30 anos de experiência em Bolsa de Valores, crédito, investimentos e gestão financeira com ênfase no planejamento financeiro e sucessório.",
	differentials: [
		"Proximidade física na Grande Florianópolis",
		"Atendimento consultivo e desburocratizado",
		"Assessoria taylor-made (sob medida)",
		"Integração com as maiores instituições financeiras do país"
	],
	website: "https://alloraduo.lovable.app"
};
var about_company_default = defineTool({
	name: "about_company",
	title: "About Allora Duo",
	description: "Institutional overview of Allora Duo: who we are, tagline, differentials, and website.",
	inputSchema: {},
	annotations: {
		readOnlyHint: true,
		idempotentHint: true,
		openWorldHint: false
	},
	handler: () => ({
		content: [{
			type: "text",
			text: JSON.stringify(ABOUT, null, 2)
		}],
		structuredContent: ABOUT
	})
});
var CONTACTS = {
	company: "Allora Duo",
	email: "alloraduo@gmail.com",
	instagram: "https://www.instagram.com/alloraduo.com.br",
	instagram_handle: "@alloraduo.com.br",
	business_hours: "Segunda a sexta, das 9h às 17h",
	whatsapp: {
		credito: {
			number: "+55 48 99685-6122",
			link: "https://wa.me/5548996856122",
			purpose: "Consultoria de Crédito (PF, PJ, Condomínios)"
		},
		investimentos: {
			number: "+55 48 99212-2522",
			link: "https://wa.me/5548992122522",
			purpose: "Consultoria de Investimentos"
		}
	},
	region: "Grande Florianópolis, Santa Catarina, Brasil"
};
var get_contacts_default = defineTool({
	name: "get_contacts",
	title: "Get Allora Duo contacts",
	description: "Return official contact channels for Allora Duo: email, Instagram, business hours, and WhatsApp numbers for credit and investment advisory.",
	inputSchema: {},
	annotations: {
		readOnlyHint: true,
		idempotentHint: true,
		openWorldHint: false
	},
	handler: () => ({
		content: [{
			type: "text",
			text: JSON.stringify(CONTACTS, null, 2)
		}],
		structuredContent: CONTACTS
	})
});
var FAQ = {
	condominios: [{
		q: "É obrigatória a aprovação em assembleia para contratar o crédito?",
		a: "Sim. A aprovação em assembleia é um requisito legal. Nossa equipe jurídica orienta o síndico e a administradora sobre todo o rito necessário para garantir a segurança da contratação."
	}, {
		q: "Quais são as garantias exigidas do condomínio?",
		a: "Na maioria das operações, a própria receita das taxas condominiais serve como garantia. Raramente é necessária a alienação de bens do condomínio ou o aval pessoal do síndico."
	}],
	pj: [{
		q: "Quais tipos de garantias são aceitas no crédito empresarial?",
		a: "Aval dos sócios, recebíveis de cartões, duplicatas, além de garantias reais (imóveis e veículos) para linhas de longo prazo com taxas reduzidas."
	}, {
		q: "Preciso ter conta em um banco específico para conseguir o crédito?",
		a: "Não. Como atuamos integrados com as maiores instituições do mercado, buscamos a melhor taxa independentemente do banco onde sua empresa mantém conta hoje."
	}],
	investimentos: [{
		q: "Como funciona a segurança dos investimentos recomendados?",
		a: "Nós não custodiamos o seu dinheiro. Seus recursos permanecem em contas de sua titularidade nas maiores e mais seguras plataformas de investimentos e instituições financeiras do país."
	}]
};
var get_faq_default = defineTool({
	name: "get_faq",
	title: "Get Allora Duo FAQ",
	description: "Return frequently asked questions and answers, optionally filtered by topic (condominios, pj, investimentos).",
	inputSchema: { topic: _enum([
		"condominios",
		"pj",
		"investimentos",
		"all"
	]).default("all").describe("Topic to filter FAQ entries by. Use 'all' to return every topic.") },
	annotations: {
		readOnlyHint: true,
		idempotentHint: true,
		openWorldHint: false
	},
	handler: ({ topic }) => {
		const data = topic === "all" ? FAQ : { [topic]: FAQ[topic] };
		return {
			content: [{
				type: "text",
				text: JSON.stringify(data, null, 2)
			}],
			structuredContent: { faq: data }
		};
	}
});
var SOLUTIONS = [
	{
		id: "credito-pf",
		title: "Crédito Pessoa Física",
		description: "Viabilize projetos e conquistas pessoais com as melhores taxas do mercado em Crédito Imobiliário, Home Equity e Veículos."
	},
	{
		id: "credito-pj",
		title: "Crédito Pessoa Jurídica",
		description: "Capital de giro estratégico, linhas para expansão e reestruturação financeira de empresas."
	},
	{
		id: "credito-condominios",
		title: "Crédito para Condomínios",
		description: "Financiamento inteligente para obras, reformas e modernizações sem rateio pesado."
	},
	{
		id: "consultoria-investimentos",
		title: "Consultoria de Investimentos",
		description: "Planejamento de patrimônio, inteligência financeira e alocação estratégica para o seu futuro."
	}
];
var list_solutions_default = defineTool({
	name: "list_solutions",
	title: "List Allora Duo solutions",
	description: "List the financial solutions offered by Allora Duo (credit for individuals, businesses, condominiums, and investment advisory).",
	inputSchema: {},
	annotations: {
		readOnlyHint: true,
		idempotentHint: true,
		openWorldHint: false
	},
	handler: () => ({
		content: [{
			type: "text",
			text: JSON.stringify(SOLUTIONS, null, 2)
		}],
		structuredContent: { solutions: SOLUTIONS }
	})
});
var mcp_default = defineMcp({
	name: "allora-duo-mcp",
	title: "Allora Duo",
	version: "0.1.0",
	instructions: "Public information about Allora Duo, a Brazilian financial solutions and investment advisory firm based in Grande Florianópolis. Use `about_company` for the institutional overview, `list_solutions` for credit and investment offerings, `get_faq` for frequently asked questions (topics: condominios, pj, investimentos), and `get_contacts` for email, Instagram, business hours, and WhatsApp numbers.",
	tools: [
		about_company_default,
		list_solutions_default,
		get_faq_default,
		get_contacts_default
	]
});
var Route$3 = createFileRoute("/mcp")({ server: { handlers: { ANY: createTanStackMcpHandler(mcp_default, {
	resourcePath: "/mcp",
	metadataPath: "/.well-known/oauth-protected-resource",
	trustForwardedHost: true
}) } } });
var Route$2 = createFileRoute("/.mcp/list-tools")({ server: { handlers: { ANY: createTanStackListToolsHandler(mcp_default, {
	resourcePath: "/mcp",
	metadataPath: "/.well-known/oauth-protected-resource",
	trustForwardedHost: true
}) } } });
var Route$1 = createFileRoute("/.well-known/oauth-protected-resource")({ server: { handlers: { ANY: createTanStackOAuthProtectedResourceMetadataHandler(mcp_default, {
	resourcePath: "/mcp",
	metadataPath: "/.well-known/oauth-protected-resource",
	trustForwardedHost: true
}) } } });
var Route = createFileRoute("/.mcp/invoke-tool/$tool")({ server: { handlers: { ANY: createTanStackInvokeToolHandler(mcp_default, {
	resourcePath: "/mcp",
	metadataPath: "/.well-known/oauth-protected-resource",
	trustForwardedHost: true
}) } } });
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	McpRoute: Route$3.update({
		id: "/mcp",
		path: "/mcp",
		getParentRoute: () => Route$5
	}),
	Char91DotmcpChar93ListToolsRoute: Route$2.update({
		id: "/.mcp/list-tools",
		path: "/.mcp/list-tools",
		getParentRoute: () => Route$5
	}),
	Char91DotwellKnownChar93OauthProtectedResourceRoute: Route$1.update({
		id: "/.well-known/oauth-protected-resource",
		path: "/.well-known/oauth-protected-resource",
		getParentRoute: () => Route$5
	}),
	Char91DotmcpChar93InvokeToolToolRoute: Route.update({
		id: "/.mcp/invoke-tool/$tool",
		path: "/.mcp/invoke-tool/$tool",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
