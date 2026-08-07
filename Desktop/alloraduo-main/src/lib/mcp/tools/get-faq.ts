import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const FAQ = {
  condominios: [
    {
      q: "É obrigatória a aprovação em assembleia para contratar o crédito?",
      a: "Sim. A aprovação em assembleia é um requisito legal. Nossa equipe jurídica orienta o síndico e a administradora sobre todo o rito necessário para garantir a segurança da contratação.",
    },
    {
      q: "Quais são as garantias exigidas do condomínio?",
      a: "Na maioria das operações, a própria receita das taxas condominiais serve como garantia. Raramente é necessária a alienação de bens do condomínio ou o aval pessoal do síndico.",
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
  ],
  investimentos: [
    {
      q: "Como funciona a segurança dos investimentos recomendados?",
      a: "Nós não custodiamos o seu dinheiro. Seus recursos permanecem em contas de sua titularidade nas maiores e mais seguras plataformas de investimentos e instituições financeiras do país.",
    },
  ],
} as const;

export default defineTool({
  name: "get_faq",
  title: "Get Allora Duo FAQ",
  description:
    "Return frequently asked questions and answers, optionally filtered by topic (condominios, pj, investimentos).",
  inputSchema: {
    topic: z
      .enum(["condominios", "pj", "investimentos", "all"])
      .default("all")
      .describe("Topic to filter FAQ entries by. Use 'all' to return every topic."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ topic }) => {
    const data = topic === "all" ? FAQ : { [topic]: FAQ[topic] };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: { faq: data },
    };
  },
});