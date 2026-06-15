import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';

export const useStock = (tenantId: string) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('tenant_id', tenantId);
      if (data) setProducts(data);
    }
    fetchProducts();
  }, [tenantId]);

  return { products };
};