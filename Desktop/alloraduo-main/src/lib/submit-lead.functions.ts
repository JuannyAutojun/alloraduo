import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const INTERESSES = [
  "Crédito Pessoa Física",
  "Crédito Pessoa Jurídica",
  "Crédito Condomínio",
  "Consultoria de Investimentos",
  "Consórcio e Seguro de Vida Resgatável",
  "Outros",
] as const;

const leadSchema = z.object({
  interesse: z.enum(INTERESSES),
  nome: z.string().trim().min(2, "Informe seu nome").max(120),
  email: z.string().trim().toLowerCase().email("E-mail inválido").max(180),
  telefone: z
    .string()
    .trim()
    .max(30)
    .refine((v) => {
      const digits = v.replace(/\D/g, "");
      return digits.length === 10 || digits.length === 11;
    }, "Telefone inválido (use DDD + número)"),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    // Se estiver em modo de desenvolvimento (localhost), simula o envio com sucesso
    if (process.env.NODE_ENV !== "production") {
      console.log("[DEV MODE] Simulador preenchido com sucesso:", data);
      return { ok: true as const, emailSent: true };
    }

    try {
      // Em produção no servidor FTP
      const response = await fetch("/send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao se comunicar com o script PHP.");
      }

      const result = await response.json();
      return { ok: true as const, emailSent: result.ok };
    } catch (error) {
      console.error("[submitLead] Erro ao enviar solicitação:", error);
      throw new Error("Falha ao registrar solicitação");
    }
  });