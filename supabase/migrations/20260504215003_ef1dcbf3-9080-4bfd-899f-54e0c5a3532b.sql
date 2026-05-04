-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: Clients
CREATE TABLE public.clients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    document TEXT UNIQUE NOT NULL, -- CPF or CNPJ
    email TEXT,
    phone TEXT NOT NULL,
    address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Table: Debts (Cobrança)
CREATE TABLE public.debts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID REFERENCES public.clients(id) ON DELETE CASCADE NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    due_date DATE NOT NULL,
    status TEXT DEFAULT 'pending' NOT NULL, -- pending, paid, overdue, cancelled
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Table: Interactions (Atendimento)
CREATE TABLE public.interactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID REFERENCES public.clients(id) ON DELETE CASCADE NOT NULL,
    type TEXT NOT NULL, -- call, whatsapp, email, in_person
    summary TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.debts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.interactions ENABLE ROW LEVEL SECURITY;

-- Policies (Assuming staff authentication)
CREATE POLICY "Allow authenticated access to clients" ON public.clients FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow authenticated access to debts" ON public.debts FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow authenticated access to interactions" ON public.interactions FOR ALL TO authenticated USING (true);

-- Functions for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON public.clients FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_debts_updated_at BEFORE UPDATE ON public.debts FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
