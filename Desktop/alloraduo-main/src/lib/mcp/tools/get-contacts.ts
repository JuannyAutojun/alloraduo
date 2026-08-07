import { defineTool } from "@lovable.dev/mcp-js";

const CONTACTS = {
  company: "Allora Duo",
  email: "alloraduo@gmail.com",
  instagram: "https://www.instagram.com/alloraduo.com.br",
  instagram_handle: "@alloraduo.com.br",
  business_hours: "Segunda a sexta, das 9h às 17h",
  whatsapp: {
    credito: {
      number: "+55 48 99685-6122",
      link: "https://wa.me/5548996856122",
      purpose: "Consultoria de Crédito (PF, PJ, Condomínios)",
    },
    investimentos: {
      number: "+55 48 99212-2522",
      link: "https://wa.me/5548992122522",
      purpose: "Consultoria de Investimentos",
    },
  },
  region: "Grande Florianópolis, Santa Catarina, Brasil",
};

export default defineTool({
  name: "get_contacts",
  title: "Get Allora Duo contacts",
  description:
    "Return official contact channels for Allora Duo: email, Instagram, business hours, and WhatsApp numbers for credit and investment advisory.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CONTACTS, null, 2) }],
    structuredContent: CONTACTS,
  }),
});