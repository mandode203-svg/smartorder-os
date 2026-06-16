import { ProductTable } from '@/components/stockshop/ProductTable';
import { supabase } from '@/lib/supabase/client';
// ... reste de ton code ...

export default async function StockPage({ params }: { params: { tenantId: string } }) {
  // Assure-toi que ton import est bien celui-ci
  return (
    <div>
      <h1>Gestion des stocks</h1>
      <ProductTable products={[]} /> 
    </div>
  );
}