import { ProductTable } from '@/components/modules/stock/ProductTable';
import { supabase } from '@/lib/supabase/client';
import { analyzeStockNeeds } from '@/services/aiStockService';

export default async function StockPage({ params }: { params: { tenantId: string } }) {
  // Récupération des données produits
  const { data: products = [] } = await supabase
    .from('products')
    .select('*')
    .eq('tenant_id', params.tenantId);

  // Analyse via notre service IA
  const alerts = analyzeStockNeeds(products || []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Gestion des Stocks</h1>

      {/* Alertes IA */}
      {alerts.length > 0 && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
          <h2 className="text-red-800 font-bold">⚠️ Alertes Réapprovisionnement</h2>
          <ul className="mt-2 text-sm text-red-600">
            {alerts.map(item => (
              <li key={item.id}>• {item.name} : besoin de {item.needed} unités.</li>
            ))}
          </ul>
        </div>
      )}

      <ProductTable products={products || []} />
    </div>
  );
}