import { defineTool } from "@lovable.dev/mcp-js";

const ABOUT = {
  name: "Allora Duo",
  tagline:
    "Soluções Financeiras Inteligentes para o seu Futuro e o do seu Negócio.",
  description:
    "Somos duas empreendedoras do ramo bancário com 30 anos de experiência em Bolsa de Valores, crédito, investimentos e gestão financeira com ênfase no planejamento financeiro e sucessório.",
  differentials: [
    "Proximidade física na Grande Florianópolis",
    "Atendimento consultivo e desburocratizado",
    "Assessoria taylor-made (sob medida)",
    "Integração com as maiores instituições financeiras do país",
  ],
  website: "https://alloraduo.lovable.app",
};

export default defineTool({
  name: "about_company",
  title: "About Allora Duo",
  description:
    "Institutional overview of Allora Duo: who we are, tagline, differentials, and website.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(ABOUT, null, 2) }],
    structuredContent: ABOUT,
  }),
});