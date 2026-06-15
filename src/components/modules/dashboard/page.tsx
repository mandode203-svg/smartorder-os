import { StatCard } from '@/components/modules/dashboard/StatCard';
import { supabase } from '@/lib/supabase/client';

export default async function DashboardPage({ params }: { params: { tenantId: string } }) {
  // Récupération des données (Server Component)
  const { data: orders } = await supabase
    .from('orders')
    .select('total_amount')
    .eq('tenant_id', params.tenantId);

  const totalRevenue = orders?.reduce((acc, curr) => acc + Number(curr.total_amount), 0) || 0;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Résumé Business</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Revenu Total" 
          value={`$${totalRevenue.toFixed(2)}`} 
          trend="+12% ce mois-ci"
        />
        <StatCard 
          title="Commandes" 
          value={orders?.length || 0} 
          trend="Actif"
        />
        <StatCard 
          title="Alertes IA" 
          value="2" 
          trend="À vérifier"
        />
      </div>
    </div>
  );
}