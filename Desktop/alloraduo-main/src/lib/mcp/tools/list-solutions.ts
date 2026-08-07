import { defineTool } from "@lovable.dev/mcp-js";

const SOLUTIONS = [
  {
    id: "credito-pf",
    title: "Crédito Pessoa Física",
    description:
      "Viabilize projetos e conquistas pessoais com as melhores taxas do mercado em Crédito Imobiliário, Home Equity e Veículos.",
  },
  {
    id: "credito-pj",
    title: "Crédito Pessoa Jurídica",
    description:
      "Capital de giro estratégico, linhas para expansão e reestruturação financeira de empresas.",
  },
  {
    id: "credito-condominios",
    title: "Crédito para Condomínios",
    description:
      "Financiamento inteligente para obras, reformas e modernizações sem rateio pesado.",
  },
  {
    id: "consultoria-investimentos",
    title: "Consultoria de Investimentos",
    description:
      "Planejamento de patrimônio, inteligência financeira e alocação estratégica para o seu futuro.",
  },
];

export default defineTool({
  name: "list_solutions",
  title: "List Allora Duo solutions",
  description:
    "List the financial solutions offered by Allora Duo (credit for individuals, businesses, condominiums, and investment advisory).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SOLUTIONS, null, 2) }],
    structuredContent: { solutions: SOLUTIONS },
  }),
});