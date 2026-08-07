import { defineMcp } from "@lovable.dev/mcp-js";
import aboutCompanyTool from "./tools/about-company";
import getContactsTool from "./tools/get-contacts";
import getFaqTool from "./tools/get-faq";
import listSolutionsTool from "./tools/list-solutions";

export default defineMcp({
  name: "allora-duo-mcp",
  title: "Allora Duo",
  version: "0.1.0",
  instructions:
    "Public information about Allora Duo, a Brazilian financial solutions and investment advisory firm based in Grande Florianópolis. Use `about_company` for the institutional overview, `list_solutions` for credit and investment offerings, `get_faq` for frequently asked questions (topics: condominios, pj, investimentos), and `get_contacts` for email, Instagram, business hours, and WhatsApp numbers.",
  tools: [aboutCompanyTool, listSolutionsTool, getFaqTool, getContactsTool],
});