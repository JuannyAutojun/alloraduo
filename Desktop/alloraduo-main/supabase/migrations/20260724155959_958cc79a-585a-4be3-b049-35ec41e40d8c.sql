
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  interesse TEXT NOT NULL,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  email_sent BOOLEAN NOT NULL DEFAULT false,
  email_error TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- No policies for anon/authenticated: writes go through a server function using service role.
CREATE POLICY "service_role_all_leads" ON public.leads FOR ALL TO service_role USING (true) WITH CHECK (true);
