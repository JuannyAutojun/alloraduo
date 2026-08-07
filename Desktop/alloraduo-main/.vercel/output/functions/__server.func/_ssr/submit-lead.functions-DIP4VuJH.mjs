import { c as object, l as string, s as _enum } from "../_libs/@lovable.dev/mcp-js+[...].mjs";
import { n as createServerFn, r as TSS_SERVER_FUNCTION } from "./server-eFa7Azw5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/submit-lead.functions-DIP4VuJH.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var submitLead_createServerFn_handler = createServerRpc({
	id: "32dd116fce5baa1c2a2add9ceafbee696638e020376cdaef2ca7375ef40c522c",
	name: "submitLead",
	filename: "src/lib/submit-lead.functions.ts"
}, (opts) => submitLead.__executeServer(opts));
var submitLead = createServerFn({ method: "POST" }).inputValidator((input) => leadSchema.parse(input)).handler(submitLead_createServerFn_handler, async ({ data }) => {
	try {
		const response = await fetch("/send-email.php", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});
		if (!response.ok) throw new Error("Erro ao se comunicar com o script PHP.");
		return {
			ok: true,
			emailSent: (await response.json()).ok
		};
	} catch (error) {
		console.error("[submitLead] Erro ao enviar solicitação:", error);
		throw new Error("Falha ao registrar solicitação");
	}
});
//#endregion
export { submitLead_createServerFn_handler };
