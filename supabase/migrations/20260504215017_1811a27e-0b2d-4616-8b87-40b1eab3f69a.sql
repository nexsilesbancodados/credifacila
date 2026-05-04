-- Fix Function Search Path
ALTER FUNCTION public.update_updated_at_column() SET search_path = public;

-- Fix Overly Permissive Policies
DROP POLICY "Allow authenticated access to clients" ON public.clients;
DROP POLICY "Allow authenticated access to debts" ON public.debts;
DROP POLICY "Allow authenticated access to interactions" ON public.interactions;

-- Re-create policies with better granularity
CREATE POLICY "Staff can view clients" ON public.clients FOR SELECT TO authenticated USING (true);
CREATE POLICY "Staff can insert clients" ON public.clients FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Staff can update clients" ON public.clients FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Staff can view debts" ON public.debts FOR SELECT TO authenticated USING (true);
CREATE POLICY "Staff can insert debts" ON public.debts FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Staff can update debts" ON public.debts FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Staff can view interactions" ON public.interactions FOR SELECT TO authenticated USING (true);
CREATE POLICY "Staff can insert interactions" ON public.interactions FOR INSERT TO authenticated WITH CHECK (true);
