
-- 1. Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'staff', 'user');

-- 2. Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 3. Security definer function
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- 4. RLS for user_roles
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles"
  ON public.user_roles FOR ALL
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 5. Drop existing permissive policies on clients
DROP POLICY IF EXISTS "Allow guest access to clients" ON public.clients;
DROP POLICY IF EXISTS "Allow public client lookup by credentials" ON public.clients;
DROP POLICY IF EXISTS "Staff can insert clients" ON public.clients;
DROP POLICY IF EXISTS "Staff can update clients" ON public.clients;
DROP POLICY IF EXISTS "Staff can view clients" ON public.clients;
DROP POLICY IF EXISTS "Owners can manage their clients" ON public.clients;

-- 6. New restrictive policies on clients
CREATE POLICY "Admins and staff can view clients"
  ON public.clients FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'staff'));

CREATE POLICY "Admins and staff can insert clients"
  ON public.clients FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'staff'));

CREATE POLICY "Admins and staff can update clients"
  ON public.clients FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'staff'));

CREATE POLICY "Admins can delete clients"
  ON public.clients FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- 7. Drop existing permissive policies on debts
DROP POLICY IF EXISTS "Allow guest access to debts" ON public.debts;
DROP POLICY IF EXISTS "Staff can insert debts" ON public.debts;
DROP POLICY IF EXISTS "Staff can update debts" ON public.debts;
DROP POLICY IF EXISTS "Staff can view debts" ON public.debts;
DROP POLICY IF EXISTS "Owners can manage their clients debts" ON public.debts;

-- 8. New restrictive policies on debts
CREATE POLICY "Admins and staff can view debts"
  ON public.debts FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'staff'));

CREATE POLICY "Admins and staff can insert debts"
  ON public.debts FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'staff'));

CREATE POLICY "Admins and staff can update debts"
  ON public.debts FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'staff'));

CREATE POLICY "Admins can delete debts"
  ON public.debts FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- 9. Edge function will use service role for public client portal lookup
