import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { Product } from '@/types/schema';

export function useStock() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Ta logique de récupération de données ici
  }, []);

  return { products, setProducts };
}