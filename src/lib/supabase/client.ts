import { createClient } from '@supabase/supabase-js';

// On utilise les variables d'environnement pour sécuriser les clés
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error("Attention : Les clés Supabase sont manquantes dans votre fichier .env.local");
}

export const supabase = createClient(supabaseUrl, supabaseKey);