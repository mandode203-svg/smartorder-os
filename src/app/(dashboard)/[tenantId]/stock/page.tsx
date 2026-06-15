import { ProductTable } from '@/components/modules/stock/ProductTable';
import { supabase } from '@/lib/supabase/client';
import { analyzeStockNeeds } from '@/services/aiStockService';

export default async function StockPage({ params }: { params: { tenantId: string } }) {
  // Récupération des produits en utilisant le store_id (passé via le paramètre tenantId)
  const { data: products = [] } = await supabase
    .from('products')
    .select('*')
    .eq('store_id', params.tenantId);

  // Analyse via notre service IA (le service devra utiliser le champ 'stock')
  const alerts = analyzeStockNeeds(products || []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Gestion des Stocks</h1>

      {/* Alertes IA */}
      {alerts && alerts.length > 0 && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
          <h2 className="text-red-800 font-bold">⚠️ Alertes Réapprovisionnement</h2>
          <ul className="mt-2 text-sm text-red-600">
            {alerts.map((item: any) => (
              <li key={item.id}>• {item.name} : stock actuel ({item.stock}) trop bas.</li>
            ))}
          </ul>
        </div>
      )}

      {/* Table des produits */}
      <ProductTable products={products || []} />
    </div>
  );
}