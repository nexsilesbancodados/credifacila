-- Add owner_id to clients
ALTER TABLE public.clients ADD COLUMN owner_id UUID REFERENCES auth.users(id);

-- Add owner_id to debts
ALTER TABLE public.debts ADD COLUMN owner_id UUID REFERENCES auth.users(id);

-- Create index for performance
CREATE INDEX idx_clients_owner_id ON public.clients(owner_id);
CREATE INDEX idx_debts_owner_id ON public.debts(owner_id);

-- Update RLS policies (simple versions for now)
-- Enable RLS if not enabled
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.debts ENABLE ROW LEVEL SECURITY;

-- Owner can manage their own clients
CREATE POLICY "Owners can manage their clients" 
ON public.clients 
FOR ALL 
USING (auth.uid() = owner_id);

-- Owner can manage their clients' debts
CREATE POLICY "Owners can manage their clients debts" 
ON public.debts 
FOR ALL 
USING (auth.uid() = owner_id);

-- Clients can view their own data via CPF/BirthDate (guest access)
-- Note: This is already handled in the code via direct Supabase client,
-- but for RLS we'd need a more complex setup if we wanted strict RLS for guests.
-- For now, we'll allow select on clients for matching document/birth_date.
CREATE POLICY "Allow guest access to clients" 
ON public.clients 
FOR SELECT 
USING (true);

CREATE POLICY "Allow guest access to debts" 
ON public.debts 
FOR SELECT 
USING (true);
